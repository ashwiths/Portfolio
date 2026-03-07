import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiCheck } from 'react-icons/fi';
import { Link } from 'react-scroll';
import Sticker from './Sticker';
import HeroPhoto from './HeroPhoto';

const socials = [
    { icon: FiGithub, href: 'https://github.com/ashwiths', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/infant-ashil-a-b88a39361/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:infantashil55@gmail.com', label: 'Email' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Hero() {
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadComplete, setDownloadComplete] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);

        // Create an invisible link to trigger the download
        const link = document.createElement('a');
        link.href = '/Infant_Ashil_A_Resume.pdf';
        link.download = 'Infant_Ashil_A_Resume.pdf';
        document.body.appendChild(link);

        // Simulate a slight delay for the animation
        setTimeout(() => {
            link.click();
            document.body.removeChild(link);

            setIsDownloading(false);
            setDownloadComplete(true);

            // Reset button state after a few seconds
            setTimeout(() => {
                setDownloadComplete(false);
            }, 3000);
        }, 800);
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper-texture"
        >
            {/* ── Background gradient ── */}
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-lavender via-pastel-cream to-pastel-peach dark:from-dark-bg dark:via-dark-card dark:to-dark-surface" />

            {/* ── Ambient blobs ── */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-300/30 dark:bg-violet-900/22 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-rose-300/25 dark:bg-rose-900/12 blur-3xl" />
            <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-fuchsia-200/20 dark:bg-fuchsia-900/8 blur-3xl" />

            {/* ── Name glow ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] rounded-full bg-violet-400/15 dark:bg-violet-600/12 blur-3xl pointer-events-none" />

            {/* ── Floating stickers ── */}

            {/* Top-left: sparkle */}
            <Sticker type="sparkle" className="top-16 left-6 md:left-14 hidden sm:block" animDelay={0.4} size={54} rotate={-10} opacity={0.60} />

            {/* Top-right: terminal */}
            <Sticker type="terminal" className="top-14 right-5 md:right-14" animDelay={0.6} size={54} rotate={6} opacity={0.60} />

            {/* Mid-right: code tag (large screens only) */}
            <Sticker type="code" className="top-1/2 -translate-y-1/2 right-4 md:right-10 hidden lg:block" animDelay={0.9} size={52} rotate={-5} opacity={0.55} />

            {/* Bottom-left: git */}
            <Sticker type="git" className="bottom-28 left-5 md:left-14" animDelay={0.8} size={54} rotate={-8} opacity={0.60} />

            {/* Bottom-right: note + browser */}
            <Sticker type="note" className="bottom-36 right-5 md:right-14" animDelay={1.1} size={50} rotate={7} opacity={0.60} />
            <Sticker type="browser" className="bottom-10 right-5 md:right-12 hidden sm:block" animDelay={0.7} size={46} rotate={-4} opacity={0.55} />

            {/* ── Main content: two-column on md+, stacked on mobile ── */}
            <motion.div
                className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20">

                    {/* ── LEFT: Text content ── */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">

                        {/* Tape strip + welcome badge */}
                        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start mb-5 gap-1">
                            <div
                                className="w-24 h-5 rounded-sm opacity-75"
                                style={{
                                    background: 'rgba(167,139,250,0.42)',
                                    border: '1px solid rgba(167,139,250,0.55)',
                                    transform: 'rotate(-1deg)',
                                    boxShadow: '0 2px 6px rgba(139,92,246,0.10)',
                                }}
                            />
                            <span className="tape tape-purple font-handwritten text-lg">
                                👋 Welcome to my portfolio
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-handwritten text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gradient leading-none mb-4"
                        >
                            Infant Ashil A
                        </motion.h1>

                        {/* Title chip */}
                        <motion.div variants={itemVariants} className="mb-5">
                            <span className="inline-block font-handwritten text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200 bg-white/55 dark:bg-dark-card/55 px-5 py-2 rounded-full border border-violet-300/60 dark:border-dark-border shadow-sticker">
                                Full Stack Developer 💼
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-md mb-8 font-sans leading-relaxed"
                        >
                            Passionate about building responsive web applications that are fast, beautiful, and scalable.
                        </motion.p>

                        {/* Social icons & Resume Download */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10 items-center justify-center md:justify-start">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.18, rotate: -5, y: -3 }}
                                    whileTap={{ scale: 0.93 }}
                                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-sticker transition-colors shrink-0"
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}

                            {/* Resume Download Button */}
                            <motion.button
                                onClick={handleDownload}
                                disabled={isDownloading || downloadComplete}
                                whileHover={!isDownloading && !downloadComplete ? { scale: 1.05, y: -2 } : {}}
                                whileTap={!isDownloading && !downloadComplete ? { scale: 0.95 } : {}}
                                className={`relative h-12 px-6 rounded-full font-medium font-sans flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-sticker ml-2
                                    ${downloadComplete
                                        ? 'bg-green-500 text-white dark:bg-green-600'
                                        : 'bg-violet-600 text-white hover:bg-violet-500 dark:bg-violet-700 dark:hover:bg-violet-600'
                                    }`}
                            >
                                <AnimatePresence mode="wait">
                                    {isDownloading ? (
                                        <motion.div
                                            key="downloading"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="flex items-center gap-2"
                                        >
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Downloading...</span>
                                        </motion.div>
                                    ) : downloadComplete ? (
                                        <motion.div
                                            key="complete"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <FiCheck className="w-5 h-5" />
                                            <span>Downloaded!</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="flex items-center gap-2"
                                        >
                                            <FiDownload className="w-5 h-5" />
                                            <span>Resume</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Background progress animation overlay */}
                                {isDownloading && (
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute left-0 top-0 bottom-0 bg-white/20 pointer-events-none"
                                    />
                                )}
                            </motion.button>
                        </motion.div>

                        {/* Scroll CTA */}
                        <motion.div variants={itemVariants} className="flex w-full justify-center md:justify-start">
                            <Link to="about" smooth duration={700}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex flex-col items-center gap-1 text-sm text-gray-500 dark:text-gray-500 hover:text-purple-500 transition-colors cursor-pointer"
                                >
                                    <span className="font-handwritten text-base">scroll down</span>
                                    <motion.div
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <FiArrowDown className="w-5 h-5" />
                                    </motion.div>
                                </motion.button>
                            </Link>
                        </motion.div>

                    </div>

                    {/* ── RIGHT: Profile photo ── */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end"
                    >
                        <HeroPhoto />
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
