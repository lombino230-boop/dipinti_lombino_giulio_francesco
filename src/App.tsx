import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { Toast } from "./components/Toast";
import { defaultPaintings, Painting } from "./data/paintings";

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin";
const STORAGE_KEY = "lombino_paintings";
const AUTH_KEY = "lombino_admin_auth";

interface ToastState {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

export function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Load paintings and auth from localStorage
  useEffect(() => {
    const savedPaintings = localStorage.getItem(STORAGE_KEY);
    if (savedPaintings) {
      try {
        setPaintings(JSON.parse(savedPaintings));
      } catch {
        setPaintings(defaultPaintings);
      }
    } else {
      setPaintings(defaultPaintings);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPaintings));
    }

    const savedAuth = localStorage.getItem(AUTH_KEY);
    if (savedAuth === "true") {
      setIsAdmin(true);
    }
  }, []);

  // Save paintings to localStorage whenever they change
  useEffect(() => {
    if (paintings.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(paintings));
    }
  }, [paintings]);

  const addToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleLogin = (username: string, password: string): boolean => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowLogin(false);
      localStorage.setItem(AUTH_KEY, "true");
      addToast("✦ Accesso effettuato. Benvenuto, Amministratore!", "success");
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem(AUTH_KEY);
    addToast("Sessione terminata.", "info");
  };

  const handleDelete = (id: string) => {
    const painting = paintings.find((p) => p.id === id);
    setPaintings((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    addToast(`"${painting?.title}" eliminato dalla galleria.`, "error");
  };

  const handleAdd = (painting: Painting) => {
    setPaintings((prev) => {
      const updated = [painting, ...prev];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    addToast(`"${painting.title}" aggiunto alla galleria! ✦`, "success");
  };

  return (
    <div className="min-h-screen bg-[#0a0705] text-[#f5ede0] overflow-x-hidden">
      {/* Structured data for current paintings count */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ArtGallery",
            "name": "Galleria d'Arte – Lombino Giulio Francesco",
            "description": "Galleria online del pittore siciliano Lombino Giulio Francesco di Bolognetta (PA). Dipinti originali a €150.",
            "url": "https://lombino-giulio-francesco.github.io/",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bolognetta",
              "addressRegion": "Palermo",
              "addressCountry": "IT"
            },
            "numberOfItems": paintings.length,
          }),
        }}
      />

      <Navbar
        isAdmin={isAdmin}
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogout}
      />

      <main>
        <Hero />
        <About />
        <Gallery
          paintings={paintings}
          isAdmin={isAdmin}
          onDelete={handleDelete}
          onAdd={handleAdd}
        />
        <Contact />
      </main>

      <Footer />

      {/* Decorative floating paint brush cursor indicator */}
      <div
        className="fixed bottom-8 left-8 z-40 hidden md:flex flex-col items-center gap-2 opacity-30 pointer-events-none"
      >
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a85c] to-transparent" />
        <div className="font-lato text-[#c9a85c] text-xs tracking-widest uppercase rotate-90 origin-center translate-x-3">
          Arte
        </div>
      </div>

      {/* Login modal */}
      {showLogin && (
        <LoginModal
          onLogin={handleLogin}
          onClose={() => setShowLogin(false)}
        />
      )}

      {/* Toast notifications */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}
