import Link from "next/link"
import Image from "next/image"
import { Filter, Search, SortDesc } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AnimeListPage() {
  // In a real app, you would fetch anime data from an API
  const animeList = [
    {
      id: 1,
      title: "My Hero Academia",
      cover: "/placeholder.svg?height=450&width=300&text=My Hero Academia",
      studio: "Bones",
      genres: ["Action", "Superhero", "School"],
      status: "Ongoing",
      episodes: 113,
      rating: 4.8,
      year: 2016,
    },
    {
      id: 2,
      title: "Demon Slayer",
      cover: "/placeholder.svg?height=450&width=300&text=Demon Slayer",
      studio: "ufotable",
      genres: ["Action", "Supernatural", "Historical"],
      status: "Ongoing",
      episodes: 44,
      rating: 4.9,
      year: 2019,
    },
    {
      id: 3,
      title: "Attack on Titan",
      cover: "/placeholder.svg?height=450&width=300&text=Attack on Titan",
      studio: "MAPPA",
      genres: ["Action", "Dark Fantasy", "Post-Apocalyptic"],
      status: "Completed",
      episodes: 88,
      rating: 4.9,
      year: 2013,
    },
    {
      id: 4,
      title: "Jujutsu Kaisen",
      cover: "/placeholder.svg?height=450&width=300&text=Jujutsu Kaisen",
      studio: "MAPPA",
      genres: ["Action", "Supernatural", "School"],
      status: "Ongoing",
      episodes: 48,
      rating: 4.8,
      year: 2020,
    },
    {
      id: 5,
      title: "One Piece",
      cover: "/placeholder.svg?height=450&width=300&text=One Piece",
      studio: "Toei Animation",
      genres: ["Adventure", "Fantasy", "Comedy"],
      status: "Ongoing",
      episodes: 1050,
      rating: 4.9,
      year: 1999,
    },
    {
      id: 6,
      title: "Fullmetal Alchemist: Brotherhood",
      cover: "/placeholder.svg?height=450&width=300&text=Fullmetal Alchemist",
      studio: "Bones",
      genres: ["Action", "Adventure", "Fantasy"],
      status: "Completed",
      episodes: 64,
      rating: 4.9,
      year: 2009,
    },
    {
      id: 7,
      title: "Hunter x Hunter",
      cover: "/placeholder.svg?height=450&width=300&text=Hunter x Hunter",
      studio: "Madhouse",
      genres: ["Action", "Adventure", "Fantasy"],
      status: "On Hiatus",
      episodes: 148,
      rating: 4.9,
      year: 2011,
    },
    {
      id: 8,
      title: "Steins;Gate",
      cover: "/placeholder.svg?height=450&width=300&text=Steins;Gate",
      studio: "White Fox",
      genres: ["Sci-Fi", "Thriller", "Drama"],
      status: "Completed",
      episodes: 24,
      rating: 4.9,
      year: 2011,
    },
    {
      id: 9,
      title: "Violet Evergarden",
      cover: "/placeholder.svg?height=450&width=300&text=Violet Evergarden",
      studio: "Kyoto Animation",
      genres: ["Drama", "Fantasy", "Slice of Life"],
      status: "Completed",
      episodes: 13,
      rating: 4.8,
      year: 2018,
    },
    {
      id: 10,
      title: "Cowboy Bebop",
      cover: "/placeholder.svg?height=450&width=300&text=Cowboy Bebop",
      studio: "Sunrise",
      genres: ["Sci-Fi", "Neo-noir", "Space Western"],
      status: "Completed",
      episodes: 26,
      rating: 4.9,
      year: 1998,
    },
    {
      id: 11,
      title: "Frieren: Beyond Journey's End",
      cover: "/placeholder.svg?height=450&width=300&text=Frieren",
      studio: "Madhouse",
      genres: ["Adventure", "Fantasy", "Slice of Life"],
      status: "Ongoing",
      episodes: 28,
      rating: 4.9,
      year: 2023,
    },
    {
      id: 12,
      title: "Oshi no Ko",
      cover: "/placeholder.svg?height=450&width=300&text=Oshi no Ko",
      studio: "Doga Kobo",
      genres: ["Drama", "Supernatural", "Psychological"],
      status: "Ongoing",
      episodes: 22,
      rating: 4.8,
      year: 2023,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="pt-16">
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Anime Library</h1>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search anime by title, studio, or genre..."
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
                  <SelectItem value="episodes">Most Episodes</SelectItem>
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
                All Anime
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
                value="scifi"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Sci-Fi
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
                {animeList.map((anime) => (
                  <Link key={anime.id} href={`/anime/${anime.id}`} className="group">
                    <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
                      <Image
                        src={anime.cover || "/placeholder.svg"}
                        alt={anime.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-1">
                            <Badge variant="outline" className="bg-pink-600/80 text-white border-0 text-xs">
                              {anime.status}
                            </Badge>
                            <div className="text-xs font-medium">{anime.episodes} Ep</div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {anime.genres.slice(0, 2).map((genre, index) => (
                              <Badge key={index} variant="secondary" className="bg-black/50 text-xs">
                                {genre}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium line-clamp-1">{anime.title}</h3>
                    <p className="text-xs text-gray-400">
                      {anime.studio} • {anime.year}
                    </p>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Other tabs would have filtered content */}
            <TabsContent value="action" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {animeList
                  .filter((anime) => anime.genres.includes("Action"))
                  .map((anime) => (
                    <Link key={anime.id} href={`/anime/${anime.id}`} className="group">
                      <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
                        <Image
                          src={anime.cover || "/placeholder.svg"}
                          alt={anime.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <div className="w-full">
                            <div className="flex justify-between items-center mb-1">
                              <Badge variant="outline" className="bg-pink-600/80 text-white border-0 text-xs">
                                {anime.status}
                              </Badge>
                              <div className="text-xs font-medium">{anime.episodes} Ep</div>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {anime.genres.slice(0, 2).map((genre, index) => (
                                <Badge key={index} variant="secondary" className="bg-black/50 text-xs">
                                  {genre}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="font-medium line-clamp-1">{anime.title}</h3>
                      <p className="text-xs text-gray-400">
                        {anime.studio} • {anime.year}
                      </p>
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

