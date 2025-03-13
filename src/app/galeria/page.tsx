'use client'

import { useState } from 'react';

interface ImageData {
  src: string;
  alt: string;
}

export default function ImageGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    { src: '/FotosHexa/hexa-foto-1.jpeg', alt: 'hexa fotos 1' },
    { src: "/FotosHexa/hexa-foto-2.jpeg", alt: "hexa fotos 2" },
    { src: "/FotosHexa/hexa-foto-3.jpeg", alt: "hexa fotos 3" },
    { src: "/FotosHexa/hexa-foto-4.jpeg", alt: "hexa fotos 4" },
    { src: "/FotosHexa/hexa-foto-5.jpeg", alt: "hexa fotos 5" },
    { src: "/FotosHexa/hexa-foto-6.jpeg", alt: "hexa fotos 6" },
    { src: "/FotosHexa/hexa-foto-7.jpeg", alt: "hexa fotos 7" },
    { src: "/FotosHexa/hexa-foto-8.jpeg", alt: "hexa fotos 8" },
    { src: "/FotosHexa/hexa-foto-9.jpeg", alt: "hexa fotos 9" },
    { src: "/FotosHexa/hexa-foto-10.jpeg", alt: "hexa fotos 10" },
    { src: "/FotosHexa/hexa-foto-11.jpeg", alt: "hexa fotos 11" },
    { src: "/FotosHexa/hexa-foto-12.jpeg", alt: "hexa fotos 12" },
    { src: "/FotosHexa/hexa-foto-13.jpeg", alt: "hexa fotos 13" },
    { src: "/FotosHexa/hexa-foto-14.jpeg", alt: "hexa fotos 14" },
    // ... other images
  ];

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="  w-3/4 justify-center mx-auto">
      <div className="flex flex-wrap gap-5 mt-5">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer " onClick={() => handleImageClick(image)}>
            <img
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
            
              className="rounded-lg shadow-md aspect-square "
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75">
          <img
            src={selectedImage?.src}
            alt={selectedImage?.alt}
            onClick={handleModalClose}
            className="max-w-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}