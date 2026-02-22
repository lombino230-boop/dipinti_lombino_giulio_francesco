import React, { useState } from "react";

interface LoginModalProps {
  onLogin: (username: string, password: string) => boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulate slight delay for UX
    await new Promise((r) => setTimeout(r, 800));
    const success = onLogin(username, password);
    if (!success) {
      setError("Credenziali non valide. Riprova.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
      <div className="relative bg-[#120a04] border border-[#c9a85c]/30 p-8 sm:p-10 max-w-sm w-full shadow-2xl">
        {/* Corner ornaments */}
        {[[-1,-1],[1,-1],[-1,1],[1,1]].map(([sx,sy], i) => (
          <div key={i} className="absolute w-5 h-5"
            style={{
              top: sy < 0 ? -1 : "auto", bottom: sy > 0 ? -1 : "auto",
              left: sx < 0 ? -1 : "auto", right: sx > 0 ? -1 : "auto",
              borderTop: sy < 0 ? "1px solid #c9a85c" : "none",
              borderBottom: sy > 0 ? "1px solid #c9a85c" : "none",
              borderLeft: sx < 0 ? "1px solid #c9a85c" : "none",
              borderRight: sx > 0 ? "1px solid #c9a85c" : "none",
            }}
          />
        ))}

        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-[#f5ede0]/30 hover:text-[#c9a85c] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 border border-[#c9a85c]/30 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#c9a85c]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
            </svg>
          </div>
          <p className="font-lato text-[#c9a85c] tracking-[0.4em] uppercase text-xs mb-1">Area Riservata</p>
          <h3 className="font-playfair text-2xl font-bold text-[#f5ede0]">Accesso <em>Admin</em></h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-3 font-lato text-sm placeholder-[#f5ede0]/20"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="font-lato text-xs text-[#c9a85c] tracking-widest uppercase block mb-2">Password</label>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="input-gold w-full bg-[#0a0705] border border-[#c9a85c]/20 text-[#f5ede0] px-4 py-3 pr-12 font-lato text-sm placeholder-[#f5ede0]/20"
                placeholder="••••••"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#f5ede0]/30 hover:text-[#c9a85c] transition-colors"
              >
                {showPass ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500/40 px-4 py-3 text-red-400 font-lato text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c9a85c] hover:bg-[#e2c97e] disabled:opacity-60 text-[#0a0705] font-lato font-bold text-sm tracking-widest uppercase py-4 transition-all duration-300 mt-2"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Accesso...
              </span>
            ) : "Accedi"}
          </button>
        </form>

        <p className="font-lato text-[#f5ede0]/20 text-xs text-center mt-6">
          Accesso riservato all'amministratore
        </p>
      </div>
    </div>
  );
};
