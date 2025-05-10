import type { AnimeItem, MangaItem, Episode, Chapter, HistoryItem } from "@/lib/types"

export function getAnimeList(): AnimeItem[] {
  return [
    {
      id: 1,
      title: "My Hero Academia",
      cover: "/placeholder.svg?height=450&width=300&text=My Hero Academia",
      studio: "Bones",
      genres: ["Action", "Superhero", "School"],
      status: "Ongoing",
      episodes: 113,
      rating: 4.8,
      year: 2016,
    },
    {
      id: 2,
      title: "Demon Slayer",
      cover: "/placeholder.svg?height=450&width=300&text=Demon Slayer",
      studio: "ufotable",
      genres: ["Action", "Supernatural", "Historical"],
      status: "Ongoing",
      episodes: 44,
      rating: 4.9,
      year: 2019,
    },
    {
      id: 3,
      title: "Attack on Titan",
      cover: "/placeholder.svg?height=450&width=300&text=Attack on Titan",
      studio: "MAPPA",
      genres: ["Action", "Dark Fantasy", "Post-Apocalyptic"],
      status: "Completed",
      episodes: 88,
      rating: 4.9,
      year: 2013,
    },
    {
      id: 4,
      title: "Jujutsu Kaisen",
      cover: "/placeholder.svg?height=450&width=300&text=Jujutsu Kaisen",
      studio: "MAPPA",
      genres: ["Action", "Supernatural", "School"],
      status: "Ongoing",
      episodes: 48,
      rating: 4.8,
      year: 2020,
    },
    {
      id: 5,
      title: "One Piece",
      cover: "/placeholder.svg?height=450&width=300&text=One Piece",
      studio: "Toei Animation",
      genres: ["Adventure", "Fantasy", "Comedy"],
      status: "Ongoing",
      episodes: 1050,
      rating: 4.9,
      year: 1999,
    },
    {
      id: 6,
      title: "Fullmetal Alchemist: Brotherhood",
      cover: "/placeholder.svg?height=450&width=300&text=Fullmetal Alchemist",
      studio: "Bones",
      genres: ["Action", "Adventure", "Fantasy"],
      status: "Completed",
      episodes: 64,
      rating: 4.9,
      year: 2009,
    },
    {
      id: 7,
      title: "Hunter x Hunter",
      cover: "/placeholder.svg?height=450&width=300&text=Hunter x Hunter",
      studio: "Madhouse",
      genres: ["Action", "Adventure", "Fantasy"],
      status: "On Hiatus",
      episodes: 148,
      rating: 4.9,
      year: 2011,
    },
    {
      id: 8,
      title: "Steins;Gate",
      cover: "/placeholder.svg?height=450&width=300&text=Steins;Gate",
      studio: "White Fox",
      genres: ["Sci-Fi", "Thriller", "Drama"],
      status: "Completed",
      episodes: 24,
      rating: 4.9,
      year: 2011,
    },
    {
      id: 9,
      title: "Violet Evergarden",
      cover: "/placeholder.svg?height=450&width=300&text=Violet Evergarden",
      studio: "Kyoto Animation",
      genres: ["Drama", "Fantasy", "Slice of Life"],
      status: "Completed",
      episodes: 13,
      rating: 4.8,
      year: 2018,
    },
    {
      id: 10,
      title: "Cowboy Bebop",
      cover: "/placeholder.svg?height=450&width=300&text=Cowboy Bebop",
      studio: "Sunrise",
      genres: ["Sci-Fi", "Neo-noir", "Space Western"],
      status: "Completed",
      episodes: 26,
      rating: 4.9,
      year: 1998,
    },
    {
      id: 11,
      title: "Frieren: Beyond Journey's End",
      cover: "/placeholder.svg?height=450&width=300&text=Frieren",
      studio: "Madhouse",
      genres: ["Adventure", "Fantasy", "Slice of Life"],
      status: "Ongoing",
      episodes: 28,
      rating: 4.9,
      year: 2023,
    },
    {
      id: 12,
      title: "Oshi no Ko",
      cover: "/placeholder.svg?height=450&width=300&text=Oshi no Ko",
      studio: "Doga Kobo",
      genres: ["Drama", "Supernatural", "Psychological"],
      status: "Ongoing",
      episodes: 22,
      rating: 4.8,
      year: 2023,
    },
  ]
}

