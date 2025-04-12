"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Github, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const isMobile = useMobile()

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const footerSections = [
    {
      id: "explore",
      title: "Explore",
      links: [
        { href: "/anime", label: "Anime" },
        { href: "/manga", label: "Manga" },
        { href: "/new", label: "New Releases" },
        { href: "/popular", label: "Popular" },
        { href: "/genres", label: "Genres" },
      ],
    },
    {
      id: "account",
      title: "Account",
      links: [
        { href: "/profile", label: "My Profile" },
        { href: "/my-list", label: "My List" },
        { href: "/history", label: "Watch History" },
        { href: "/settings", label: "Settings" },
        { href: "/auth/logout", label: "Logout" },
      ],
    },
    {
      id: "support",
      title: "Support",
      links: [
        { href: "/contact", label: "Contact Us" },
        { href: "/faq", label: "FAQ" },
        { href: "/help", label: "Help Center" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/privacy", label: "Privacy Policy" },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      className="bg-zinc-950 text-white pt-12 pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container px-4 mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="NekoAnime Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.div>
              <span className="text-xl font-bold text-pink-400">NekoAnime</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              The best platform to watch anime and read manga with a cute cat theme.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
                { icon: Github, label: "GitHub" },
              ].map((social, index) => (
                <motion.div key={social.label} whileHover={{ scale: 1.2, y: -2 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="text-gray-400 hover:text-pink-400" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desktop footer sections */}
          {!isMobile &&
            footerSections.map((section) => (
              <motion.div key={section.id} className="hidden md:block" variants={item}>
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link href={link.href} className="text-gray-400 hover:text-pink-400 text-sm">
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

          {/* Mobile accordion footer sections */}
          {isMobile &&
            footerSections.map((section) => (
              <motion.div key={section.id} className="md:hidden border-b border-zinc-800 pb-2" variants={item}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full py-3"
                  aria-expanded={expandedSections[section.id]}
                >
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  <motion.div
                    animate={{ rotate: expandedSections[section.id] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </button>
                <motion.ul
                  className="space-y-2 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedSections[section.id] ? "auto" : 0,
                    opacity: expandedSections[section.id] ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {section.links.map((link) => (
                    <li key={link.href} className="py-1">
                      <Link href={link.href} className="text-gray-400 hover:text-pink-400 text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          className="border-t border-zinc-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} NekoAnime. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["Terms", "Privacy", "Cookies", "Licenses"].map((item, index) => (
              <motion.div key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-pink-400 text-xs">
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
