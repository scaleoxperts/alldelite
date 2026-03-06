"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/contents/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex shrink-0 items-center">
            <Link
              prefetch={true}
              href="/"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              All<span className="text-(--color-primary)">delite</span>
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  prefetch={true}
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition hover:text-(--color-primary) ${
                    active
                      ? "text-(--color-primary) underline underline-offset-8"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              prefetch={true}
              href="/contact"
              className="rounded-lg bg-(--color-primary) px-5 py-2.5 font-medium text-white transition duration-200 hover:bg-(--color-primary-dark)"
            >
              Request Quote
            </Link>
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
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  prefetch={true}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition hover:text-(--color-primary) ${
                    active
                      ? "text-(--color-primary) underline underline-offset-8"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              prefetch={true}
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-lg bg-(--color-primary) px-5 py-2.5 text-center font-medium text-white transition duration-200 hover:bg-(--color-primary-dark)"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
