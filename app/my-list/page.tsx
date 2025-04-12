import type { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { MyListContent } from "@/components/my-list/my-list-content"

export const metadata: Metadata = {
  title: "My List | NekoAnime",
  description: "Your saved anime and manga collection on NekoAnime",
}

export default function MyListPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1 pt-16">
        <div className="container px-4 py-8 mx-auto">
          <h1 className="text-3xl font-bold mb-6">My List</h1>
          <MyListContent />
        </div>
      </main>

      <Footer />
    </div>
  )
}
