import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Coffee, Hash, FileCode2, Layers, Subscript as Javascript, Terminal, Database, Figma as FigmaIcon, Brain, ClipboardList, Lightbulb, Languages } from 'lucide-react';

const skills = {
  technical: [
    { name: 'Java', icon: Coffee },
    { name: 'C#', icon: Hash },
    { name: 'HTML & CSS', icon: FileCode2 },
    { name: 'Bootstrap', icon: Layers },
    { name: 'JavaScript', icon: Javascript },
    { name: 'Python', icon: Terminal },
    { name: 'PHP', icon: Database },
    { name: 'Figma (for design)', icon: FigmaIcon },
  ],
  soft: [
    { name: 'Creativity', icon: Brain },
    { name: 'Project Management', icon: ClipboardList },
    { name: 'Innovation', icon: Lightbulb },
    { name: 'English Communication', icon: Languages },
  ],
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-gray-50 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-red-600" />
              Programming Languages & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.technical.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                >
                  <skill.icon className="text-red-600 w-5 h-5" />
                  <span className="text-sm md:text-base">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-red-600" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.soft.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                >
                  <skill.icon className="text-red-600 w-5 h-5" />
                  <span className="text-sm md:text-base">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}