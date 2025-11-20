import { motion } from 'framer-motion';
import { Server, Cloud, Code } from 'lucide-react';

const items = [
  {
    icon: Server,
    title: 'Systems & Infrastructure',
    desc: 'Designing resilient architectures, optimizing performance, and automating deployments with modern tooling.'
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Hands-on with AWS, CI/CD pipelines, containerization, and infrastructure as code best practices.'
  },
  {
    icon: Code,
    title: 'Backend Engineering',
    desc: 'Building scalable services and APIs with Python, Node.js, and modern databases.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
          <p className="mt-4 text-white/80">
            I help teams ship reliable, modern systems. With a strong foundation in systems integration and cloud-native tooling, I bring a pragmatic approach to delivering value quickly and safely.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-500 to-rose-500 text-white shadow-lg shadow-red-500/30">
                <it.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
