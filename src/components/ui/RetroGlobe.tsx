
import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

export const RetroGlobe = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number, y: number } | null>(null);
  const pointerInteractionMovement = useRef({ phi: 0, theta: 0 });
  const rotationRef = useRef({ phi: 0, theta: 0.3 });
  const { theme } = useTheme();

  useEffect(() => {
    // Config values based on theme
    const isWin95 = theme === 'light';

    // Standard Globe Colors (Restored)
    const targetBaseColor = isWin95 ? [0.8, 0.8, 0.8] : [0.0, 0.15, 0.0]; 
    const targetMarkerColor = isWin95 ? [0.1, 0.1, 0.1] : [0.2, 1.0, 0.2]; 
    const targetGlowColor = isWin95 ? [0.7, 0.7, 0.7] : [0.0, 0.4, 0.0]; 
    const targetDark = isWin95 ? 0 : 1;
    const targetDiffuse = isWin95 ? 1.2 : 2;

    if (!canvasRef.current) return;
    
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: targetDark,
      diffuse: targetDiffuse,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: targetBaseColor as [number, number, number],
      markerColor: targetMarkerColor as [number, number, number],
      glowColor: targetGlowColor as [number, number, number],
      opacity: 1,
      markers: [
        { location: [-14.235, -51.9253], size: 0.05 }, // Brasil
      ],
      onRender: (state) => {
        // Auto rotation if not interacting
        if (!pointerInteracting.current) {
          rotationRef.current.phi += 0.005;
        }
        
        // Apply rotation + interaction
        state.phi = rotationRef.current.phi + pointerInteractionMovement.current.phi;
        state.theta = rotationRef.current.theta + pointerInteractionMovement.current.theta;
        
        // Dynamic size
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [theme]); // Re-run when theme changes

  return (
    <div className={`w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = { x: e.clientX, y: e.clientY };
          canvasRef.current!.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const deltaX = e.clientX - pointerInteracting.current.x;
            const deltaY = e.clientY - pointerInteracting.current.y;
            pointerInteractionMovement.current = {
              phi: deltaX / 200,
              theta: deltaY / 200
            };
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const deltaX = e.touches[0].clientX - pointerInteracting.current.x;
            const deltaY = e.touches[0].clientY - pointerInteracting.current.y;
            pointerInteractionMovement.current = {
              phi: deltaX / 200,
              theta: deltaY / 200
            };
          }
        }}
        style={{ 
          width: '100%', 
          height: '100%', 
          maxWidth: '100%', 
          aspectRatio: '1/1',
        }}
      />
    </div>
  );
};
