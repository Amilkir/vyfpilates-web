"use client"

import { useState } from "react"
import IframeModal from "./IframeModal"

interface BookingButtonProps {
    className?: string;
    children: React.ReactNode;
}

export default function BookingButton({ className, children }: BookingButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const bookingUrl = "https://www.siguefit.com/visit-test.aspx?k=9vrVmxv2z5VdHoD%2fWa9LUw%3d%3d"

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className={className}
            >
                {children}
            </button>

            <IframeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                url={bookingUrl}
            />
        </>
    )
}
