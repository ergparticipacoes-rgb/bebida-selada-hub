"use client";

interface StaticWineglassHourglassProps {
  size?: number;
  className?: string;
}

export default function StaticWineglassHourglass({
  size = 48,
  className = "",
}: StaticWineglassHourglassProps) {
  const gradientId = `static-wineglass-gold-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      aria-label="Processo em andamento — taça-ampulheta estática"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0D8A8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#E5C48F" stopOpacity="1" />
            <stop offset="100%" stopColor="#D9B98E" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Copo superior ovalado */}
        <ellipse
          cx="12"
          cy="5.5"
          rx="4.5"
          ry="2.8"
          fill={`url(#${gradientId})`}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.8"
        />

        {/* Gargalo estreito */}
        <path
          d="M12 8.3L12 10.5"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Parte central (estrangulamento da ampulheta) */}
        <ellipse
          cx="12"
          cy="10.5"
          rx="1.8"
          ry="1.2"
          fill={`url(#${gradientId})`}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.6"
        />

        {/* Cone superior conectando ao gargalo */}
        <path
          d="M10.2 10.5 Q12 12.5 13.8 10.5"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Copo inferior espelhado */}
        <ellipse
          cx="12"
          cy="18.5"
          rx="4.5"
          ry="2.8"
          fill={`url(#${gradientId})`}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.8"
        />

        {/* Cone inferior conectando ao copo */}
        <path
          d="M10.2 13.5 Q12 11.5 13.8 13.5"
          stroke={`url(#${gradientId})`}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Linha de contorno completa da taça - superior */}
        <path
          d="M7.5 5.5 Q7.5 7.5 10.2 10.5 Q12 12.5 13.8 10.5 Q16.5 7.5 16.5 5.5"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Linha de contorno completa da taça - inferior */}
        <path
          d="M7.5 18.5 Q7.5 16.5 10.2 13.5 Q12 11.5 13.8 13.5 Q16.5 16.5 16.5 18.5"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

