"use client";

import { Hourglass } from "lucide-react";

interface StaticHourglassProps {
  className?: string;
}

export default function StaticHourglass({ className = "" }: StaticHourglassProps) {
  return (
    <Hourglass 
      className={`ml-2 align-middle inline-block flex-shrink-0 static-hourglass-icon ${className}`}
      color="#E5C48F"
      strokeWidth={2}
      aria-label="Processo em andamento — ampulheta institucional estática"
    />
  );
}

