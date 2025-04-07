"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  List,
  Maximize2,
  Minimize2,
  Settings,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function MangaReaderPage({
  params,
}: {
  params: { id: string; chapterId: string }
}) {
  const router = useRouter()
  const mangaId = Number.parseInt(params.id)
  const chapterId = Number.parseInt(params.chapterId)

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [readingMode, setReadingMode] = useState<"vertical" | "horizontal">("vertical")
  const [currentPage, setCurrentPage] = useState(1)

  // Mock manga data
  const manga = {
    id: mangaId,
    title: "Chainsaw Man",
  }

  // Mock chapter data
  const chapter = {
    id: chapterId,
    number: chapterId,
    title: `Chapter ${chapterId}: The Awakening`,
    pages: 15,
    nextChapter: chapterId < 120 ? chapterId + 1 : null,
    prevChapter: chapterId > 1 ? chapterId - 1 : null,
  }

  // Generate mock pages
  const pages = Array.from({ length: chapter.pages }, (_, i) => ({
    id: i + 1,
    url: `/placeholder.svg?height=1400&width=900&text=Chapter ${chapterId} - Page ${i + 1}`,
  }))

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "d") {
        if (readingMode === "horizontal") {
          if (currentPage < pages.length) {
            setCurrentPage((prev) => prev + 1)
          } else if (chapter.nextChapter) {
            router.push(`/manga/${mangaId}/chapter/${chapter.nextChapter}`)
          }
        }
      } else if (e.key === "ArrowLeft" || e.key === "a") {
        if (readingMode === "horizontal") {
          if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1)
          } else if (chapter.prevChapter) {
            router.push(`/manga/${mangaId}/chapter/${chapter.prevChapter}`)
          }
        }
      } else if (e.key === "f") {
        toggleFullscreen()
      } else if (e.key === "h") {
        setShowControls((prev) => !prev)
      } else if (e.key === "m") {
        setReadingMode((prev) => (prev === "vertical" ? "horizontal" : "vertical"))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, pages.length, chapter.nextChapter, chapter.prevChapter, mangaId, router, readingMode])

  // Auto-hide controls after inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const resetTimer = () => {
      clearTimeout(timeout)
      setShowControls(true)

      timeout = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }

    window.addEventListener("mousemove", resetTimer)
    window.addEventListener("click", resetTimer)

    resetTimer()

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("mousemove", resetTimer)
      window.removeEventListener("click", resetTimer)
    }
  }, [])

  return (
    <div className={`min-h-screen bg-black text-white ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
      {/* Reader Controls */}
      <div
        className={`transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between py-4 px-4">
            <div className="flex items-center gap-4">
              <Link href={`/manga/${mangaId}`} className="flex items-center gap-2 text-gray-400 hover:text-white">
                <ChevronLeft className="h-5 w-5" />
                <span>Back to Manga</span>
              </Link>
              <div className="hidden md:block text-sm">
                <span className="text-gray-400">{manga.title}</span>
                <span className="mx-2">•</span>
                <span>{chapter.title}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleFullscreen}>
                      {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Settings className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-zinc-900 border-zinc-800">
                  <SheetHeader>
                    <SheetTitle>Reading Settings</SheetTitle>
                  </SheetHeader>
                  <div className="py-4 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Reading Direction</h3>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="reading-mode">Reading Mode</Label>
                        <Select
                          value={readingMode}
                          onValueChange={(value) => setReadingMode(value as "vertical" | "horizontal")}
                        >
                          <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                            <SelectValue placeholder="Reading Mode" />
                          </SelectTrigger>
                          <SelectContent className="bg-zinc-800 border-zinc-700">
                            <SelectItem value="vertical">Vertical Scrolling</SelectItem>
                            <SelectItem value="horizontal">Horizontal Pages</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Display Settings</h3>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-hide">Auto-hide Controls</Label>
                        <Switch id="auto-hide" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="page-fit">Fit to Width</Label>
                        <Switch id="page-fit" defaultChecked />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Keyboard Shortcuts</h3>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div className="flex justify-between">
                          <span>Next/Previous Page</span>
                          <span>← →</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Toggle Fullscreen</span>
                          <span>F</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Toggle Controls</span>
                          <span>H</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Toggle Reading Mode</span>
                          <span>M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <List className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-zinc-900 border-zinc-800">
                  <SheetHeader>
                    <SheetTitle>Chapter Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="flex justify-between mb-4">
                      <div>
                        <div className="font-medium">{manga.title}</div>
                        <div className="text-sm text-gray-400">{chapter.title}</div>
                      </div>
                      <Link href={`/manga/${mangaId}`}>
                        <Button variant="outline" size="sm" className="border-zinc-700 hover:bg-zinc-800">
                          <Home className="h-4 w-4 mr-2" />
                          Manga Home
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-2 mt-6">
                      <h3 className="text-sm font-medium mb-2">Pages</h3>
                      <div className="grid grid-cols-5 gap-2">
                        {pages.map((page) => (
                          <button
                            key={page.id}
                            className={`aspect-[2/3] rounded border ${
                              currentPage === page.id ? "border-pink-500 ring-1 ring-pink-500" : "border-zinc-700"
                            }`}
                            onClick={() => {
                              setCurrentPage(page.id)
                            }}
                          >
                            <div className="flex items-center justify-center h-full text-xs">{page.id}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      {chapter.prevChapter && (
                        <Button
                          variant="outline"
                          className="flex-1 border-zinc-700 hover:bg-zinc-800"
                          onClick={() => router.push(`/manga/${mangaId}/chapter/${chapter.prevChapter}`)}
                        >
                          <ChevronLeft className="h-4 w-4 mr-2" />
                          Previous Chapter
                        </Button>
                      )}

                      {chapter.nextChapter && (
                        <Button
                          variant="outline"
                          className="flex-1 border-zinc-700 hover:bg-zinc-800"
                          onClick={() => router.push(`/manga/${mangaId}/chapter/${chapter.nextChapter}`)}
                        >
                          Next Chapter
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setShowControls(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {readingMode === "horizontal" && (
          <div className="fixed bottom-0 z-50 w-full bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm py-4">
            <div className="container flex items-center justify-between px-4">
              <Button
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800"
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage((prev) => prev - 1)
                  } else if (chapter.prevChapter) {
                    router.push(`/manga/${mangaId}/chapter/${chapter.prevChapter}`)
                  }
                }}
                disabled={currentPage === 1 && !chapter.prevChapter}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous Page
              </Button>

              <div className="text-sm">
                Page {currentPage} of {pages.length}
              </div>

              <Button
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800"
                onClick={() => {
                  if (currentPage < pages.length) {
                    setCurrentPage((prev) => prev + 1)
                  } else if (chapter.nextChapter) {
                    router.push(`/manga/${mangaId}/chapter/${chapter.nextChapter}`)
                  }
                }}
                disabled={currentPage === pages.length && !chapter.nextChapter}
              >
                Next Page
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Manga Content */}
      <main
        className="pt-16 pb-16 min-h-screen w-full"
        onClick={(e) => {
          if (readingMode === "horizontal") {
            // Clicking right side of screen goes to next page
            const handleClick = (e: React.MouseEvent) => {
              const { clientX, currentTarget } = e
              const { width } = currentTarget.getBoundingClientRect()
              const clickPosition = clientX / width

              if (clickPosition > 0.5) {
                if (currentPage < pages.length) {
                  setCurrentPage((prev) => prev + 1)
                } else if (chapter.nextChapter) {
                  router.push(`/manga/${mangaId}/chapter/${chapter.nextChapter}`)
                }
              } else {
                if (currentPage > 1) {
                  setCurrentPage((prev) => prev - 1)
                } else if (chapter.prevChapter) {
                  router.push(`/manga/${mangaId}/chapter/${chapter.prevChapter}`)
                }
              }
            }
            handleClick(e)
          }
        }}
      >
        {readingMode === "vertical" ? (
          <div className="max-w-3xl mx-auto space-y-4 px-4">
            {pages.map((page) => (
              <div key={page.id} className="w-full">
                <Image
                  src={page.url || "/placeholder.svg"}
                  alt={`Page ${page.id}`}
                  width={900}
                  height={1400}
                  className="w-full rounded-lg"
                />
              </div>
            ))}

            <div className="flex items-center justify-between py-8">
              {chapter.prevChapter && (
                <Button
                  variant="outline"
                  className="border-zinc-700 hover:bg-zinc-800"
                  onClick={() => router.push(`/manga/${mangaId}/chapter/${chapter.prevChapter}`)}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous Chapter
                </Button>
              )}

              {chapter.nextChapter && (
                <Button
                  className="ml-auto bg-pink-600 hover:bg-pink-700"
                  onClick={() => router.push(`/manga/${mangaId}/chapter/${chapter.nextChapter}`)}
                >
                  Next Chapter
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
            <Image
              src={pages[currentPage - 1].url || "/placeholder.svg"}
              alt={`Page ${currentPage}`}
              width={900}
              height={1400}
              className="h-full w-auto max-w-full object-contain"
            />
          </div>
        )}
      </main>
    </div>
  )
}

