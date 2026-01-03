"use client";

import { useState } from "react";
import { Image } from "@heroui/image";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { Button } from "@heroui/button";

interface GalleryImage {
  title: string;
  img: string;
}

interface Category {
  name: string;
  label: string;
  icon: string;
  description: string;
  thumbnail: string;
  images: GalleryImage[];
}

export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories: Category[] = [
    {
      name: "harusi",
      label: "Harusi",
      icon: "💍",
      description: "Mapambo ya harusi ya kifahari",
      thumbnail: "/gallery-harusi.png",
      images: [
        {
          title: "Harusi ya Kifahari",
          img: "/gallery-harusi.png",
        },
        {
          title: "Meza ya Arusi",
          img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Mapambo ya Harusi",
          img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
        },
        {
          title: "Ukumbi wa Arusi",
          img: "https://images.unsplash.com/photo-1519167758481-83f29da8c9d7?q=80&w=2070&auto=format&fit=crop",
        },
      ],
    },
    {
      name: "mahafali",
      label: "Mahafali",
      icon: "🎉",
      description: "Sherehe na mahafali ya kila aina",
      thumbnail: "/gallery-mahafali.png",
      images: [
        {
          title: "Mahafali ya Kifahari",
          img: "/gallery-mahafali.png",
        },
        {
          title: "Meza ya Sherehe",
          img: "https://images.unsplash.com/photo-1478146896981-b80fe4634430?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Mapambo ya Sherehe",
          img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
        },
        {
          title: "Ukumbi wa Sherehe",
          img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        },
      ],
    },
    {
      name: "birthday",
      label: "Birthday",
      icon: "🎂",
      description: "Mapambo ya siku ya kuzaliwa",
      thumbnail: "/gallery-birthday.png",
      images: [
        {
          title: "Birthday ya Kifahari",
          img: "/gallery-birthday.png",
        },
        {
          title: "Meza ya Birthday",
          img: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Mapambo ya Birthday",
          img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
        },
        {
          title: "Cake Table",
          img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?q=80&w=2070&auto=format&fit=crop",
        },
      ],
    },
    {
      name: "corporate",
      label: "Matukio ya Biashara",
      icon: "🏢",
      description: "Matukio ya kikampuni na kibiashara",
      thumbnail: "/gallery-corporate.png",
      images: [
        {
          title: "Tukio la Biashara",
          img: "/gallery-corporate.png",
        },
        {
          title: "Mkutano wa Kibiashara",
          img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
        },
        {
          title: "Gala ya Kampuni",
          img: "https://images.unsplash.com/photo-1519167758481-83f29da8c9d7?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Semina ya Kifahari",
          img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
        },
      ],
    },
  ];

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(0);
  };

  const handleNext = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) =>
        prev === selectedCategory.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevious = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedCategory.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      {/* Category Grid */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {categories.map((category) => (
          <Card
            key={category.name}
            isPressable
            onPress={() => handleCategoryClick(category)}
            className="group hover:scale-105 transition-transform"
          >
            <CardBody className="p-0">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={category.thumbnail}
                  alt={category.label}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <div className="text-white">
                    <p className="text-3xl mb-2">{category.icon}</p>
                    <h3 className="text-2xl font-bold mb-1">{category.label}</h3>
                    <p className="text-sm text-white/80">{category.description}</p>
                    <p className="text-xs text-white/60 mt-2">
                      {category.images.length} picha
                    </p>
                  </div>
                </div>
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-[#B76E79]/0 group-hover:bg-[#B76E79]/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3">
                    <span className="text-[#B76E79] font-bold">Bonyeza kuona →</span>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex flex-col items-start gap-1 p-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-[#B76E79]">{category.label}</h3>
              </div>
              <p className="text-sm text-default-500">{category.description}</p>
              <p className="text-xs text-default-400 mt-1">
                {category.images.length} picha
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal with Image Carousel */}
      <Modal
        isOpen={selectedCategory !== null}
        onClose={handleClose}
        size="5xl"
        classNames={{
          base: "bg-transparent shadow-none",
          backdrop: "bg-black/90",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 text-white">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{selectedCategory?.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{selectedCategory?.label}</h2>
                <p className="text-sm text-white/70">
                  {selectedCategory && `${currentImageIndex + 1} / ${selectedCategory.images.length}`}
                </p>
              </div>
            </div>
          </ModalHeader>
          <ModalBody className="pb-8">
            {selectedCategory && (
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={selectedCategory.images[currentImageIndex].img}
                    alt={selectedCategory.images[currentImageIndex].title}
                    className="w-full max-h-[70vh] object-contain bg-black/20"
                  />

                  {/* Category Badge - Top */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-[#B76E79] to-[#D48E98] text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                      <span className="flex items-center gap-2 font-bold">
                        {selectedCategory.icon} {selectedCategory.label}
                      </span>
                    </div>
                  </div>

                  {/* Image Title - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl font-bold">
                      {selectedCategory.images[currentImageIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  isIconOnly
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white"
                  radius="full"
                  size="lg"
                  onPress={handlePrevious}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>

                <Button
                  isIconOnly
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white"
                  radius="full"
                  size="lg"
                  onPress={handleNext}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {selectedCategory.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden border-3 transition-all ${index === currentImageIndex
                        ? "border-[#B76E79] scale-110"
                        : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                      <Image
                        src={image.img}
                        alt={image.title}
                        className="w-20 h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};