"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Skill {
  name: string
  value: number
}

interface SkillChartProps {
  skills: Skill[]
}

export function SkillChart({ skills }: SkillChartProps) {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Chart configuration
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) * 0.8
    const maxValue = 100
    const segments = skills.length
    const angleStep = (Math.PI * 2) / segments

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Draw radar background
    const levels = 5
    for (let i = 1; i <= levels; i++) {
      const levelRadius = (radius / levels) * i
      ctx.beginPath()
      ctx.arc(centerX, centerY, levelRadius, 0, Math.PI * 2)
      ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
      ctx.stroke()
    }

    // Draw radar lines
    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep - Math.PI / 2
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
      ctx.strokeStyle = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
      ctx.stroke()

      // Draw skill labels
      const labelX = centerX + (radius + 20) * Math.cos(angle)
      const labelY = centerY + (radius + 20) * Math.sin(angle)
      ctx.fillStyle = theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(skills[i].name, labelX, labelY)
    }

    // Draw data points and connect them
    ctx.beginPath()
    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = skills[i].value / maxValue
      const pointX = centerX + radius * value * Math.cos(angle)
      const pointY = centerY + radius * value * Math.sin(angle)

      if (i === 0) {
        ctx.moveTo(pointX, pointY)
      } else {
        ctx.lineTo(pointX, pointY)
      }
    }
    ctx.closePath()
    ctx.fillStyle = theme === "dark" ? "rgba(79, 70, 229, 0.2)" : "rgba(59, 130, 246, 0.2)"
    ctx.fill()
    ctx.strokeStyle = theme === "dark" ? "rgba(79, 70, 229, 0.8)" : "rgba(59, 130, 246, 0.8)"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = skills[i].value / maxValue
      const pointX = centerX + radius * value * Math.cos(angle)
      const pointY = centerY + radius * value * Math.sin(angle)

      ctx.beginPath()
      ctx.arc(pointX, pointY, 5, 0, Math.PI * 2)
      ctx.fillStyle = theme === "dark" ? "rgba(79, 70, 229, 1)" : "rgba(59, 130, 246, 1)"
      ctx.fill()
    }
  }, [skills, theme])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-full"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}

