"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, ChevronDown, ChevronUp, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Episode {
  id: number
  number: number
  title: string
  thumbnail: string
  duration: string
  releaseDate: string
  description: string
  isWatched: boolean
}

interface EpisodeListProps {
  episodes: Episode[]
  animeId: number
}

export function EpisodeList({ episodes, animeId }: EpisodeListProps) {
  const [filter, setFilter] = useState("")
  const [displayCount, setDisplayCount] = useState(10)
  const [season, setSeason] = useState("1")

  // Filter episodes
  const filteredEpisodes = episodes
    .filter(
      (episode) =>
        episode.title.toLowerCase().includes(filter.toLowerCase()) || episode.number.toString().includes(filter),
    )
    .slice(0, displayCount)

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search episodes..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-zinc-900 border-zinc-800 focus-visible:ring-pink-500"
          />
        </div>

        <Select value={season} onValueChange={setSeason}>
          <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-800">
            <SelectValue placeholder="Season" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-800">
            <SelectItem value="1">Season 1</SelectItem>
            <SelectItem value="2">Season 2</SelectItem>
            <SelectItem value="3">Season 3</SelectItem>
            <SelectItem value="4">Season 4</SelectItem>
            <SelectItem value="5">Season 5</SelectItem>
            <SelectItem value="6">Season 6</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredEpisodes.map((episode) => (
          <Link
            key={episode.id}
            href={`/anime/${animeId}/episode/${episode.number}`}
            className="flex flex-col sm:flex-row gap-4 p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <div className="relative aspect-video sm:w-48 rounded-md overflow-hidden">
              <Image src={episode.thumbnail || "/placeholder.svg"} alt={episode.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                <Button size="icon" className="rounded-full bg-pink-600/80 hover:bg-pink-600">
                  <Play className="h-5 w-5" />
                </Button>
              </div>
              {episode.isWatched && (
                <div className="absolute top-2 right-2 bg-pink-600 rounded-full p-1">
                  <Check className="h-3 w-3" />
                </div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">{episode.title}</h3>
                  <div className="text-xs text-gray-400 mt-1">
                    {episode.duration} • {episode.releaseDate}
                  </div>
                </div>
                <div className="text-sm font-medium">Ep {episode.number}</div>
              </div>
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">{episode.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {displayCount < episodes.length && (
        <Button
          variant="outline"
          className="w-full border-zinc-700 hover:bg-zinc-800"
          onClick={() => setDisplayCount((prev) => prev + 10)}
        >
          Load More Episodes
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      )}

      {displayCount > 10 && (
        <Button
          variant="outline"
          className="w-full border-zinc-700 hover:bg-zinc-800"
          onClick={() => setDisplayCount(10)}
        >
          Show Less
          <ChevronUp className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

