import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Contact Me</h2>
        <div className="flex justify-center gap-8">
          <motion.a
            href="mailto:zaweyannaing121.phys@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <Mail size={24} />
            <span>Email</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/zawe-yan-naing-a4b1a0285"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/ZaweYanNaing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <Github size={24} />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}