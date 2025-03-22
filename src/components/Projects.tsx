import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fitness Tracker App',
    description: 'An Android application (Kotlin) for tracking workouts, fitness goals, and performance.',
    tech: ['Kotlin', 'PHP', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=400&fit=crop',
  },
  {
    title: 'School Management System',
    description: 'A platform for managing student data, class schedules, and teacher records.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800&h=400&fit=crop',
  },
  {
    title: 'E-Commerce Website',
    description: 'An interactive platform for online transactions and product management.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}