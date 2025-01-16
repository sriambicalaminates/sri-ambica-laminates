"use client";

import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2900); // Duration matching animation

    return () => clearTimeout(timer);
  }, []);

  if (!showPreloader) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-back z-50 h-screen"
    >
      <div className="relative flex items-center justify-center h-full w-full">
        <img
          src="/Logo1.png" // Make sure your logo path is correct
          alt="Loading"
          className="transition-transform duration-[2900ms] h-[40vh] md:h-[50vh] animate-scale-up"
        />
      </div>
    </div>
  );
};

export default Preloader;
