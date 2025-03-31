"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleCount?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = ({
  id,
  className,
  background,
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleCount = 15,
  particleColor = "#FFF",
  particleDensity = 1000,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const particlesRef = useRef<any[]>([])
  const widthRef = useRef<number>(0)
  const heightRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const isHoveringRef = useRef<boolean>(false)
  const animationRef = useRef<number>()

  const handleMouseMove = (e: MouseEvent) => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
  }

  const handleMouseEnter = () => {
    isHoveringRef.current = true
  }

  const handleMouseLeave = () => {
    isHoveringRef.current = false
  }

  const generateParticles = () => {
    if (widthRef.current && heightRef.current) {
      const particleList = []
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * widthRef.current
        const y = Math.random() * heightRef.current
        const size = Math.random() * (maxSize - minSize) + minSize
        const color = particleColor
        const speedModifier = Math.random() * speed
        const opacity = Math.random()

        particleList.push({
          x,
          y,
          size,
          color,
          speedModifier,
          opacity,
        })
      }
      particlesRef.current = particleList
    }
  }

  const drawParticles = () => {
    const context = contextRef.current
    if (context && widthRef.current && heightRef.current) {
      context.clearRect(0, 0, widthRef.current, heightRef.current)

      if (background) {
        context.fillStyle = background
        context.fillRect(0, 0, widthRef.current, heightRef.current)
      }

      particlesRef.current.forEach((particle) => {
        context.globalAlpha = particle.opacity
        context.fillStyle = particle.color
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      })
    }
  }

  const updateParticles = () => {
    const particles = particlesRef.current
    const height = heightRef.current
    const width = widthRef.current
    const mouse = mouseRef.current
    const isHovering = isHoveringRef.current

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i]

      // Move particles
      particle.y -= 0.1 * particle.speedModifier * speed

      // Handle mouse interaction
      if (isHovering) {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.x -= dx * force * 0.02
          particle.y -= dy * force * 0.02
        }
      }

      // Reset particles when they go off screen
      if (particle.y < -particle.size * 2) {
        particle.y = height + particle.size * 2
        particle.x = Math.random() * width
        particle.opacity = Math.random()
      }
    }
  }

  const animate = () => {
    updateParticles()
    drawParticles()
    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      contextRef.current = ctx

      const handleResize = () => {
        if (canvasRef.current) {
          widthRef.current = canvasRef.current.offsetWidth
          heightRef.current = canvasRef.current.offsetHeight
          canvasRef.current.width = canvasRef.current.offsetWidth
          canvasRef.current.height = canvasRef.current.offsetHeight

          // Regenerate particles when canvas size changes
          generateParticles()
        }
      }

      handleResize()
      window.addEventListener("resize", handleResize)

      canvasRef.current.addEventListener("mousemove", handleMouseMove)
      canvasRef.current.addEventListener("mouseenter", handleMouseEnter)
      canvasRef.current.addEventListener("mouseleave", handleMouseLeave)

      // Generate initial particles
      generateParticles()

      // Start animation loop
      animate()

      return () => {
        window.removeEventListener("resize", handleResize)
        if (canvasRef.current) {
          canvasRef.current.removeEventListener("mousemove", handleMouseMove)
          canvasRef.current.removeEventListener("mouseenter", handleMouseEnter)
          canvasRef.current.removeEventListener("mouseleave", handleMouseLeave)
        }
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [])

  return <canvas ref={canvasRef} id={id} className={cn("w-full h-full", className)} />
}

