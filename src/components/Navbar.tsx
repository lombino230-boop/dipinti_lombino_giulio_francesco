import React, { useState, useEffect } from "react";

interface NavbarProps {
  isAdmin: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isAdmin, onLoginClick, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0705]/95 backdrop-blur-md shadow-[0_2px_30px_rgba(201,168,92,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex flex-col cursor-pointer" onClick={() => scrollTo("hero")}>
            <span className="font-playfair text-xl font-bold text-[#c9a85c] tracking-widest leading-none">
              LOMBINO
            </span>
            <span className="font-playfair text-xs text-[#e2c97e]/70 tracking-[0.4em] leading-none mt-0.5">
              GIULIO FRANCESCO
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["hero", "about", "gallery", "contact"].map((section, i) => {
              const labels = ["Home", "Artista", "Galleria", "Contatti"];
              return (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className="text-[#f5ede0]/80 hover:text-[#c9a85c] font-lato text-sm tracking-widest uppercase transition-colors duration-300 relative group"
                >
                  {labels[i]}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a85c] group-hover:w-full transition-all duration-300" />
                </button>
              );
            })}

            {isAdmin ? (
              <div className="flex items-center gap-3">
                <span className="text-[#c9a85c] text-xs font-lato tracking-widest uppercase bg-[#c9a85c]/10 px-3 py-1 rounded-full border border-[#c9a85c]/30">
                  ✦ Admin
                </span>
                <button
                  onClick={onLogout}
                  className="text-[#f5ede0]/60 hover:text-red-400 text-xs tracking-widest uppercase transition-colors"
                >
                  Esci
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="text-[#c9a85c] border border-[#c9a85c]/40 hover:border-[#c9a85c] hover:bg-[#c9a85c]/10 px-4 py-2 text-xs tracking-widest uppercase font-lato transition-all duration-300"
              >
                Accedi
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#c9a85c] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-[#c9a85c] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-px bg-[#c9a85c] transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-px bg-[#c9a85c] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0705]/98 backdrop-blur-md border-t border-[#c9a85c]/20 px-6 py-6 flex flex-col gap-6">
          {["hero", "about", "gallery", "contact"].map((section, i) => {
            const labels = ["Home", "Artista", "Galleria", "Contatti"];
            return (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className="text-[#f5ede0]/80 hover:text-[#c9a85c] font-lato text-sm tracking-widest uppercase text-left transition-colors"
              >
                {labels[i]}
              </button>
            );
          })}
          {isAdmin ? (
            <button onClick={onLogout} className="text-red-400 text-sm tracking-widest uppercase text-left">
              Esci
            </button>
          ) : (
            <button onClick={() => { onLoginClick(); setMenuOpen(false); }} className="text-[#c9a85c] text-sm tracking-widest uppercase text-left">
              Accedi
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
