import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import Sticker from './Sticker';

const responsibilities = [
    'Code reviews and pair programming sessions',
    'Ensuring cross-browser compatibility across modern browsers',
    'API integration with third-party services',
    'Unit and integration testing for reliable builds',
    'Documentation of testing procedures and QA workflows',
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-pastel-mint/40 via-transparent to-pastel-sky/30 dark:from-dark-bg dark:to-dark-card/50" />

            {/* Stickers */}
            <Sticker emoji="💼" className="top-12 right-10 md:right-28" animDelay={0.5} size="text-3xl" style={{ position: 'absolute' }} />
            <Sticker emoji="🏢" className="bottom-16 left-8 md:left-20" animDelay={0.8} size="text-2xl" style={{ position: 'absolute' }} />

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="flex items-center gap-4 mb-14"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tape tape-mint text-xl">Experience</span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-green-300 to-transparent dark:from-dark-border dark:to-transparent" />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-pink-200 to-transparent dark:from-purple-700 dark:via-pink-900 dark:to-transparent" />

                    <motion.div
                        className="relative pl-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute left-4 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 shadow-lg border-2 border-white dark:border-dark-bg" />

                        {/* Card */}
                        <div className="glass-card p-7 relative">
                            {/* Tape decorations */}
                            <div className="absolute -top-3 left-8 w-14 h-5 bg-green-200/80 dark:bg-green-900/50 rounded-sm shadow-tape rotate-[-1deg]" />
                            <div className="absolute -top-3 right-10 w-10 h-5 bg-purple-200/80 dark:bg-purple-900/50 rounded-sm shadow-tape rotate-[2deg]" />

                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                                        Full Stack Developer Intern
                                    </h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-semibold font-handwritten text-lg">
                                        CodeAlpha
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                                        <FiMapPin className="w-3 h-3" />
                                        Coimbatore, India
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                                        <FiCalendar className="w-3 h-3" />
                                        Internship
                                    </span>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <ul className="space-y-3">
                                {responsibilities.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                                    >
                                        <FiCheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 mt-0.5 shrink-0" />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
