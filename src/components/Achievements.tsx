import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 px-4" id="achievements">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Achievements</h2>
        <motion.div
          ref={ref}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex items-start gap-4 flex-1">
              <Trophy className="text-red-600 w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Third Prize Winner – Startup Weekend (Techstars, Mandalay)
                </h3>
                <p className="text-gray-600 mb-4">
                  Collaborated with a team to design and present an innovative tech solution within 54 hours.
                </p>
              </div>
            </div>
            <motion.img
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              src="././images/startup.jpg"
              alt="Startup Weekend Award"
              className="w-full md:w-64 h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}