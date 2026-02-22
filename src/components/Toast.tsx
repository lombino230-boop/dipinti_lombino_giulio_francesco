import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLeaving(true);
      setTimeout(onClose, 400);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: "border-[#c9a85c] text-[#c9a85c]",
    error: "border-red-500 text-red-400",
    info: "border-blue-400 text-blue-400",
  };

  const icons = {
    success: "✦",
    error: "✕",
    info: "ℹ",
  };

  return (
    <div className={`${leaving ? "toast-out" : "toast-in"} fixed bottom-6 right-6 z-[100] bg-[#120a04] border ${colors[type]} px-6 py-4 shadow-2xl flex items-center gap-3 max-w-sm`}>
      <span className={`text-lg ${colors[type]}`}>{icons[type]}</span>
      <span className="font-lato text-[#f5ede0]/80 text-sm">{message}</span>
      <button onClick={() => { setLeaving(true); setTimeout(onClose, 400); }} className="ml-2 text-[#f5ede0]/30 hover:text-[#f5ede0]/60">×</button>
    </div>
  );
};
