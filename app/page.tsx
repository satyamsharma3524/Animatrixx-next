import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContentCarousel } from "@/components/content-carousel"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

// Mock data for featured content
const featuredContent = {
  title: "My Neighbor Totoro",
  description:
    "When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.",
  image: "/placeholder.svg?height=1080&width=1920",
}

// Mock data for content carousels
const continueWatchingItems = [
  { id: 1, title: "One Piece", type: "anime" as const, episode: "Episode 1042", progress: 70 },
  { id: 2, title: "Demon Slayer", type: "anime" as const, episode: "Episode 8", progress: 45 },
  { id: 3, title: "My Hero Academia", type: "anime" as const, episode: "Episode 24", progress: 90 },
  { id: 4, title: "Attack on Titan", type: "anime" as const, episode: "Episode 12", progress: 30 },
  { id: 5, title: "Jujutsu Kaisen", type: "anime" as const, episode: "Episode 5", progress: 60 },
]

const popularMangaItems = [
  { id: 6, title: "Chainsaw Man", type: "manga" as const, chapter: "Chapter 120" },
  { id: 7, title: "Spy x Family", type: "manga" as const, chapter: "Chapter 65" },
  { id: 8, title: "Tokyo Revengers", type: "manga" as const, chapter: "Chapter 231" },
  { id: 9, title: "Blue Lock", type: "manga" as const, chapter: "Chapter 178" },
  { id: 10, title: "One Punch Man", type: "manga" as const, chapter: "Chapter 164" },
]

const trendingItems: { id: number; title: string; type: "anime" | "manga" }[] = [
  { id: 11, title: "Frieren: Beyond Journey's End", type: "anime" },
  { id: 12, title: "Oshi no Ko", type: "anime" },
  { id: 13, title: "Bocchi the Rock!", type: "anime" },
  { id: 14, title: "Vinland Saga", type: "anime" },
  { id: 15, title: "Mushoku Tensei", type: "anime" },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full">
          <Image
            src={featuredContent.image || "/placeholder.svg"}
            alt={featuredContent.title}
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16 space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Cat logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-pink-400 font-bold">Animatrixx ORIGINALS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">{featuredContent.title}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{featuredContent.description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Play className="mr-2 h-5 w-5" /> Play
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20">
                More Info
              </Button>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="container px-4 py-8 space-y-8 mx-auto">
          <ContentCarousel title="Continue Watching" items={continueWatchingItems} />

          <ContentCarousel title="Popular Manga" items={popularMangaItems} />

          <ContentCarousel title="Trending Now" items={trendingItems} />

          <div className="pt-4">
            <Link href="/browse" className="inline-flex items-center text-sm text-gray-400 hover:text-pink-400">
              View all anime and manga <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
