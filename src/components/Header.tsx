import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/dicionario", label: "Dicionário" },
  { to: "/quiz", label: "Quiz" },
  { to: "/favoritos", label: "Favoritos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `min-h-[44px] flex items-center rounded-lg px-3 text-sm font-medium transition ${
      isActive
        ? "bg-brand-50 text-brand-700"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="flex items-center gap-2 text-brand-700">
          <svg
            viewBox="0 0 64 64"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 40c0-8 5-14 12-14s12 6 12 14" />
            <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
            <circle cx="32" cy="20" r="2.5" fill="currentColor" stroke="none" />
            <circle cx="40" cy="24" r="2.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="text-lg font-bold">ConectaLibras</span>
        </NavLink>

        <nav aria-label="Navegação principal" className="hidden sm:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClassName} end={link.to === "/"}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-slate-200 sm:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegação principal (mobile)"
          className="border-t border-slate-200 sm:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={linkClassName}
                  end={link.to === "/"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
