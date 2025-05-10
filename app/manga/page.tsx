'use client';

import { useState, useEffect } from "react";
import { MangaItem } from "@/lib/types";
import { getMangaList } from "@/lib/data";
import { MangaList } from "@/components/manga/manga-list";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MangaListPage() {
  const [mangaList, setMangaList] = useState<MangaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchMangaData = async () => {
      setLoading(true);
      setError(null); // Reset error on new fetch
      try {
        const data = await getMangaList(currentPage);
        setMangaList(data.results);
        setHasNextPage(!!data.next);
      } catch (error) {
        console.error("Error fetching manga data:", error);
        setError("Failed to load manga list.");
      } finally {
        setLoading(false);
      }
    };

    fetchMangaData();
  }, [currentPage]);

  const filteredMangaList = mangaList.filter((manga) =>
    manga.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <MainNav />
      </header>

      <main className="flex-1 pt-16">
        <div className="container px-4 py-8 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Manga Library</h1>

          {/* Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search manga by title, genre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zinc-900 border-zinc-800 focus-visible:ring-pink-500"
              />
            </div>
          </div>

          {/* Display Manga List */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-zinc-900 border-b border-zinc-800 p-0 h-auto w-full justify-start rounded-none overflow-x-auto">
              <TabsTrigger value="all" className="py-3 px-6 rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-pink-500 data-[state=active]:shadow-none">
                All Manga
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {loading ? (
                <p className="text-center">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <>
                  <MangaList mangaList={filteredMangaList} />
                  <div className="flex justify-center items-center mt-8 space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <span className="text-lg">Page {currentPage}</span>
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      disabled={!hasNextPage}
                    >
                      Next
                    </Button>
                  </div>
                </>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
