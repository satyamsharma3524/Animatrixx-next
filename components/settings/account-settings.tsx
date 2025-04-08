"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Eye, EyeOff, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function AccountSettings() {
  const [showPassword, setShowPassword] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-8">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription className="text-gray-400">Update your account details and profile picture</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Profile picture"
                width={100}
                height={100}
                className="rounded-full border-2 border-zinc-700"
              />
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full bg-pink-600 hover:bg-pink-700 h-8 w-8"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">Neko Lover</h3>
              <p className="text-sm text-gray-400">@nekolover123</p>
              <p className="text-sm text-gray-400">Member since April 2023</p>
            </div>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                defaultValue="nekolover123"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-pink-500"
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="neko@example.com"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-pink-500"
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                defaultValue="Neko"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-pink-500"
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                defaultValue="Lover"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-pink-500"
                disabled={!isEditing}
              />
            </div>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your current password"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-pink-500 pr-10"
                disabled={!isEditing}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
                disabled={!isEditing}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Enter new password"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-pink-500"
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm new password"
                className="bg-zinc-800 border-zinc-700 focus-visible:ring-pink-500"
                disabled={!isEditing}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            className="border-zinc-700 hover:bg-zinc-800"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
          {isEditing && (
            <Button className="bg-pink-600 hover:bg-pink-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Account Preferences</CardTitle>
          <CardDescription className="text-gray-400">Manage your account settings and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing">Marketing Emails</Label>
              <p className="text-sm text-gray-400">Receive emails about new releases and recommendations</p>
            </div>
            <Switch id="marketing" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="twoFactor">Two-Factor Authentication</Label>
              <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
            </div>
            <Switch id="twoFactor" />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="language">Language</Label>
              <p className="text-sm text-gray-400">Select your preferred language</p>
            </div>
            <select
              id="language"
              className="bg-zinc-800 border-zinc-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="en">English</option>
              <option value="jp">Japanese</option>
              <option value="kr">Korean</option>
              <option value="cn">Chinese</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-red-500">Danger Zone</CardTitle>
          <CardDescription className="text-gray-400">Irreversible account actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="deactivate" className="text-gray-300">
                Deactivate Account
              </Label>
              <p className="text-sm text-gray-400">Temporarily disable your account</p>
            </div>
            <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-gray-300">
              Deactivate
            </Button>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="delete" className="text-red-500">
                Delete Account
              </Label>
              <p className="text-sm text-gray-400">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
