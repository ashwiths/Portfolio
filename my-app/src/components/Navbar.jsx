import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'featured', label: 'Work' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const { dark, toggle } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'glass-card shadow-card dark:shadow-card-dark mx-4 mt-3 rounded-2xl px-5 py-3'
                : 'bg-transparent px-6 py-5'
                }`}
        >
            <nav className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link to="hero" smooth duration={600} className="cursor-pointer">
                    <span className="font-handwritten text-2xl font-bold text-gradient">IA.</span>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth
                                duration={600}
                                offset={-80}
                                className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                                activeClass="text-purple-600 dark:text-purple-400 font-semibold"
                                spy
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggle}
                        className="p-2 rounded-full bg-white/60 dark:bg-dark-surface/60 border border-white/60 dark:border-dark-border hover:scale-110 transition-transform shadow-sm"
                        aria-label="Toggle theme"
                    >
                        {dark ? <FiSun className="w-4 h-4 text-yellow-400" /> : <FiMoon className="w-4 h-4 text-purple-600" />}
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 rounded-full bg-white/60 dark:bg-dark-surface/60 border border-white/60 dark:border-dark-border"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menu"
                    >
                        {menuOpen ? <FiX className="w-4 h-4 text-gray-700 dark:text-gray-300" /> : <FiMenu className="w-4 h-4 text-gray-700 dark:text-gray-300" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-3 glass-card p-4 rounded-xl"
                    >
                        <ul className="flex flex-col gap-3">
                            {navLinks.map(link => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth
                                        duration={600}
                                        offset={-80}
                                        onClick={() => setMenuOpen(false)}
                                        className="cursor-pointer block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors py-1"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
