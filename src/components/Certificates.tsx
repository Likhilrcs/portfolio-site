import { Card, CardContent } from "@/components/ui/card"

const Certificates = () => {
  const certificate = [
    {
      title: "Software Engineering",
      issuer: "Forage - Accenture",
      date: "July 2025",
      image: "/Accenture.jpg", // store inside /public/certificates/
    },
    { 
      title: "Solutions Architect",
      issuer: "Forage - AWS",
      date: "July 2025",
      image: "/AWS.jpg",
    },
    {
      title: "Data Analyst",
      issuer: "Deloitte",
      date: "July 2025",
      image: "/Deloitte.jpg",
    },
    {
      title: "Frontend Development",
      issuer: "simplilearn",
      date: "July 2025",
      image: "/FrontEnd.jpg", // store inside /public/certificates/
    },
    {
      title: "Prompt Engineer",
      issuer: "simplilearn - Microsoft",
      date: "Aug 2025",
      image: "/prompt Enginner.jpg", // store inside /public/certificates/
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">My Certificates</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-7">
        {certificate.map((cert, index) => (
          <Card key={index} className="shadow-lg rounded-2xl">
            <CardContent className="p-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-xl w-100 h-48 object-cover mb-3 "
              />
              <h2 className="text-xl font-semibold">{cert.title}</h2>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
              <p className="text-xs text-gray-400">{cert.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Certificates;