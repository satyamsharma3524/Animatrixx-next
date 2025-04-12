"use client"

import type React from "react"

import { useState } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, AnimatePresence } from "framer-motion"

export function MobileSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log("Searching for:", query)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="text-white" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-0 bg-zinc-950 border-zinc-800 text-white h-[180px]">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
            <h2 className="text-xl font-bold text-pink-400">Search</h2>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close search">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 p-4">
            <AnimatePresence>
              <motion.form
                onSubmit={handleSearch}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex gap-2"
              >
                <Input
                  type="search"
                  placeholder="Search anime, manga..."
                  className="flex-1 bg-black/20 border-gray-700 focus-visible:ring-pink-500"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
                <Button type="submit" variant="default" className="bg-pink-600 hover:bg-pink-700">
                  Search
                </Button>
              </motion.form>
            </AnimatePresence>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
