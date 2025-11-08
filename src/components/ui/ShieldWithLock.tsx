"use client";

import { Shield, Lock } from "lucide-react";

interface ShieldWithLockProps {
  size?: number;
  shieldColor?: string;
  lockColor?: string;
  className?: string;
}

export default function ShieldWithLock({
  size = 48,
  shieldColor = "#E5C48F",
  lockColor = "#E5C48F",
  className = "",
}: ShieldWithLockProps) {
  const lockSize = size / 3;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Círculo dourado de fundo para reforço visual */}
      <div 
        className="absolute rounded-full opacity-20"
        style={{ 
          width: size * 1.3, 
          height: size * 1.3, 
          background: `radial-gradient(circle, ${shieldColor}40 0%, transparent 70%)`
        }}
      />
      <Shield 
        className="shield-glow"
        style={{ 
          width: size, 
          height: size, 
          color: shieldColor
        }}
        strokeWidth={2}
      />
      <Lock 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          width: lockSize, 
          height: lockSize, 
          color: lockColor
        }}
        strokeWidth={2.5}
      />
    </div>
  );
}



