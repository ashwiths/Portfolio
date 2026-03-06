import { motion } from 'framer-motion';

/**
 * HeroPhoto — Scrapbook-style profile photo card
 *
 * Visual anatomy:
 *  ┌─────────────────────────────┐
 *  │  [tape strip — top centre]  │
 *  │  ┌─────────────────────┐    │
 *  │  │   polaroid frame    │    │
 *  │  │  ┌───────────────┐  │    │
 *  │  │  │  photo (img)  │  │    │
 *  │  │  └───────────────┘  │    │
 *  │  │  caption label      │    │
 *  │  └─────────────────────┘    │
 *  │  [sparkles + corner dots]   │
 *  └─────────────────────────────┘
 */
export default function HeroPhoto() {
    return (
        <motion.div
            className="relative flex items-center justify-center w-full"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
            {/* ── Outer floating wrapper (gentle bob + slight initial tilt) ── */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ rotate: '-3deg' }}
                whileHover={{
                    rotate: '0deg',
                    scale: 1.03,
                    transition: { type: 'spring', stiffness: 200, damping: 15 },
                }}
                className="relative"
            >
                {/* ── Tape strip (top-centre, pinning the photo) ── */}
                <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 w-20 h-6 rounded-sm"
                    style={{
                        background: 'rgba(167,139,250,0.55)',
                        border: '1px solid rgba(167,139,250,0.7)',
                        boxShadow: '0 2px 8px rgba(139,92,246,0.15)',
                        transform: 'translateX(-50%) rotate(1deg)',
                    }}
                />

                {/* ── Polaroid frame ── */}
                <div
                    className="relative bg-white dark:bg-gray-100 p-3 pb-8 rounded-md z-10"
                    style={{
                        boxShadow: '4px 8px 32px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.10)',
                    }}
                >
                    {/* Photo */}
                    <div className="overflow-hidden rounded-sm w-56 h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 relative">
                        <img
                            src="/profile.jpg"
                            alt="Infant Ashil A — Full Stack Developer"
                            className="w-full h-full object-cover object-top"
                            loading="eager"
                            decoding="async"
                        />
                        {/* Soft inner vignette */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.12))',
                            }}
                        />
                    </div>

                    {/* Polaroid caption */}
                    <p
                        className="text-center mt-2 text-gray-500 text-xs tracking-widest uppercase font-handwritten select-none"
                        style={{ fontFamily: "'Segoe UI', sans-serif", letterSpacing: '0.15em' }}
                    >
                        Infant Ashil ✦
                    </p>
                </div>

                {/* ── Sparkle — top right of polaroid ── */}
                <motion.div
                    className="absolute -top-4 -right-6 pointer-events-none"
                    animate={{ rotate: [0, 20, 0], scale: [1, 1.15, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg width="32" height="32" viewBox="0 0 60 60" fill="none">
                        <path d="M30 4 L33.5 23 L52 26 L33.5 30 L30 49 L27.5 30 L8 26 L27.5 23 Z"
                            fill="url(#hpsg)" stroke="#c4b5fd" strokeWidth="1.5" />
                        <defs>
                            <linearGradient id="hpsg" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#ddd6fe" />
                                <stop offset="100%" stopColor="#f9a8d4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                {/* ── Small circle dot — bottom left ── */}
                <motion.div
                    className="absolute -bottom-3 -left-4 w-7 h-7 rounded-full pointer-events-none"
                    style={{ background: 'linear-gradient(135deg,#fce7f3,#ede9fe)', border: '2px solid #e9d5ff' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />

                {/* ── Tiny sparkle — bottom right ── */}
                <motion.div
                    className="absolute -bottom-5 -right-3 pointer-events-none"
                    animate={{ rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                    <svg width="22" height="22" viewBox="0 0 60 60" fill="none">
                        <path d="M30 8 L33 24 L48 27 L33 30 L30 46 L27 30 L12 27 L27 24 Z"
                            fill="#fef08a" stroke="#fbbf24" strokeWidth="2" />
                    </svg>
                </motion.div>

                {/* ── Glow behind the card ── */}
                <div
                    className="absolute inset-0 -z-10 rounded-md pointer-events-none"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(167,139,250,0.22) 0%, transparent 70%)',
                        filter: 'blur(18px)',
                        transform: 'scale(1.15)',
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
