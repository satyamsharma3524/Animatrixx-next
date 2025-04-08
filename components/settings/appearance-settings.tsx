"use client"

import { useState } from "react"
import { Moon, Sun, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function AppearanceSettings() {
  const [fontSize, setFontSize] = useState(16)
  const [theme, setTheme] = useState("dark")

  return (
    <div className="space-y-8">
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
          <CardDescription className="text-gray-400">Customize the appearance of the application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label>Theme Mode</Label>
            <RadioGroup defaultValue={theme} onValueChange={setTheme} className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="light" id="light" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="light" className="flex items-center gap-2 cursor-pointer">
                  <Sun className="h-4 w-4" /> Light
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dark" id="dark" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="dark" className="flex items-center gap-2 cursor-pointer">
                  <Moon className="h-4 w-4" /> Dark
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" className="border-zinc-700 text-pink-500" />
                <Label htmlFor="system" className="flex items-center gap-2 cursor-pointer">
                  <Monitor className="h-4 w-4" /> System
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="fontSize">Font Size ({fontSize}px)</Label>
              <span className="text-sm text-gray-400">
                {fontSize < 14 ? "Small" : fontSize < 18 ? "Medium" : "Large"}
              </span>
            </div>
            <Slider
              id="fontSize"
              min={12}
              max={20}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>Small</span>
              <span>Medium</span>
              <span>Large</span>
            </div>
          </div>

          <Separator className="bg-zinc-800" />

          <div className="space-y-4">
            <Label>Accent Color</Label>
            <div className="grid grid-cols-5 gap-4">
              <div className="flex flex-col items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-pink-600 ring-2 ring-pink-600 ring-offset-2 ring-offset-zinc-900"></button>
                <span className="text-xs text-gray-400">Pink</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-purple-600"></button>
                <span className="text-xs text-gray-400">Purple</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-blue-600"></button>
                <span className="text-xs text-gray-400">Blue</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-green-600"></button>
                <span className="text-xs text-gray-400">Green</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-red-600"></button>
                <span className="text-xs text-gray-400">Red</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-pink-600 hover:bg-pink-700">Save Preferences</Button>
        </CardFooter>
      </Card>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle>Interface Options</CardTitle>
          <CardDescription className="text-gray-400">Customize how the interface behaves</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="animations">Enable Animations</Label>
              <p className="text-sm text-gray-400">Show animations throughout the interface</p>
            </div>
            <Switch id="animations" defaultChecked />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="reducedMotion">Reduced Motion</Label>
              <p className="text-sm text-gray-400">Minimize animations for accessibility</p>
            </div>
            <Switch id="reducedMotion" />
          </div>

          <Separator className="bg-zinc-800" />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="highContrast">High Contrast Mode</Label>
              <p className="text-sm text-gray-400">Increase contrast for better visibility</p>
            </div>
            <Switch id="highContrast" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
