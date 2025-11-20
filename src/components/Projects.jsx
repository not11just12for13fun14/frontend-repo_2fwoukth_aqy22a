import { motion } from 'framer-motion';
import { ServerCog, ShieldCheck, CloudCog } from 'lucide-react';

const projects = [
  {
    icon: ServerCog,
    title: 'Microservices Platform',
    tags: ['FastAPI', 'gRPC', 'MongoDB', 'Kubernetes'],
    desc: 'Designed and deployed a containerized microservices ecosystem with observability, auth, and autoscaling.'
  },
  {
    icon: ShieldCheck,
    title: 'Zero-Downtime Migrations',
    tags: ['Postgres', 'Redis', 'Blue/Green', 'CI/CD'],
    desc: 'Implemented strategies to migrate data and roll out features with zero downtime and instant rollback.'
  },
  {
    icon: CloudCog,
    title: 'Cloud Cost Optimization',
    tags: ['AWS', 'Terraform', 'FinOps'],
    desc: 'Reduced infrastructure cost by 32% by rightsizing, autoscaling policies, and spot instance strategies.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-black via-black to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,88,12,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <p className="mt-4 text-white/80">A selection of work that highlights problem solving, performance, and reliability.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-500 to-rose-500 text-white shadow-lg shadow-red-500/30">
                <p.icon />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-md bg-white/10 text-white/80 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
