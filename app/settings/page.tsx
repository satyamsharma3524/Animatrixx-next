import type { Metadata } from "next"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { SettingsTabs } from "@/components/settings/settings-tabs"

export const metadata: Metadata = {
  title: "Settings | NekoAnime",
  description: "Manage your NekoAnime account settings and preferences",
}

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1 pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <SettingsTabs />
        </div>
      </main>

      <Footer />
    </div>
  )
}
