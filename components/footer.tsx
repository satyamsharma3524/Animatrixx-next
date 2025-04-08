import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-12 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Animatrixx Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-pink-400">Animatrixx</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              The best platform to watch anime and read manga with a cute cat theme.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-400" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/anime" className="text-gray-400 hover:text-pink-400 text-sm">
                  Anime
                </Link>
              </li>
              <li>
                <Link href="/manga" className="text-gray-400 hover:text-pink-400 text-sm">
                  Manga
                </Link>
              </li>
              <li>
                <Link href="/new" className="text-gray-400 hover:text-pink-400 text-sm">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/popular" className="text-gray-400 hover:text-pink-400 text-sm">
                  Popular
                </Link>
              </li>
              <li>
                <Link href="/genres" className="text-gray-400 hover:text-pink-400 text-sm">
                  Genres
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-pink-400 text-sm">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/my-list" className="text-gray-400 hover:text-pink-400 text-sm">
                  My List
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-gray-400 hover:text-pink-400 text-sm">
                  Watch History
                </Link>
              </li>
              <li>
                <Link href="/settings" className="text-gray-400 hover:text-pink-400 text-sm">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/auth/logout" className="text-gray-400 hover:text-pink-400 text-sm">
                  Logout
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-pink-400 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-pink-400 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-pink-400 text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-pink-400 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-pink-400 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Animatrixx. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-pink-400 text-xs">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-pink-400 text-xs">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-pink-400 text-xs">
              Cookies
            </Link>
            <Link href="/licenses" className="text-gray-400 hover:text-pink-400 text-xs">
              Licenses
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
