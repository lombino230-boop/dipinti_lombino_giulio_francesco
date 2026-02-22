import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0705 0%, #120a04 50%, #0a0705 100%)" }}>
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #c9a85c 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute right-0 top-1/4 w-48 h-48 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #8b4513 0%, transparent 70%)", filter: "blur(30px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-lato text-[#c9a85c] tracking-[0.5em] uppercase text-xs mb-4">Chi Sono</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#f5ede0]">
            L'<em className="text-[#c9a85c]">Artista</em>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a85c] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait / Palette illustration */}
          <div className="relative">
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
              {/* Frame */}
              <div className="absolute inset-0 border-2 border-[#c9a85c]/30 rounded-sm" />
              <div className="absolute inset-2 border border-[#c9a85c]/20 rounded-sm" />
              {/* Main artwork */}
              <div className="absolute inset-3 overflow-hidden rounded-sm" style={{ background: "linear-gradient(135deg, #1a0f05 0%, #2d1a08 50%, #1a0f05 100%)" }}>
                {/* Artist palette decoration */}
                <div className="w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 200 250" className="w-3/4 opacity-80">
                    {/* Palette shape */}
                    <ellipse cx="100" cy="130" rx="85" ry="90" fill="#2d1a08" stroke="#c9a85c" strokeWidth="1"/>
                    <ellipse cx="150" cy="60" rx="25" ry="25" fill="#1a0f05" stroke="#c9a85c" strokeWidth="1"/>
                    {/* Paint dabs */}
                    <circle cx="60" cy="90" r="15" fill="#8B0000" opacity="0.9"/>
                    <circle cx="100" cy="80" r="12" fill="#c9a85c" opacity="0.9"/>
                    <circle cx="140" cy="95" r="13" fill="#2E5090" opacity="0.9"/>
                    <circle cx="55" cy="140" r="14" fill="#228B22" opacity="0.9"/>
                    <circle cx="145" cy="145" r="15" fill="#F5DEB3" opacity="0.9"/>
                    <circle cx="100" cy="155" r="11" fill="#8B4513" opacity="0.9"/>
                    {/* Brush */}
                    <rect x="148" y="50" width="4" height="80" rx="2" fill="#8b6914" transform="rotate(-30, 150, 90)"/>
                    <rect x="146" y="50" width="8" height="15" rx="3" fill="#c9a85c" transform="rotate(-30, 150, 90)"/>
                    {/* Initials */}
                    <text x="100" y="200" textAnchor="middle" fontFamily="serif" fontSize="14" fill="#c9a85c" fontStyle="italic" opacity="0.7">G.F. Lombino</text>
                  </svg>
                </div>
              </div>
              {/* Decorative corner ornaments */}
              {[[-1,-1],[1,-1],[-1,1],[1,1]].map(([sx,sy], i) => (
                <div key={i} className="absolute w-6 h-6"
                  style={{
                    top: sy < 0 ? -3 : "auto",
                    bottom: sy > 0 ? -3 : "auto",
                    left: sx < 0 ? -3 : "auto",
                    right: sx > 0 ? -3 : "auto",
                    borderTop: sy < 0 ? "2px solid #c9a85c" : "none",
                    borderBottom: sy > 0 ? "2px solid #c9a85c" : "none",
                    borderLeft: sx < 0 ? "2px solid #c9a85c" : "none",
                    borderRight: sx > 0 ? "2px solid #c9a85c" : "none",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-6">
            <div>
                        <h3 className="font-playfair text-3xl font-bold text-[#f5ede0] mb-4">
              Giulio Francesco <span className="text-[#c9a85c]">Lombino</span>
            </h3>
            <p className="font-lato text-[#f5ede0]/70 leading-relaxed text-base">
              Nato e cresciuto nel cuore della Sicilia, a <strong className="text-[#c9a85c]">Bolognetta</strong> (PA), 
              Giulio Francesco Lombino ha dedicato la sua vita all'arte pittorica con una passione che traspare 
              in ogni singola opera. La sua formazione artistica, radicata nella tradizione siciliana, si fonde 
              con uno sguardo contemporaneo e profondamente personale.
            </p>
          </div>
          <div>
            <p className="font-lato text-[#f5ede0]/70 leading-relaxed text-base">
              Le sue opere spaziano dal paesaggio siciliano al ritratto, dalla natura morta all'astratto, 
              sempre con una padronanza tecnica che rivela anni di studio e pratica. Ogni dipinto è 
              un viaggio emotivo, un dialogo silenzioso tra l'artista e chi osserva.
            </p>
          </div>
          <div>
            <p className="font-lato text-[#f5ede0]/70 leading-relaxed text-base">
              Le sue tecniche preferite includono l'<strong className="text-[#c9a85c]">olio su tela</strong>, 
              l'<strong className="text-[#c9a85c]">acquerello</strong> e la <strong className="text-[#c9a85c]">tecnica mista</strong>, 
              con le quali riesce a catturare quella luce dorata e mediterranea tipica della Sicilia.
            </p>
          </div>

            {/* Techniques */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: "🎨", label: "Olio su Tela" },
                { icon: "💧", label: "Acquerello" },
                { icon: "✏️", label: "Tecnica Mista" },
                { icon: "🖌️", label: "Acrilico" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 border border-[#c9a85c]/20 px-4 py-3 rounded-sm bg-[#c9a85c]/5">
                  <span className="text-xl">{tech.icon}</span>
                  <span className="font-lato text-sm text-[#f5ede0]/80 tracking-wide">{tech.label}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-[#c9a85c] pl-6 mt-6">
              <p className="font-playfair italic text-[#f5ede0]/80 text-lg leading-relaxed">
                "Ogni dipinto è un frammento dell'anima, un momento eterno catturato nel tempo."
              </p>
              <cite className="font-lato text-[#c9a85c] text-sm tracking-widest mt-2 block">— Giulio Francesco Lombino</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
