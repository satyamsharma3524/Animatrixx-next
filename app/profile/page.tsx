import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, Edit, Film, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { ContentCarousel } from "@/components/content-carousel"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="pt-16">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 w-full bg-gradient-to-r from-pink-600 to-purple-600">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Profile banner"
              fill
              className="object-cover mix-blend-overlay opacity-30"
            />
          </div>

          <div className="container relative -mt-20 px-4">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-black"
                />
                <Button size="icon" className="absolute bottom-2 right-2 rounded-full bg-pink-600 hover:bg-pink-700">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 pt-4 md:pt-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold">Neko Lover</h1>
                    <p className="text-gray-400">@nekolover123</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                      <Link href="/settings" className="flex items-center gap-2">
                        <Settings className="h-4 w-4" /> Settings
                      </Link>
                    </Button>
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex gap-6 mt-6 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined April 2023</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>120 hours watched</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Film className="h-4 w-4" />
                    <span>85 anime completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="container px-4 py-8">
          <Tabs defaultValue="watchlist" className="space-y-6">
            <TabsList className="bg-zinc-900 border-b border-zinc-800 p-0 h-auto w-full justify-start rounded-none">
              <TabsTrigger
                value="watchlist"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Watchlist
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                History
              </TabsTrigger>
              <TabsTrigger
                value="favorites"
                className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
              >
                Favorites
              </TabsTrigger>
            </TabsList>

            <TabsContent value="watchlist" className="space-y-8 mt-6">
              <ContentCarousel
                title="Continue Watching"
                items={[
                  { id: 1, title: "One Piece", type: "anime", episode: "Episode 1042", progress: 70 },
                  { id: 2, title: "Demon Slayer", type: "anime", episode: "Episode 8", progress: 45 },
                  { id: 3, title: "My Hero Academia", type: "anime", episode: "Episode 24", progress: 90 },
                  { id: 4, title: "Attack on Titan", type: "anime", episode: "Episode 12", progress: 30 },
                  { id: 5, title: "Jujutsu Kaisen", type: "anime", episode: "Episode 5", progress: 60 },
                ]}
              />

              <ContentCarousel
                title="Plan to Watch"
                items={[
                  { id: 11, title: "Frieren: Beyond Journey's End", type: "anime" },
                  { id: 12, title: "Oshi no Ko", type: "anime" },
                  { id: 13, title: "Bocchi the Rock!", type: "anime" },
                  { id: 14, title: "Vinland Saga", type: "anime" },
                  { id: 15, title: "Mushoku Tensei", type: "anime" },
                ]}
              />
            </TabsContent>

            <TabsContent value="history" className="space-y-8 mt-6">
              <ContentCarousel
                title="Recently Watched"
                items={[
                  { id: 1, title: "One Piece", type: "anime", episode: "Episode 1042" },
                  { id: 3, title: "My Hero Academia", type: "anime", episode: "Episode 24" },
                  { id: 5, title: "Jujutsu Kaisen", type: "anime", episode: "Episode 5" },
                  { id: 16, title: "Demon Slayer Movie", type: "anime" },
                  { id: 17, title: "Your Name", type: "anime" },
                ]}
              />

              <ContentCarousel
                title="Recently Read"
                items={[
                  { id: 6, title: "Chainsaw Man", type: "manga", chapter: "Chapter 120" },
                  { id: 7, title: "Spy x Family", type: "manga", chapter: "Chapter 65" },
                  { id: 8, title: "Tokyo Revengers", type: "manga", chapter: "Chapter 231" },
                  { id: 9, title: "Blue Lock", type: "manga", chapter: "Chapter 178" },
                  { id: 10, title: "One Punch Man", type: "manga", chapter: "Chapter 164" },
                ]}
              />
            </TabsContent>

            <TabsContent value="favorites" className="space-y-8 mt-6">
              <ContentCarousel
                title="Favorite Anime"
                items={[
                  { id: 18, title: "Fullmetal Alchemist", type: "anime" },
                  { id: 19, title: "Hunter x Hunter", type: "anime" },
                  { id: 20, title: "Steins;Gate", type: "anime" },
                  { id: 21, title: "Violet Evergarden", type: "anime" },
                  { id: 22, title: "Cowboy Bebop", type: "anime" },
                ]}
              />

              <ContentCarousel
                title="Favorite Manga"
                items={[
                  { id: 23, title: "Berserk", type: "manga" },
                  { id: 24, title: "Vagabond", type: "manga" },
                  { id: 25, title: "Vinland Saga", type: "manga" },
                  { id: 26, title: "Monster", type: "manga" },
                  { id: 27, title: "One Piece", type: "manga" },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
