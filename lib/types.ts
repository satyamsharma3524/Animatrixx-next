export interface AnimeItem {
  id: number
  title: string
  cover: string
  studio: string
  genres: string[]
  status: string
  episodes: number
  rating: number
  year: number
}

export interface MangaItem {
  id: number
  title: string
  cover: string
  author: string
  genres: string[]
  status: string
  chapters: number
  rating: number
}

export interface Episode {
  id: number
  number: number
  title: string
  thumbnail: string
  duration: string
  releaseDate: string
  description: string
  isWatched: boolean
}

export interface Chapter {
  id: number
  number: number
  title: string
  releaseDate: string
  pages: number
  isRead: boolean
}

export interface ContentItem {
  id: number
  title: string
  type: "anime" | "manga"
  episode?: string
  chapter?: string
  progress?: number
}

export interface HistoryItem {
  id: number
  title: string
  cover: string
  type: "anime" | "manga"
  episode?: string
  chapter?: string
  progress: number
  timestamp: string
  timeLeft: string
  duration?: string
  pages?: number
}
