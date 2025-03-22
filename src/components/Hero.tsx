import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src="././images/hhp.jpg"
          alt="Profile"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 object-cover shadow-xl"
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Passionate Full-Stack Developer & Educator
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          I am a full-stack developer with expertise in building innovative digital solutions. Currently, I am attending a Level-5 Diploma in NCC Education while working as a freelance coder and educator.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="#projects"
            className="w-full md:w-auto bg-red-600 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
          >
            View My Projects
            <ArrowRight size={20} />
          </a>
          <a 
            href="#contact"
            className="w-full md:w-auto bg-gray-800 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}