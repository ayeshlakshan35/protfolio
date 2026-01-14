/**
 * ==========================================
 * ANIMATED BACKGROUND - INTEGRATION GUIDE
 * ==========================================
 * 
 * This guide explains how the live animated background works
 * and how to customize it for your portfolio.
 */

/**
 * WHAT WAS ADDED:
 * ===============
 * 
 * 1. AnimatedBackground.jsx Component
 *    - Canvas-based particle animation system
 *    - 50 floating particles with soft green/cyan glow
 *    - Smooth, slow diagonal movement
 *    - Responsive to window resizing
 *    - Optimized for performance
 * 
 * 2. Home.jsx Updates
 *    - Imported AnimatedBackground component
 *    - Added dark gradient background (navy → black)
 *    - Positioned canvas behind all content
 * 
 * 3. App.css Enhancements
 *    - Optional gradient overlay styles
 *    - Ambient glow effect
 *    - Performance optimizations
 */

/**
 * HOW IT WORKS:
 * =============
 * 
 * The AnimatedBackground component uses HTML5 Canvas API to render
 * animated particles. Here's the breakdown:
 * 
 * PARTICLE SYSTEM:
 * - Each particle is a small circle with a soft glow
 * - Particles float slowly upward/diagonally
 * - Colors range from green to cyan (HSL: 150-180)
 * - Low opacity (0.1-0.4) to avoid distraction
 * - Particles reset when they leave the viewport
 * 
 * RENDERING:
 * - Uses requestAnimationFrame for smooth 60fps animation
 * - Canvas clears and redraws every frame
 * - Radial gradients create the soft glow effect
 * - Fixed positioning ensures it stays behind content
 * 
 * PERFORMANCE:
 * - Only 50 particles (lightweight)
 * - Efficient canvas rendering
 * - No external libraries required
 * - Automatically pauses when tab is not active
 */

/**
 * CUSTOMIZATION OPTIONS:
 * ======================
 * 
 * You can easily customize the animation by editing
 * AnimatedBackground.jsx:
 * 
 * 1. PARTICLE COUNT (Line 30)
 *    const particleCount = 50; // Change to 30 for fewer, 80 for more
 * 
 * 2. PARTICLE SIZE (Line 46)
 *    this.size = Math.random() * 3 + 1; // Range: 1-4px
 *    Change to: Math.random() * 5 + 2; // For larger particles (2-7px)
 * 
 * 3. MOVEMENT SPEED (Lines 47-48)
 *    this.speedX = (Math.random() - 0.5) * 0.3; // Horizontal drift
 *    this.speedY = Math.random() * 0.3 + 0.2;   // Vertical float
 *    
 *    For slower: multiply by 0.5
 *    For faster: multiply by 1.5
 * 
 * 4. OPACITY (Line 49)
 *    this.opacity = Math.random() * 0.3 + 0.1; // Range: 0.1-0.4
 *    For more visible: Math.random() * 0.5 + 0.2; // Range: 0.2-0.7
 * 
 * 5. COLOR (Line 50)
 *    this.hue = Math.random() * 30 + 150; // Green-cyan (150-180)
 *    
 *    For pure green: 120
 *    For cyan/blue: 180-200
 *    For purple: 270-290
 * 
 * 6. GLOW INTENSITY (Lines 69-73)
 *    Adjust the gradient stops for stronger/softer glow
 */

/**
 * BACKGROUND GRADIENT:
 * ====================
 * 
 * The gradient is set in Home.jsx (line 14):
 * 
 * background: 'linear-gradient(135deg, #0a0e1a 0%, #0f1724 50%, #000000 100%)'
 * 
 * Colors used:
 * - #0a0e1a (deep navy) at top-left
 * - #0f1724 (navy-blue) in center
 * - #000000 (black) at bottom-right
 * 
 * To customize:
 * - Change 135deg to adjust gradient angle (0-360)
 * - Replace hex colors with your preferred dark colors
 * - Add more color stops: color1 0%, color2 33%, color3 66%, color4 100%
 */

/**
 * OPTIONAL ENHANCEMENTS:
 * ======================
 * 
 * You can add these optional effects to Home.jsx:
 * 
 * 1. GRADIENT OVERLAY (Add after AnimatedBackground)
 *    <div className="gradient-overlay" />
 * 
 * 2. AMBIENT GLOW (Add after AnimatedBackground)
 *    <div className="ambient-glow" />
 * 
 * These styles are already defined in App.css
 */

/**
 * RESPONSIVE BEHAVIOR:
 * ====================
 * 
 * The animation automatically adapts to:
 * - Different screen sizes (mobile, tablet, desktop)
 * - Window resizing
 * - Device orientation changes
 * 
 * The canvas always fills the entire viewport
 */

/**
 * PERFORMANCE TIPS:
 * =================
 * 
 * 1. Reduce particle count on mobile:
 *    const isMobile = window.innerWidth < 768;
 *    const particleCount = isMobile ? 30 : 50;
 * 
 * 2. Disable on low-power mode (advanced):
 *    Check battery status API and pause animation
 * 
 * 3. Use fewer particles on older devices:
 *    Test on target devices and adjust accordingly
 */

/**
 * BROWSER COMPATIBILITY:
 * ======================
 * 
 * ✅ Chrome/Edge: Full support
 * ✅ Firefox: Full support
 * ✅ Safari: Full support
 * ✅ Mobile browsers: Full support
 * 
 * Canvas API is supported in all modern browsers
 */

/**
 * ACCESSIBILITY:
 * ==============
 * 
 * - Canvas has aria-hidden="true" to hide from screen readers
 * - Animations don't interfere with text readability
 * - Low opacity ensures no distraction for users
 * - Respects prefers-reduced-motion (can be added)
 * 
 * To respect reduced motion preference, add to AnimatedBackground.jsx:
 * 
 * const prefersReducedMotion = window.matchMedia(
 *   '(prefers-reduced-motion: reduce)'
 * ).matches;
 * 
 * if (prefersReducedMotion) {
 *   // Don't start animation or use static background
 *   return null;
 * }
 */

/**
 * TROUBLESHOOTING:
 * ================
 * 
 * Issue: Particles not showing
 * Solution: Check browser console for errors, ensure canvas is rendering
 * 
 * Issue: Animation laggy
 * Solution: Reduce particle count or particle size
 * 
 * Issue: Particles too bright
 * Solution: Lower opacity values in Particle class
 * 
 * Issue: Text hard to read
 * Solution: Reduce particle opacity or count
 */

/**
 * EXAMPLE VARIATIONS:
 * ===================
 * 
 * VARIATION 1: Starfield Effect
 * - Set particle size smaller (0.5-2px)
 * - Increase count to 100+
 * - Remove glow effect
 * - Use white/blue colors
 * 
 * VARIATION 2: Floating Bubbles
 * - Increase particle size (5-15px)
 * - Reduce count to 20-30
 * - Add border to particles
 * - Slower speed
 * 
 * VARIATION 3: Matrix Rain
 * - Make particles fall downward (positive speedY)
 * - Green color only
 * - Trail effect (reduce clearRect opacity)
 */

export {};
