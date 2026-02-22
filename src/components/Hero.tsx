import React from "react";

export const Hero: React.FC = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Animated paint strokes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a85c 0%, transparent 70%)",
            filter: "blur(40px)",
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #8b4513 0%, transparent 70%)",
            filter: "blur(50px)",
            animation: "pulse 8s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #c9a85c 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Decorative brush stroke SVGs */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <path d="M0,200 Q300,100 600,250 T1200,200" stroke="#c9a85c" strokeWidth="2" fill="none" />
          <path d="M0,400 Q400,300 800,450 T1200,350" stroke="#8b6914" strokeWidth="1.5" fill="none" />
          <path d="M0,600 Q200,500 700,600 T1200,500" stroke="#c9a85c" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Canvas texture */}
      <div className="absolute inset-0 canvas-texture pointer-events-none" />

      {/* Palette decorative element */}
      <div className="absolute top-28 right-8 md:right-16 flex flex-col gap-2 opacity-60">
        {["#8B0000","#c9a85c","#2E5090","#228B22","#8B4513","#F5DEB3"].map((color, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full pulse-gold"
            style={{ backgroundColor: color, animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="font-lato text-[#c9a85c] tracking-[0.5em] uppercase text-sm mb-6">
            ✦ Arte Pittorica Siciliana · Bolognetta (PA) ✦
          </p>
        </div>

        <div className="fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <h1 className="font-playfair text-5xl sm:text-7xl md:text-8xl font-black leading-tight mb-4">
            <span className="block text-[#f5ede0]">LOMBINO</span>
            <span className="block gold-shimmer italic">Giulio Francesco</span>
          </h1>
        </div>

        <div className="fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#c9a85c] to-transparent mx-auto my-6" />
          <p className="font-lato text-[#f5ede0]/70 text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed">
            Pittore siciliano di Bolognetta, dove ogni pennellata racconta storie di luce mediterranea, 
            emozione e bellezza autentica della Sicilia. Opere originali a <span className="text-[#c9a85c] font-bold">€ 150</span>.
          </p>
        </div>

        <div className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center mt-10" style={{ animationDelay: "1s", animationFillMode: "both" }}>
          <button
            onClick={scrollToGallery}
            className="group relative overflow-hidden bg-[#c9a85c] hover:bg-[#e2c97e] text-[#0a0705] font-lato font-bold tracking-widest uppercase text-sm px-10 py-4 transition-all duration-300"
          >
            <span className="relative z-10">Scopri la Galleria</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-[#c9a85c]/50 hover:border-[#c9a85c] text-[#c9a85c] hover:bg-[#c9a85c]/10 font-lato tracking-widest uppercase text-sm px-10 py-4 transition-all duration-300"
          >
            Contattami
          </button>
        </div>

        {/* Stats */}
        <div className="fade-in-up mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
          {[
            { number: "20+", label: "Anni d'Arte" },
            { number: "150+", label: "Opere Realizzate" },
            { number: "€150", label: "Prezzo per Opera" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-playfair text-2xl font-bold text-[#c9a85c]">{stat.number}</div>
              <div className="font-lato text-xs text-[#f5ede0]/50 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-lato text-xs tracking-widest uppercase text-[#c9a85c]">Scorri</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a85c] to-transparent" style={{ animation: "pulse 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
};
