"use client"

import { useEffect, useRef, useState } from "react"

export function FadeImage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`
        bg-white
        transition-all duration-1000 ease-out
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"}
      `}
    >
      {children}
    </div>
  )
}