import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground Component
 * 
 * Creates a live animated particle background with:
 * - Floating particles/dots with soft green/cyan glow
 * - Slow, smooth diagonal movement
 * - Professional, minimal design
 * - Optimized Canvas rendering
 * - Responsive to window size
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Particle configuration
    const particleCount = 50; // Number of particles
    const particles = [];

    /**
     * Particle Class
     * Each particle has position, size, speed, and opacity
     */
    class Particle {
      constructor() {
        this.reset();
        // Random initial Y position for first render
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10; // Start above viewport
        this.size = Math.random() * 3 + 1; // Size: 1-4px
        this.speedX = (Math.random() - 0.5) * 0.3; // Slow horizontal drift
        this.speedY = Math.random() * 0.3 + 0.2; // Slow downward float (0.2-0.5)
        this.opacity = Math.random() * 0.3 + 0.1; // Low opacity (0.1-0.4)
        this.hue = Math.random() * 30 + 150; // Green-cyan hue range (150-180)
      }

      update() {
        // Move particle
        this.x += this.speedX;
        this.y += this.speedY;

        // Subtle pulsing effect (optional)
        this.opacity += (Math.random() - 0.5) * 0.005;
        this.opacity = Math.max(0.05, Math.min(0.4, this.opacity));

        // Reset particle when it goes off screen
        if (this.y > canvas.height + 10) {
          this.reset();
        }
        if (this.x < -10 || this.x > canvas.width + 10) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        // Create gradient for soft glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, ${this.opacity})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 50%, ${this.opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core dot
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    particlesRef.current = particles;

    /**
     * Animation loop
     * Clears canvas and redraws all particles each frame
     */
    const animate = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw each particle
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Don't block clicks
        zIndex: 0, // Behind content
      }}
      aria-hidden="true" // Hide from screen readers
    />
  );
}
