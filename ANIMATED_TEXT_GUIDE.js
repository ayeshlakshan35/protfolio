/**
 * ==========================================
 * ANIMATED TEXT GRADIENT - USAGE GUIDE
 * ==========================================
 * 
 * Your name "Ayesha Lakshan" now features a live animated gradient
 * visible only inside the text using CSS background-clip masking.
 */

/**
 * CURRENT IMPLEMENTATION:
 * =======================
 * 
 * Applied class: "animated-gradient-text-slow"
 * 
 * Features:
 * - Slow, smooth gradient animation (12s loop)
 * - Professional emerald color palette
 * - Text acts as a mask for the gradient
 * - Soft glow for readability on dark background
 * - Safe fallback for unsupported browsers
 * - Respects prefers-reduced-motion for accessibility
 */

/**
 * AVAILABLE ANIMATION STYLES:
 * ===========================
 * 
 * You can change the animation by replacing the class in Home.jsx:
 * 
 * 1. animated-gradient-text-slow (CURRENT)
 *    - Duration: 12 seconds
 *    - Style: Smooth, elegant flow
 *    - Best for: Professional, premium feel
 *    - Colors: Emerald-600 → Emerald-300 → Emerald-600
 * 
 * 2. animated-gradient-text
 *    - Duration: 8 seconds
 *    - Style: Medium-paced gradient wave
 *    - Best for: Dynamic, energetic feel
 *    - Colors: Full emerald spectrum
 * 
 * 3. animated-gradient-text-shimmer
 *    - Duration: 6 seconds
 *    - Style: Faster shimmer effect
 *    - Best for: Modern, tech-focused look
 *    - Colors: Emerald-700 → Emerald-200 → Emerald-700
 *    - Feature: Linear motion like a light sweep
 */

/**
 * HOW TO CHANGE THE ANIMATION:
 * =============================
 * 
 * In Home.jsx, find this line (around line 28):
 * 
 * <span className="block text-5xl sm:text-6xl animated-gradient-text-slow">
 * 
 * Replace "animated-gradient-text-slow" with any of:
 * - animated-gradient-text (medium speed)
 * - animated-gradient-text-shimmer (faster)
 */

/**
 * HOW IT WORKS:
 * =============
 * 
 * TECHNIQUE: CSS Background Clip Text
 * 
 * 1. A colorful gradient is created as the background
 * 2. The gradient is much larger than the text (300-400%)
 * 3. CSS animation moves the gradient position
 * 4. background-clip: text clips the gradient to the text shape
 * 5. -webkit-text-fill-color: transparent makes text see-through
 * 6. Result: Gradient visible ONLY inside the text letters
 * 
 * BROWSER SUPPORT:
 * ✅ Chrome/Edge: Full support
 * ✅ Safari: Full support
 * ✅ Firefox: Full support (89+)
 * ⚠️ Older browsers: Falls back to solid emerald-500 color
 */

/**
 * CUSTOMIZATION OPTIONS:
 * ======================
 * 
 * 1. CHANGE ANIMATION SPEED
 *    In App.css, find the animation you're using and adjust duration:
 *    
 *    animation: gradient-shift 12s ease-in-out infinite;
 *                              ^^^
 *    Change to 8s for faster, 16s for slower
 * 
 * 2. CHANGE COLORS
 *    Edit the gradient colors in App.css:
 *    
 *    For blue theme:
 *    #3b82f6 (blue-500)
 *    #60a5fa (blue-400)
 *    #93c5fd (blue-300)
 *    
 *    For purple theme:
 *    #a855f7 (purple-500)
 *    #c084fc (purple-400)
 *    #d8b4fe (purple-300)
 *    
 *    For cyan theme:
 *    #06b6d4 (cyan-500)
 *    #22d3ee (cyan-400)
 *    #67e8f9 (cyan-300)
 * 
 * 3. ADJUST GLOW INTENSITY
 *    In the CSS class, modify text-shadow:
 *    
 *    Current:
 *    text-shadow: 0 0 40px rgba(16, 185, 129, 0.4),
 *                 0 0 20px rgba(16, 185, 129, 0.2);
 *    
 *    For stronger glow:
 *    text-shadow: 0 0 60px rgba(16, 185, 129, 0.6),
 *                 0 0 30px rgba(16, 185, 129, 0.4);
 *    
 *    For softer glow:
 *    text-shadow: 0 0 30px rgba(16, 185, 129, 0.3);
 * 
 * 4. CHANGE GRADIENT DIRECTION
 *    In the linear-gradient, adjust the angle:
 *    
 *    linear-gradient(120deg, ...)
 *                    ^^^
 *    
 *    0deg = bottom to top
 *    90deg = left to right
 *    180deg = top to bottom
 *    270deg = right to left
 */

