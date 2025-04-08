"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, Filter, Play, Search, SortDesc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getHistoryItems } from "@/lib/data"

export function HistoryContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("recent")

  // Get history items
  const historyItems = getHistoryItems()

  return (
    <>
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search history..."
            className="pl-10 bg-zinc-900 border-zinc-800 focus-visible:ring-pink-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>

          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-800">
              <SortDesc className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-800">
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="progress">Progress</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="bg-zinc-900 border-b border-zinc-800 p-0 h-auto w-full justify-start rounded-none">
          <TabsTrigger
            value="all"
            className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
          >
            All History
          </TabsTrigger>
          <TabsTrigger
            value="anime"
            className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
          >
            Anime
          </TabsTrigger>
          <TabsTrigger
            value="manga"
            className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
          >
            Manga
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            {historyItems.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex gap-4 p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <div className="relative aspect-[2/3] w-16 sm:w-24 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={item.cover || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, 96px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="icon" className="rounded-full bg-pink-600/80 hover:bg-pink-600 w-8 h-8">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute top-0 right-0 p-1">
                    <Badge className="bg-pink-600 text-white text-xs">
                      {item.type === "anime" ? "Anime" : "Manga"}
                    </Badge>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <Link href={`/${item.type}/${item.id}`} className="font-medium hover:text-pink-400">
                        {item.title}
                      </Link>
                      <div className="text-sm text-gray-400">{item.type === "anime" ? item.episode : item.chapter}</div>
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.timestamp}
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>{item.progress === 100 ? "Completed" : item.timeLeft}</span>
                      <span>{item.type === "anime" ? item.duration : `${item.pages} pages`}</span>
                    </div>
                    <div className="h-1 bg-gray-700 rounded-full">
                      <div className="h-full bg-pink-500 rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/${item.type}/${item.id}/${item.type === "anime" ? "episode" : "chapter"}/${item.type === "anime" ? item.episode?.split(" ")[1].substring(1) : item.chapter?.split(" ")[1]}`}
                    >
                      <Button size="sm" className="bg-pink-600 hover:bg-pink-700 h-8 text-xs">
                        {item.progress === 100 ? (item.type === "anime" ? "Watch Again" : "Read Again") : "Continue"}
                      </Button>
                    </Link>
                    <Link href={`/${item.type}/${item.id}`}>
                      <Button size="sm" variant="outline" className="border-zinc-700 hover:bg-zinc-800 h-8 text-xs">
                        Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="anime" className="mt-6">
          <div className="space-y-4">
            {historyItems
              .filter((item) => item.type === "anime")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
                >
                  <div className="relative aspect-[2/3] w-16 sm:w-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.cover || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 64px, 96px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="icon" className="rounded-full bg-pink-600/80 hover:bg-pink-600 w-8 h-8">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <Link href={`/anime/${item.id}`} className="font-medium hover:text-pink-400">
                          {item.title}
                        </Link>
                        <div className="text-sm text-gray-400">{item.episode}</div>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.timestamp}
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>{item.progress === 100 ? "Completed" : item.timeLeft}</span>
                        <span>{item.duration}</span>
                      </div>
                      <div className="h-1 bg-gray-700 rounded-full">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Link href={`/anime/${item.id}/episode/${item.episode?.split(" ")[1].substring(1)}`}>
                        <Button size="sm" className="bg-pink-600 hover:bg-pink-700 h-8 text-xs">
                          {item.progress === 100 ? "Watch Again" : "Continue"}
                        </Button>
                      </Link>
                      <Link href={`/anime/${item.id}`}>
                        <Button size="sm" variant="outline" className="border-zinc-700 hover:bg-zinc-800 h-8 text-xs">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="manga" className="mt-6">
          <div className="space-y-4">
            {historyItems
              .filter((item) => item.type === "manga")
              .map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors"
                >
                  <div className="relative aspect-[2/3] w-16 sm:w-24 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.cover || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 64px, 96px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="icon" className="rounded-full bg-pink-600/80 hover:bg-pink-600 w-8 h-8">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <Link href={`/manga/${item.id}`} className="font-medium hover:text-pink-400">
                          {item.title}
                        </Link>
                        <div className="text-sm text-gray-400">{item.chapter}</div>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.timestamp}
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>{item.progress === 100 ? "Completed" : item.timeLeft}</span>
                        <span>{item.pages} pages</span>
                      </div>
                      <div className="h-1 bg-gray-700 rounded-full">
                        <div className="h-full bg-pink-500 rounded-full" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>

                    <div className="mt-3 flex gap-2">
                      <Link href={`/manga/${item.id}/chapter/${item.chapter?.split(" ")[1]}`}>
                        <Button size="sm" className="bg-pink-600 hover:bg-pink-700 h-8 text-xs">
                          {item.progress === 100 ? "Read Again" : "Continue"}
                        </Button>
                      </Link>
                      <Link href={`/manga/${item.id}`}>
                        <Button size="sm" variant="outline" className="border-zinc-700 hover:bg-zinc-800 h-8 text-xs">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
