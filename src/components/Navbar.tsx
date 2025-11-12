"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/prefeituras", label: "Prefeituras" },
  { href: "/estabelecimentos", label: "Estabelecimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const beyondThreshold = currentScroll > 20;
      const heroBoundary = Math.max(window.innerHeight - 120, 0);
      setInHero(currentScroll < heroBoundary);

      if (beyondThreshold) {
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
          hideTimeoutRef.current = null;
        }
        setScrolled(true);
      } else if (!hideTimeoutRef.current) {
        hideTimeoutRef.current = setTimeout(() => {
          setScrolled(false);
          hideTimeoutRef.current = null;
        }, 400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (menuOpen) {
      root.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      root.style.overflowY = "";
      document.body.style.overflowY = "";
    }
    return () => {
      root.style.overflowY = "";
      document.body.style.overflowY = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navClasses = `navbar-smoke fixed top-0 left-0 w-full border-b z-50 ${
    scrolled
      ? inHero
        ? "bg-[#0B1E3D]/90 border-white/70 shadow-[0_0_20px_rgba(255,255,255,0.18)] backdrop-blur-xl"
        : "bg-[#0B1E3D]/90 border-[#D9B98E]/25 shadow-[0_0_16px_rgba(0,0,0,0.35)] backdrop-blur-xl"
      : "bg-[#0B1E3D]/80 border-transparent shadow-[0_0_10px_rgba(0,0,0,0.25)] backdrop-blur-md"
  }`;

  const navStyle = scrolled
    ? {
        transition: "border-bottom-color 180ms ease-out, background-color 400ms ease, box-shadow 400ms ease, backdrop-filter 400ms ease",
      }
    : {
        transition: "border-bottom-color 360ms ease-in, background-color 450ms ease, box-shadow 450ms ease, backdrop-filter 450ms ease",
      };

  return (
    <nav className={navClasses} style={navStyle}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-[1.15rem] md:py-[1.25rem]">
        {/* Marca institucional */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[#FDF4E1] font-playfair text-[1.55rem] md:text-[1.9rem] tracking-[0.08em] hover:brightness-110 transition-all select-none"
        >
          <span className="relative flex items-center justify-center w-[42px] h-[42px] md:w-[56px] md:h-[56px] shrink-0 transition-transform duration-300 group-hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-full w-full"
            >
              <path d="M7.4 3.2h9.2v2.9c0 3.6-2.6 6.8-4.6 6.8s-4.6-3.2-4.6-6.8V3.2z" />
              <path d="M12 13.4v5.1" />
              <path d="M9.5 21h5" />
            </svg>
          </span>

          <span className="flex flex-col leading-none text-[#D9B98E]">
            <span className="uppercase tracking-[0.28em] text-[0.6em] text-[#FDF4E1]/90">
              Rede Segura Nacional
            </span>
            <span className="text-[0.85em] md:text-[0.95em]">
              Bebida Selada
              <span className="font-inter text-[0.55em] relative top-[-0.4em] ml-[1px]">®</span>
            </span>
          </span>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-10 text-sm md:text-base font-inter text-white ml-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-medium tracking-[0.06em] transition-all duration-200 hover:text-[#F4E3C6]"
            >
              <span className="group inline-flex items-center gap-1">
                <span>{link.label}</span>
                <span className="block h-[2px] w-0 bg-[#D9B98E] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="ml-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm md:text-base font-semibold text-[#0B1E3D] shadow-[0_6px_16px_rgba(243,236,225,0.25)] ring-1 ring-inset ring-white/60 transition-colors duration-250 hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          >
            Login
          </Link>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          className="menu-smoke md:hidden inline-flex flex-col items-center justify-center gap-[5px] rounded-md border border-white/25 p-2.5 text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <span className="block h-0.5 w-6 rounded-full bg-white transition-all" />
          <span className="block h-0.5 w-6 rounded-full bg-white transition-all" />
          <span className="block h-0.5 w-6 rounded-full bg-white transition-all" />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex flex-col bg-[#001626] backdrop-blur-xl md:left-auto md:w-72 md:border-l md:border-[#D9B98E]/20 md:shadow-2xl">
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10 bg-[#001626]">
              <span className="text-[#D9B98E] font-playfair text-lg">Menu</span>
              <button
                type="button"
                className="text-white/80 hover:text-white transition"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>
            <nav className="flex-1 px-6 py-8 flex flex-col gap-6 text-white font-inter text-lg bg-[#001626]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={closeMenu}
                  className="hover:text-[#D9B98E] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/universidade"
                onClick={closeMenu}
                className="hover:text-[#D9B98E] transition-colors duration-200"
              >
                Universidade
              </Link>
              <Link
                href="/auth/login"
                onClick={closeMenu}
                className="mt-auto inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0B1E3D] shadow-[0_16px_30px_rgba(255,255,255,0.25)] ring-1 ring-inset ring-white/70 transition-all duration-300 hover:bg-white/95 hover:shadow-[0_18px_34px_rgba(255,255,255,0.3)] hover:ring-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
              >
                Login
              </Link>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
}
