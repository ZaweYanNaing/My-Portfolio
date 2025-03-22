import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white px-4" id="about">
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            I am a passionate full-stack developer with a strong background in technology and education. 
            I am currently pursuing a Level-5 Diploma in NCC Education and was previously a second-year 
            student at Mandalay University.
          </p>
          <p>
            As a freelancer, I specialize in both teaching and developing tailored technological solutions. 
            I teach Cambridge Computing to primary students while working on various projects that enhance 
            educational and business processes.
          </p>
          <p>
            My recent achievement includes winning third prize in the Startup Weekend competition 
            organized by Techstars in Mandalay.
          </p>
        </div>
      </motion.div>
    </section>
  );
}