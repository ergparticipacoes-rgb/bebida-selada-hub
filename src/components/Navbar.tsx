"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/prefeituras", label: "Prefeituras" },
  { href: "/estabelecimentos", label: "Estabelecimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navClasses = `navbar-smoke fixed top-0 left-0 w-full overflow-hidden transition-all duration-500 z-50 ${
    scrolled
      ? "bg-[#0B1E3D]/85 border-b border-[#D9B98E]/25 shadow-[0_0_24px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
      : "bg-[#0B1E3D]/70 shadow-[0_0_16px_rgba(0,0,0,0.3)] backdrop-blur-xl"
  }`;

  return (
    <nav className={navClasses}>
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 translate-x-3 sm:translate-x-6"
        >
          <Link
            href="/"
            className="flex items-center gap-3 text-[#D9B98E] hover:brightness-110 transition-all"
          >
            <Image
              src="/assets/logo-bebida-selada.svg"
              alt="Bebida Selada Logo"
              width={130}
              height={130}
              priority
              placeholder="empty"
              style={{ imageRendering: "crisp-edges" }}
              className="drop-shadow-[0_0_8px_rgba(217,185,142,0.85)] hover:scale-105 transition-transform duration-300"
            />
            <span className="inline-flex items-baseline gap-[1px] text-2xl font-playfair tracking-wide">
              <span>Bebida Selada</span>
              <span className="font-inter text-[0.65em] relative top-[-0.35em] ml-[1px]">®</span>
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base font-inter text-white ml-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#D9B98E] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/login"
            className="ml-4 px-5 py-2 rounded-lg bg-[#D9B98E] text-[#001F33] font-semibold hover:bg-[#B8925A] transition-colors duration-200"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white transition hover:bg-white/10"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <span className="block h-0.5 w-6 bg-white rounded-sm" />
          <span className="block h-0.5 w-6 bg-white rounded-sm mt-1.5" />
          <span className="block h-0.5 w-6 bg-white rounded-sm mt-1.5" />
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 z-50 w-72 max-w-full bg-[#001626] border-l border-[#D9B98E]/20 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="text-[#D9B98E] font-playfair text-xl">Menu</span>
              <button
                type="button"
                className="text-white/80 hover:text-white transition"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                ×
              </button>
            </div>
            <nav className="flex-1 px-6 py-8 flex flex-col gap-6 text-white font-inter text-lg">
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
                href="/auth/login"
                onClick={closeMenu}
                className="mt-auto inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#D9B98E] text-[#001F33] font-semibold hover:bg-[#B8925A] transition-colors duration-200"
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
