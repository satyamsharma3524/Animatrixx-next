"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, ChevronDown, ChevronUp, Clock, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Chapter {
  id: number
  number: number
  title: string
  releaseDate: string
  pages: number
  isRead: boolean
}

interface ChapterListProps {
  chapters: Chapter[]
  mangaId: number
}

export function ChapterList({ chapters, mangaId }: ChapterListProps) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
  const [filter, setFilter] = useState("")
  const [displayCount, setDisplayCount] = useState(20)

  // Filter and sort chapters
  const filteredChapters = chapters
    .filter(
      (chapter) =>
        chapter.title.toLowerCase().includes(filter.toLowerCase()) || chapter.number.toString().includes(filter),
    )
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return b.number - a.number
      } else {
        return a.number - b.number
      }
    })
    .slice(0, displayCount)

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search chapters..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-zinc-900 border-zinc-800 focus-visible:ring-pink-500"
          />
        </div>

        <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as "newest" | "oldest")}>
          <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-800">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-800">
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        {filteredChapters.map((chapter) => (
          <Link
            key={chapter.id}
            href={`/manga/${mangaId}/chapter/${chapter.number}`}
            className="flex items-center justify-between p-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              {chapter.isRead ? (
                <Check className="h-5 w-5 text-pink-500" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-zinc-700" />
              )}
              <div>
                <div className="font-medium">{chapter.title}</div>
                <div className="text-xs text-gray-400">
                  {chapter.pages} pages • {chapter.releaseDate}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {chapter.isRead ? (
                <Eye className="h-4 w-4 text-gray-400" />
              ) : (
                <EyeOff className="h-4 w-4 text-gray-400" />
              )}
              <Clock className="h-4 w-4 text-gray-400" />
            </div>
          </Link>
        ))}
      </div>

      {displayCount < chapters.length && (
        <Button
          variant="outline"
          className="w-full border-zinc-700 hover:bg-zinc-800"
          onClick={() => setDisplayCount((prev) => prev + 20)}
        >
          Load More Chapters
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      )}

      {displayCount > 20 && (
        <Button
          variant="outline"
          className="w-full border-zinc-700 hover:bg-zinc-800"
          onClick={() => setDisplayCount(20)}
        >
          Show Less
          <ChevronUp className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  )
}

