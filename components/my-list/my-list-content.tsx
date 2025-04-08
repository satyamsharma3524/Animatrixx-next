"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, Search, SortDesc, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// Mock data for saved content
const savedContent = {
  anime: [
    {
      id: 1,
      title: "My Hero Academia",
      cover: "/placeholder.svg?height=450&width=300&text=My Hero Academia",
      type: "anime",
      progress: 70,
      lastWatched: "S6 E24",
      lastWatchedDate: "2 days ago",
    },
    {
      id: 4,
      title: "Jujutsu Kaisen",
      cover: "/placeholder.svg?height=450&width=300&text=Jujutsu Kaisen",
      type: "anime",
      progress: 60,
      lastWatched: "S2 E5",
      lastWatchedDate: "1 week ago",
    },
    {
      id: 11,
      title: "Frieren: Beyond Journey's End",
      cover: "/placeholder.svg?height=450&width=300&text=Frieren",
      type: "anime",
      progress: 0,
      lastWatched: "Not started",
      lastWatchedDate: "Never",
    },
  ],
  manga: [
    {
      id: 1,
      title: "Chainsaw Man",
      cover: "/placeholder.svg?height=450&width=300&text=Chainsaw Man",
      type: "manga",
      progress: 80,
      lastRead: "Chapter 120",
      lastReadDate: "3 days ago",
    },
    {
      id: 2,
      title: "Spy x Family",
      cover: "/placeholder.svg?height=450&width=300&text=Spy x Family",
      type: "manga",
      progress: 45,
      lastRead: "Chapter 65",
      lastReadDate: "2 weeks ago",
    },
    {
      id: 8,
      title: "Vinland Saga",
      cover: "/placeholder.svg?height=450&width=300&text=Vinland Saga",
      type: "manga",
      progress: 0,
      lastRead: "Not started",
      lastReadDate: "Never",
    },
  ],
}

export function MyListContent() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("recent")
  const [filteredContent, setFilteredContent] = useState(savedContent)

  const handleRemoveItem = (type: "anime" | "manga", id: number) => {
    // In a real app, you would call an API to remove the item
    setFilteredContent((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item.id !== id),
    }))

    toast({
      title: "Item removed",
      description: "The item has been removed from your list",
    })
  }

  return (
    <>
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search your list..."
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
              <SelectItem value="recent">Recently Added</SelectItem>
              <SelectItem value="az">A-Z</SelectItem>
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
            All ({filteredContent.anime.length + filteredContent.manga.length})
          </TabsTrigger>
          <TabsTrigger
            value="anime"
            className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
          >
            Anime ({filteredContent.anime.length})
          </TabsTrigger>
          <TabsTrigger
            value="manga"
            className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
          >
            Manga ({filteredContent.manga.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...filteredContent.anime, ...filteredContent.manga].map((item) => (
              <div key={`${item.type}-${item.id}`} className="group relative">
                <Link href={`/${item.type}/${item.id}`}>
                  <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
                    <Image
                      src={item.cover || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                    {item.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                        <div className="h-full bg-pink-500" style={{ width: `${item.progress}%` }} />
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-pink-600 text-white">{item.type === "anime" ? "Anime" : "Manga"}</Badge>
                    </div>
                  </div>
                  <h3 className="font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">
                    {item.type === "anime"
                      ? `${item.lastWatched} • ${item.lastWatchedDate}`
                      : `${item.lastRead} • ${item.lastReadDate}`}
                  </p>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 left-2 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveItem(item.type, item.id)}
                  aria-label={`Remove ${item.title}`}
                >
                  <Trash2 className="h-4 w-4 text-red-400" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="anime" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredContent.anime.map((item) => (
              <div key={item.id} className="group relative">
                <Link href={`/anime/${item.id}`}>
                  <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
                    <Image
                      src={item.cover || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                    {item.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                        <div className="h-full bg-pink-500" style={{ width: `${item.progress}%` }} />
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">
                    {item.lastWatched} • {item.lastWatchedDate}
                  </p>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 left-2 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveItem("anime", item.id)}
                  aria-label={`Remove ${item.title}`}
                >
                  <Trash2 className="h-4 w-4 text-red-400" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="manga" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredContent.manga.map((item) => (
              <div key={item.id} className="group relative">
                <Link href={`/manga/${item.id}`}>
                  <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
                    <Image
                      src={item.cover || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    />
                    {item.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                        <div className="h-full bg-pink-500" style={{ width: `${item.progress}%` }} />
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium line-clamp-1">{item.title}</h3>
                  <p className="text-xs text-gray-400">
                    {item.lastRead} • {item.lastReadDate}
                  </p>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 left-2 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveItem("manga", item.id)}
                  aria-label={`Remove ${item.title}`}
                >
                  <Trash2 className="h-4 w-4 text-red-400" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
