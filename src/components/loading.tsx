import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-1 justify-center items-center bg-white h-[70vh]">
      <motion.div
        className="box w-32 h-32 z-50"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["5%", "5%", "50%", "50%", "5%"],
          backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}
