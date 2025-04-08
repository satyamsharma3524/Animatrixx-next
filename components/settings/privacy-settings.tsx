"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function PrivacySettings() {
  return (
    <div className="space-y-8">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
          <CardDescription className="text-gray-400">Control your privacy and data settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Profile Visibility</Label>
            <RadioGroup defaultValue="public" className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="public" className="cursor-pointer">
                  Public
                </Label>
                <span className="text-xs text-gray-400 ml-2">Anyone can see your profile and activity</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="friends" id="friends" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="friends" className="cursor-pointer">
                  Friends Only
                </Label>
                <span className="text-xs text-gray-400 ml-2">Only friends can see your profile and activity</span>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="private" className="cursor-pointer">
                  Private
                </Label>
                <span className="text-xs text-gray-400 ml-2">Your profile and activity are hidden from others</span>
              </div>
            </RadioGroup>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="watchHistory">Watch History</Label>
              <p className="text-sm text-gray-400">Allow others to see what you've watched</p>
            </div>
            <Switch id="watchHistory" />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="readHistory">Read History</Label>
              <p className="text-sm text-gray-400">Allow others to see what you've read</p>
            </div>
            <Switch id="readHistory" />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="onlineStatus">Online Status</Label>
              <p className="text-sm text-gray-400">Show when you're online</p>
            </div>
            <Switch id="onlineStatus" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Data & Cookies</CardTitle>
          <CardDescription className="text-gray-400">Manage how we use your data</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="analytics">Analytics</Label>
              <p className="text-sm text-gray-400">Allow us to collect anonymous usage data to improve our service</p>
            </div>
            <Switch id="analytics" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="personalization">Personalization</Label>
              <p className="text-sm text-gray-400">Allow us to use your data for personalized recommendations</p>
            </div>
            <Switch id="personalization" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="thirdParty">Third-Party Cookies</Label>
              <p className="text-sm text-gray-400">Allow third-party cookies for enhanced functionality</p>
            </div>
            <Switch id="thirdParty" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800">
            Download My Data
          </Button>
          <Button className="bg-pink-600 hover:bg-pink-700">Save Privacy Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
