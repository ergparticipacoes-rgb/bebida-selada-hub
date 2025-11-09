"use client";

import Link from "next/link";
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#001F33]/85 backdrop-blur-lg shadow-lg border-b border-[#D9B98E]/25"
          : "bg-[#001F33]/70 backdrop-blur-md"
      }`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 30%, rgba(217,185,142,0.06), transparent 70%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-[#D9B98E] hover:brightness-110 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-wine"
          >
            <path d="M8 22h8"></path>
            <path d="M7 10h10"></path>
            <path d="M12 15v7"></path>
            <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
          </svg>
          <span className="inline-flex items-baseline gap-[1px] text-2xl font-playfair">
            <span>Bebida Selada</span>
            <span className="font-inter text-[0.65em] relative top-[-0.35em] ml-[1px]">®</span>
          </span>
        </Link>

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
