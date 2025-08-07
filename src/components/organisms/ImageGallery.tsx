"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface ImageGalleryProps {
  images?: string[];
  title?: string;
}

export default function ImageGallery({ images = [], title = 'Game Image' }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '');

  return (
    <div>
      <div className="bg-black/20 rounded-lg p-4 border border-white/10 mb-4">
        <AnimatePresence mode="wait">
          <motion.img 
            key={selectedImage}
            src={selectedImage} 
            alt={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-96 object-contain rounded-md"
          />
        </AnimatePresence>
      </div>
      <div className="flex gap-4 overflow-x-auto p-2">
        {images.map((img, index) => (
          <button 
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === img ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'}`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}