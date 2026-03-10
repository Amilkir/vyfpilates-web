"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

interface IframeModalProps {
    isOpen: boolean
    onClose: () => void
    url: string
}

export default function IframeModal({ isOpen, onClose, url }: IframeModalProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }

        // Handle ESC key
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown)
        }

        return () => {
            document.body.style.overflow = "unset"
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen || !mounted) return null

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 md:p-6 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="absolute inset-0"
                onClick={onClose}
                aria-hidden="true"
            />
            <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:px-6 md:py-4 border-b border-neutral-100 bg-white shadow-sm z-20">
                    <h3 className="font-semibold text-neutral-800 text-lg lg:text-xl font-title">Reserva tu Clase</h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 bg-neutral-50 rounded-full transition-colors flex items-center justify-center group"
                        aria-label="Cerrar modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-200"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>

                {/* Iframe */}
                <div className="flex-1 w-full relative bg-neutral-50/50">
                    <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-neutral-400 pointer-events-none z-0">
                        {/* Loading spinner */}
                        <svg className="animate-spin h-8 w-8 text-[#874587]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <p className="text-sm font-medium">Cargando...</p>
                    </div>
                    <iframe
                        src={url}
                        className="w-full h-full border-0 relative z-10 bg-transparent rounded-b-3xl"
                        allow="payment"
                        title="Reservar Clase"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>,
        document.body
    )
}
