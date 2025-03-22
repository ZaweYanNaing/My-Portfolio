import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code2, FolderGit2, Trophy, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: User },
    { href: "#skills", label: "Skills", icon: Code2 },
    { href: "#projects", label: "Projects", icon: FolderGit2 },
    { href: "#achievements", label: "Achievements", icon: Trophy },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-gray-900"
            >
              Zawe YN
            </motion.a>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <button
              className="md:hidden text-gray-600 hover:text-red-600 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-white z-50 md:hidden shadow-xl"
            >
              <div className="p-4 flex justify-end">
                <button
                  className="text-gray-600 hover:text-red-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="px-4 py-2 space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 text-gray-600 hover:text-red-600 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                      whileHover={{ x: 4 }}
                    >
                      <Icon size={20} />
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}