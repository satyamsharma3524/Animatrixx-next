import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ContentItem {
  id: number
  title: string
  type: "anime" | "manga"
  episode?: string
  chapter?: string
  progress?: number
}

interface ContentCarouselProps {
  title: string
  items: ContentItem[]
}

export function ContentCarousel({ title, items }: ContentCarouselProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <Link key={item.id} href={`/${item.type}/${item.id}`}>
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden transition-transform hover:scale-105">
              <div className="relative aspect-[2/3] w-full">
                <Image
                  src={`/placeholder.svg?height=450&width=300&text=${item.title}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.progress && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                    <div className="h-full bg-pink-500" style={{ width: `${item.progress}%` }} />
                  </div>
                )}
              </div>
              <CardContent className="p-3">
                <h3 className="font-medium line-clamp-1">{item.title}</h3>
                {item.episode && <p className="text-xs text-gray-400">{item.episode}</p>}
                {item.chapter && <p className="text-xs text-gray-400">{item.chapter}</p>}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
