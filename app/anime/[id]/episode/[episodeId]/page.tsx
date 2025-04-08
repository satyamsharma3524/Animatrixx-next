"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  ArrowRight,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Heart,
  List,
  Maximize2,
  Minimize2,
  Share2,
  Volume2,
  VolumeX,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Slider } from "@/components/ui/slider"

export default function AnimePlayerPage({
  params,
}: {
  params: { id: string; episodeId: string }
}) {
  const router = useRouter()
  const animeId = Number.parseInt(params.id)
  const episodeId = Number.parseInt(params.episodeId)

  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(80)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [quality, setQuality] = useState("1080p")
  const [playbackSpeed, setPlaybackSpeed] = useState("1.0")

  // Mock anime data
  const anime = {
    id: animeId,
    title: "My Hero Academia",
  }

  // Mock episode data
  const episode = {
    id: episodeId,
    number: episodeId,
    title: `Episode ${episodeId}: A New Beginning`,
    duration: 1440, // 24 minutes in seconds
    nextEpisode: episodeId < 24 ? episodeId + 1 : null,
    prevEpisode: episodeId > 1 ? episodeId - 1 : null,
  }

  // Format time (seconds to MM:SS)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

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

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // In a real app, you would control the video element
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
    // In a real app, you would control the video element
  }

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "k") {
        togglePlay()
      } else if (e.key === "f") {
        toggleFullscreen()
      } else if (e.key === "m") {
        toggleMute()
      } else if (e.key === "ArrowRight" || e.key === "l") {
        setCurrentTime((prev) => Math.min(prev + 10, duration))
      } else if (e.key === "ArrowLeft" || e.key === "j") {
        setCurrentTime((prev) => Math.max(prev - 10, 0))
      } else if (e.key === "ArrowUp") {
        setVolume((prev) => Math.min(prev + 5, 100))
      } else if (e.key === "ArrowDown") {
        setVolume((prev) => Math.max(prev - 5, 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [duration])

  // Auto-hide controls after inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout

    const resetTimer = () => {
      clearTimeout(timeout)
      setShowControls(true)

      timeout = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false)
        }
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
  }, [isPlaying])

  // Simulate video playback
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return duration
          }
          return prev + 1
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, duration])

  // Set duration when component mounts
  useEffect(() => {
    setDuration(episode.duration)
  }, [episode.duration])

  return (
    <div className={`min-h-screen bg-black text-white ${isFullscreen ? "fixed inset-0 z-50" : ""}`}>
      {/* Video Player */}
      <div className="relative aspect-video w-full bg-zinc-900 cursor-pointer" onClick={togglePlay}>
        <Image
          src={`/placeholder.svg?height=720&width=1280&text=Anime ${animeId} Episode ${episodeId}`}
          alt={`Episode ${episodeId}`}
          fill
          className="object-cover"
        />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Button size="lg" className="rounded-full bg-pink-600/80 hover:bg-pink-600 w-16 h-16">
              <ArrowRight className="h-8 w-8" />
            </Button>
          </div>
        )}

        {/* Controls Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Top Controls */}
          <div className="flex items-center justify-between">
            <Link href={`/anime/${animeId}`} className="flex items-center gap-2 text-white">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Anime</span>
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white"
                onClick={() => setShowControls(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {!isPlaying && (
              <Button
                size="lg"
                className="rounded-full bg-pink-600/80 hover:bg-pink-600 w-16 h-16 pointer-events-auto"
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
              >
                <ArrowRight className="h-8 w-8" />
              </Button>
            )}
          </div>

          {/* Bottom Controls */}
          <div className="space-y-2">
            {/* Progress Bar */}
            <div className="relative group">
              <Slider
                value={[currentTime]}
                max={duration}
                step={1}
                onValueChange={(value) => setCurrentTime(value[0])}
                className="h-1 group-hover:h-2 transition-all"
              />

              {/* Preview Thumbnail on Hover (would be implemented in a real player) */}
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    togglePlay()
                  }}
                >
                  {isPlaying ? (
                    <div className="w-3 h-3 border-l-2 border-r-2 border-white" />
                  ) : (
                    <ArrowRight className="h-5 w-5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-white"
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </Button>

                <div className="hidden sm:flex items-center gap-2 w-24">
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      setVolume(value[0])
                      if (value[0] > 0) setIsMuted(false)
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                <div className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white text-xs">
                      {quality}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                    <DropdownMenuLabel>Quality</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-zinc-800" />
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setQuality("1080p")}
                    >
                      1080p
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setQuality("720p")}
                    >
                      720p
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setQuality("480p")}
                    >
                      480p
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setQuality("360p")}
                    >
                      360p
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white text-xs">
                      {playbackSpeed}x
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
                    <DropdownMenuLabel>Playback Speed</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-zinc-800" />
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setPlaybackSpeed("0.5")}
                    >
                      0.5x
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setPlaybackSpeed("0.75")}
                    >
                      0.75x
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setPlaybackSpeed("1.0")}
                    >
                      1.0x
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setPlaybackSpeed("1.25")}
                    >
                      1.25x
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setPlaybackSpeed("1.5")}
                    >
                      1.5x
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer"
                      onClick={() => setPlaybackSpeed("2.0")}
                    >
                      2.0x
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-white"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFullscreen()
                        }}
                      >
                        {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episode Info */}
      <div className="container px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">{anime.title}</h1>
            <h2 className="text-lg text-gray-400">{episode.title}</h2>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              <Bookmark className="h-4 w-4 mr-2" />
              Add to List
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              <Heart className="h-4 w-4 mr-2" />
              Like
            </Button>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Episode Navigation */}
        <div className="flex gap-4 mb-8">
          {episode.prevEpisode && (
            <Button
              variant="outline"
              className="border-zinc-700 hover:bg-zinc-800"
              onClick={() => router.push(`/anime/${animeId}/episode/${episode.prevEpisode}`)}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous Episode
            </Button>
          )}

          <Link href={`/anime/${animeId}`}>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
              <List className="h-4 w-4 mr-2" />
              All Episodes
            </Button>
          </Link>

          {episode.nextEpisode && (
            <Button
              className="ml-auto bg-pink-600 hover:bg-pink-700"
              onClick={() => router.push(`/anime/${animeId}/episode/${episode.nextEpisode}`)}
            >
              Next Episode
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>

        {/* Episode Description */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Episode Description</h3>
          <p className="text-gray-300">
            Izuku Midoriya faces new challenges as he continues his journey to become the greatest hero. After a
            confrontation with a powerful villain, he must learn to control his quirk better and understand what it
            truly means to be a hero.
          </p>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Comments</h3>
          {/* Comments would go here */}
        </div>
      </div>
    </div>
  )
}
