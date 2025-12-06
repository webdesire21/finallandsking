"use client";
import React, { createContext, useContext, useState } from "react";

const ToastContext = createContext<any>(null);

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: any) {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <div
          className={`fixed top-6 right-6 px-4 py-3 rounded-lg shadow-xl text-white z-[2000]
            animate-slideIn
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
        >
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  );
}
