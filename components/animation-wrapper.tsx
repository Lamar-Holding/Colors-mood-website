"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimationWrapperProps {
  children: React.ReactNode
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right"
  delay?: number
  className?: string
}

export default function AnimationWrapper({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-${animation}` : "opacity-0"} ${className}`}
      style={{
        animationDelay: isVisible ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  )
}
