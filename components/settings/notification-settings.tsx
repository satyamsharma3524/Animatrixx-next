"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function NotificationSettings() {
  return (
    <div className="space-y-8">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription className="text-gray-400">Control what notifications you receive</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newEpisodes">New Episodes</Label>
              <p className="text-sm text-gray-400">
                Get notified when new episodes of your favorite anime are available
              </p>
            </div>
            <Switch id="newEpisodes" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newChapters">New Chapters</Label>
              <p className="text-sm text-gray-400">
                Get notified when new chapters of your favorite manga are available
              </p>
            </div>
            <Switch id="newChapters" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="recommendations">Recommendations</Label>
              <p className="text-sm text-gray-400">Get personalized anime and manga recommendations</p>
            </div>
            <Switch id="recommendations" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="comments">Comments & Replies</Label>
              <p className="text-sm text-gray-400">Get notified when someone replies to your comments</p>
            </div>
            <Switch id="comments" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="newsletter">Newsletter</Label>
              <p className="text-sm text-gray-400">Receive our weekly newsletter with anime and manga updates</p>
            </div>
            <Switch id="newsletter" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Notification Delivery</CardTitle>
          <CardDescription className="text-gray-400">Choose how you want to receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="emailNotifs">Email Notifications</Label>
              <p className="text-sm text-gray-400">Receive notifications via email</p>
            </div>
            <Switch id="emailNotifs" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="pushNotifs">Push Notifications</Label>
              <p className="text-sm text-gray-400">Receive notifications in your browser</p>
            </div>
            <Switch id="pushNotifs" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="mobileNotifs">Mobile Notifications</Label>
              <p className="text-sm text-gray-400">Receive notifications on your mobile device</p>
            </div>
            <Switch id="mobileNotifs" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-pink-600 hover:bg-pink-700">Save Notification Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
