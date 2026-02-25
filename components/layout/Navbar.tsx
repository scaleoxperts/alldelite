"use client";

import { useState } from "react";

import { NAV_LINKS } from "@/contents/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <span className="text-2xl font-bold tracking-tight text-gray-900">
              All<span className="text-(--color-primary)">delite</span>
            </span>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="font-medium text-gray-600 transition hover:text-(--color-primary)"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="rounded-lg bg-(--color-primary) px-5 py-2.5 font-medium text-white transition duration-200 hover:bg-(--color-primary-dark)"
              href="#"
            >
              Request Quote
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="material-icons-outlined text-2xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pt-4 pb-6 md:hidden dark:border-gray-800">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="font-medium text-gray-600 transition hover:text-(--color-primary)"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 rounded-lg bg-(--color-primary) px-5 py-2.5 text-center font-medium text-white transition duration-200 hover:bg-(--color-primary-dark)"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
