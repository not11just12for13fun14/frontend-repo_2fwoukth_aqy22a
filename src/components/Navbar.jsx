import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-red-500/30' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500 via-orange-500 to-rose-500 shadow-lg shadow-red-500/30" />
          <span className="text-white font-semibold tracking-tight">Hengki Kurniawan</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-white/80 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <div className="h-5 w-px bg-white/20" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Github size={20} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Linkedin size={20} /></a>
            <a href="#contact" className="text-white/80 hover:text-white"><Mail size={20} /></a>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3 bg-black/70 backdrop-blur-md">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-white/90">
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
