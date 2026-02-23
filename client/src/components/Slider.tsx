import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

interface SliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Slider({ slides, autoPlay = true, interval = 5000 }: SliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col lg:flex-row items-center"
        >
          {/* Content */}
          <div className="flex-1 z-10 text-center lg:text-left p-8 lg:p-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-4 lg:mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0 mb-6 lg:mb-10"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href={slides[currentSlide].buttonLink}
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {slides[currentSlide].buttonText}
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full h-full relative min-h-[300px] lg:min-h-[400px] mt-8 lg:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="rounded-3xl shadow-lg w-64 h-64 md:w-80 md:h-80 object-cover"
                />
                <div className="absolute -top-4 -right-4 text-4xl animate-pulse">✨</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-pulse">⭐</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white/90 transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white/90 transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-primary w-8' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
