"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-4">
      <motion.div
        className="relative w-32 h-32 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sleeping cat */}
        <motion.div
          className="absolute w-24 h-16 bg-pink-400 rounded-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scaleX: [1, 1.05, 1],
            scaleY: [1, 0.95, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          }}
        />

        {/* Cat head */}
        <motion.div className="absolute w-16 h-14 bg-pink-400 rounded-full left-1/2 -translate-x-1/2 -top-2">
          {/* Cat ears */}
          <div className="absolute -top-3 -left-1 w-5 h-8 bg-pink-400 rounded-tl-full rounded-tr-full transform -rotate-12"></div>
          <div className="absolute -top-3 -right-1 w-5 h-8 bg-pink-400 rounded-tl-full rounded-tr-full transform rotate-12"></div>

          {/* Cat inner ears */}
          <div className="absolute -top-2 left-0 w-3 h-5 bg-pink-300 rounded-tl-full rounded-tr-full transform -rotate-12"></div>
          <div className="absolute -top-2 right-0 w-3 h-5 bg-pink-300 rounded-tl-full rounded-tr-full transform rotate-12"></div>

          {/* Cat closed eyes - sleeping Z's */}
          <div className="absolute top-4 left-3 w-2 h-0.5 bg-zinc-900 rounded-full"></div>
          <div className="absolute top-4 right-3 w-2 h-0.5 bg-zinc-900 rounded-full"></div>

          <motion.div
            className="absolute -top-4 -right-4 text-zinc-900 font-bold"
            animate={{
              y: [-5, -10, -15],
              x: [0, 5, 10],
              opacity: [1, 0.8, 0],
              scale: [0.5, 0.7, 0.9],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            z
          </motion.div>

          <motion.div
            className="absolute -top-8 -right-2 text-zinc-900 font-bold text-lg"
            animate={{
              y: [-5, -10, -15],
              x: [0, 5, 10],
              opacity: [1, 0.8, 0],
              scale: [0.7, 0.9, 1.1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              delay: 0.3,
              ease: "easeInOut",
            }}
          >
            Z
          </motion.div>

          {/* Cat nose */}
          <div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-2 bg-pink-300 rounded-full"></div>
        </motion.div>

        {/* Cat tail */}
        <motion.div
          className="absolute w-10 h-3 bg-pink-400 rounded-full bottom-1 -right-6"
          animate={{
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

      <motion.h1
        className="text-4xl font-bold mb-2 text-pink-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Oops! This page is taking a cat nap.
      </motion.p>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button asChild className="bg-pink-600 hover:bg-pink-700">
          <Link href="/">Go back home</Link>
        </Button>
      </motion.div>
    </div>
  )
}
