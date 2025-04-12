"use client"

import Link from "next/link"
import Image from "next/image"
import { Bell, User } from "lucide-react"
import { motion } from "framer-motion"

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
import { MobileMenu } from "@/components/mobile-menu"
import { MobileSearch } from "@/components/mobile-search"

export function MainNav() {
  return (
    <motion.div
      className="container mx-auto flex h-16 items-center justify-between py-4 px-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-6">
        <MobileMenu />
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Animatrixx Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
          </motion.div>
          <motion.span
            className="hidden md:inline-block text-xl font-bold text-pink-400"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Animatrixx
          </motion.span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/anime", label: "Anime" },
            { href: "/manga", label: "Manga" },
            { href: "/new", label: "New & Popular" },
            { href: "/my-list", label: "My List" },
          ].map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
            >
              <Link href={item.href} className="text-sm font-medium hover:text-pink-400 transition-colors">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div className="relative">
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 bg-black/20 border-gray-700 focus-visible:ring-pink-500 text-sm"
              />
            </div>
          </motion.div>
        </div>
        <MobileSearch />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="hidden md:block"
        >
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  )
}
