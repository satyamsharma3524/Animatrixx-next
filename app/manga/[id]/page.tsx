import Link from "next/link"
import Image from "next/image"
import { Bookmark, ChevronLeft, Heart, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { ChapterList } from "@/components/chapter-list"

export default function MangaDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch manga data based on the ID
  const mangaId = Number.parseInt(params.id)

  // Mock manga data
  const manga = {
    id: mangaId,
    title: "Chainsaw Man",
    cover: `/placeholder.svg?height=450&width=300&text=Manga ${mangaId}`,
    author: "Tatsuki Fujimoto",
    artist: "Tatsuki Fujimoto",
    description:
      "Denji is a young man trapped in poverty, working as a Devil Hunter alongside his dog-like Devil, Pochita, to pay off the debt left by his father. Denji is betrayed and killed, but Pochita makes a contract with him, and Denji is reborn as the chainsaw-human hybrid known as 'Chainsaw Man.'",
    genres: ["Action", "Horror", "Supernatural", "Comedy", "Drama"],
    status: "Ongoing",
    releaseYear: 2018,
    rating: 4.8,
    chapters: 120,
    lastUpdated: "April 2, 2025",
    publisher: "Shueisha",
    alternativeTitles: ["チェンソーマン", "Человек-бензопила", "Hombre Motosierra"],
  }

  // Mock chapters data
  const chapters = Array.from({ length: 120 }, (_, i) => ({
    id: 120 - i,
    number: 120 - i,
    title: `Chapter ${120 - i}: ${["The Awakening", "Darkness Falls", "New Beginnings", "The Hunt", "Revelations"][i % 5]}`,
    releaseDate: new Date(2025, 3, 2 - i).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    pages: Math.floor(Math.random() * 20) + 15,
    isRead: i < 5,
  }))

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="pt-16">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/manga" className="flex items-center gap-2 text-gray-400 hover:text-white">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Manga</span>
            </Link>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="sticky top-24">
                <div className="aspect-[2/3] relative rounded-lg overflow-hidden mb-4">
                  <Image src={manga.cover || "/placeholder.svg"} alt={manga.title} fill className="object-cover" />
                </div>

                <div className="flex gap-3 mb-4">
                  <Button className="flex-1 bg-pink-600 hover:bg-pink-700">Read First Chapter</Button>
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{manga.rating}/5</span>
                  </div>
                  <div className="text-gray-400">{manga.chapters} Chapters</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-400">Status</div>
                    <div>{manga.status}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Release Year</div>
                    <div>{manga.releaseYear}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Author</div>
                    <div>{manga.author}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Artist</div>
                    <div>{manga.artist}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Publisher</div>
                    <div>{manga.publisher}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Last Updated</div>
                    <div>{manga.lastUpdated}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Alternative Titles</div>
                    <div className="text-xs">{manga.alternativeTitles.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{manga.title}</h1>

              <div className="flex flex-wrap gap-2 mb-4">
                {manga.genres.map((genre, index) => (
                  <Badge key={index} className="bg-pink-600/20 text-pink-400 hover:bg-pink-600/30">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Synopsis</h2>
                <p className="text-gray-300 leading-relaxed">{manga.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  Chapters
                  <Badge className="ml-3 bg-pink-600">{manga.chapters} Total</Badge>
                </h2>

                <ChapterList chapters={chapters} mangaId={mangaId} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

