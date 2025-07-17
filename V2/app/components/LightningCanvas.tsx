'use client';

import { useEffect, useRef } from 'react';

export default function LightningCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lightning: any[] = [];
    
    const createLightning = () => {
      const startX = Math.random() * canvas.width;
      const startY = 0;
      
      const bolt = {
        x: startX,
        y: startY,
        segments: [],
        opacity: 1,
        life: 100
      };

      // Create lightning path
      let currentX = startX;
      let currentY = startY;
      
      while (currentY < canvas.height) {
        const nextX = currentX + (Math.random() - 0.5) * 40;
        const nextY = currentY + Math.random() * 30 + 10;
        
        bolt.segments.push({
          x1: currentX,
          y1: currentY,
          x2: nextX,
          y2: nextY
        });
        
        currentX = nextX;
        currentY = nextY;
      }
      
      lightning.push(bolt);
    };

    const drawLightning = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lightning.forEach((bolt, index) => {
        if (bolt.life <= 0) {
          lightning.splice(index, 1);
          return;
        }
        
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#60a5fa';
        ctx.strokeStyle = `rgba(96, 165, 250, ${bolt.opacity})`;
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        bolt.segments.forEach((segment: any) => {
          ctx.moveTo(segment.x1, segment.y1);
          ctx.lineTo(segment.x2, segment.y2);
        });
        ctx.stroke();
        
        // Inner bright line
        ctx.shadowBlur = 5;
        ctx.strokeStyle = `rgba(255, 255, 255, ${bolt.opacity * 0.8})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        bolt.opacity -= 0.02;
        bolt.life--;
      });
    };

    const animate = () => {
      drawLightning();
      
      if (Math.random() < 0.005) {
        createLightning();
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}