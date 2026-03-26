import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiCheckCircle, FiExternalLink } from 'react-icons/fi';

const expBlueLab = {
    role: "Chief Executive Officer (CEO)",
    company: "BlueLab Technologies",
    badge: "Founder / CEO",
    location: "Remote",
    period: "Present",
    description: "Founder and CEO of BlueLab Technologies, a digital technology and web development agency focused on building modern web platforms and software solutions. Responsible for leading product development, managing projects, and guiding the technical direction of the company.",
    responsibilities: [
        "Founded and lead BlueLab Technologies as a digital development agency.",
        "Managed development of multiple web platforms and digital products.",
        "Led UI/UX design and full stack web development projects.",
        "Coordinated with team members and interns for project execution.",
    ],
    links: [
        { name: "BlueLab Website", url: "https://www.bluelabtech.space/" },
        { name: "Project Hub", url: "https://projecthub.bluelabtech.space/" },
        { name: "Project Check", url: "https://check.bluelabtech.space/" },
        { name: "DevKit", url: "https://dev.bluelabtech.space/" },
        { name: "SheetHub", url: "https://sheethub.bluelabtech.space/" }
    ],
    tech: ["React", "Tailwind CSS", "Web Development", "UI/UX Design", "Project Management"]
};

const expIntern = {
    role: "Full Stack Developer Intern",
    company: "CodeAlpha",
    location: "Coimbatore, India",
    period: "Internship",
    responsibilities: [
        'Code reviews and pair programming sessions',
        'Ensuring cross-browser compatibility across modern browsers',
        'API integration with third-party services',
        'Unit and integration testing for reliable builds',
        'Documentation of testing procedures and QA workflows',
    ]
};

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-pastel-mint/40 via-transparent to-pastel-sky/30 dark:from-dark-bg dark:to-dark-card/50" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="flex items-center gap-4 mb-16"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tape tape-mint text-xl">Experience</span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-teal-300 to-transparent dark:from-dark-border dark:to-transparent" />
                </motion.div>

                {/* Timeline Container */}
                <div className="relative pl-6 md:pl-8 border-l-2 border-dashed border-teal-300 dark:border-teal-800 space-y-16">

                    {/* ─── Entry 1: BlueLab CEO ─── */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[35px] md:-left-[43px] top-6 w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 shadow-[0_0_15px_rgba(20,184,166,0.5)] border-2 border-white dark:border-dark-bg" />

                        {/* Card */}
                        <div className="glass-card p-6 md:p-8 relative mt-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-300">
                            {/* Tape decorations */}
                            <div className="absolute -top-3 left-8 w-16 h-5 bg-teal-200/80 dark:bg-teal-900/50 rounded-sm shadow-tape rotate-[-2deg]" />
                            <div className="absolute -top-3 right-10 w-12 h-5 bg-sky-200/80 dark:bg-sky-900/50 rounded-sm shadow-tape rotate-[3deg]" />

                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                            {expBlueLab.role}
                                        </h3>
                                        <span className="px-3 py-1 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/40 dark:to-emerald-900/40 text-teal-800 dark:text-teal-300 text-xs font-bold rounded-full border border-teal-200 dark:border-teal-800/50 whitespace-nowrap">
                                            {expBlueLab.badge}
                                        </span>
                                    </div>
                                    <p className="text-teal-600 dark:text-teal-400 font-bold font-handwritten text-xl">
                                        {expBlueLab.company}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1.5 pt-1">
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        <FiMapPin className="w-3.5 h-3.5 text-teal-500/70" />
                                        {expBlueLab.location}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        <FiCalendar className="w-3.5 h-3.5 text-teal-500/70" />
                                        {expBlueLab.period}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                                {expBlueLab.description}
                            </p>

                            {/* Responsibilities */}
                            <div className="mb-7">
                                <h4 className="text-sm font-bold text-gray-700 dark:text-gray-200 mb-3 font-handwritten tracking-wide">Key Responsibilities:</h4>
                                <ul className="space-y-2.5">
                                    {expBlueLab.responsibilities.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-3"
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 + 0.2, duration: 0.3 }}
                                        >
                                            <FiCheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-[3px] shrink-0" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-6 flex flex-wrap gap-2">
                                {expBlueLab.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-300 text-xs rounded-md shadow-sm border border-gray-200/50 dark:border-dark-border/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="pt-5 border-t border-gray-200 dark:border-dark-border flex flex-wrap gap-3">
                                {expBlueLab.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-white dark:bg-dark-card text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors shadow-sm"
                                    >
                                        {link.name}
                                        <FiExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Entry 2: Intern ─── */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[35px] md:-left-[43px] top-6 w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-400 border-2 border-white dark:border-dark-bg" />

                        {/* Card */}
                        <div className="glass-card p-6 md:p-8 relative mt-2 opacity-90 hover:opacity-100 transition-opacity">
                            <div className="absolute -top-3 left-12 w-10 h-5 bg-purple-200/80 dark:bg-purple-900/50 rounded-sm shadow-tape rotate-[1deg]" />

                            {/* Header */}
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                                        {expIntern.role}
                                    </h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-bold font-handwritten text-lg">
                                        {expIntern.company}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1.5 pt-1">
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        <FiMapPin className="w-3.5 h-3.5 text-purple-400/70" />
                                        {expIntern.location}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 font-medium">
                                        <FiCalendar className="w-3.5 h-3.5 text-purple-400/70" />
                                        {expIntern.period}
                                    </span>
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <ul className="space-y-2.5">
                                {expIntern.responsibilities.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.4, duration: 0.3 }}
                                    >
                                        <FiCheckCircle className="w-4 h-4 text-purple-500 dark:text-purple-400 mt-[3px] shrink-0" />
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
