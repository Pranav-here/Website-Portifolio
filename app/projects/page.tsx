import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Sports Win Probability Predicter",
      description:
        "Built a machine learning model using Logistic Regression to predict win probabilities for IPL teams based on live match data, achieving 84% accuracy.",
      technologies: ["Python", "Logistic Regression", "scikit-learn", "Streamlit", "Pandas"],
      link: "#",
      featured: true,
    },
    {
      title: "Content-Based Movie Recommendation System",
      description:
        "Developed a content-based recommendation system that suggests similar movies by analyzing genres, cast, crew, and keywords using NLP techniques.",
      technologies: ["Python", "NLP", "Streamlit", "TMDb API", "scikit-learn", "Pandas", "Pickle"],
      link: "#",
      featured: true,
    },
    {
      title: "82 Below - Visualizing Lead Contamination Risk in Chicago",
      description:
        "Created an accessible, interactive visualization of lead contamination risk in Chicago using geospatial data and Kernel Density Estimation.",
      technologies: ["Data Science", "Geospatial Analysis", "Kernel Density Estimation", "MySQL", "Python"],
      link: "https://82below.vercel.app",
      featured: true,
    },
    {
      title: "Trustworthy Machine Learning",
      description:
        "Collaborated on a Federated Learning project to defend against data poisoning attacks compromising the integrity of global machine learning models.",
      technologies: ["Python", "Federated Learning", "K-means Clustering", "Local Differential Privacy"],
      link: "#",
    },
    {
      title: "Student Bot Assist",
      description:
        "Utilized Figma for creating wireframes, prototypes, and user interface designs, ensuring a seamless and intuitive user experience.",
      technologies: ["Requirement Analysis", "Agile Development", "Figma", "System Design"],
      link: "#",
    },
    {
      title: "Data Analysis of Spotify",
      description:
        "Analyzed a dataset of 953 songs with attributes such as streaming statistics, audio features, and release information across music platforms.",
      technologies: ["Python", "Seaborn", "Matplotlib", "Statistical Techniques"],
      link: "#",
    },
    {
      title: "Product Management System",
      description:
        "Designed and implemented a robust Product Management System using Java, focusing on user-friendly functionalities and efficient data handling.",
      technologies: ["Java", "OOP", "File Handling", "Data Structures"],
      link: "#",
    },
    {
      title: "Real Estate Database Management",
      description:
        "Developed a robust database management system for a real estate company using SQL and Python as part of the CS425 course.",
      technologies: ["MySQL", "Python", "Database Design", "ERD"],
      link: "#",
    },
    {
      title: "AI bot for Tic-Tac-Toe",
      description:
        "Developed an intelligent Tic-Tac-Toe game using MiniMax and Alpha-Beta Pruning algorithms to enhance decision-making for AI players.",
      technologies: ["Python", "MiniMax", "Alpha-Beta Pruning", "Game Theory"],
      link: "#",
    },
    {
      title: "US Road Trip Planner Using Backtracking CSP",
      description:
        "Developed a Constraint Satisfaction Problem (CSP) solver to plan an optimal road trip across the contiguous U.S. states.",
      technologies: ["Python", "Backtracking Algorithm", "AI", "Graph Theory"],
      link: "#",
    },
    {
      title: "Structured Information Extraction from Job Descriptions",
      description:
        "Developed an AI model to extract structured job details from unstructured job descriptions using NLP and Transformer models.",
      technologies: ["NLP", "Transformers", "T5-XL", "DeepSeek API", "MongoDB"],
      link: "#",
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
          <h1 className="text-3xl font-bold">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className={project.featured ? "border-primary/50" : ""}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.featured && <Badge>Featured</Badge>}
                </div>
                <div className="flex flex-wrap gap-2 my-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button variant="link" className="p-0 h-auto" asChild>
                  <Link href={project.link} target="_blank">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

