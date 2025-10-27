'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
  interval?: number; // milliseconds between slides
  className?: string;
}

export function ImageCarousel({ images, interval = 4000, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, images.length, interval]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain rounded-xl bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Progress Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
              {index === currentIndex && !isPaused && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-white"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: interval / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Pause indicator (subtle) */}
      {isPaused && images.length > 1 && (
        <motion.div
          className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          Paused
        </motion.div>
      )}
    </div>
  );
}

