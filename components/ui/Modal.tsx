"use client"

import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
const AnimatePresence = dynamic(() => import('framer-motion').then(m => m.AnimatePresence), { ssr: false })
const MotionDiv = dynamic(() => import('framer-motion').then(m => m.motion.div), { ssr: false })

export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={onClose}
        >
          <MotionDiv
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="max-w-lg w-full rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}
