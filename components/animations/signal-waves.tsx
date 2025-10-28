import { motion } from "framer-motion";

export default function SignalWaves() {
  return (
    <div className="relative flex items-center justify-center w-40 h-40">
      {/* Círculo central (la antena o punto emisor) */}
      <div className="w-4 h-4 bg-black rounded-full z-10" />

      {/* Ondas animadas */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border border-black rounded-full"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 15, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6, // desfase entre ondas
          }}
        />
      ))}
    </div>
  );
}
