"use client"

import { motion } from 'framer-motion'

export function AIInsights({ tips }: { tips: string[] }) {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    >
      {tips.map((tip) => (
        <motion.li
          key={tip}
          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
          className="text-sm mb-2"
        >
          • {tip}
        </motion.li>
      ))}
    </motion.ul>
  )
}
