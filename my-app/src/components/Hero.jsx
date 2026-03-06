import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';
import Sticker from './Sticker';

const socials = [
    { icon: FiGithub, href: 'https://github.com/ashwiths', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/infant-ashil-a-b88a39361/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:infantashil55@gmail.com', label: 'Email' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper-texture"
        >
            {/* Gradient BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-lavender via-pastel-cream to-pastel-peach dark:from-dark-bg dark:via-dark-card dark:to-dark-surface" />

            {/* Floating blobs */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-300/35 dark:bg-violet-900/25 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-rose-300/30 dark:bg-rose-900/15 blur-3xl" />
            <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-fuchsia-200/25 dark:bg-fuchsia-900/10 blur-3xl" />

            {/* Floating stickers */}
            <Sticker emoji="✨" className="top-28 left-12 md:left-24" animDelay={0.4} size="text-4xl" style={{ position: 'absolute' }} />
            <Sticker emoji="🚀" className="top-40 right-12 md:right-32" animDelay={0.7} size="text-3xl" style={{ position: 'absolute' }} />
            <Sticker emoji="💻" className="bottom-32 left-16 md:left-40" animDelay={0.9} size="text-3xl" style={{ position: 'absolute' }} />
            <Sticker emoji="⭐" className="top-1/2 right-8 md:right-20" animDelay={0.5} size="text-2xl" style={{ position: 'absolute' }} />
            <Sticker emoji="🎨" className="bottom-48 right-16 md:right-48" animDelay={1.1} size="text-3xl" style={{ position: 'absolute' }} />
            <Sticker emoji="📌" className="top-20 right-1/3" animDelay={0.6} size="text-2xl" style={{ position: 'absolute' }} />

            {/* Tape strip decorations */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-6 bg-violet-300/60 dark:bg-violet-900/40 rounded-sm shadow-tape rotate-[-1deg] opacity-80" />
            <div className="absolute top-10 right-1/4 w-24 h-5 bg-rose-300/50 dark:bg-rose-900/30 rounded-sm shadow-tape rotate-[2deg] opacity-70 hidden md:block" />

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-6 max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={itemVariants} className="flex justify-center mb-6">
                    <span className="tape tape-purple font-handwritten text-lg">
                        👋 Welcome to my portfolio
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="font-handwritten text-6xl md:text-8xl lg:text-9xl font-bold text-gradient mb-4 leading-none"
                >
                    Infant Ashil A
                </motion.h1>

                {/* Title */}
                <motion.div variants={itemVariants} className="mb-4">
                    <span className="inline-block font-handwritten text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 bg-white/50 dark:bg-dark-card/50 px-5 py-2 rounded-full border border-violet-300/60 dark:border-dark-border shadow-sticker">
                        Full Stack Developer 💼
                    </span>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10 font-sans"
                >
                    Passionate about building responsive web applications that are fast, beautiful, and scalable.
                </motion.p>

                {/* Social icons */}
                <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{ scale: 1.15, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-sticker"
                        >
                            <Icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll CTA */}
                <motion.div variants={itemVariants} className="flex justify-center">
                    <Link to="about" smooth duration={700}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center gap-1 text-sm text-gray-500 dark:text-gray-500 hover:text-purple-500 transition-colors cursor-pointer"
                        >
                            <span className="font-handwritten text-base">scroll down</span>
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <FiArrowDown className="w-5 h-5" />
                            </motion.div>
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
