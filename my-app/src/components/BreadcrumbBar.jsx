import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiFolder, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext'; // Assuming ThemeProvider exists

export default function BreadcrumbBar() {
    const [currentSection, setCurrentSection] = useState('home');
    const { dark: isDark, toggle: toggleTheme } = useTheme();

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const handleScroll = debounce(() => {
            let current = 'home'; // default
            let minDistance = Infinity;

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const distance = Math.abs(rect.top);

                // If top of section is near the top of viewport (with some offset)
                if (rect.top <= 250 && rect.bottom >= 250) {
                    current = section.getAttribute('id');
                } else if (distance < minDistance && rect.top < window.innerHeight) {
                    // Fallback to closest section in view
                    minDistance = distance;
                    current = section.getAttribute('id');
                }
            });
            setCurrentSection(current);
        }, 100);

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => {
            handleScroll.cancel();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Helper map to convert IDs to friendly display names if needed
    const sectionNames = {
        'hero': 'home',
        'about': 'about',
        'skills': 'skills',
        'experience': 'experience',
        'work': 'featured-work',
        'projects': 'projects',
        'contact': 'contact'
    };

    const displayText = sectionNames[currentSection] || currentSection || 'home';

    return (
        <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:px-8 border-b border-gray-200/50 dark:border-white/5 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* ── Terminal Path ── */}
                <div className="flex items-center gap-2 font-mono text-sm md:text-base text-gray-700 dark:text-gray-300">
                    <FiTerminal className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-400 dark:text-gray-500 hidden sm:inline">~/</span>
                    <span className="font-semibold text-purple-700 dark:text-purple-300">portfolio</span>
                    <span className="text-gray-400 dark:text-gray-500">/</span>

                    <AnimatePresence mode="wait">
                        <motion.span
                            key={displayText}
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -5, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200"
                        >
                            <FiFolder className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                            {displayText}
                        </motion.span>
                    </AnimatePresence>
                    <span className="animate-pulse ml-0.5 w-1.5 h-4 bg-purple-500/70 inline-block align-middle" />
                </div>

                {/* ── Theme Toggle ── */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    aria-label="Toggle Theme"
                >
                    {isDark ? (
                        <FiSun className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                    ) : (
                        <FiMoon className="w-4 h-4 md:w-5 md:h-5 text-indigo-600" />
                    )}
                </button>
            </div>
        </div>
    );
}
