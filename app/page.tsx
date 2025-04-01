"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  ExternalLink,
  Code,
  Database,
  Brain,
  FileSearch,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { SparklesCore } from "@/components/ui/sparkles"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { Navbar } from "@/components/navbar"
import { useTheme } from "next-themes"
import { ChatbotButton } from "@/components/chatbot-button"
import { SkillChart } from "@/components/skill-chart"
import { Timeline } from "@/components/timeline"
import { Testimonials } from "@/components/testimonials"
import { ThreeDModel } from "@/components/3d-model"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const words = [
    {
      text: "Hello,",
      className: "text-4xl md:text-5xl lg:text-6xl font-bold",
    },
    {
      text: "I'm",
      className: "text-4xl md:text-5xl lg:text-6xl font-bold",
    },
    {
      text: "Pranav",
      className: "text-4xl md:text-5xl lg:text-6xl font-bold text-primary",
    },
    {
      text: "Kuchibhotla",
      className: "text-4xl md:text-5xl lg:text-6xl font-bold text-primary",
    },
  ]

  // Updated featured projects based on your priorities
  const featuredProjects = [
    {
      title: "Structured Information Extraction from Job Descriptions",
      description:
        "Developed an AI model to extract structured job details from unstructured job descriptions using NLP and Transformer models.",
      link: "#",
      icon: <FileSearch className="h-10 w-10 text-primary" />,
    },
    {
      title: "Sports Win Probability Predicter",
      description:
        "Built a machine learning model using Logistic Regression to predict win probabilities for IPL teams based on live match data, achieving 84% accuracy.",
      link: "https://ipl-win-probability-pranav-kuchibhotla.streamlit.app/",
      icon: <Brain className="h-10 w-10 text-primary" />,
    },
    {
      title: "Content-Based Movie Recommendation System",
      description:
        "Developed a content-based recommendation system that suggests similar movies by analyzing genres, cast, crew, and keywords using NLP techniques.",
      link: "#",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: "82 Below - Lead Contamination Risk",
      description:
        "Created an interactive visualization of lead contamination risk in Chicago using geospatial data and Kernel Density Estimation.",
      link: "https://82below.vercel.app",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
  ]

  // Animation variants for consistent animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const skills = [
    { name: "Python", value: 92 },
    { name: "Data Processing", value: 80 },
    { name: "Data Science", value: 85 },
    { name: "Machine Learning", value: 87 },
    { name: "NLP", value: 82 },
    { name: "SQL", value: 90 },
  ]

  const experiences = [
    {
      title: "Software Intern",
      company: "Tech Mahindra",
      period: "May 2024 - September 2024",
      location: "Hyderabad, India",
      description: "Internship at Tech Mahindra focusing on software development.",
      certificateLink: "Tech-Mahindra-Certificate.png",
    },
    {
      title: "Machine Learning Researcher",
      company: "Illinois Institute of Technology",
      period: "February 2024 - June 2024",
      location: "Chicago, IL",
      description:
        "Worked on medical image segmentation with Dr. Keigo Kawaji and Jack Harrison Mohr. Developed and tested a UNET-based image segmentation model using PyTorch for MRI and ultrasound images. Analyzed model performance metrics focusing on Dice score for early-frame detection.",
    },
    {
      title: "Software Developer",
      company: "Koru Green",
      period: "March 2024 - May 2024",
      location: "Chicago, IL",
      description:
        "Contributed to the technical design and documentation for a comprehensive music streaming data analysis and visualization software. Outlined functional and non-functional requirements, technical approach, design elements, and testing strategies.",
    },
    {
      title: "Teaching Assistant",
      company: "Illinois Tech College of Computing",
      period: "August 2023 - Present",
      location: "Chicago, IL",
      description:
        "Tutored undergrads on Java and object-oriented programming theory for CS 115. Conducted weekly labs and office hours.",
    },
    {
      title: "Community Desk Assistant",
      company: "Illinois Institute of Technology",
      period: "November 2023 - Present",
      location: "Chicago, IL",
      description:
        "Oversaw front desk operations for students, faculty, and visitors. Facilitated package handling, key distribution, move-ins, and move-outs. Maintained security logs and addressed residents' needs.",
    },
    {
      title: "Frontend Developer",
      company: "JPMorgan Chase & Co.",
      period: "August 2022 - December 2022",
      location: "Chicago, IL",
      description:
        "Implemented Agile methodologies for efficient project management. Utilized Figma for design and development. Engaged in continuous cycles of design refinement, software implementation, and testing.",
    },
  ]

  const testimonials = [
    // {
    //   text: "Pranav's work on the machine learning project was exceptional. His attention to detail and innovative approach to problem-solving made a significant impact.",
    //   author: "Dr. Keigo Kawaji",
    //   role: "Research Advisor, Illinois Institute of Technology",
    // },
    {
      text: "As a teaching assistant, Pranav demonstrated excellent communication skills and a deep understanding of programming concepts. Students consistently praised his ability to explain complex topics clearly.",
      author: " Lan Yao, CS Department Faculty",
      role: "Illinois Tech College of Computing",
    },
    {
      text: "Working with Pranav on the music data visualization project was a pleasure. His technical expertise and documentation skills were invaluable to our team.",
      author: "Keron Niles, Team Lead",
      role: "Koru Green",
    },
    {
      text: "Pranav has consistently demonstrated excellent service and professionalism in his role as a Community Desk Assistant. His maturity, teamwork, and time management skills have been a true asset to our department, especially during high-pressure times like finals. I wholeheartedly recommend him for an internship at your organization.",
      author: "Emily Chelmecki, Assistant Director of Residential Operations",
      role: "Office of Residence Life, Illinois Institute of Technology",
    },
    {
      text: "Pranav successfully completed a Virtual Internship Program at Koru Green Ltd, where he contributed to software design, machine learning research, data visualization, and database management. His technical skills, collaboration, and attention to detail were key to his success in the program. He demonstrated great potential in the Computer Science and IT field.",
      author: "Micaela Flesch, Senior Intern Experience Manager",
      role: "Virtual Internships",
    },        
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with 3D Elements and Subtle Animation */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={40}
            className="w-full h-full"
            particleColor={theme === "dark" ? "#4f46e5" : "#3b82f6"}
            speed={0.5}
          />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <TypewriterEffect words={words} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            >
              AI & Machine Learning Student crafting intelligent solutions to complex problems
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <Button size="lg" className="group relative overflow-hidden" asChild>
              <Link href="#projects">
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group relative overflow-hidden" asChild>
              <Link href="#contact">
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></span>
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <Link href="#about" className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-muted-foreground" />
            </Link>
          </motion.div>
        </div>

        {/* 3D Model in the background */}
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 opacity-30 pointer-events-none">
          <ThreeDModel />
        </div>
      </section>

      {/* About Section with Glassmorphism */}
      <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-3 py-1 text-sm font-medium">About Me</Badge>
            <h2 className="text-4xl font-bold mb-4">Who I Am</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-xl flex items-center justify-center text-6xl font-bold text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 bg-grid-small-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>
                  {/* <img src="pranav_image.png" alt="Pranav Kuchibhotla" className="object-cover w-full h-full rounded-2xl" /> */}
                <span className="relative z-10 flex items-center justify-center">
                  <Sparkles className="h-12 w-12 text-primary animate-pulse" />
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold">Artificial Intelligence Student & Developer</h3>
              <p className="text-lg text-muted-foreground">
                I'm an Artificial Intelligence undergradate student at Illinois Institute of Technology with an anticipated
                graduation in May 2026. My passion lies in creating intelligent systems that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground">
                With a strong foundation in machine learning, natural language processing, data analysis, and software development, I enjoy tackling
                complex challenges and turning data into actionable insights.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="px-3 py-1">
                  pranav010105@gmail.com
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  +1 (312) 450-9214
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Chicago, IL
                </Badge>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-colors duration-300"
                  asChild
                >
                  <Link href="https://github.com/Pranav-here" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-colors duration-300"
                  asChild
                >
                  <Link href="https://linkedin.com/in/pranavkuchibhotla" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 transition-colors duration-300"
                  asChild
                >
                  <Link href="mailto:pranav010105@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section with Dynamic Data Visualization */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-3 py-1 text-sm font-medium">My Expertise</Badge>
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-[400px] w-full"
            >
              <SkillChart skills={skills} />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={fadeIn}>
                <Card className="h-full overflow-hidden border-none bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Python",
                        "Machine Learning",
                        "Logistic Regression",
                        "K-means Clustering",
                        "NLP",
                        "AI Algorithms",
                        "Transformers",
                        "Dimensionality Reduction",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full overflow-hidden border-none bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Data Science & Analysis</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "SQL",
                        "NumPy",
                        "Pandas",
                        "Seaborn",
                        "Matplotlib",
                        "Streamlit",
                        "Data Mining",
                        "Data Visualization",
                        "Statistical Analysis",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full overflow-hidden border-none bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Programming & Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS","Java", "R", "PyTorch", "Mathematica", "Figma", "MS Office"].map(
                        (skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="h-full overflow-hidden border-none bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Languages</h3>
                    <div className="space-y-4">
      {[
        { language: "English", level: 98 },
        { language: "Telugu", level: 96 },
        { language: "Hindi", level: 88 },
      ].map((lang, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{lang.language}</span>
          </div>
          <Slider 
            defaultValue={[lang.level]}
            max={100}
            step={1}
            className="[&_[role=slider]]:hidden [&_[role=slider-track]]:h-2"
            disabled
          />
        </div>
      ))}
    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="px-4 py-2 text-base">
                <a href="https://onedrive.live.com/edit?id=3CDA61235B8E102A!3608&resid=3CDA61235B8E102A!3608&ithint=file%2cpptx&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3AvcyFBaW9RamxzallkbzhuQmh4SnlnLTZMeW5zay1oP2U9UTRieHZI&migratedtospo=true&wdo=2&cid=3cda61235b8e102a" target="_blank" rel="noopener noreferrer">
                  Microsoft AI Skills Challenge
                </a>
              </Badge>

              {/* Link for "Pandas by Kaggle" */}
              <Badge className="px-4 py-2 text-base">
                <a href="https://www.kaggle.com/learn/certification/pranavkuchibhotla/pandas" target="_blank" rel="noopener noreferrer">
                  Pandas by Kaggle
                </a>
              </Badge>
              <Badge className="px-4 py-2 text-base">
              <a href="https://www.linkedin.com/learning/certificates/c5acc82441331a06723f87a44786f85fa15788cc0f4541fa3cf9d59aa9f4d53d" target="_blank" rel="noopener noreferrer">
                  What is Generative AI?
              </a>
              </Badge>
              <Badge className="px-4 py-2 text-base">
                <a href="https://www.p33chicago.com/strongstartcertificate" target="_blank" rel="noopener noreferrer">
                  P33 Strong Start
                </a>
                </Badge>
              <Badge className="px-4 py-2 text-base">Metamorphosis Student Launchpad</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-3 py-1 text-sm font-medium">My Education</Badge>
            <h2 className="text-4xl font-bold mb-4">Academic Background</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Bachelor of Science in Artificial Intelligence</h3>
                    <p className="text-lg font-medium mt-1">Illinois Institute of Technology</p>
                  </div>
                  <Badge className="mt-2 md:mt-0 px-3 py-1">May 2026 (expected)</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1">
                      Minor in Data Science
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      GPA 3.84
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      Chicago, IL
                    </Badge>
                  </div>

                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-medium">Academic Achievements:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      <li>International Merit Scholarship</li>
                      <li>Dean's List in Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">Senior High School</h3>
                    <p className="text-lg font-medium mt-1">Narayana Junior College</p>
                  </div>
                  <Badge className="mt-2 md:mt-0 px-3 py-1">May 2020 - May 2022</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1">
                      Mathematics, Physics and Chemistry
                    </Badge>
                    <Badge variant="outline" className="px-3 py-1">
                      Hyderabad, India
                    </Badge>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-medium">Academic Achievements:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      <li>963 out of 1000 in the Telangana State Board Intermediate Examination</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">School Education</h3>
                    <p className="text-lg font-medium mt-1">The Creek Planet School</p>
                  </div>
                  <Badge className="mt-2 md:mt-0 px-3 py-1">2010 - 2020</Badge>
                </div>
                

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="px-3 py-1">
                      Hyderabad, India
                    </Badge>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4">
                    <p className="font-medium">Achievements:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                      <li>Gold medalist in a Basketball Competition</li>
                      <li>Medalist in the National Level Science Talent Search Examination (NSTSE)</li>
                      <li>Merit Scholarship at FIITJEE, received major fee waivers for grade 9-12th</li>
                      <li>94.2% in the Central Board of Secondary Education 10th Board Exams</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section with Interactive Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-3 py-1 text-sm font-medium">My Experience</Badge>
            <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Timeline experiences={experiences} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-3 py-1 text-sm font-medium">My Work</Badge>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <HoverEffect items={featuredProjects} />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16"
          >
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="ai">AI & Data Science</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Trustworthy Machine Learning",
                    description:
                      "Collaborated on a Federated Learning project to defend against data poisoning attacks.",
                    tags: ["Python", "Federated Learning", "K-means"],
                    category: "ai",
                  },
                  {
                    title: "Student Bot Assist",
                    description: "Created wireframes and prototypes for a student assistance platform.",
                    tags: ["Figma", "UX Design", "Agile"],
                    category: "design",
                  },
                  {
                    title: "Data Analysis of Spotify",
                    description: "Analyzed streaming statistics and audio features across music platforms.",
                    tags: ["Python", "Data Analysis", "Visualization"],
                    category: "ai",
                  },
                  {
                    title: "Product Management System",
                    description: "Built a Java-based system for efficient product management.",
                    tags: ["Java", "OOP", "Data Structures"],
                    category: "software",
                  },
                  {
                    title: "Real Estate Database",
                    description: "Developed a database system for a real estate company.",
                    tags: ["MySQL", "Python", "Database Design"],
                    category: "ai",
                  },
                  {
                    title: "AI Tic-Tac-Toe Bot",
                    description: "Created an intelligent game bot using MiniMax algorithm.",
                    tags: ["Python", "AI", "Game Theory"],
                    category: "ai",
                  },
                  {
                    title: "US Road Trip Planner",
                    description: "Built a CSP solver for planning optimal road trips.",
                    tags: ["Python", "AI", "Algorithms"],
                    category: "ai",
                  },
                  {
                    title: "Research on AI Awareness",
                    description: "Explored engineering challenges in developing aware AI systems.",
                    tags: ["AI", "Research", "Ethics"],
                    category: "ai",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="link" className="p-0 h-auto group-hover:text-primary" asChild>
                          <Link href="#">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="ai" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Trustworthy Machine Learning",
                    description:
                      "Collaborated on a Federated Learning project to defend against data poisoning attacks.",
                    tags: ["Python", "Federated Learning", "K-means"],
                  },
                  {
                    title: "Data Analysis of Spotify",
                    description: "Analyzed streaming statistics and audio features across music platforms.",
                    tags: ["Python", "Data Analysis", "Visualization"],
                  },
                  {
                    title: "Real Estate Database",
                    description: "Developed a database system for a real estate company.",
                    tags: ["MySQL", "Python", "Database Design"],
                  },
                  {
                    title: "AI Tic-Tac-Toe Bot",
                    description: "Created an intelligent game bot using MiniMax algorithm.",
                    tags: ["Python", "AI", "Game Theory"],
                  },
                  {
                    title: "US Road Trip Planner",
                    description: "Built a CSP solver for planning optimal road trips.",
                    tags: ["Python", "AI", "Algorithms"],
                  },
                  {
                    title: "Research on AI Awareness",
                    description: "Explored engineering challenges in developing aware AI systems.",
                    tags: ["AI", "Research", "Ethics"],
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="link" className="p-0 h-auto group-hover:text-primary" asChild>
                          <Link href="#">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <Button size="lg" className="group relative overflow-hidden" asChild>
                <Link href="/projects">
                  <span className="relative z-10">View All Projects</span>
                  <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-3 py-1 text-sm font-medium">What Others Say</Badge>
            <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Contact Section with Glassmorphism */}
      <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <Badge className="mb-4 px-3 py-1 text-sm font-medium">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto"
          >
            <Card className="overflow-hidden border-none shadow-xl backdrop-blur-sm bg-white/10 dark:bg-black/10 border-white/20 dark:border-white/10">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <p className="text-lg">
                    Feel free to reach out for collaborations, opportunities, or just to say hello!
                  </p>
                </div>

                <div className="space-y-4">
                  <Button className="w-full group relative overflow-hidden" size="lg" asChild>
                    <Link href="mailto:pranav010105@gmail.com">
                      <span className="relative z-10 flex items-center">
                        <Mail className="mr-2 h-5 w-5" /> Email Me
                      </span>
                      <span className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></span>
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full group relative overflow-hidden" size="lg" asChild>
                    <Link href="https://linkedin.com/in/pranavkuchibhotla" target="_blank">
                      <span className="relative z-10 flex items-center">
                        <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
                      </span>
                      <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></span>
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full group relative overflow-hidden" size="lg" asChild>
                    <Link href="https://github.com/Pranav-here" target="_blank">
                      <span className="relative z-10 flex items-center">
                        <Github className="mr-2 h-5 w-5" /> Follow on GitHub
                      </span>
                      <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></span>
                    </Link>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-center text-muted-foreground">3201 S. State Street, Chicago, IL</p>
                  <p className="text-center text-muted-foreground">+1 (312) 450-9214</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Pranav Kuchibhotla. All rights reserved.</p>
        </div>
      </footer>

      {/* AI Chatbot Button */}
      <ChatbotButton />
    </div>
  )
}

