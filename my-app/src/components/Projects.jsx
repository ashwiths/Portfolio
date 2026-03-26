import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

const projects = [
    {
        title: 'DevKit',
        description: 'A comprehensive developer toolkit platform featuring a suite of productivity tools — including a PDF suite, code utilities, and developer-focused utilities — all wrapped in a sleek, modern dashboard interface.',
        tech: ['React', 'Node.js', 'Express', 'JavaScript', 'Tailwind CSS'],
        emoji: '⚒️',
        gradient: 'from-blue-500 to-cyan-400',
        github: 'https://github.com/ashwiths',
        demo: 'https://dev.bluelabtech.space/',
        border: 'border-blue-300/60 dark:border-blue-600/40',
        featured: true,
    },
    {
        title: 'SheetHub',
        description: 'A smart spreadsheet collaboration hub that lets users create, manage, and share spreadsheets online. Built with a focus on real-time usability, clean UX, and powerful data handling.',
        tech: ['React', 'JavaScript', 'Node.js', 'CSS'],
        emoji: '📊',
        gradient: 'from-emerald-500 to-teal-400',
        github: 'https://github.com/ashwiths',
        demo: 'https://sheethub.bluelabtech.space/',
        border: 'border-emerald-300/60 dark:border-emerald-600/40',
        featured: true,
    },
    {
        title: 'Portfolio',
        description: 'A modern personal portfolio website built with React and JavaScript, showcasing projects, skills, and professional experience with smooth animations.',
        tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
        emoji: '🎨',
        gradient: 'from-purple-400 to-pink-400',
        github: 'https://github.com/ashwiths/Portfolio',
        demo: 'https://github.com/ashwiths/Portfolio',
        border: 'border-purple-200/60 dark:border-purple-700/40',
    },
    {
        title: 'Projecthub',
        description: 'A platform for students and developers to discover and explore software project ideas, organized by category with a developer-friendly interface.',
        tech: ['JavaScript', 'React', 'Node.js'],
        emoji: '📦',
        gradient: 'from-violet-400 to-indigo-400',
        github: 'https://github.com/ashwiths/Projecthub',
        demo: 'https://projecthub.bluelabtech.space/',
        border: 'border-violet-200/60 dark:border-violet-700/40',
    },
    {
        title: 'Terminalhub',
        description: 'An interactive terminal-style hub built with JavaScript, featuring Git and terminal commands organized into categories with copy-to-clipboard functionality.',
        tech: ['JavaScript', 'React', 'CSS'],
        emoji: '💻',
        gradient: 'from-slate-500 to-gray-400',
        github: 'https://github.com/ashwiths/Terminalhub',
        demo: 'https://github.com/ashwiths/Terminalhub',
        border: 'border-slate-200/60 dark:border-slate-700/40',
    },
    {
        title: 'Student Portal',
        description: 'A web-based student portal system designed to streamline academic workflows, manage student data, and provide a centralized dashboard for educational resources.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        emoji: '🎓',
        gradient: 'from-blue-400 to-sky-400',
        github: 'https://github.com/ashwiths/Student-portal-',
        demo: 'https://github.com/ashwiths/Student-portal-',
        border: 'border-blue-200/60 dark:border-blue-700/40',
    },
    {
        title: 'Student Feedback Automation',
        description: 'An automation tool that streamlines the collection, management, and analysis of student feedback for academic institutions, reducing manual processing effort.',
        tech: ['Automation', 'JavaScript', 'Node.js'],
        emoji: '📋',
        gradient: 'from-amber-400 to-orange-400',
        github: 'https://github.com/ashwiths/student-feedback-automation',
        demo: 'https://github.com/ashwiths/student-feedback-automation',
        border: 'border-amber-200/60 dark:border-amber-700/40',
    },
    {
        title: 'GenAI Malware Detection',
        description: 'A cutting-edge malware detection system leveraging Generative AI and machine learning to identify and classify malicious software patterns in real time.',
        tech: ['Python', 'GenAI', 'Machine Learning', 'Security'],
        emoji: '🛡️',
        gradient: 'from-red-400 to-rose-400',
        github: 'https://github.com/ashwiths/GenAI-Malware-Detection',
        demo: 'https://github.com/ashwiths/GenAI-Malware-Detection',
        border: 'border-red-200/60 dark:border-red-700/40',
    },
    {
        title: 'Trip Planning App',
        description: 'A smart trip planning web application that helps users organize travel itineraries, discover destinations, and manage trip details with an intuitive interface.',
        tech: ['JavaScript', 'React', 'API Integration'],
        emoji: '✈️',
        gradient: 'from-cyan-400 to-teal-400',
        github: 'https://github.com/ashwiths/Trip-planing',
        demo: 'https://github.com/ashwiths/Trip-planing',
        border: 'border-cyan-200/60 dark:border-cyan-700/40',
    },
    {
        title: 'Admit Dashboard',
        description: 'An admin dashboard for managing admissions, built with JavaScript. Provides an overview of applicants, status tracking, and data visualization for administrators.',
        tech: ['JavaScript', 'React', 'Dashboard', 'MongoDB'],
        emoji: '📊',
        gradient: 'from-indigo-400 to-blue-400',
        github: 'https://github.com/ashwiths/admit-dashboard',
        demo: 'https://github.com/ashwiths/admit-dashboard',
        border: 'border-indigo-200/60 dark:border-indigo-700/40',
    },
    {
        title: 'Passion Student AI Tutor (Hackathon)',
        description: 'A hackathon project — an AI-powered student tutor that delivers personalized learning experiences, answers academic queries, and adapts to individual student needs.',
        tech: ['JavaScript', 'AI', 'React', 'Node.js'],
        emoji: '🤖',
        gradient: 'from-fuchsia-400 to-pink-400',
        github: 'https://github.com/ashwiths/Passion_Student_AI_Tutor_Hackthon',
        demo: 'https://github.com/ashwiths/Passion_Student_AI_Tutor_Hackthon',
        border: 'border-fuchsia-200/60 dark:border-fuchsia-700/40',
    },
    {
        title: 'Passion Student AI Tutor',
        description: 'An AI-powered tutoring platform built with JavaScript that provides personalized academic assistance, adaptive learning paths, and interactive Q&A features.',
        tech: ['JavaScript', 'AI', 'React'],
        emoji: '📚',
        gradient: 'from-emerald-400 to-green-400',
        github: 'https://github.com/ashwiths/Passion_student_AI_Tutor',
        demo: 'https://github.com/ashwiths/Passion_student_AI_Tutor',
        border: 'border-emerald-200/60 dark:border-emerald-700/40',
    },
    {
        title: 'CRM System',
        description: 'A Customer Relationship Management system built with JavaScript for tracking leads, managing customer interactions, and visualizing sales pipeline data.',
        tech: ['JavaScript', 'React', 'CRM', 'Node.js'],
        emoji: '🤝',
        gradient: 'from-orange-400 to-amber-400',
        github: 'https://github.com/ashwiths/CRM',
        demo: 'https://github.com/ashwiths/CRM',
        border: 'border-orange-200/60 dark:border-orange-700/40',
    },
    {
        title: 'Null Media',
        description: 'A media-focused JavaScript project delivering content management and media display features with a clean, minimal interface for seamless user experience.',
        tech: ['JavaScript', 'Media', 'React', 'CSS'],
        emoji: '🎬',
        gradient: 'from-gray-500 to-zinc-400',
        github: 'https://github.com/ashwiths/null-media',
        demo: 'https://github.com/ashwiths/null-media',
        border: 'border-gray-200/60 dark:border-gray-700/40',
    },
    {
        title: 'Null Project',
        description: 'An experimental JavaScript project exploring innovative web development patterns, component architecture, and modern frontend tooling approaches.',
        tech: ['JavaScript', 'React', 'Experimental'],
        emoji: '🧪',
        gradient: 'from-lime-400 to-green-400',
        github: 'https://github.com/ashwiths/null-project',
        demo: 'https://github.com/ashwiths/null-project',
        border: 'border-lime-200/60 dark:border-lime-700/40',
    },
    {
        title: 'Tracker',
        description: 'A real-time tracking application built with JavaScript for monitoring and logging data, with a clean dashboard UI and progress visualization features.',
        tech: ['JavaScript', 'React', 'Tracking', 'UI'],
        emoji: '📍',
        gradient: 'from-pink-400 to-rose-400',
        github: 'https://github.com/ashwiths/tracker',
        demo: 'https://github.com/ashwiths/tracker',
        border: 'border-pink-200/60 dark:border-pink-700/40',
    },
    {
        title: 'Code Alpha',
        description: 'A CSS-focused web development project from a training program, featuring responsive design techniques, animations, and modern CSS layout patterns.',
        tech: ['CSS', 'HTML', 'Responsive Design'],
        emoji: '💅',
        gradient: 'from-sky-400 to-blue-400',
        github: 'https://github.com/ashwiths/code-alpa-1',
        demo: 'https://github.com/ashwiths/code-alpa-1',
        border: 'border-sky-200/60 dark:border-sky-700/40',
    },
    {
        title: 'ATM OCTA NET',
        description: 'An ATM simulation web project developed as part of the Octanet internship program, implementing ATM functionalities and user interface flows.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        emoji: '🏧',
        gradient: 'from-teal-400 to-emerald-400',
        github: 'https://github.com/ashwiths/ATM-OCTA-NET',
        demo: 'https://github.com/ashwiths/ATM-OCTA-NET',
        border: 'border-teal-200/60 dark:border-teal-700/40',
    },
    {
        title: 'Octanet Web Development',
        description: 'Web development projects completed as part of the Octanet internship, showcasing real-world frontend implementations and modern web design skills.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        emoji: '🌐',
        gradient: 'from-violet-400 to-purple-400',
        github: 'https://github.com/ashwiths/Octanet-web-development',
        demo: 'https://github.com/ashwiths/Octanet-web-development',
        border: 'border-violet-200/60 dark:border-violet-700/40',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-peach/40 via-transparent to-pastel-lavender/30 dark:from-dark-surface/30 dark:to-dark-card/40" />

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

                            <div className="p-6 relative">
                                {/* Featured badge */}
                                {project.featured && (
                                    <span className="absolute top-0 right-0 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-bl-xl rounded-tr-none bg-gradient-to-r from-yellow-400/90 to-orange-400/90 text-white shadow-md">
                                        <FiStar className="w-3 h-3" /> Featured
                                    </span>
                                )}

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
                                        href={project.demo}
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
