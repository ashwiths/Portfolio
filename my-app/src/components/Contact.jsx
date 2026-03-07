import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';

const links = [
    {
        icon: FiMail,
        label: 'Email',
        value: 'infantashil55@gmail.com',
        href: 'mailto:infantashil55@gmail.com',
        color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300',
        border: 'border-orange-200 dark:border-orange-800',
    },
    {
        icon: FiGithub,
        label: 'GitHub',
        value: 'github.com/ashwiths',
        href: 'https://github.com/ashwiths',
        color: 'bg-gray-100 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300',
        border: 'border-gray-200 dark:border-gray-700',
    },
    {
        icon: FiLinkedin,
        label: 'LinkedIn',
        value: 'infant-ashil-a',
        href: 'https://www.linkedin.com/in/infant-ashil-a-b88a39361/',
        color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800',
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-lavender/60 via-pastel-cream to-pastel-pink/40 dark:from-dark-card/60 dark:via-dark-bg dark:to-dark-surface/40" />

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="tape tape-purple text-xl inline-block mb-6">Get In Touch</span>
                    <h2 className="section-title text-gray-800 dark:text-gray-100 mb-4">
                        Let&apos;s Connect! 🤝
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-12">
                        Whether it&apos;s a freelance project, internship, or just a chat — my inbox is always open!
                    </p>
                </motion.div>

                {/* Contact links */}
                <motion.div
                    className="space-y-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                >
                    {links.map(({ icon: Icon, label, value, href, color, border }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`glass-card flex items-center gap-4 px-6 py-4 border ${border} group hover:scale-[1.02] hover:-translate-y-1 transition-all`}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                            }}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color} shrink-0`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{label}</p>
                                <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">{value}</p>
                            </div>
                            <FiSend className="w-4 h-4 ml-auto text-gray-400 dark:text-gray-600 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
