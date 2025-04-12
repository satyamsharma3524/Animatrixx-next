import type { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { MangaList } from "@/components/manga/manga-list"
import { getMangaList } from "@/lib/data"
import { Filter, Search, SortDesc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Manga Library | Animatrixx",
  description: "Browse and read the best manga series on Animatrixx",
}

export default function MangaListPage() {
  // In a real app, this would be fetched from a database or API
  const mangaList = getMangaList()

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1 pt-16">
        <div className="container px-4 py-8 mx-auto">
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
              <MangaList mangaList={mangaList} />
            </TabsContent>

            <TabsContent value="action" className="mt-6">
              <MangaList mangaList={mangaList.filter((manga) => manga.genres.includes("Action"))} />
            </TabsContent>

            {/* Similar structure for other genre tabs */}
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
