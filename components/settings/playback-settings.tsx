"use client"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PlaybackSettings() {
  return (
    <div className="space-y-8">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Video Playback</CardTitle>
          <CardDescription className="text-gray-400">Customize your video watching experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Default Video Quality</Label>
            <RadioGroup defaultValue="auto" className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="auto" id="auto" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="auto" className="cursor-pointer">
                  Auto (Recommended)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1080p" id="1080p" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="1080p" className="cursor-pointer">
                  1080p
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="720p" id="720p" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="720p" className="cursor-pointer">
                  720p
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="480p" id="480p" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="480p" className="cursor-pointer">
                  480p
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="volume">Default Volume</Label>
              <span className="text-sm text-gray-400">80%</span>
            </div>
            <Slider id="volume" defaultValue={[80]} max={100} step={1} className="w-full" />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="autoplay">Autoplay Next Episode</Label>
              <p className="text-sm text-gray-400">Automatically play the next episode when current one ends</p>
            </div>
            <Switch id="autoplay" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="skipIntro">Skip Intro</Label>
              <p className="text-sm text-gray-400">Automatically skip intro sequences when available</p>
            </div>
            <Switch id="skipIntro" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="skipCredits">Skip Credits</Label>
              <p className="text-sm text-gray-400">Automatically skip ending credits</p>
            </div>
            <Switch id="skipCredits" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Manga Reader</CardTitle>
          <CardDescription className="text-gray-400">Customize your manga reading experience</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Default Reading Mode</Label>
            <RadioGroup defaultValue="vertical" className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="vertical" id="vertical" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="vertical" className="cursor-pointer">
                  Vertical Scrolling
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="horizontal" id="horizontal" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="horizontal" className="cursor-pointer">
                  Horizontal Pages
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="webtoon" id="webtoon" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="webtoon" className="cursor-pointer">
                  Webtoon Mode (Long Strip)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="pageQuality">Page Quality</Label>
              <p className="text-sm text-gray-400">Higher quality uses more data</p>
            </div>
            <Select defaultValue="high">
              <SelectTrigger className="w-[180px] bg-zinc-800 border-zinc-700">
                <SelectValue placeholder="Select quality" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700">
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="autoProgress">Save Reading Progress</Label>
              <p className="text-sm text-gray-400">Automatically save your reading position</p>
            </div>
            <Switch id="autoProgress" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="preloadPages">Preload Pages</Label>
              <p className="text-sm text-gray-400">Load pages in advance for smoother reading</p>
            </div>
            <Switch id="preloadPages" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-pink-600 hover:bg-pink-700">Save Preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
