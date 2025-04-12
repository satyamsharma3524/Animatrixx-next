"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ContentItem {
  id: number
  title: string
  type: "anime" | "manga"
  episode?: string
  chapter?: string
  progress?: number
}

interface ContentCarouselProps {
  title: string
  items: ContentItem[]
}

export function ContentCarousel({ title, items }: ContentCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return

    const container = carouselRef.current
    const scrollAmount = direction === "left" ? -container.clientWidth : container.clientWidth
    const newPosition = scrollPosition + scrollAmount

    // Scroll the container
    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    // Update the scroll position state
    setScrollPosition(newPosition)
  }

  // Mouse and touch event handlers for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk
    setScrollPosition(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
    setScrollPosition(carouselRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Calculate if we can scroll in either direction
  const canScrollLeft = scrollPosition > 0
  const canScrollRight = carouselRef.current
    ? scrollPosition < carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    : false

  // Determine items per view based on screen size
  const itemsPerView = isMobile ? 2 : 5

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full text-white hover:bg-white/10 ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full text-white hover:bg-white/10 ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {items.map((item) => (
          <motion.div
            key={`${item.type}-${item.id}`}
            className="flex-none w-[45%] sm:w-[30%] md:w-[20%] lg:w-[18%] xl:w-[16%] snap-start"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href={`/${item.type}/${item.id}`}>
              <Card className="bg-zinc-800/90 border-zinc-700 overflow-hidden hover:bg-zinc-700/90 transition-colors">
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src={`/placeholder.svg?height=450&width=300&text=${item.title}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes={`(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw`}
                  />
                  {item.progress !== undefined && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-600">
                      <div className="h-full bg-pink-500" style={{ width: `${item.progress}%` }} />
                    </div>
                  )}
                </div>
                <CardContent className="p-3">
                  <h3 className="font-medium line-clamp-1 text-white">{item.title}</h3>
                  {item.episode && <p className="text-xs text-gray-300">{item.episode}</p>}
                  {item.chapter && <p className="text-xs text-gray-300">{item.chapter}</p>}
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
