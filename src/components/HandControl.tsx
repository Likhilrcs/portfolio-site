import { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";

export default function HandControl() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const camRef = useRef<Camera | null>(null);
  const handsRef = useRef<Hands | null>(null);
  const lastPalmXs = useRef<number[]>([]);
  const lastPinchClickAt = useRef(0);
  const lastSwipeAt = useRef(0);
  const scrollCooldown = useRef(0);
  const usingCursor = useRef(false);

  const now = () => performance.now();
  const dist = (a:any,b:any)=>Math.hypot(a.x-b.x,a.y-b.y);

  function fitCanvas() {
    const c = canvasRef.current!;
    c.width = window.innerWidth; c.height = window.innerHeight;
  }

  function fingersUp(lm:any[]) {
    return [
      (lm[4].x < lm[3].x),
      (lm[8].y < lm[6].y),
      (lm[12].y < lm[10].y),
      (lm[16].y < lm[14].y),
      (lm[20].y < lm[18].y),
    ];
  }

  function smoothScrollBy(y:number) {
    const t = now();
    if (t - scrollCooldown.current < 120) return;
    scrollCooldown.current = t;
    window.scrollBy({ top: y, behavior: "smooth" });
  }

  function onSwipe(direction:"left"|"right") {
    const t = now();
    if (t - lastSwipeAt.current < 800) return;
    lastSwipeAt.current = t;
    const sections = Array.from(document.querySelectorAll('section, .section, [data-section]'));
    if (sections.length) {
      const mid = window.scrollY + window.innerHeight/2;
      const curIdx = sections.findIndex(s=>{
        const r = s.getBoundingClientRect();
        const top = r.top + window.scrollY;
        return mid >= top && mid < top + r.height;
      });
      let nextIdx = curIdx;
      if (direction==="left")  nextIdx = Math.min(sections.length-1, curIdx+1);
      if (direction==="right") nextIdx = Math.max(0, curIdx-1);
      if (nextIdx !== curIdx && nextIdx >= 0) {
        (sections[nextIdx] as HTMLElement).scrollIntoView({ behavior:"smooth", block:"start" });
      }
    }
  }

  function onResults(res:any) {
    const c = canvasRef.current!, ctx = c.getContext("2d")!;
    ctx.clearRect(0,0,c.width,c.height);

    const cursor = cursorRef.current!;
    if (!res.multiHandLandmarks || res.multiHandLandmarks.length === 0) {
      cursor.style.display = usingCursor.current ? "block" : "none";
      return;
    }
    const lm = res.multiHandLandmarks[0];
    const wrist = lm[0];
    // portal ring
    const px = wrist.x * c.width, py = wrist.y * c.height;
    const r = 28 + (Math.sin(performance.now()/180)*6);
    const grad = ctx.createRadialGradient(px,py,r*0.2, px,py,r);
    grad.addColorStop(0,'rgba(0,229,255,0.5)');
    grad.addColorStop(1,'rgba(0,229,255,0.0)');
    ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(px,py,r,0,Math.PI*2); ctx.fill();

    const up = fingersUp(lm);
    const openCount = up.filter(Boolean).length;
    const pinch = dist(lm[4], lm[8]);

    // swipe
    lastPalmXs.current.push(wrist.x);
    if (lastPalmXs.current.length > 6) lastPalmXs.current.shift();
    if (lastPalmXs.current.length === 6) {
      const dx = lastPalmXs.current[0] - lastPalmXs.current[5];
      if (Math.abs(dx) > 0.12) {
        onSwipe(dx > 0 ? "right" : "left");
        lastPalmXs.current = [];
      }
    }

    // scroll mapping
    if (openCount >= 4) smoothScrollBy(90);
    else if (openCount === 0) smoothScrollBy(-90);

    // pointer
    if (up[1] && !up[2] && !up[3]) {
      usingCursor.current = true;
      const x = lm[8].x * window.innerWidth;
      const y = lm[8].y * window.innerHeight;
      cursor.style.left = `${x}px`;
      cursor.style.top  = `${y}px`;
      cursor.style.display = "block";
    } else {
      usingCursor.current = false;
    }

    // pinch click
    if (pinch < 0.035 && usingCursor.current) {
      const t = now();
      if (t - lastPinchClickAt.current > 400) {
        lastPinchClickAt.current = t;
        const rct = cursor.getBoundingClientRect();
        const el = document.elementFromPoint(rct.left + rct.width/2, rct.top + rct.height/2) as HTMLElement | null;
        el?.click?.();
      }
    }
  }

  async function start() {
    const hands = new Hands({ locateFile: f => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}` });
    hands.setOptions({ maxNumHands:1, modelComplexity:1, minDetectionConfidence:0.7, minTrackingConfidence:0.6 });
    hands.onResults(onResults);
    handsRef.current = hands;

    camRef.current = new Camera(videoRef.current!, {
      onFrame: async () => { await hands.send({ image: videoRef.current! }); },
      width: 640, height: 480
    });
    await camRef.current.start();
    setEnabled(true);
  }

  function stop() {
    camRef.current?.stop?.();
    setEnabled(false);
  }

  useEffect(() => { fitCanvas(); window.addEventListener('resize', fitCanvas); return () => window.removeEventListener('resize', fitCanvas); }, []);

  return (
    <>
      <button
        onClick={() => enabled ? stop() : start()}
        style={{position:'fixed',right:16,bottom:16,zIndex:9999}}
      >
        {enabled ? '✋ Hand Control: ON' : '✋ Enable Hand Control'}
      </button>

      <video ref={videoRef} playsInline style={{display:'none'}} />
      <canvas ref={canvasRef} style={{position:'fixed',left:0,top:0,width:'100vw',height:'100vh',pointerEvents:'none',zIndex:9998}} />
      <div ref={cursorRef} style={{
        position:'fixed',left:0,top:0,width:18,height:18,borderRadius:'50%',
        border:'2px solid #00e5ff', background:'rgba(0,229,255,.15)',
        transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:9999, display:'none'
      }}/>
    </>
  );
}
