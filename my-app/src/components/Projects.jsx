import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Sticker from './Sticker';

const projects = [
    {
        title: 'Portfolio Website',
        description: 'A digital scrapbook-inspired personal portfolio built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode, and a playful sticker aesthetic.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        emoji: '🎨',
        gradient: 'from-purple-400 to-pink-400',
        github: 'https://github.com/ashwiths',
        color: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200/60 dark:border-purple-700/40',
    },
    {
        title: 'Full Stack Web App',
        description: 'A scalable full-stack web application with React frontend and Node.js backend. Implements REST API design, authentication, and cross-browser compatibility.',
        tech: ['React', 'Node.js', 'REST API', 'MongoDB'],
        emoji: '🚀',
        gradient: 'from-blue-400 to-cyan-400',
        github: 'https://github.com/ashwiths',
        color: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200/60 dark:border-blue-700/40',
    },
    {
        title: 'QA Testing Framework',
        description: 'A comprehensive testing suite featuring unit tests, integration tests, and cross-browser QA procedures. Includes testing documentation and CI-ready configurations.',
        tech: ['JavaScript', 'Testing', 'QA', 'Documentation'],
        emoji: '✅',
        gradient: 'from-green-400 to-emerald-400',
        github: 'https://github.com/ashwiths',
        color: 'bg-green-50 dark:bg-green-900/20',
        border: 'border-green-200/60 dark:border-green-700/40',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-peach/40 via-transparent to-pastel-lavender/30 dark:from-dark-surface/30 dark:to-dark-card/40" />

            {/* Stickers */}
            <Sticker emoji="📁" className="top-10 right-10 md:right-32" animDelay={0.3} size="text-3xl" style={{ position: 'absolute' }} />
            <Sticker emoji="💡" className="bottom-20 left-8 md:left-20" animDelay={0.6} size="text-3xl" style={{ position: 'absolute' }} />
            <Sticker emoji="🔧" className="top-1/2 left-4 md:left-12" animDelay={0.9} size="text-2xl" style={{ position: 'absolute' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="flex items-center gap-4 mb-14"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tape tape-pink text-xl">Projects</span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-pink-300 to-transparent dark:from-dark-border dark:to-transparent" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className={`glass-card overflow-hidden group relative ${project.border}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            {/* Color bar */}
                            <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

                            <div className="p-6">
                                {/* Emoji */}
                                <div className="text-3xl mb-3">{project.emoji}</div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map(t => (
                                        <span
                                            key={t}
                                            className="text-xs px-2 py-0.5 rounded-full bg-white/70 dark:bg-dark-surface/70 border border-gray-200/80 dark:border-dark-border text-gray-600 dark:text-gray-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-3">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <FiGithub className="w-4 h-4" />
                                        Code
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <FiExternalLink className="w-4 h-4" />
                                        Demo
                                    </motion.a>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
