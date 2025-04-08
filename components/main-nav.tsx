import Link from "next/link"
import Image from "next/image"
import { Bell, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MainNav() {
  return (
    <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Animatrixx Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="hidden md:inline-block text-xl font-bold text-pink-400">Animatrixx</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link href="/anime" className="text-sm font-medium hover:text-pink-400 transition-colors">
            Anime
          </Link>
          <Link href="/manga" className="text-sm font-medium hover:text-pink-400 transition-colors">
            Manga
          </Link>
          <Link href="/new" className="text-sm font-medium hover:text-pink-400 transition-colors">
            New & Popular
          </Link>
          <Link href="/my-list" className="text-sm font-medium hover:text-pink-400 transition-colors">
            My List
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-[200px] pl-8 bg-black/20 border-gray-700 focus-visible:ring-pink-500 text-sm"
          />
        </div>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white" aria-label="Notifications">
          <Search className="h-5 w-5 md:hidden" />
          <Bell className="h-5 w-5 hidden md:block" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="User menu">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-zinc-900 border-zinc-800 text-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-800" />
            <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer">
              <Link href="/profile" className="flex w-full">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer">
              <Link href="/history" className="flex w-full">
                Watch History
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer">
              <Link href="/settings" className="flex w-full">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-zinc-800" />
            <DropdownMenuItem className="hover:bg-zinc-800 focus:bg-zinc-800 cursor-pointer">
              <Link href="/auth/logout" className="flex w-full">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
