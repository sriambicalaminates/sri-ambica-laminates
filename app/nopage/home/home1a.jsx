"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const LaminateHomepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCatalogue, setSelectedCatalogue] = useState(null);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isPdfOpen) closePdf();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPdfOpen]);

  // ─── Converts any Google Drive share/view link → embeddable preview URL ───
  // Supports formats:
  //   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  //   https://drive.google.com/open?id=FILE_ID
  //   https://drive.google.com/uc?id=FILE_ID
  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('/preview')) return url; // already embeddable

    const fileIdMatch =
      url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
      url.match(/[?&]id=([a-zA-Z0-9_-]+)/);

    if (fileIdMatch) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }

    return url; // fallback (local paths still work)
  };

  const openPdf = (catalogue) => {
    if (catalogue.pdfUrl) {
      setSelectedCatalogue(catalogue);
      setIsPdfLoading(true);
      setIsPdfOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closePdf = useCallback(() => {
    setIsPdfOpen(false);
    setIsPdfLoading(false);
    setTimeout(() => setSelectedCatalogue(null), 350);
    document.body.style.overflow = 'unset';
  }, []);

  const features = [
    { icon: "🎨", title: "Endless Designs", description: "From classic wood grains to contemporary patterns" },
    { icon: "💎", title: "Premium Quality", description: "Scratch-resistant, water-proof, and built to last" },
    { icon: "🌿", title: "Eco-Conscious", description: "Sustainable materials for mindful living" },
    { icon: "⚡", title: "Easy Installation", description: "Transform your space in hours, not days" }
  ];

  // ─── Replace pdfUrl with your Google Drive share links ───
  // How to get the link: Drive → Right-click file → Share → Copy link
  // Make sure sharing is set to "Anyone with the link can view"
  const catalogues = [
    {
      name: "PRIONEX",
      color: "#43544a",
      image: "/Prionex.png",
      pdfUrl: "https://drive.google.com/file/d/1vLxbUcux5ZGobVUnLHiL9Hn-eWiWsJcA/view"
    },
    {
      name: "PAXORA",
      color: "#e06846",
      image: "/Paxora.png",
      pdfUrl: "https://drive.google.com/file/d/1goTAJSttXa2_WqFGkU2QWFf5X2tzaYja/view"
    },
    {
      name: "PLAINX",
      color: "#cbeef7",
      image: "/Plainx.png",
      pdfUrl: "https://drive.google.com/file/d/1M5hX5dx10VtBCe8RpSanG5TdEAZ2rfbL/view"
    },
    {
      name: "RANGREZ",
      color: "#c51b2c",
      image: "/Rangrez.png",
      pdfUrl: "https://drive.google.com/file/d/1CfgvPY_JeBCcHPLGcDYhmd-G7VR2pCF0/view"
    },
    {
      name: "PLEXA",
      color: "#a57865",
      image: "/Plexa.png",
      pdfUrl: "https://drive.google.com/file/d/19O1LkCjZzUDIFrkuyxDb3DU4w5pQnLa9/view"
    },
    {
      name: "WOODMA",
      color: "#cfe2de",
      image: "/Woodma.png",
      pdfUrl: "https://drive.google.com/file/d/14nsIvsU0HqIsmO9RW8MbI7Wwt7W--1Jc/view"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── Hero Section ── */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale }}
      >
        <div className="absolute inset-0 hidden md:block">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/back.webp')`,
            filter: 'brightness(0.8)'
          }} />
        </div>
        <div className="absolute inset-0 md:hidden">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('/back1.png')`,
            filter: 'brightness(0.7)'
          }} />
        </div>

        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -30 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <motion.h3
                className="text-xl md:text-2xl font-light tracking-[0.3em] text-amber-200 mb-2 mt-10"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                PREMIUM LAMINATES
              </motion.h3>
            </motion.div>

            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 100 }}
                transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 50 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="block">Where</span>
                <motion.span
                  className="block bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Surfaces
                </motion.span>
                <span className="block">Tell Stories</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Transform ordinary spaces into extraordinary experiences with our curated collection
              of artisan-inspired laminate sheets. Crafted for those who refuse to compromise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/catalogue">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-lg overflow-hidden"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  <motion.span className="absolute inset-0 bg-white" initial={{ x: '-100%' }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} style={{ opacity: 0.1 }} />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Catalogue
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                  </span>
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-white text-white font-semibold text-lg backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-300"
                  style={{ fontFamily: "'Archivo', sans-serif" }}
                >
                  Request Samples
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm tracking-wider font-light">SCROLL</span>
            <motion.div className="w-px h-16 bg-gradient-to-b from-gray-400 to-transparent" animate={{ scaleY: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ── Features Section ── */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Redefining <span className="text-amber-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">Every sheet is a testament to innovation, quality, and timeless design</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 hover:border-amber-500 transition-all duration-500">
                  <motion.div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-amber-500" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 + 0.3 }} />
                  <motion.div className="text-6xl mb-6" initial={{ rotate: 0 }} whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.6, ease: "easeInOut" }}>{feature.icon}</motion.div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-400 transition-colors" style={{ fontFamily: "'Archivo', sans-serif" }}>{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-light">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catalogue Section ── */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.05) 50px, rgba(255,255,255,0.05) 51px)` }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our <span className="text-amber-400">Catalogue</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">Curated selections that bring your vision to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {catalogues.map((catalogue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative h-60 md:h-80 overflow-hidden cursor-pointer"
                onClick={() => openPdf(catalogue)}
              >
                <div className="absolute inset-0">
                  <Image src={catalogue.image} alt={catalogue.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70" style={{ background: `linear-gradient(to bottom, transparent 0%, ${catalogue.color}60 50%, ${catalogue.color}90 100%)` }} />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{catalogue.name}</h3>
                  <motion.div className="flex items-center gap-2 text-amber-300" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: index * 0.1 + 0.3 }}>
                    <span className="font-light">View Catalogue</span>
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
                  </motion.div>
                </div>
                <motion.div className="absolute inset-0 border-2 border-amber-500" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Google Drive PDF Modal ── */}
        <AnimatePresence>
          {isPdfOpen && selectedCatalogue && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-0 z-50 flex flex-col"
              style={{ backgroundColor: 'rgba(0,0,0,0.97)' }}
            >
              {/* Backdrop click to close */}
              <div className="absolute inset-0" onClick={closePdf} />

              {/* Modal Panel */}
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.97 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Bar */}
                <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b border-amber-500/30 bg-black/90 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="w-1 h-8 bg-gradient-to-b from-amber-400 to-orange-600 rounded-full" />
                    <h3 className="text-xl md:text-2xl font-bold text-amber-400" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {selectedCatalogue.name} Catalogue
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Open in Drive button */}
                    <a
                      href={selectedCatalogue.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hidden sm:flex items-center gap-2 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-500/70 text-amber-300 text-sm font-medium rounded-lg transition-all duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Google Drive icon */}
                      <svg className="w-4 h-4" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                        <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#fbbf24"/>
                        <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#fbbf24"/>
                        <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#fbbf24"/>
                        <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#fcd34d"/>
                        <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#fcd34d"/>
                        <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#fde68a"/>
                      </svg>
                      Open in Drive
                    </a>

                    {/* Close button */}
                    <button
                      onClick={closePdf}
                      className="flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-200 group"
                    >
                      <span className="text-sm font-semibold">Close</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* PDF Viewer Area */}
                <div className="relative flex-1 overflow-hidden bg-neutral-950">
                  {/* Loading spinner */}
                  {isPdfLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-4 bg-neutral-950">
                      <motion.div
                        className="w-12 h-12 rounded-full border-4 border-amber-500/20 border-t-amber-500"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      <p className="text-amber-400/60 text-sm tracking-widest font-light">LOADING CATALOGUE…</p>
                    </div>
                  )}

                  {/*
                    key={} forces iframe remount when switching catalogues.
                    getEmbedUrl() auto-converts Drive share links → /preview format.
                    Drive's viewer handles all PDF rendering, pagination & zoom natively — fast & smooth.
                  */}
                  <iframe
                    key={selectedCatalogue.pdfUrl}
                    src={getEmbedUrl(selectedCatalogue.pdfUrl)}
                    className="w-full h-full"
                    allow="autoplay"
                    style={{
                      border: 'none',
                      opacity: isPdfLoading ? 0 : 1,
                      transition: 'opacity 0.4s ease'
                    }}
                    onLoad={() => setIsPdfLoading(false)}
                  />
                </div>

                {/* Bottom hint bar */}
                <div className="flex-shrink-0 flex items-center justify-center py-2 bg-black/70 border-t border-white/5">
                  <p className="text-gray-600 text-xs tracking-wider">
                    Use scroll or pinch to zoom · Press{' '}
                    <kbd className="px-1 py-0.5 bg-white/10 rounded text-gray-400">Esc</kbd> to close
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Quote Section ── */}
      <section className="py-32 bg-gradient-to-b from-black via-neutral-900 to-black">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <motion.div animate={{ rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-8xl md:text-9xl text-amber-500 mb-8 opacity-30">"</motion.div>
            <h3 className="text-3xl md:text-5xl font-light mb-8 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Not just surfaces. <br />
              <span className="text-amber-400 font-normal">Statements.</span> <br />
              Not just materials. <br />
              <span className="text-amber-400 font-normal">Masterpieces.</span>
            </h3>
            <motion.div initial={{ width: 0 }} whileInView={{ width: '200px' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-32 bg-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Transform <br /><span className="text-amber-400">Your Space?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
              Get in touch with our design experts and discover the perfect laminate solution for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg" style={{ fontFamily: "'Archivo', sans-serif" }}>
                  Get Free Consultation
                </motion.button>
              </Link>
              <Link href="/catalogue">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-12 py-6 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-colors duration-300" style={{ fontFamily: "'Archivo', sans-serif" }}>
                  View Catalog
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Archivo:wght@300;400;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');`
      }} />
    </div>
  );
};

export default LaminateHomepage;