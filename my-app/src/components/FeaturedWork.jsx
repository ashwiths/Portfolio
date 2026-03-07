import { motion } from 'framer-motion';
import { FiExternalLink, FiGlobe } from 'react-icons/fi';

const products = [
    {
        name: 'BlueLab Technologies',
        url: 'https://www.bluelabtech.space/',
        shortUrl: 'bluelabtech.space',
        description:
            'A modern technology agency website presenting digital services such as web development, UI/UX design, and SEO solutions. Highlights the company\'s mission, services, and internship opportunities with a clean professional interface.',
        tech: ['React', 'Tailwind CSS', 'Responsive UI'],
        features: ['Modern landing page design', 'Service showcase', 'Internship information', 'Clean responsive layout'],
        emoji: '🔵',
        gradient: 'from-blue-500 to-cyan-400',
        accent: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200/70 dark:border-blue-700/40',
        badgeColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
        tagColor: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300',
        rot: '-1deg',
    },
    {
        name: 'ProjectHub',
        url: 'https://projecthub.bluelabtech.space/',
        shortUrl: 'projecthub.bluelabtech.space',
        description:
            'A platform that helps students and developers discover and explore software projects. Acts as a project learning hub where users can browse different ideas and resources for building technical projects.',
        tech: ['React', 'Tailwind CSS'],
        features: ['Project listing system', 'Organized categories', 'Developer-friendly interface', 'Learning-oriented platform'],
        emoji: '📦',
        gradient: 'from-violet-500 to-purple-400',
        accent: 'bg-violet-50 dark:bg-violet-900/20',
        border: 'border-violet-200/70 dark:border-violet-700/40',
        badgeColor: 'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300',
        tagColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
        rot: '1deg',
    },
    {
        name: 'Check Platform',
        url: 'https://check.bluelabtech.space/',
        shortUrl: 'check.bluelabtech.space',
        description:
            'A web utility platform designed for testing, experimenting, and verifying different web functionalities. Built as a lightweight experimental environment for development testing and rapid prototyping.',
        tech: ['React', 'Tailwind CSS'],
        features: ['Utility testing interface', 'Simple functional layout', 'Fast and lightweight', 'Experimental environment'],
        emoji: '✅',
        gradient: 'from-emerald-500 to-teal-400',
        accent: 'bg-emerald-50 dark:bg-emerald-900/20',
        border: 'border-emerald-200/70 dark:border-emerald-700/40',
        badgeColor: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
        tagColor: 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300',
        rot: '-2deg',
    },
];

export default function FeaturedWork() {
    return (
        <section id="featured" className="relative py-24 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-sky/50 via-pastel-cream to-pastel-lilac/40 dark:from-dark-bg dark:via-dark-card/60 dark:to-dark-surface/40" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tape tape-blue text-xl">Featured Work</span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-transparent dark:from-dark-border dark:to-transparent" />
                </motion.div>

                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h2 className="section-title text-gray-800 dark:text-gray-100 mb-2">
                        Products &amp; Platforms I Built 🚀
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl">
                        Real-world products live on the web — built from the ground up.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {products.map((project, i) => (
                        <motion.div
                            key={project.name}
                            className={`glass-card overflow-hidden group border ${project.border} flex flex-col`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -10, transition: { duration: 0.3, ease: 'easeOut' } }}
                        >
                            {/* Gradient top bar */}
                            <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`} />

                            <div className="p-6 flex flex-col flex-1">
                                {/* Header: emoji + Live badge */}
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-4xl">{project.emoji}</span>

                                    {/* "Live Project" sticker badge */}
                                    <motion.span
                                        className="sticker-badge bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800 text-xs"
                                        style={{ rotate: project.rot }}
                                        animate={{ rotate: [project.rot, `calc(${project.rot} * -0.5)`, project.rot] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                                        Live Project
                                    </motion.span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-1">
                                    {project.name}
                                </h3>

                                {/* URL */}
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors mb-3 w-fit"
                                >
                                    <FiGlobe className="w-3 h-3" />
                                    {project.shortUrl}
                                </a>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <ul className="mb-4 space-y-1.5">
                                    {project.features.map(f => (
                                        <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                                            <span className="text-purple-400 dark:text-purple-500">◆</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map(t => (
                                        <span
                                            key={t}
                                            className={`text-xs px-2.5 py-0.5 rounded-full font-medium border border-transparent ${project.tagColor}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Visit button — pushed to bottom */}
                                <div className="mt-auto">
                                    <motion.a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold border ${project.border} ${project.badgeColor} hover:shadow-sticker transition-all`}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                        Visit Website
                                    </motion.a>
                                </div>
                            </div>

                            {/* Subtle hover overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04]`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
