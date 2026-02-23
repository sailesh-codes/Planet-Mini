import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity
        }}
        className="w-12 h-12 rounded-full border-4 border-primary border-t-secondary border-l-secondary"
      />
      <p className="text-muted-foreground font-display font-medium animate-pulse">Loading Planet Mini...</p>
    </div>
  );
}
