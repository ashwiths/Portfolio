import { motion } from 'framer-motion';
import Sticker from './Sticker';

const skills = [
    { name: 'HTML', emoji: '🏗️', color: 'bg-rose-100    dark:bg-rose-900/30    text-rose-700    dark:text-rose-300', border: 'border-rose-300/60' },
    { name: 'CSS', emoji: '🎨', color: 'bg-violet-100  dark:bg-violet-900/30  text-violet-700  dark:text-violet-300', border: 'border-violet-300/60' },
    { name: 'React', emoji: '⚛️', color: 'bg-sky-100     dark:bg-sky-900/30     text-sky-700     dark:text-sky-300', border: 'border-sky-300/60' },
    { name: 'Web Performance', emoji: '⚡', color: 'bg-amber-100   dark:bg-amber-900/30   text-amber-700   dark:text-amber-300', border: 'border-amber-300/60' },
    { name: 'Web Analytics', emoji: '📊', color: 'bg-purple-100  dark:bg-purple-900/30  text-purple-700  dark:text-purple-300', border: 'border-purple-300/60' },
    { name: 'Quality Assurance', emoji: '✅', color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300', border: 'border-emerald-300/60' },
    { name: 'Teamwork', emoji: '🤝', color: 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-300', border: 'border-fuchsia-300/60' },
    { name: 'Video Editing', emoji: '🎬', color: 'bg-pink-100    dark:bg-pink-900/30    text-pink-700    dark:text-pink-300', border: 'border-pink-300/60' },
];

const rotations = [-3, 2, -1, 3, -2, 1, -3, 2];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-pastel-lilac/50 via-transparent to-pastel-peach/40 dark:from-dark-surface/30 dark:to-dark-card/30" />

            {/* Stickers */}
            <Sticker emoji="🏷️" className="top-12 left-8 md:left-24" animDelay={0.4} size="text-3xl" style={{ position: 'absolute' }} />
            <Sticker emoji="🎯" className="bottom-12 right-8 md:right-24" animDelay={0.7} size="text-3xl" style={{ position: 'absolute' }} />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    className="flex items-center gap-4 mb-14"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tape tape-purple text-xl">Skills &amp; Tools</span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-300 to-transparent dark:from-dark-border dark:to-transparent" />
                </motion.div>

                {/* Skill badges */}
                <motion.div
                    className="flex flex-wrap gap-4 justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } },
                    }}
                >
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            variants={{
                                hidden: { opacity: 0, scale: 0.5, rotate: rotations[i] * 2 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: rotations[i],
                                    transition: { type: 'spring', stiffness: 200, damping: 12 },
                                },
                            }}
                        >
                            <motion.div
                                className={`sticker-badge ${skill.color} border ${skill.border} cursor-default`}
                                whileHover={{
                                    scale: 1.12,
                                    rotate: rotations[i] * -0.5,
                                    y: -5,
                                }}
                                style={{ rotate: rotations[i] }}
                            >
                                <span className="text-lg">{skill.emoji}</span>
                                <span className="font-medium text-sm">{skill.name}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative note */}
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <div className="glass-card px-6 py-3 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-violet-200/80 dark:bg-violet-900/50 rounded-sm shadow-tape" />
                        <p className="font-handwritten text-gray-500 dark:text-gray-400 text-lg">
                            always learning, always growing ✨
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
