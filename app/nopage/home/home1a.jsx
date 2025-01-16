"use client";
import React, { useState, useEffect } from "react";

const photos = ["/U1.jpg", "/U2.jpg", "/U3.png"];

const PhotoCarousel = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [direction, setDirection] = useState("next"); // Tracks the slide direction

  useEffect(() => {
    const interval = setInterval(() => goToNextPhoto(), 3000);
    return () => clearInterval(interval);
  }, []);

  const goToNextPhoto = () => {
    if (!isSliding) {
      setDirection("next");
      startSlideTransition((prevIndex) => (prevIndex + 1) % photos.length);
    }
  };

  const goToPrevPhoto = () => {
    if (!isSliding) {
      setDirection("prev");
      startSlideTransition((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
    }
  };

  const startSlideTransition = (calculateNextIndex) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentPhotoIndex(calculateNextIndex);
      setIsSliding(false);
    }, 500); // Match this to the animation duration
  };

  const getSlideClass = (index) => {
    // Determine the class based on the current slide, direction, and sliding state
    if (index === currentPhotoIndex) return "translate-x-0 z-10";
    if (isSliding) {
      if (direction === "next") {
        if (index === (currentPhotoIndex + 1) % photos.length)
          return "translate-x-full z-10";
        if (index === (currentPhotoIndex - 1 + photos.length) % photos.length)
          return "-translate-x-full z-0";
      } else {
        if (index === (currentPhotoIndex - 1 + photos.length) % photos.length)
          return "-translate-x-full z-10";
        if (index === (currentPhotoIndex + 1) % photos.length)
          return "translate-x-full z-0";
      }
    }
    return "hidden";
  };

  return (
    <div className="relative w-full h-[30vh] xl:h-[75vh] overflow-hidden rounded-md bg-back"> {/* Added fallback background */}
      <div className="relative w-full h-full">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${getSlideClass(
              index
            )}`}
          >
            <img
              src={photo}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-brown  text-white rounded-full opacity-70 hover:opacity-100 z-20"
        onClick={goToPrevPhoto}
        aria-label="Previous slide"
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-brown  text-white rounded-full opacity-70 hover:opacity-100 z-20"
        onClick={goToNextPhoto}
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isSliding) setCurrentPhotoIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${
              index === currentPhotoIndex ? "bg-brown" : "bg-back"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoCarousel;
