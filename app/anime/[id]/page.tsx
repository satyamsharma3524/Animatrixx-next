import Link from "next/link"
import Image from "next/image"
import { Bookmark, ChevronLeft, Heart, Play, Share2, Star } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MainNav } from "@/components/main-nav"
import { EpisodeList } from "@/components/episode-list"
import { Footer } from "@/components/footer"
import { getEpisodes } from "@/lib/data"

interface AnimeDetailPageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: AnimeDetailPageProps): Promise<Metadata> {
  // In a real app, you would fetch anime data based on the ID
  const animeId = Number.parseInt(params.id)

  if (isNaN(animeId)) {
    return {
      title: "Anime Not Found | Animatrixx",
      description: "The requested anime could not be found",
    }
  }

  return {
    title: `My Hero Academia | Animatrixx`,
    description: "Watch My Hero Academia on Animatrixx - the best anime streaming platform",
    openGraph: {
      images: [`/placeholder.svg?height=630&width=1200&text=Anime ${params.id}`],
    },
  }
}

export default function AnimeDetailPage({ params }: AnimeDetailPageProps) {
  // In a real app, you would fetch anime data based on the ID
  const animeId = Number.parseInt(params.id)

  if (isNaN(animeId)) {
    notFound()
  }

  // Mock anime data
  const anime = {
    id: animeId,
    title: "My Hero Academia",
    cover: `/placeholder.svg?height=450&width=300&text=Anime ${animeId}`,
    banner: `/placeholder.svg?height=720&width=1280&text=Anime ${animeId} Banner`,
    studio: "Bones",
    description:
      "In a world where people with superpowers (known as 'Quirks') are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood bully from a villain, Izuku is given a Quirk by the world's greatest Hero, All Might.",
    genres: ["Action", "Adventure", "Superhero", "School", "Shounen"],
    status: "Ongoing",
    releaseYear: 2016,
    rating: 4.8,
    episodes: 113,
    seasons: 6,
    lastUpdated: "April 5, 2025",
    nextEpisode: "April 12, 2025",
    type: "TV Series",
    duration: "24 min per ep",
    alternativeTitles: ["僕のヒーローアカデミア", "Boku no Hero Academia", "BNHA"],
  }

  // Get episodes data
  const episodes = getEpisodes(animeId)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1 pt-16">
        {/* Banner */}
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <Image
            src={anime.banner || "/placeholder.svg"}
            alt={anime.title}
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container px-4 py-6 -mt-32 relative z-10 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/anime" className="flex items-center gap-2 text-gray-400 hover:text-white">
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Anime</span>
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
                    src={anime.cover || "/placeholder.svg"}
                    alt={anime.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                <div className="flex gap-3 mb-4">
                  <Button className="flex-1 bg-pink-600 hover:bg-pink-700">
                    <Play className="h-4 w-4 mr-2" /> Watch Now
                  </Button>
                </div>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{anime.rating}/5</span>
                  </div>
                  <div className="text-gray-400">{anime.episodes} Episodes</div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-400">Status</div>
                    <div className="text-white">{anime.status}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Type</div>
                    <div className="text-white">{anime.type}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Release Year</div>
                    <div className="text-white">{anime.releaseYear}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Studio</div>
                    <div className="text-white">{anime.studio}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Duration</div>
                    <div className="text-white">{anime.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Seasons</div>
                    <div className="text-white">{anime.seasons}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Next Episode</div>
                    <div className="text-white">{anime.nextEpisode}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Alternative Titles</div>
                    <div className="text-xs text-white">{anime.alternativeTitles.join(", ")}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>

              <div className="flex flex-wrap gap-2 mb-4">
                {anime.genres.map((genre, index) => (
                  <Badge key={index} className="bg-pink-600/20 text-pink-400 hover:bg-pink-600/30">
                    {genre}
                  </Badge>
                ))}
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2">Synopsis</h2>
                <p className="text-gray-300 leading-relaxed">{anime.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  Episodes
                  <Badge className="ml-3 bg-pink-600">{anime.episodes} Total</Badge>
                </h2>

                <EpisodeList episodes={episodes} animeId={animeId} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
