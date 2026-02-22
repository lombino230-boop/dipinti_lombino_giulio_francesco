import React, { useState, useRef } from "react";
import { Painting } from "../data/paintings";

interface GalleryProps {
  paintings: Painting[];
  isAdmin: boolean;
  onDelete: (id: string) => void;
  onAdd: (painting: Painting) => void;
}

const categories = ["Tutti", "Paesaggi", "Ritratti", "Natura Morta", "Astratto", "Interni"];

export const Gallery: React.FC<GalleryProps> = ({ paintings, isAdmin, onDelete, onAdd }) => {
  const [filter, setFilter] = useState("Tutti");
  const [selected, setSelected] = useState<Painting | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    technique: "",
    year: new Date().getFullYear().toString(),
    dimensions: "",
    description: "",
    category: "Paesaggi",
    imageUrl: "",
    imagePreview: "",
  });

  const filtered = filter === "Tutti" ? paintings : paintings.filter((p) => p.category === filter);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setForm((f) => ({ ...f, imageUrl: result, imagePreview: result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.imageUrl) return;
    const newPainting: Painting = {
      id: Date.now().toString(),
      title: form.title,
      technique: form.technique,
      year: form.year,
      dimensions: form.dimensions,
      description: form.description,
      category: form.category,
      price: 150,
      imageUrl: form.imageUrl,
    };
    onAdd(newPainting);
    setForm({ title: "", technique: "", year: new Date().getFullYear().toString(), dimensions: "", description: "", category: "Paesaggi", imageUrl: "", imagePreview: "" });
    setShowAddForm(false);
  };

  return (
    <section id="gallery" className="py-28 relative" style={{ background: "linear-gradient(180deg, #0a0705 0%, #0f0803 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-lato text-[#c9a85c] tracking-[0.5em] uppercase text-xs mb-4">Le Mie Opere</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#f5ede0]">
            <em className="text-[#c9a85c]">Galleria</em> d'Arte
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a85c] to-transparent mx-auto mt-6 mb-4" />
          <p className="font-lato text-[#f5ede0]/60 text-sm max-w-xl mx-auto">
            Ogni opera è unica, realizzata con passione e disponibile al prezzo di <span className="text-[#c9a85c] font-bold">€ 150</span>.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-lato text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 ${
                filter === cat
                  ? "bg-[#c9a85c] text-[#0a0705] border-[#c9a85c] font-bold"
                  : "border-[#c9a85c]/30 text-[#f5ede0]/60 hover:border-[#c9a85c] hover:text-[#c9a85c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Admin: Add painting button */}
        {isAdmin && (
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 bg-[#c9a85c] hover:bg-[#e2c97e] text-[#0a0705] font-lato font-bold text-sm tracking-widest uppercase px-6 py-3 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Aggiungi Dipinto
            </button>
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="font-playfair text-6xl mb-4 opacity-30">🖼️</div>
            <p className="font-lato text-[#f5ede0]/40 tracking-widest uppercase text-sm">Nessun dipinto in questa categoria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((painting, idx) => (
              <div
                key={painting.id}
                className="painting-card group cursor-pointer relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelected(painting)}
              >
                {/* Frame */}
                <div className="relative painting-frame">
                  <div className="relative overflow-hidden" style={{ boxShadow: "inset 0 0 0 6px #1a0f05, inset 0 0 0 8px #c9a85c33, 0 10px 40px rgba(0,0,0,0.6)" }}>
                    {/* Image */}
                    <div className="aspect-[3/4] overflow-hidden bg-[#1a0f05]">
                      <img
                        src={painting.imageUrl}
                        alt={`${painting.title} - Dipinto di Lombino Giulio Francesco`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0705] via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="font-lato text-[#c9a85c] text-xs tracking-widest uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{painting.category}</span>
                      <h3 className="font-playfair text-xl font-bold text-[#f5ede0] leading-tight">{painting.title}</h3>
                      <p className="font-lato text-[#f5ede0]/60 text-xs mt-1">{painting.technique} · {painting.year}</p>
                      <div className="flex items-center justify-between mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-playfair text-[#c9a85c] font-bold text-lg">€ {painting.price}</span>
                        <span className="font-lato text-xs text-[#f5ede0]/60 border border-[#f5ede0]/20 px-3 py-1">Scopri →</span>
                      </div>
                    </div>
                    {/* Admin delete button */}
                    {isAdmin && (
                      <button
                        onClick={(e) => { e.stopPropagation(); setDeleteConfirm(painting.id); }}
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-red-600/80 hover:bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        title="Elimina dipinto"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ──────── LIGHTBOX MODAL ──────── */}
      {selected && (
        <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div
            className="relative max-w-4xl w-full bg-[#120a04] border border-[#c9a85c]/30 shadow-2xl grid md:grid-cols-2 gap-0 overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-[#0a0705]">
              <img src={selected.imageUrl} alt={selected.title} className="w-full h-full object-cover max-h-[60vh] md:max-h-[90vh]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#120a04]/30" />
            </div>
            {/* Details */}
            <div className="p-8 flex flex-col justify-center overflow-y-auto">
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-[#f5ede0]/40 hover:text-[#c9a85c] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <span className="font-lato text-[#c9a85c] text-xs tracking-widest uppercase mb-2">{selected.category}</span>
              <h3 className="font-playfair text-3xl font-bold text-[#f5ede0] mb-1">{selected.title}</h3>
              <p className="font-lato text-[#f5ede0]/50 text-sm mb-6">Lombino Giulio Francesco</p>
              <div className="w-16 h-px bg-[#c9a85c]/40 mb-6" />
              <div className="space-y-3 mb-6">
                {[
                  { label: "Tecnica", value: selected.technique },
                  { label: "Anno", value: selected.year },
                  { label: "Dimensioni", value: selected.dimensions },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="font-lato text-[#f5ede0]/40 tracking-widest uppercase text-xs">{item.label}</span>
                    <span className="font-lato text-[#f5ede0]/80">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="font-lato text-[#f5ede0]/60 text-sm leading-relaxed mb-8">{selected.description}</p>
              <div className="flex items-center justify-between border-t border-[#c9a85c]/20 pt-6">
                <div>
                  <span className="font-lato text-[#f5ede0]/40 text-xs tracking-widest uppercase">Prezzo</span>
                  <div className="font-playfair text-3xl font-bold text-[#c9a85c]">€ {selected.price}</div>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="bg-[#c9a85c] hover:bg-[#e2c97e] text-[#0a0705] font-lato font-bold text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
                >
                  Acquista
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ──────── DELETE CONFIRM MODAL ──────── */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
          <div className="bg-[#120a04] border border-red-500/30 p-8 max-w-sm w-full text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="font-playfair text-xl font-bold text-[#f5ede0] mb-3">Elimina Dipinto</h3>
            <p className="font-lato text-[#f5ede0]/60 text-sm mb-8">Sei sicuro di voler eliminare questo dipinto? L'azione non può essere annullata.</p>
            <div className="flex gap-4">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 border border-[#c9a85c]/30 text-[#f5ede0]/60 hover:text-[#f5ede0] py-3 font-lato text-sm tracking-widest uppercase transition-colors">
                Annulla
              </button>
              <button
                onClick={() => { onDelete(deleteConfirm); setDeleteConfirm(null); }}
                className="flex-1 bg-red-600 hover:bg-red-500 text-white py-3 font-lato text-sm tracking-widest uppercase transition-colors"
              >
                Elimina
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ──────── ADD PAINTING MODAL ──────── */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
          <div className="bg-[#120a04] border border-[#c9a85c]/30 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-playfair text-2xl font-bold text-[#f5ede0]">Aggiungi <em className="text-[#c9a85c]">Dipinto</em></h3>
              <button onClick={() => setShowAddForm(false)} className="text-[#f5ede0]/40 hover:text-[#c9a85c]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Image upload */}
              <div>
                <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Immagine Dipinto *</label>
                <div
                  className="border-2 border-dashed border-[#c9a85c]/30 hover:border-[#c9a85c] p-6 text-center cursor-pointer transition-colors"
                  onClick={() => fileRef.current?.click()}
                >
                  {form.imagePreview ? (
                    <img src={form.imagePreview} alt="Preview" className="max-h-40 mx-auto object-contain" />
                  ) : (
                    <div>
                      <div className="text-3xl mb-2">🖼️</div>
                      <p className="font-lato text-[#f5ede0]/40 text-sm">Clicca per caricare un'immagine</p>
                      <p className="font-lato text-[#f5ede0]/20 text-xs mt-1">JPG, PNG, WebP</p>
                    </div>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                <div className="mt-2">
                  <p className="font-lato text-[#f5ede0]/30 text-xs text-center mb-1">oppure inserisci URL</p>
                  <input
                    type="url"
                    placeholder="https://esempio.com/immagine.jpg"
                    value={form.imageUrl.startsWith("data:") ? "" : form.imageUrl}
                    onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value, imagePreview: e.target.value }))}
                    className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-2 font-lato text-sm placeholder-[#f5ede0]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Titolo *</label>
                  <input
                    required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-2 font-lato text-sm placeholder-[#f5ede0]/20"
                    placeholder="Titolo del dipinto"
                  />
                </div>
                <div>
                  <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Tecnica</label>
                  <input
                    value={form.technique} onChange={(e) => setForm((f) => ({ ...f, technique: e.target.value }))}
                    className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-2 font-lato text-sm placeholder-[#f5ede0]/20"
                    placeholder="Olio su tela"
                  />
                </div>
                <div>
                  <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Anno</label>
                  <input
                    value={form.year} onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))}
                    className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-2 font-lato text-sm placeholder-[#f5ede0]/20"
                    placeholder="2024"
                  />
                </div>
                <div>
                  <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Dimensioni</label>
                  <input
                    value={form.dimensions} onChange={(e) => setForm((f) => ({ ...f, dimensions: e.target.value }))}
                    className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-2 font-lato text-sm placeholder-[#f5ede0]/20"
                    placeholder="60 × 80 cm"
                  />
                </div>
              </div>

              <div>
                <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Categoria</label>
                <select
                  value={form.category} onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-2 font-lato text-sm"
                >
                  {categories.filter((c) => c !== "Tutti").map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Descrizione</label>
                <textarea
                  value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  rows={3}
                  className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-2 font-lato text-sm placeholder-[#f5ede0]/20 resize-none"
                  placeholder="Descrizione del dipinto..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="font-lato text-sm text-[#f5ede0]/50">
                  Prezzo: <strong className="text-[#c9a85c]">€ 150</strong>
                </div>
                <button
                  type="submit"
                  className="bg-[#c9a85c] hover:bg-[#e2c97e] text-[#0a0705] font-lato font-bold text-sm tracking-widest uppercase px-8 py-3 transition-all duration-300"
                >
                  Aggiungi Dipinto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
