"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccountSettings } from "@/components/settings/account-settings"
import { AppearanceSettings } from "@/components/settings/appearance-settings"
import { PlaybackSettings } from "@/components/settings/playback-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { PrivacySettings } from "@/components/settings/privacy-settings"

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("account")

  // Handle tab change from sidebar
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/4 lg:w-1/5">
        <div className="sticky top-24">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          <nav className="space-y-1">
            <button
              onClick={() => handleTabChange("account")}
              className={`block w-full text-left py-2 px-3 rounded-md ${
                activeTab === "account" ? "bg-zinc-800 text-white" : "text-gray-300 hover:bg-zinc-800"
              } transition-colors`}
            >
              Account
            </button>
            <button
              onClick={() => handleTabChange("appearance")}
              className={`block w-full text-left py-2 px-3 rounded-md ${
                activeTab === "appearance" ? "bg-zinc-800 text-white" : "text-gray-300 hover:bg-zinc-800"
              } transition-colors`}
            >
              Appearance
            </button>
            <button
              onClick={() => handleTabChange("playback")}
              className={`block w-full text-left py-2 px-3 rounded-md ${
                activeTab === "playback" ? "bg-zinc-800 text-white" : "text-gray-300 hover:bg-zinc-800"
              } transition-colors`}
            >
              Playback
            </button>
            <button
              onClick={() => handleTabChange("notifications")}
              className={`block w-full text-left py-2 px-3 rounded-md ${
                activeTab === "notifications" ? "bg-zinc-800 text-white" : "text-gray-300 hover:bg-zinc-800"
              } transition-colors`}
            >
              Notifications
            </button>
            <button
              onClick={() => handleTabChange("privacy")}
              className={`block w-full text-left py-2 px-3 rounded-md ${
                activeTab === "privacy" ? "bg-zinc-800 text-white" : "text-gray-300 hover:bg-zinc-800"
              } transition-colors`}
            >
              Privacy
            </button>
          </nav>
        </div>
      </div>

      <div className="flex-1">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-zinc-900 border-b border-zinc-800 p-0 h-auto w-full justify-start rounded-none">
            <TabsTrigger
              value="account"
              className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="appearance"
              className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
            >
              Appearance
            </TabsTrigger>
            <TabsTrigger
              value="playback"
              className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
            >
              Playback
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="privacy"
              className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none"
            >
              Privacy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="mt-6 space-y-8">
            <AccountSettings />
          </TabsContent>

          <TabsContent value="appearance" className="mt-6 space-y-8">
            <AppearanceSettings />
          </TabsContent>

          <TabsContent value="playback" className="mt-6 space-y-8">
            <PlaybackSettings />
          </TabsContent>

          <TabsContent value="notifications" className="mt-6 space-y-8">
            <NotificationSettings />
          </TabsContent>

          <TabsContent value="privacy" className="mt-6 space-y-8">
            <PrivacySettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
