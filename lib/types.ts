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
  genres: string[];
  index: number
}

export interface MangaItem {
  id: number;
  title: string;
  alt_titles: alt_title[];
  cover_image: string;
  author: string;
  genres: string[];
  status: string;
  chapters: number;
  rating: number;
  description?: string;
  tags?: Tag[];
}

export interface MangaListResponse {
  results: MangaItem[];
  next: string | null;
};


export interface alt_title {
  en: string;
  ko?: string;
}

export interface Tag {
  title: string;
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
