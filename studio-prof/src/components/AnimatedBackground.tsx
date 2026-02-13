'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Gradient mesh animation
    let animationFrame: number;
    let time = 0;

    const animate = () => {
      time += 0.005;
      
      // Create gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 200,
        canvas.height / 2 + Math.cos(time) * 200,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      gradient.addColorStop(0, 'rgba(14, 165, 233, 0.3)'); // primary-500
      gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.2)'); // primary-400
      gradient.addColorStop(1, 'rgba(240, 249, 255, 0.1)'); // primary-50

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add second gradient
      const gradient2 = ctx.createRadialGradient(
        canvas.width / 2 + Math.cos(time * 1.2) * 250,
        canvas.height / 2 + Math.sin(time * 1.2) * 250,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      gradient2.addColorStop(0, 'rgba(7, 89, 133, 0.2)'); // primary-800
      gradient2.addColorStop(0.5, 'rgba(3, 105, 161, 0.1)'); // primary-700
      gradient2.addColorStop(1, 'rgba(240, 249, 255, 0)');

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrame = requestAnimationFrame(animate);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
