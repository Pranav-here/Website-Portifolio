"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
}

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-[42px] top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.title}</h3>
                  <p className="font-medium">
                    {exp.company}, {exp.location}
                  </p>
                </div>
                <Badge className="mt-2 md:mt-0">{exp.period}</Badge>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

