"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Confidentialité" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex h-[70px] items-center justify-between border-b border-[rgba(212,98,26,0.15)] bg-[rgba(253,246,238,0.95)] px-8 backdrop-blur-[12px]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="font-serif text-lg font-bold text-[var(--orange)]">
            Baba Khan
          </span>
        </Link>
        <ul className="hidden list-none items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-medium text-[var(--brown)] no-underline transition-colors hover:text-[var(--orange)] ${
                  pathname === href || (href !== "/" && pathname.startsWith(href))
                    ? "text-[var(--orange)]"
                    : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#telecharger"
              className="rounded-full bg-[var(--orange)] px-5 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-[var(--orange-dark)]"
            >
              Télécharger l&apos;app
            </Link>
          </li>
        </ul>
        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 border-none bg-transparent cursor-pointer md:hidden"
        >
          <span className="block h-0.5 w-6 rounded-sm bg-[var(--brown)]" />
          <span className="block h-0.5 w-6 rounded-sm bg-[var(--brown)]" />
          <span className="block h-0.5 w-6 rounded-sm bg-[var(--brown)]" />
        </button>
      </nav>

      <div
        className={`fixed left-0 right-0 top-[70px] z-[99] flex flex-col gap-4 border-b border-[rgba(212,98,26,0.15)] bg-[var(--cream)] p-6 md:hidden ${
          mobileOpen ? "flex" : "hidden"
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="border-b border-[var(--gray)] pb-2 text-base font-medium text-[var(--brown)] no-underline"
          >
            {label}
          </Link>
        ))}
        <Link
          href="#telecharger"
          onClick={() => setMobileOpen(false)}
          className="font-semibold text-[var(--orange)] no-underline"
        >
          Télécharger l&apos;app
        </Link>
      </div>
    </>
  );
}
