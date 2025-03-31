import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "Illinois Institute of Technology",
      location: "Chicago, IL",
      period: "August 2023 – Present",
      description: [
        "Tutored undergrads on Java and object-oriented programming theory for CS 115 and CS 116",
        "Conducted weekly labs and office hours",
        "Tutored incoming freshmen and assisted in lab sessions for CS 100",
        "Supported lectures introducing students to computer science and the profession",
      ],
      skills: ["Java", "OOP", "Teaching", "Mentoring"],
    },
    {
      title: "Machine Learning Researcher",
      company: "Illinois Institute of Technology",
      location: "Chicago, IL",
      period: "February 2024 – April 2024",
      description: [
        "Assisted a research team in analyzing model performance metrics",
        "Explored early-frame detection methods",
      ],
      skills: ["Machine Learning", "Research", "Data Analysis"],
    },
    {
      title: "Software Developer",
      company: "Koru Green",
      location: "Remote",
      period: "March 2024 – May 2024",
      description: [
        "Developed and documented music data visualization software",
        "Provided actionable insights for artists by analyzing streaming data",
        "Used Python, Data Visualization Libraries, Agile Development, and Technical Design Documentation",
      ],
      skills: ["Python", "Data Visualization", "Agile", "Documentation"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Professional Experience</h1>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.period}</p>
                </div>
                <p className="font-medium">
                  {exp.company}, {exp.location}
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

