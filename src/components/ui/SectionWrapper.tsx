import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 ${className}`}
    >
      {children}
    </section>
  );
}

