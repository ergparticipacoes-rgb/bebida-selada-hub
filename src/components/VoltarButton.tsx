"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const EXCLUDED_PATHS = new Set(["/"]);

export default function VoltarButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !pathname || EXCLUDED_PATHS.has(pathname)) {
    return null;
  }

  return (
    <div className="flex justify-center py-10">
      <button
        onClick={() => router.back()}
        className="px-6 py-2 border border-[#D9B98E] text-[#D9B98E] rounded-lg hover:bg-[#D9B98E] hover:text-[#001F33] transition-all font-inter font-semibold"
      >
        ← Voltar
      </button>
    </div>
  );
}

