import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.12),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s work together</h2>
        <p className="mt-4 text-white/80">Have a project or role in mind? I’d love to hear from you.</p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 grid sm:grid-cols-2 gap-4 text-left"
        >
          <input required placeholder="Name" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/60" />
          <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/60" />
          <input placeholder="Subject" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/60" />
          <textarea required rows="4" placeholder="Message" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/60" />
          <div className="sm:col-span-2">
            <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 text-white font-medium shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
