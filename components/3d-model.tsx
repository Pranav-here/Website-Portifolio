"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ThreeDModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create a brain-like structure using particles
    const particleCount = 2000
    const particles = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    // Create a brain-like shape
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3

      // Parametric equations for a brain-like shape
      const t = Math.random() * Math.PI * 2
      const u = Math.random() * Math.PI
      const radius = 5 + Math.random() * 2

      // Base sphere
      let x = radius * Math.sin(u) * Math.cos(t)
      let y = radius * Math.sin(u) * Math.sin(t)
      let z = radius * Math.cos(u)

      // Add some randomness for a more organic look
      x += (Math.random() - 0.5) * 2
      y += (Math.random() - 0.5) * 2
      z += (Math.random() - 0.5) * 2

      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = z

      // Color gradient from blue to purple
      colors[i3] = 0.2 + Math.random() * 0.2 // R
      colors[i3 + 1] = 0.3 + Math.random() * 0.3 // G
      colors[i3 + 2] = 0.8 + Math.random() * 0.2 // B
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    particles.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    // Create connections between nearby particles
    const connections = []
    const maxDistance = 2 // Maximum distance for connection

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      const p1 = new THREE.Vector3(positions[i3], positions[i3 + 1], positions[i3 + 2])

      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3
        const p2 = new THREE.Vector3(positions[j3], positions[j3 + 1], positions[j3 + 2])

        if (p1.distanceTo(p2) < maxDistance) {
          connections.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z)
        }
      }
    }

    const connectionGeometry = new THREE.BufferGeometry()
    connectionGeometry.setAttribute("position", new THREE.Float32BufferAttribute(connections, 3))

    // Materials
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    })

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4f46e5,
      transparent: true,
      opacity: 0.2,
    })

    // Create meshes
    const particleSystem = new THREE.Points(particles, particleMaterial)
    const lineSystem = new THREE.LineSegments(connectionGeometry, lineMaterial)

    scene.add(particleSystem)
    scene.add(lineSystem)

    // Position camera
    camera.position.z = 15

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      particleSystem.rotation.x += 0.001
      particleSystem.rotation.y += 0.002

      lineSystem.rotation.x += 0.001
      lineSystem.rotation.y += 0.002

      renderer.render(scene, camera)
    }

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      particles.dispose()
      connectionGeometry.dispose()
      particleMaterial.dispose()
      lineMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}

