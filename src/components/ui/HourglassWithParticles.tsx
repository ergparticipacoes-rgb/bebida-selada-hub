"use client";

import { Hourglass } from "lucide-react";

interface HourglassWithParticlesProps {
  size?: number;
  color?: string;
  className?: string;
}

export default function HourglassWithParticles({
  size = 22,
  color = "#E5C48F",
  className = "",
}: HourglassWithParticlesProps) {
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`} 
      style={{ 
        width: size, 
        height: size,
        overflow: 'visible'
      }}
    >
      <Hourglass 
        className="hourglass-rotate"
        style={{ 
          width: size, 
          height: size, 
          color: color,
          display: 'block',
          flexShrink: 0
        }}
        strokeWidth={2}
        aria-label="Processo em andamento"
      />
      {/* Partículas douradas simulando pó caindo */}
      <span className="hourglass-particle hourglass-particle-1" />
      <span className="hourglass-particle hourglass-particle-2" />
      <span className="hourglass-particle hourglass-particle-3" />
    </div>
  );
}

