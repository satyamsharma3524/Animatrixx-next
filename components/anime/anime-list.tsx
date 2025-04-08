import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { AnimeItem } from "@/lib/types"

interface AnimeListProps {
  animeList: AnimeItem[]
}

export function AnimeList({ animeList }: AnimeListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      {animeList.map((anime) => (
        <Link key={anime.id} href={`/anime/${anime.id}`} className="group">
          <div className="relative aspect-[2/3] overflow-hidden rounded-lg mb-2 bg-zinc-800">
            <Image
              src={anime.cover || "/placeholder.svg"}
              alt={anime.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
              <div className="w-full">
                <div className="flex justify-between items-center mb-1">
                  <Badge variant="outline" className="bg-pink-600/80 text-white border-0 text-xs">
                    {anime.status}
                  </Badge>
                  <div className="text-xs font-medium">{anime.episodes} Ep</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {anime.genres.slice(0, 2).map((genre, index) => (
                    <Badge key={index} variant="secondary" className="bg-black/50 text-xs">
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <h3 className="font-medium line-clamp-1">{anime.title}</h3>
          <p className="text-xs text-gray-400">
            {anime.studio} • {anime.year}
          </p>
        </Link>
      ))}
    </div>
  )
}
