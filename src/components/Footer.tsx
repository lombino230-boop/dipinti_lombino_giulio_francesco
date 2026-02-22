import React from "react";

const EMAIL = "lombino230@gmail.com";
const PHONE = "+39 366 330 7385";
const WHATSAPP_NUMBER = "393663307385";
const whatsappMessage = encodeURIComponent(
  "Buongiorno Giulio Francesco, ho visto le sue opere sul sito e sono interessato/a."
);

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-[#c9a85c]/10" style={{ background: "#070502" }}>
      {/* Background */}
      <div className="absolute inset-0 canvas-texture pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-playfair text-2xl font-bold text-[#c9a85c] tracking-widest block">LOMBINO</span>
              <span className="font-playfair text-sm text-[#e2c97e]/50 tracking-[0.3em] block mt-0.5">GIULIO FRANCESCO</span>
            </div>
            <p className="font-lato text-[#f5ede0]/40 text-sm leading-relaxed">
              Pittore siciliano di Bolognetta (PA). Opere originali che raccontano la luce e la bellezza autentica della Sicilia.
            </p>
            <div className="mt-5 space-y-1">
              <p className="font-lato text-[#f5ede0]/30 text-xs">🇮🇹 Sicilia · Bolognetta (PA)</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase mb-5">Navigazione</h4>
            <nav className="space-y-3">
              {[["hero","Home"],["about","L'Artista"],["gallery","Galleria"],["contact","Contatti"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="block font-lato text-sm text-[#f5ede0]/40 hover:text-[#c9a85c] tracking-wide transition-colors">
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase mb-5">Contatti Diretti</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 font-lato text-sm text-[#f5ede0]/50 hover:text-[#c9a85c] transition-colors group"
              >
                <svg className="w-4 h-4 text-[#c9a85c]/50 group-hover:text-[#c9a85c] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {EMAIL}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-lato text-sm text-[#f5ede0]/50 hover:text-green-400 transition-colors group"
              >
                <svg className="w-4 h-4 text-green-500/50 group-hover:text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: {PHONE}
              </a>
              <a
                href={`tel:+393663307385`}
                className="flex items-center gap-2 font-lato text-sm text-[#f5ede0]/50 hover:text-[#c9a85c] transition-colors group"
              >
                <svg className="w-4 h-4 text-[#c9a85c]/50 group-hover:text-[#c9a85c] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Tel: {PHONE}
              </a>
            </div>
          </div>

          {/* SEO info */}
          <div>
            <h4 className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase mb-5">Informazioni</h4>
            <div className="space-y-2 font-lato text-sm text-[#f5ede0]/40">
              <p>🎨 Pittore Siciliano</p>
              <p>📍 Bolognetta (PA) · Italia</p>
              <p>🖼️ Dipinti Originali</p>
              <p>✦ Prezzo fisso: <span className="text-[#c9a85c]">€ 150</span></p>
              <p>📜 Certificato Autenticità</p>
              <p>🚚 Spedizione in tutta Italia</p>
            </div>
          </div>
        </div>

        {/* WhatsApp floating banner */}
        <div className="mb-10 border border-green-500/20 bg-green-900/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <p className="font-lato text-sm text-[#f5ede0]/60">
              Contattami direttamente su <strong className="text-green-400">WhatsApp</strong> per informazioni o acquisti — rispondo in giornata!
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-green-600 hover:bg-green-500 text-white font-lato font-bold text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Scrivi ora
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c9a85c]/20 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-lato text-[#f5ede0]/25 text-xs">
            © {new Date().getFullYear()} Lombino Giulio Francesco — Tutti i diritti riservati
          </p>
          <p className="font-lato text-[#f5ede0]/20 text-xs text-center">
            Pittore Siciliano · Bolognetta (PA) · Dipinti Originali · Arte Italiana · Galleria Online
          </p>
        </div>
      </div>
    </footer>
  );
};
