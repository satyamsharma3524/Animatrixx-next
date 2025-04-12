"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <motion.div
        className="relative w-32 h-32 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Surprised cat */}
        <motion.div
          className="absolute w-24 h-16 bg-pink-400 rounded-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 0.5,
            ease: "easeInOut",
          }}
        />

        {/* Cat head */}
        <motion.div
          className="absolute w-16 h-14 bg-pink-400 rounded-full left-1/2 -translate-x-1/2 -top-2"
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {/* Cat ears - alert position */}
          <motion.div
            className="absolute -top-5 -left-1 w-5 h-8 bg-pink-400 rounded-tl-full rounded-tr-full transform -rotate-12"
            animate={{
              rotate: [-12, -5, -12],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 0.5,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute -top-5 -right-1 w-5 h-8 bg-pink-400 rounded-tl-full rounded-tr-full transform rotate-12"
            animate={{
              rotate: [12, 5, 12],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 0.5,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Cat inner ears */}
          <div className="absolute -top-4 left-0 w-3 h-5 bg-pink-300 rounded-tl-full rounded-tr-full transform -rotate-12"></div>
          <div className="absolute -top-4 right-0 w-3 h-5 bg-pink-300 rounded-tl-full rounded-tr-full transform rotate-12"></div>

          {/* Cat eyes - wide with surprise */}
          <motion.div
            className="absolute top-3 left-3 w-3 h-4 bg-zinc-900 rounded-full"
            animate={{
              scaleY: [1, 1.2, 1],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 0.5,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-3 right-3 w-3 h-4 bg-zinc-900 rounded-full"
            animate={{
              scaleY: [1, 1.2, 1],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 0.5,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Cat nose */}
          <div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-2 bg-pink-300 rounded-full"></div>

          {/* Cat mouth - surprised */}
          <motion.div
            className="absolute top-9 left-1/2 -translate-x-1/2 w-3 h-3 border border-zinc-900 rounded-full"
            animate={{
              scaleY: [1, 1.2, 1],
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 0.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>

        {/* Cat tail - alert position */}
        <motion.div
          className="absolute w-10 h-3 bg-pink-400 rounded-full bottom-1 -right-6"
          animate={{
            rotate: [0, 45, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 0.5,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Exclamation mark */}
        <motion.div
          className="absolute -top-8 -right-2 text-red-500 font-bold text-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          !
        </motion.div>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-2 text-pink-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops!
      </motion.h1>

      <motion.p
        className="text-xl mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Something went wrong. Our cat is on it!
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button onClick={reset} className="bg-pink-600 hover:bg-pink-700">
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go back home</Link>
        </Button>
      </motion.div>
    </div>
  )
}
