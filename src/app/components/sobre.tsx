"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoverOverlay({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-75 z-50">
      <motion.div
        className="relative w-full h-full max-w-4xl max-h-96 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/sobre.png"
            alt="Cover Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      <div className="absolute inset-0 flex items-center justify-center">
  <button
    onClick={onOpen}
    className="bg-yellow-500 text-white text-2xl font-bold py-4 px-6 rounded-full shadow-lg flex items-center justify-center"
    style={{ width: '100px', height: '100px' }} // Ajusta el tamaño según sea necesario
  >
    ABRIR
  </button>
</div>
      </motion.div>
    </div>
  );
}
