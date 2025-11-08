"use client";

interface WineglassHourglassProps {
  size?: number;
  className?: string;
}

export default function WineglassHourglass({
  size,
  className = "",
}: WineglassHourglassProps) {
  // ID único para evitar conflitos de gradientes
  const gradientId = `wineglass-gold-${Math.random().toString(36).substr(2, 9)}`;
  const shineId = `wineglass-shine-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <span 
      className={`inline-flex items-center justify-center ml-2 align-middle wineglass-hourglass-container ${className}`}
      aria-label="Processo em andamento — taça-ampulheta animada"
    >
      <svg
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wineglass-hourglass-svg wineglass-rotate"
        preserveAspectRatio="xMidYMid meet"
        style={{ 
          filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.15))'
        }}
      >
        <defs>
          {/* Gradiente dourado vertical */}
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0D8A8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#E5C48F" stopOpacity="1" />
            <stop offset="100%" stopColor="#D9B98E" stopOpacity="0.9" />
          </linearGradient>
          
          {/* Gradiente para brilho pulsante */}
          <linearGradient id={shineId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#E5C48F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D9B98E" stopOpacity="0.4" />
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
          className="wineglass-shine"
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
          className="wineglass-shine"
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

        {/* Fluido líquido descendo - efeito animado (parte superior) */}
        <path
          d="M10.2 10.5 Q12 12.5 13.8 10.5"
          stroke={`url(#${shineId})`}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="wineglass-liquid"
        />

        {/* Fluido líquido descendo - efeito animado (parte inferior) */}
        <path
          d="M10.2 13.5 Q12 11.5 13.8 13.5"
          stroke={`url(#${shineId})`}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="wineglass-liquid"
          style={{ animationDelay: '1s' }}
        />

        {/* Partículas/Bolhas caindo */}
        <circle
          cx="11.3"
          cy="11"
          r="0.8"
          fill="#F0D8A8"
          className="wineglass-bubble wineglass-bubble-1"
          opacity="0.9"
        />
        <circle
          cx="12.7"
          cy="12.2"
          r="0.7"
          fill="#E5C48F"
          className="wineglass-bubble wineglass-bubble-2"
          opacity="0.85"
        />
        <circle
          cx="11.6"
          cy="13.5"
          r="0.75"
          fill="#F0D8A8"
          className="wineglass-bubble wineglass-bubble-3"
          opacity="0.8"
        />
        <circle
          cx="12.4"
          cy="15"
          r="0.65"
          fill="#E5C48F"
          className="wineglass-bubble wineglass-bubble-4"
          opacity="0.75"
        />
        <circle
          cx="12"
          cy="16.5"
          r="0.6"
          fill="#F0D8A8"
          className="wineglass-bubble wineglass-bubble-5"
          opacity="0.7"
        />
      </svg>
    </span>
  );
}
