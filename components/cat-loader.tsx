"use client"

import { motion } from "framer-motion"

export function CatLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
      <motion.div
        className="relative w-24 h-24"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        {/* Cat body */}
        <motion.div
          className="absolute w-20 h-16 bg-pink-400 rounded-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scaleX: [1, 1.1, 1],
            scaleY: [1, 0.9, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />

        {/* Cat head */}
        <motion.div
          className="absolute w-16 h-14 bg-pink-400 rounded-full left-1/2 -translate-x-1/2 -top-4"
          animate={{
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "easeInOut",
          }}
        >
          {/* Cat ears */}
          <div className="absolute -top-3 -left-1 w-5 h-8 bg-pink-400 rounded-tl-full rounded-tr-full transform -rotate-12"></div>
          <div className="absolute -top-3 -right-1 w-5 h-8 bg-pink-400 rounded-tl-full rounded-tr-full transform rotate-12"></div>

          {/* Cat inner ears */}
          <div className="absolute -top-2 left-0 w-3 h-5 bg-pink-300 rounded-tl-full rounded-tr-full transform -rotate-12"></div>
          <div className="absolute -top-2 right-0 w-3 h-5 bg-pink-300 rounded-tl-full rounded-tr-full transform rotate-12"></div>

          {/* Cat eyes */}
          <motion.div
            className="absolute top-3 left-3 w-2 h-4 bg-zinc-900 rounded-full"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-3 right-3 w-2 h-4 bg-zinc-900 rounded-full"
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Cat nose */}
          <div className="absolute top-7 left-1/2 -translate-x-1/2 w-3 h-2 bg-pink-300 rounded-full"></div>

          {/* Cat mouth */}
          <motion.div
            className="absolute top-9 left-1/2 -translate-x-1/2 w-4 h-1 border-b-2 border-zinc-900 rounded-b-full"
            animate={{
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 1.5,
              ease: "easeInOut",
            }}
          ></motion.div>
        </motion.div>

        {/* Cat tail */}
        <motion.div
          className="absolute w-10 h-3 bg-pink-400 rounded-full -bottom-1 -right-6"
          animate={{
            rotate: [0, 20, 0, -20, 0],
            x: [0, -5, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        ></motion.div>

        {/* Cat paws */}
        <motion.div
          className="absolute w-4 h-3 bg-pink-300 rounded-full bottom-0 left-2"
          animate={{
            y: [0, 2, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            delay: 0.2,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute w-4 h-3 bg-pink-300 rounded-full bottom-0 right-2"
          animate={{
            y: [0, 2, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            delay: 0.7,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

      <motion.p
        className="mt-6 text-lg font-medium text-pink-400"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        Loading...
      </motion.p>
    </div>
  )
}
