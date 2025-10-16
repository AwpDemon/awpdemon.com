'use client'

import { useEffect } from 'react'
import './styles.css'

export default function Home() {
  useEffect(() => {
    // Create stars
    const sky = document.getElementById('sky')
    if (!sky) return

    const starCount = 300

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div')
      star.className = 'star'
      
      // Random size with more variation (smaller stars more common)
      const size = Math.random() * Math.random() * 2 + 0.5
      star.style.width = size + 'px'
      star.style.height = size + 'px'
      
      // Random position
      star.style.left = Math.random() * 100 + '%'
      star.style.top = Math.random() * 100 + '%'
      
      // Some stars are brighter
      if (Math.random() > 0.85) {
        star.classList.add('bright')
      }
      
      // Some stars have a warmer color
      if (Math.random() > 0.9) {
        star.classList.add('colorful')
      }
      
      // Random animation duration (slower twinkle)
      star.style.animationDuration = (Math.random() * 4 + 3) + 's'
      star.style.animationDelay = Math.random() * 5 + 's'
      
      sky.appendChild(star)
    }

    // Create shooting stars (less frequent)
    for (let i = 0; i < 3; i++) {
      const shootingStar = document.createElement('div')
      shootingStar.className = 'shooting-star'
      
      shootingStar.style.left = Math.random() * 100 + '%'
      shootingStar.style.top = Math.random() * 50 + '%'
      shootingStar.style.animationDelay = Math.random() * 15 + 's'
      shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's'
      
      sky.appendChild(shootingStar)
    }

    // Create tree silhouettes
    const treeLine = document.getElementById('treeline')
    if (!treeLine) return

    const treeCount = 40

    for (let i = 0; i < treeCount; i++) {
      const tree = document.createElement('div')
      tree.className = 'tree'
      
      // Random size and position
      const height = Math.random() * 40 + 60
      const width = height / 3
      
      tree.style.borderLeft = width + 'px solid transparent'
      tree.style.borderRight = width + 'px solid transparent'
      tree.style.borderBottom = height + 'px solid #000000'
      tree.style.left = (i / treeCount * 100) + '%'
      
      treeLine.appendChild(tree)
    }

    // Create subtle clouds
    for (let i = 0; i < 2; i++) {
      const cloud = document.createElement('div')
      cloud.className = 'cloud'
      
      cloud.style.width = (Math.random() * 150 + 150) + 'px'
      cloud.style.height = (Math.random() * 40 + 30) + 'px'
      cloud.style.top = (Math.random() * 30 + 10) + '%'
      cloud.style.left = (Math.random() * 100) + '%'
      cloud.style.animationDuration = (Math.random() * 80 + 80) + 's'
      cloud.style.animationDelay = Math.random() * 30 + 's'
      
      sky.appendChild(cloud)
    }

    // Mouse move parallax effect (subtle)
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight
      
      const stars = document.querySelectorAll('.star')
      stars.forEach((star, index) => {
        const speed = (index % 3 + 1) * 5
        const x = (mouseX - 0.5) * speed
        const y = (mouseY - 0.5) * speed
        ;(star as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="container">
      {/* Sky */}
      <div className="sky" id="sky"></div>
      
      {/* Milky Way */}
      <div className="milky-way"></div>
      
      {/* Moon */}
      <div className="moon"></div>

      {/* Mountains */}
      <div className="mountains">
        <div className="mountain mountain1"></div>
        <div className="mountain mountain2"></div>
        <div className="mountain mountain3"></div>
      </div>

      {/* Tree Line */}
      <div className="tree-line" id="treeline"></div>

      {/* Rocks/Boulders */}
      <div className="rock rock1"></div>
      <div className="rock rock2"></div>

      {/* Main Content */}
      <div className="content">
        <h1 className="greeting">Hi, I&apos;m <span className="name">AwpDemon</span></h1>
      </div>

      {/* Reflection in Water */}
      <div className="reflection">
        Hi, I&apos;m <span className="name">AwpDemon</span>
      </div>

      {/* Lake */}
      <div className="lake"></div>
      <div className="ripple"></div>
    </div>
  )
}

