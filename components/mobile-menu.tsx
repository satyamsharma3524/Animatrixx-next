"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Film, BookOpen, TrendingUp, Heart, History, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/anime", label: "Anime", icon: Film },
    { href: "/manga", label: "Manga", icon: BookOpen },
    { href: "/new", label: "New & Popular", icon: TrendingUp },
    { href: "/my-list", label: "My List", icon: Heart },
    { href: "/history", label: "History", icon: History },
    { href: "/settings", label: "Settings", icon: Settings },
    { href: "/auth/logout", label: "Logout", icon: LogOut },
  ]

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-zinc-950 border-zinc-800 text-white w-[280px]">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
            <h2 className="text-xl font-bold text-pink-400">NekoAnime</h2>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <AnimatePresence>
              <ul className="space-y-1 px-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-800 transition-colors"
                      onClick={handleLinkClick}
                    >
                      <item.icon className="h-5 w-5 text-gray-400" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </AnimatePresence>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