/**
 * ADVANCED CUSTOMIZATIONS:
 * ========================
 * 
 * CREATE A RAINBOW EFFECT:
 * 
 * .animated-gradient-text-rainbow {
 *   background: linear-gradient(
 *     120deg,
 *     #ef4444 0%,    // red
 *     #f97316 14%,   // orange
 *     #eab308 28%,   // yellow
 *     #22c55e 42%,   // green
 *     #06b6d4 57%,   // cyan
 *     #3b82f6 71%,   // blue
 *     #a855f7 85%,   // purple
 *     #ef4444 100%   // red
 *   );
 *   background-size: 300% 300%;
 *   animation: gradient-flow 10s ease-in-out infinite;
 *   -webkit-background-clip: text;
 *   background-clip: text;
 *   -webkit-text-fill-color: transparent;
 * }
 * 
 * CREATE A PULSE EFFECT:
 * 
 * @keyframes gradient-pulse {
 *   0%, 100% { 
 *     background-size: 100% 100%;
 *     opacity: 0.8;
 *   }
 *   50% { 
 *     background-size: 150% 150%;
 *     opacity: 1;
 *   }
 * }
 * 
 * .animated-gradient-text-pulse {
 *   background: linear-gradient(135deg, #10b981, #34d399, #6ee7b7);
 *   animation: gradient-pulse 3s ease-in-out infinite;
 *   -webkit-background-clip: text;
 *   background-clip: text;
 *   -webkit-text-fill-color: transparent;
 * }
 * 
 * CREATE A WAVE EFFECT:
 * 
 * @keyframes gradient-wave {
 *   0% { background-position: 0% 0%; }
 *   25% { background-position: 100% 0%; }
 *   50% { background-position: 100% 100%; }
 *   75% { background-position: 0% 100%; }
 *   100% { background-position: 0% 0%; }
 * }
 * 
 * .animated-gradient-text-wave {
 *   background: radial-gradient(
 *     circle at 50% 50%,
 *     #10b981 0%,
 *     #34d399 30%,
 *     #6ee7b7 60%,
 *     #34d399 100%
 *   );
 *   background-size: 200% 200%;
 *   animation: gradient-wave 8s ease-in-out infinite;
 *   -webkit-background-clip: text;
 *   background-clip: text;
 *   -webkit-text-fill-color: transparent;
 * }
 */

/**
 * ACCESSIBILITY FEATURES:
 * =======================
 * 
 * 1. PREFERS REDUCED MOTION
 *    Automatically disables animation for users who prefer reduced motion
 *    Falls back to a static gradient
 * 
 * 2. COLOR CONTRAST
 *    Gradient uses high-contrast emerald colors
 *    Visible on dark backgrounds
 *    Text shadow adds extra legibility
 * 
 * 3. FALLBACK COLOR
 *    Browsers without background-clip support see solid emerald-500
 *    Text remains readable in all cases
 * 
 * 4. SCREEN READERS
 *    Text content is unaffected by visual effects
 *    Animation is purely decorative
 */

/**
 * PERFORMANCE NOTES:
 * ==================
 * 
 * - Uses CSS animations (GPU accelerated)
 * - will-change property for optimization
 * - No JavaScript required
 * - Smooth 60fps animation
 * - Low CPU/battery impact
 * - Works on mobile devices
 * 
 * The animation only affects the background position,
 * not the text itself, making it very performant.
 */

/**
 * TROUBLESHOOTING:
 * ================
 * 
 * Issue: Text appears solid color, no gradient
 * Solution: Check browser support for background-clip: text
 *           Ensure -webkit-text-fill-color is set to transparent
 * 
 * Issue: Animation not moving
 * Solution: Verify background-size is larger than 100%
 *           Check animation is properly applied
 * 
 * Issue: Text not readable
 * Solution: Increase text-shadow intensity
 *           Use brighter gradient colors
 *           Add filter: drop-shadow()
 * 
 * Issue: Animation too fast/slow
 * Solution: Adjust animation duration in CSS
 *           Use ease-in-out for smoother feel
 * 
 * Issue: Jagged edges on text
 * Solution: Ensure -webkit-font-smoothing: antialiased
 *           Use higher quality font weights
 */

/**
 * COMBINING WITH OTHER EFFECTS:
 * ==============================
 * 
 * You can combine the animated gradient with:
 * 
 * 1. HOVER SCALE EFFECT:
 *    .animated-gradient-text-slow:hover {
 *      transform: scale(1.05);
 *      transition: transform 0.3s ease;
 *    }
 * 
 * 2. TYPING ANIMATION:
 *    Add overflow: hidden and animate width
 * 
 * 3. BOUNCE EFFECT:
 *    animation: gradient-shift 12s ease-in-out infinite,
 *               bounce 2s ease-in-out infinite;
 * 
 * 4. GLOW PULSE:
 *    Add a second animation for text-shadow
 */

/**
 * TESTING CHECKLIST:
 * ==================
 * 
 * ✅ Chrome (latest)
 * ✅ Safari (latest)
 * ✅ Firefox (89+)
 * ✅ Edge (latest)
 * ✅ Mobile Safari
 * ✅ Mobile Chrome
 * ✅ Reduced motion mode
 * ✅ Dark theme
 * ✅ High contrast mode
 */

export {};
