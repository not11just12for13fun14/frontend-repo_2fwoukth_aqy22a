import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Available for freelance and full-time roles
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hengki Kurniawan
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">
            IT Professional • System Integration • Cloud & DevOps • Backend Engineering
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 text-white font-medium shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
