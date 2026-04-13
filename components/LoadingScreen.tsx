"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function LoadingScreen() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)
  const prevPathname = useRef(pathname)
  const timerRef = useRef<NodeJS.Timeout[]>([])

  const clearTimers = () => timerRef.current.forEach(clearTimeout)

  const runAnimation = () => {
    clearTimers()
    setVisible(true)
    setOpacity(1)

    const t1 = setTimeout(() => setOpacity(0), 1200)
    const t2 = setTimeout(() => setVisible(false), 1800)

    timerRef.current = [t1, t2]
  }

  // On first load
  useEffect(() => {
    runAnimation()
  }, [])

  // On route change
  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname
      runAnimation()
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-brand-dark"
      style={{
        opacity,
        transition: "opacity 0.6s ease",
        pointerEvents: opacity === 0 ? "none" : "all",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "relative", width: "160px", height: "160px" }}>

          {/* Spinning ring */}
          <svg
            width="160"
            height="160"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              animation: "spin 1.5s linear infinite",
            }}
          >
            <circle cx="80" cy="80" r="74" fill="none" stroke="#ffffff22" strokeWidth="4" />
            <circle
              cx="80" cy="80" r="74"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeDasharray="120 350"
              strokeLinecap="round"
            />
          </svg>

          {/* Inner circle with logo */}
          <div style={{
            position: "absolute",
            top: "6px",
            left: "6px",
            width: "148px",
            height: "148px",
            borderRadius: "50%",
            backgroundColor: "#0a0908",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <img
              src="/empreus-logo-white.png"
              alt="Empreus"
              style={{ width: "130px", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}