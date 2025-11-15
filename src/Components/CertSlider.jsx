import React, { useState, useRef, useEffect } from 'react'

// Simple certificate slider. Place your certificate images in src/assets/certs/
// and list them in the `images` array below (or pass them via props if desired).
export default function CertSlider({ images }) {
  const imgs = images && images.length ? images : [
    // defaults (replace with your real cert paths)
    '/src/assets/fronend.jpg',
    '/src/assets/lindin.jpg',
    '/src/assets/python.jpg',
    '/src/assets/webDesign.jpg',
    '/src/assets/kk.png',
  ]

  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)

  useEffect(() => {
    if (!imgs.length) return
    // Keep index in bounds
    if (index < 0) setIndex(imgs.length - 1)
    else if (index >= imgs.length) setIndex(0)
  }, [index, imgs.length])

  useEffect(() => {
    if (!imgs.length) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % imgs.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [imgs.length])

  const prev = () => setIndex((i) => (i - 1 + imgs.length) % imgs.length)
  const next = () => setIndex((i) => (i + 1) % imgs.length)

  return (
    <div className="relative">
      {/* slider viewport - image will fill this area (no outer frame) */}
  <div className="overflow-hidden rounded-md h-72 sm:h-96 md:h-112">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {imgs.map((src, i) => (
            <div key={i} className="shrink-0 w-full h-full flex items-center justify-center bg-transparent">
              {/* center and show full certificate without cropping */}
              <img
                src={src}
                alt={`certificate-${i}`}
                className="max-w-full max-h-full object-contain block bg-white"
              />
            </div>
          ))}
        </div>
      </div>

      {/* centered controls below the image */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="previous"
          className="w-11 h-11 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold shadow-lg transform transition duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none animate-fade-up"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="next"
          className="w-11 h-11 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold shadow-lg transform transition duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none animate-fade-up"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
            <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
