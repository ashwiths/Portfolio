import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

const socials = [
    { icon: FiGithub, href: 'https://github.com/ashwiths', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/infant-ashil-a-b88a39361/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:infantashil55@gmail.com', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden py-10 border-t border-gray-200/60 dark:border-dark-border/60">
            <div className="absolute inset-0 bg-gradient-to-r from-pastel-lavender/30 to-pastel-cream/30 dark:from-dark-card/50 dark:to-dark-bg/50" />
            <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <p className="font-handwritten text-xl font-bold text-gradient">Infant Ashil A</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                        Made with{' '}
                        <FiHeart className="inline w-3 h-3 text-red-400" />
                        {' '}and a lot of ☕
                    </p>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-3">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{ scale: 1.15, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 shadow-sticker transition-colors"
                        >
                            <Icon className="w-4 h-4" />
                        </motion.a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-xs text-gray-400 dark:text-gray-600">
                    © {new Date().getFullYear()} Infant Ashil A
                </p>
            </div>
        </footer>
    );
}
