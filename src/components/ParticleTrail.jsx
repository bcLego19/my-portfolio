import React, { useEffect, useRef } from 'react'

const ParticleTrail = () => {
  const canvasRef = useRef(null)
  const sketchRef = useRef(null)

  useEffect(() => {
    // Only run on desktop (not mobile for performance)
    const isMobile = window.innerWidth <= 768

    if (isMobile || !window.p5) {
      return // Exit if mobile or p5 not loaded
    }

    // Particle class definition
    class Particle {
      constructor(x, y) {
        this.x = x
        this.y = y
        this.size = Math.random() * 5 + 3  // Random size between 3-8px
        this.life = 255  // Opacity (255 = fully visible)
        this.decay = Math.random() * 3 + 2  // How fast it fades (2-5)
        
        // Random velocity for slight movement
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
      }

      update() {
        // Move slightly
        this.x += this.vx
        this.y += this.vy
        
        // Fade out
        this.life -= this.decay
      }

      display(p) {
        // Only draw if still visible
        if (this.life > 0) {
          p.noStroke()
          // Use your primary color with fading opacity
          p.fill(37, 99, 235, this.life)  // RGB + alpha
          p.circle(this.x, this.y, this.size)
        }
      }

      isDead() {
        return this.life <= 0
      }
    }

    // p5.js sketch function
    const sketch = (p) => {
      let particles = []

      p.setup = () => {
        // Create canvas that covers entire window
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.position(0, 0)
        canvas.style('position', 'fixed')
        canvas.style('top', '0')
        canvas.style('left', '0')
        canvas.style('z-index', '1')  // Behind content but above background
        canvas.style('pointer-events', 'none')  // Allow clicks through canvas
      }

      p.draw = () => {
        // Clear canvas with transparency
        p.clear()

        // Add new particle at mouse position (limit spawn rate)
        if (p.frameCount % 2 === 0) {  // Every 2 frames
          particles.push(new Particle(p.mouseX, p.mouseY))
        }

        // Update and display all particles
        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update()
          particles[i].display(p)

          // Remove dead particles
          if (particles[i].isDead()) {
            particles.splice(i, 1)
          }
        }

        // Limit array size (performance safety)
        if (particles.length > 100) {
          particles.shift()  // Remove oldest
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }
    }

    // Create p5 instance
    sketchRef.current = new window.p5(sketch)

    // Cleanup function
    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove()
      }
    }
  }, [])  // Empty dependency array = run once on mount

  return null  // Component doesn't render anything itself
}

export default ParticleTrail