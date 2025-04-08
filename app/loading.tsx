import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 text-pink-600 animate-spin" />
        <p className="text-white text-lg">Loading Animatrixx...</p>
      </div>
    </div>
  )
}
