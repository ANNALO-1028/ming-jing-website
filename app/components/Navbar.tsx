"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#services", label: "服務內容" },
    { href: "#advantages", label: "我們的優勢" },
    { href: "#contact", label: "聯絡我們" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E0D8]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center">
          <Image src="/logo.png" alt="名璟新媒體" width={60} height={60} className="object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#6B5F58] hover:text-[#2E2A27] text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#B5957A] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#A0806A] transition-colors"
          >
            免費諮詢
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#6B5F58]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="開關選單"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E0D8] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#2E2A27] text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#B5957A] text-white text-center px-5 py-2 rounded-lg text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            免費諮詢
          </a>
        </div>
      )}
    </nav>
  );
}
