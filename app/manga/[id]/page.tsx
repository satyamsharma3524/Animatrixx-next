import Link from "next/link"
import Image from "next/image"
import { Bookmark, ChevronLeft, Heart, Share2, Star } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { ChapterList } from "@/components/chapter-list"
import { Footer } from "@/components/footer"
import { getChapters, getMangaDetails } from "@/lib/data"  // You need to implement the 'getMangaDetails' function.

interface MangaDetailPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: MangaDetailPageProps): Promise<Metadata> {
  const mangaId = Number.parseInt(params.id)

  if (isNaN(mangaId)) {
    return {
      title: "Manga Not Found",
      description: "Invalid manga ID",
    }
  }

  return {
    title: `Read Manga ${mangaId} - Animatrixx`,
    description: "Read amazing manga on Animatrixx",
    openGraph: {
      images: [`/placeholder.svg?height=630&width=1200&text=Manga ${mangaId}`],
    },
  }
}

export default async function MangaDetailPage({ params }: MangaDetailPageProps) {
  const mangaId = Number.parseInt(params.id)

  if (isNaN(mangaId)) {
    notFound()
  }

  // Fetch Manga data from the API
  const manga = await getMangaDetails(mangaId)

  if (!manga) {
    notFound()
  }

  // Get chapters data
  const chapters = await getChapters(mangaId)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1 pt-16">
        <div className="container px-4 py-6 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/manga" className="flex items-center gap-2 text-gray-400 hover:text-white">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Manga</span>
            </Link>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Bookmark">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Like">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Share">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-10">
            <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="sticky top-24">
                <div className="aspect-[2/3] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={manga.cover || "/placeholder.svg"}
                    alt={manga.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
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
                    <div className="text-white">{manga.status}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Release Year</div>
                    <div className="text-white">{manga.releaseYear}</div>
                  </div>
                  
                  <div>
                    <div className="text-gray-400">Publisher</div>
                    <div className="text-white">{manga.publisher}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Last Updated</div>
                    <div className="text-white">{manga.lastUpdated}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Alternative Titles</div>
                    <div className="text-xs text-white">{manga.alternativeTitles.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{manga.title}</h1>

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

      <Footer />
    </div>
  )
}
