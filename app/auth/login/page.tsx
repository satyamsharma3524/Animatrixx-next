"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle authentication here
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="fixed top-0 left-0 p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="NekoAnime Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-pink-400">Animatrixx</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-zinc-900 p-8 rounded-lg border border-zinc-800">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <p className="text-gray-400 mt-2">Welcome back to Animatrixx!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="bg-zinc-800 border-zinc-700 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Remember me
                </Label>
              </div>
              <Link href="/auth/forgot-password" className="text-sm text-pink-400 hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
              Sign In
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-400">Don&apos;t have an account?</span>{" "}
              <Link href="/auth/register" className="text-pink-400 hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© 2025 Animatrixx. All rights reserved.</p>
      </footer>
    </div>
  )
}