export function getEpisodes(animeId: number): Episode[] {
  return Array.from({ length: 24 }, (_, i) => {
    const date = new Date(2025, 3, 5 - i).toISOString().split("T")[0];
    return {
      id: i + 1,
      number: i + 1,
      title: `Episode ${i + 1}: Sample Title`,
      thumbnail: `/placeholder.svg?height=180&width=320&text=Episode ${i + 1}`,
      duration: "24 min",
      releaseDate: date,
      description: "Sample description",
      isWatched: i < 5,
    };
  });
}

export async function getMangaList(page: number): Promise<{ results: MangaItem[]; next: string | null }> {
  try {
    const response = await fetch(`https://server.animatrixx.in/api/manga?page=${page}`);
    
    // Log the raw response to inspect
    console.log("API Response Status:", response.status);
    console.log("API Response Headers:", response.headers);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Fetched Data:", data);  // Log the data for inspection

    return {
      results: data.results || [],
      next: data.next || null,
    };
  } catch (error) {
    console.error("Error fetching manga list:", error);
    throw new Error(`Failed to fetch manga list: ${error.message}`);
  }
}






export async function getMangaDetails(mangaId: number) {
  const response = await fetch(`https://server.animatrixx.in/api/manga/${mangaId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch manga details");
  }
  const data = await response.json();
  return {
    id: data.id,
    title: data.title,
    cover: data.cover_image || "/placeholder.svg",
    description: data.description,
    genres: data.tags || [],
    status: data.status,
    releaseYear: data.releaseYear,
    rating: data.rating,
    chapters: data.chapters,
    lastUpdated: data.lastUpdated,
    publisher: data.publisher,
    alternativeTitles: data.alternativeTitles || [],
  };
}
export function getHistoryItems(): HistoryItem[] {
  return [
    {
      id: 1,
      title: "My Hero Academia",
      cover: "/placeholder.svg?height=450&width=300&text=My Hero Academia",
      type: "anime",
      episode: "S6 E24: Deku vs. Class A",
      progress: 100,
      timestamp: "2 days ago",
      timeLeft: "Completed",
      duration: "24 min",
    },
    {
      id: 2,
      title: "Chainsaw Man",
      cover: "/placeholder.svg?height=450&width=300&text=Chainsaw Man",
      type: "manga",
      chapter: "Chapter 120: The Awakening",
      progress: 100,
      timestamp: "3 days ago",
      timeLeft: "Completed",
      pages: 24,
    },
    {
      id: 3,
      title: "Attack on Titan",
      cover: "/placeholder.svg?height=450&width=300&text=Attack on Titan",
      type: "anime",
      episode: "S4 E28: The Dawn of Humanity",
      progress: 75,
      timestamp: "1 week ago",
      timeLeft: "6 min left",
      duration: "24 min",
    },
    {
      id: 4,
      title: "Spy x Family",
      cover: "/placeholder.svg?height=450&width=300&text=Spy x Family",
      type: "manga",
      chapter: "Chapter 65: Family Outing",
      progress: 60,
      timestamp: "2 weeks ago",
      timeLeft: "10 pages left",
      pages: 25,
    },
    {
      id: 5,
      title: "Jujutsu Kaisen",
      cover: "/placeholder.svg?height=450&width=300&text=Jujutsu Kaisen",
      type: "anime",
      episode: "S2 E5: Hidden Inventory",
      progress: 30,
      timestamp: "1 month ago",
      timeLeft: "17 min left",
      duration: "24 min",
    },
    {
      id: 6,
      title: "Tokyo Revengers",
      cover: "/placeholder.svg?height=450&width=300&text=Tokyo Revengers",
      type: "manga",
      chapter: "Chapter 231: Resolve",
      progress: 40,
      timestamp: "1 month ago",
      timeLeft: "15 pages left",
      pages: 25,
    },
  ]
}
