import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const EMAIL = "lombino230@gmail.com";
  const PHONE = "+393663307385";
  const WHATSAPP_NUMBER = "393663307385";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Interesse per dipinto – ${form.subject}`);
    const body = encodeURIComponent(
      `Buongiorno Giulio Francesco,\n\nMi chiamo ${form.name}.\n\n${form.message}\n\nEmail: ${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const whatsappMessage = encodeURIComponent(
    "Buongiorno Giulio Francesco, ho visto le sue opere sul sito e sono interessato/a. Può darmi maggiori informazioni?"
  );

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0f0803 0%, #0a0705 100%)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-96 h-96 opacity-5"
          style={{ background: "radial-gradient(circle, #c9a85c 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute left-0 top-1/3 w-64 h-64 opacity-5"
          style={{ background: "radial-gradient(circle, #8b4513 0%, transparent 70%)", filter: "blur(40px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-lato text-[#c9a85c] tracking-[0.5em] uppercase text-xs mb-4">Hai Interesse?</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#f5ede0]">
            <em className="text-[#c9a85c]">Contattami</em>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a85c] to-transparent mx-auto mt-6 mb-4" />
          <p className="font-lato text-[#f5ede0]/60 text-sm max-w-xl mx-auto">
            Interessato a un'opera? Vuoi commissionare un dipinto personalizzato? Contattami, sarò felice di risponderti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#f5ede0] mb-6">
                Informazioni di <span className="text-[#c9a85c]">Contatto</span>
              </h3>
              <div className="space-y-4">

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 group border border-[#c9a85c]/10 hover:border-[#c9a85c]/40 bg-[#c9a85c]/3 hover:bg-[#c9a85c]/8 px-5 py-4 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center border border-[#c9a85c]/30 group-hover:border-[#c9a85c] text-[#c9a85c] shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-lato text-xs text-[#f5ede0]/40 tracking-widest uppercase block">Email</span>
                    <span className="font-lato text-[#c9a85c] group-hover:text-[#e2c97e] text-sm transition-colors">{EMAIL}</span>
                  </div>
                  <svg className="w-4 h-4 text-[#c9a85c]/30 group-hover:text-[#c9a85c] ml-auto transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group border border-green-500/20 hover:border-green-500/50 bg-green-900/5 hover:bg-green-900/15 px-5 py-4 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center border border-green-500/30 group-hover:border-green-400 text-green-400 shrink-0 transition-colors">
                    {/* WhatsApp Icon */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="font-lato text-xs text-[#f5ede0]/40 tracking-widest uppercase block">WhatsApp</span>
                    <span className="font-lato text-green-400 group-hover:text-green-300 text-sm transition-colors">{PHONE}</span>
                  </div>
                  <svg className="w-4 h-4 text-green-500/30 group-hover:text-green-400 ml-auto transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {/* Telefono */}
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-4 group border border-[#c9a85c]/10 hover:border-[#c9a85c]/40 bg-[#c9a85c]/3 hover:bg-[#c9a85c]/8 px-5 py-4 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center border border-[#c9a85c]/30 group-hover:border-[#c9a85c] text-[#c9a85c] shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-lato text-xs text-[#f5ede0]/40 tracking-widest uppercase block">Telefono</span>
                    <span className="font-lato text-[#f5ede0]/80 group-hover:text-[#c9a85c] text-sm transition-colors">{PHONE}</span>
                  </div>
                  <svg className="w-4 h-4 text-[#c9a85c]/30 group-hover:text-[#c9a85c] ml-auto transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>

                {/* Posizione */}
                <div className="flex items-center gap-4 border border-[#c9a85c]/10 bg-[#c9a85c]/3 px-5 py-4">
                  <div className="w-11 h-11 flex items-center justify-center border border-[#c9a85c]/30 text-[#c9a85c] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-lato text-xs text-[#f5ede0]/40 tracking-widest uppercase block">Ubicazione</span>
                    <span className="font-lato text-[#f5ede0]/80 text-sm">Bolognetta (PA) · Sicilia, Italia</span>
                  </div>
                </div>

                {/* Risposta */}
                <div className="flex items-center gap-4 border border-[#c9a85c]/10 bg-[#c9a85c]/3 px-5 py-4">
                  <div className="w-11 h-11 flex items-center justify-center border border-[#c9a85c]/30 text-[#c9a85c] shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-lato text-xs text-[#f5ede0]/40 tracking-widest uppercase block">Risposta</span>
                    <span className="font-lato text-[#f5ede0]/80 text-sm">Entro 24-48 ore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA box */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-green-500/30 p-6 bg-green-900/10 hover:bg-green-900/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h4 className="font-playfair text-lg font-bold text-green-300 group-hover:text-green-200 transition-colors">
                  Scrivimi su WhatsApp
                </h4>
              </div>
              <p className="font-lato text-[#f5ede0]/50 text-sm leading-relaxed">
                Preferisci messaggiare? Contattami direttamente su WhatsApp al{" "}
                <strong className="text-green-400">{PHONE}</strong> — rispondo velocemente!
              </p>
              <div className="mt-3 inline-flex items-center gap-2 font-lato text-xs text-green-400 tracking-widest uppercase">
                Apri WhatsApp
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>

            {/* Price info */}
            <div className="border border-[#c9a85c]/20 p-6 bg-[#c9a85c]/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎨</span>
                <h4 className="font-playfair text-lg font-bold text-[#f5ede0]">Acquisto Opere</h4>
              </div>
              <p className="font-lato text-[#f5ede0]/60 text-sm leading-relaxed mb-4">
                Tutte le opere sono disponibili al prezzo fisso di <strong className="text-[#c9a85c]">€ 150</strong>. 
                Ogni dipinto è originale e viene consegnato con certificato di autenticità.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Spedizione in tutta Italia", "Certificato autenticità", "Opera originale"].map((tag) => (
                  <span key={tag} className="font-lato text-xs text-[#c9a85c] border border-[#c9a85c]/30 px-3 py-1">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#f5ede0] mb-8">
              Invia un <span className="text-[#c9a85c]">Messaggio</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Nome *</label>
                  <input
                    required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-3 font-lato text-sm placeholder-[#f5ede0]/20"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div>
                  <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Email *</label>
                  <input
                    required type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-3 font-lato text-sm placeholder-[#f5ede0]/20"
                    placeholder="tua@email.it"
                  />
                </div>
              </div>
              <div>
                <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Oggetto</label>
                <input
                  value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-3 font-lato text-sm placeholder-[#f5ede0]/20"
                  placeholder="es. Interesse per un dipinto"
                />
              </div>
              <div>
                <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Messaggio *</label>
                <textarea
                  required rows={6} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-3 font-lato text-sm placeholder-[#f5ede0]/20 resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                />
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-[#c9a85c] hover:bg-[#e2c97e] text-[#0a0705] font-lato font-bold text-sm tracking-widest uppercase py-4 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {sent ? "✓ Messaggio Inviato!" : "Invia Email"}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-lato font-bold text-sm tracking-widest uppercase py-4 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              <p className="font-lato text-[#f5ede0]/25 text-xs text-center">
                📧 {EMAIL} · 📱 {PHONE}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
