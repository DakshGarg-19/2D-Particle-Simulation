# Particle Simulator

An interactive particle physics simulation built with vanilla HTML, CSS, and JavaScript. Watch colorful particles bounce around the screen with realistic physics, and interact with them using your mouse wheel.

## Features

- **Realistic Physics**
  - Gravity-free motion with velocity vectors
  - Friction simulation (1% speed reduction per frame)
  - Elastic collisions with window boundaries
- **Visual Effects**
  - Particles change color based on their speed
  - Radial gradient shading for depth
  - Smooth animations using `requestAnimationFrame`

- **Interactive Control**
  - Scroll mouse wheel to apply force to all particles
  - Randomized particle behavior for organic motion
  - Real-time performance optimization with `will-change`

## How It Works

### Particle System

- 40 particles are created at random positions with random initial velocities
- Each particle is a circular DOM element with a radius between 8-14 pixels
- Particles update their position every animation frame

### Physics Simulation

- **Velocity**: Each particle has `vx` and `vy` velocity components
- **Friction**: Velocity is multiplied by 0.99 each frame, gradually slowing particles
- **Collision Detection**: Particles bounce off all four window edges with velocity reversal
- **Force Application**: Mouse wheel input applies directional force to all particles with slight randomization

### Color System

The particle color is determined by its speed:

```
hue = speed * 60
```

This creates a rainbow effect where faster particles are warmer colors and slower particles are cooler colors.

## Usage

1. Open `index.html` in a web browser
2. Watch particles move and bounce around the screen
3. **Mouse Wheel**: Scroll up/down to push particles up or down, scroll left/right to move particles horizontally
4. **Trackpad**: Use two-finger gestures to control particle direction in the complete 2D plane - swipe in any direction to apply force to particles in that direction
5. Enjoy the organic chaos!

## Technical Details

### Performance Optimizations

- CSS `will-change: transform` property hints to browser for GPU acceleration
- Uses `requestAnimationFrame` for frame-rate independent animation
- Minimal DOM manipulation - only transform updates per frame

### Browser Compatibility

- Modern browsers with ES6 support
- Works on desktop browsers with wheel event support
- GPU-accelerated 2D transforms required

## Files

- `index.html` - DOM structure and container
- `script.js` - Particle class and simulation logic
- `style.css` - Styling and animations

## Future Enhancements

Potential improvements:

- Particle-to-particle collision detection
- Gravity and acceleration
- Custom particle count controls
- Touch/mouse interactions
- Performance metrics display
