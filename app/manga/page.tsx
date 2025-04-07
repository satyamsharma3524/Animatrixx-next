import Link from "next/link"
import Image from "next/image"
import { Filter, Search, SortDesc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MangaListPage() {
  // In a real app, you would fetch manga data from an API
  const mangaList = [
    {
      id: 1,
      title: "Chainsaw Man",
      cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx162852-9HZY0FI7YmvG.png?height=450&width=300&text=Chainsaw Man",
      author: "Tatsuki Fujimoto",
      genres: ["Action", "Horror", "Supernatural"],
      status: "Ongoing",
      chapters: 120,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Spy x Family",
      cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx187427-7A225QIPaIU3.png?height=450&width=300&text=Spy x Family",
      author: "Tatsuya Endo",
      genres: ["Action", "Comedy", "Slice of Life"],
      status: "Ongoing",
      chapters: 65,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Tokyo Revengers",
      cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30429-ZlNyuIqu5750.png?height=450&width=300&text=Tokyo Revengers",
      author: "Ken Wakui",
      genres: ["Action", "Drama", "Supernatural"],
      status: "Completed",
      chapters: 231,
      rating: 4.5,
    },
    {
      id: 4,
      title: "Blue Lock",
      cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b186909-Z8trUGCGJJxI.jpg?height=450&width=300&text=Blue Lock",
      author: "Muneyuki Kaneshiro",
      genres: ["Sports", "Drama"],
      status: "Ongoing",
      chapters: 178,
      rating: 4.7,
    },
    {
      id: 5,
      title: "One Punch Man",
      cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx127554-qXczrBrFMXBM.jpg?height=450&width=300&text=One Punch Man",
      author: "ONE",
      genres: ["Action", "Comedy", "Superhero"],
      status: "Ongoing",
      chapters: 164,
      rating: 4.9,
    },
    {
      id: 6,
      title: "Berserk",
      cover: "/placeholder.svg?height=450&width=300&text=Berserk",
      author: "Kentaro Miura",
      genres: ["Action", "Adventure", "Dark Fantasy"],
      status: "Ongoing",
      chapters: 364,
      rating: 4.9,
    },
    {
      id: 7,
      title: "Vagabond",
      cover: "/placeholder.svg?height=450&width=300&text=Vagabond",
      author: "Takehiko Inoue",
      genres: ["Action", "Adventure", "Historical"],
      status: "On Hiatus",
      chapters: 327,
      rating: 4.9,
    },
    {
      id: 8,
      title: "Vinland Saga",
      cover: "/placeholder.svg?height=450&width=300&text=Vinland Saga",
      author: "Makoto Yukimura",
      genres: ["Action", "Adventure", "Historical"],
      status: "Ongoing",
      chapters: 198,
      rating: 4.8,
    },
    {
      id: 9,
      title: "Monster",
      cover: "/placeholder.svg?height=450&width=300&text=Monster",
      author: "Naoki Urasawa",
      genres: ["Mystery", "Psychological", "Thriller"],
      status: "Completed",
      chapters: 162,
      rating: 4.9,
    },
    {
      id: 10,
      title: "One Piece",
      cover: "/placeholder.svg?height=450&width=300&text=One Piece",
      author: "Eiichiro Oda",
      genres: ["Action", "Adventure", "Fantasy"],
      status: "Ongoing",
      chapters: 1080,
      rating: 4.9,
    },
    {
      id: 11,
      title: "Jujutsu Kaisen",
      cover: "/placeholder.svg?height=450&width=300&text=Jujutsu Kaisen",
      author: "Gege Akutami",
      genres: ["Action", "Supernatural", "Horror"],
      status: "Ongoing",
      chapters: 210,
      rating: 4.8,
    },
    {
      id: 12,
      title: "Demon Slayer",
      cover: "/placeholder.svg?height=450&width=300&text=Demon Slayer",
      author: "Koyoharu Gotouge",
      genres: ["Action", "Supernatural", "Historical"],
      status: "Completed",
      chapters: 205,
      rating: 4.8,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="pt-16">
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Manga Library</h1>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search manga by title, author, or genre..."
                className="pl-10 bg-zinc-900 border-zinc-800 focus-visible:ring-pink-500"
              />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>

              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px] bg-zinc-900 border-zinc-800">
                  <SortDesc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="chapters">Most Chapters</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Categories */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-zinc-900 border-b border-zinc-800 p-0 h-auto w-full justify-start rounded-none overflow-x-auto">
              <TabsTrigger
                value="all"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                All Manga
              </TabsTrigger>
              <TabsTrigger
                value="action"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Action
              </TabsTrigger>
              <TabsTrigger
                value="romance"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Romance
              </TabsTrigger>
              <TabsTrigger
                value="fantasy"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Fantasy
              </TabsTrigger>
              <TabsTrigger
                value="horror"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Horror
              </TabsTrigger>
              <TabsTrigger
                value="comedy"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Comedy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {mangaList.map((manga) => (
                  <Link key={manga.id} href={`/manga/${manga.id}`} className="group">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
                      <Image
                        src={manga.cover || "/placeholder.svg"}
                        alt={manga.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-1">
                            <Badge variant="outline" className="bg-pink-600/80 text-white border-0 text-xs">
                              {manga.status}
                            </Badge>
                            <div className="text-xs font-medium">{manga.chapters} Ch</div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {manga.genres.slice(0, 2).map((genre, index) => (
                              <Badge key={index} variant="secondary" className="bg-black/50 text-xs">
                                {genre}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium line-clamp-1">{manga.title}</h3>
                    <p className="text-xs text-gray-400">{manga.author}</p>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have filtered content */}
            <TabsContent value="action" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {mangaList
                  .filter((manga) => manga.genres.includes("Action"))
                  .map((manga) => (
                    <Link key={manga.id} href={`/manga/${manga.id}`} className="group">
                      <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
                        <Image
                          src={manga.cover || "/placeholder.svg"}
                          alt={manga.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <div className="w-full">
                            <div className="flex justify-between items-center mb-1">
                              <Badge variant="outline" className="bg-pink-600/80 text-white border-0 text-xs">
                                {manga.status}
                              </Badge>
                              <div className="text-xs font-medium">{manga.chapters} Ch</div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {manga.genres.slice(0, 2).map((genre, index) => (
                                <Badge key={index} variant="secondary" className="bg-black/50 text-xs">
                                  {genre}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-medium line-clamp-1">{manga.title}</h3>
                      <p className="text-xs text-gray-400">{manga.author}</p>
                    </Link>
                  ))}
              </div>
            </TabsContent>

            {/* Similar structure for other genre tabs */}
          </Tabs>
        </div>
      </main>
    </div>
  )
}

