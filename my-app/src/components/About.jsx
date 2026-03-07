import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="about" className="relative py-24 overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-sky/50 via-transparent to-pastel-mint/30 dark:from-dark-card/50 dark:to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="flex items-center gap-4 mb-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tape tape-blue text-xl">About Me</span>
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 to-transparent dark:from-dark-border dark:to-transparent" />
                </motion.div>

                <div ref={ref} className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Text card */}
                    <motion.div
                        className="glass-card p-8 relative"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Tape decoration */}
                        <div className="absolute -top-3 left-8 w-16 h-5 bg-yellow-200/80 dark:bg-yellow-900/50 rounded-sm shadow-tape rotate-[-2deg]" />
                        <div className="absolute -top-3 right-12 w-14 h-5 bg-pink-200/80 dark:bg-pink-900/50 rounded-sm shadow-tape rotate-[1deg]" />

                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                            Hey there! I&apos;m <strong className="text-purple-600 dark:text-purple-400">Infant Ashil A</strong>, a Computer Science student and passionate Full Stack Developer based in India.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
                            I love bridging the gap between front-end creativity and back-end logic — building experiences that are both beautiful and technically solid.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                            My focus is on crafting scalable web applications with clean architecture, great performance, and a user-first mindset. When I&apos;m not coding, I&apos;m exploring new tech, editing videos, or brewing ideas over coffee ☕
                        </p>
                    </motion.div>

                    {/* Stats / fun facts */}
                    <motion.div
                        className="flex flex-col gap-5"
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    >
                        {[
                            { label: 'Role', value: 'Full Stack Developer', tape: 'tape-pink' },
                            { label: 'Focus', value: 'Web Performance & Scalability', tape: 'tape-mint' },
                            { label: 'Experience', value: 'CodeAlpha Internship', tape: 'tape-purple' },
                            { label: 'Education', value: 'Computer Science', tape: 'tape-blue' },
                        ].map(({ label, value, tape }) => (
                            <div key={label} className="glass-card px-5 py-4 flex items-center gap-4 relative group hover:scale-[1.02] transition-transform">
                                <div className={`tape ${tape} text-xs py-0.5 px-2 shrink-0`}>{label}</div>
                                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{value}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
