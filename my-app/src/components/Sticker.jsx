import { motion } from 'framer-motion';
import { useState } from 'react';
import { useId } from 'react';

/* ─── individual sticker designs ─────────────────────────────────────────── */

const designs = {
    /* terminal window */
    terminal: ({ size, uid }) => (
        <div
            style={{
                width: size * 1.55, height: size,
                background: 'linear-gradient(160deg,#1e1b4b,#2e2b6e)',
                border: '2.5px solid #818cf8',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '3px 3px 0 #818cf8, 0 8px 24px rgba(99,102,241,0.20)',
            }}
        >
            {/* title bar */}
            <div style={{ background: '#312e81', padding: '6px 10px', display: 'flex', gap: 5, alignItems: 'center' }}>
                {['#f87171', '#fbbf24', '#34d399'].map((c, i) => (
                    <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                ))}
            </div>
            {/* body */}
            <div style={{ padding: '7px 12px', fontFamily: 'monospace', fontSize: size * 0.17, color: '#a5b4fc', lineHeight: 1.7 }}>
                <div><span style={{ color: '#34d399' }}>$</span> npm run dev</div>
                <div style={{ color: '#6ee7b7', opacity: 0.85 }}>▶ ready in 320ms</div>
            </div>
        </div>
    ),

    /* </> code tag */
    code: ({ size }) => (
        <div
            style={{
                width: size * 1.15, height: size * 0.78,
                background: 'linear-gradient(135deg,#ede9fe,#f5f3ff)',
                border: '2.5px solid #c4b5fd',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: '"Courier New", monospace',
                fontWeight: 800,
                fontSize: size * 0.36,
                color: '#7c3aed',
                boxShadow: '3px 3px 0 #c4b5fd, 0 6px 18px rgba(139,92,246,0.15)',
                letterSpacing: '-1px',
                userSelect: 'none',
            }}
        >
            &lt;/&gt;
        </div>
    ),

    /* git branch */
    git: ({ size }) => (
        <div
            style={{
                width: size * 1.0, height: size * 1.0,
                background: 'linear-gradient(135deg,#fce7f3,#fdf4fb)',
                border: '2.5px solid #f9a8d4',
                borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '3px 3px 0 #f9a8d4, 0 6px 16px rgba(249,168,212,0.20)',
            }}
        >
            <svg width={size * 0.52} height={size * 0.52} viewBox="0 0 24 24" fill="none" stroke="#db2777" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="6" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="9" r="3" />
                <path d="M6 9v6M6 9c0-2 3-3 6-3h1a3 3 0 0 1 3 3" />
            </svg>
        </div>
    ),

    /* sticky note BUILD */
    note: ({ size }) => (
        <div
            style={{
                width: size * 1.2, height: size * 1.05,
                background: 'linear-gradient(145deg,#fefce8,#fef9c3)',
                border: '2px solid #fde047',
                borderRadius: '4px 14px 12px 4px',
                padding: '10px 12px',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                boxShadow: '4px 4px 0 #fde047, 0 8px 20px rgba(253,224,71,0.22)',
                fontFamily: "'Segoe UI', sans-serif",
            }}
        >
            <div style={{ fontSize: size * 0.21, fontWeight: 800, color: '#78350f', letterSpacing: 1.5, textTransform: 'uppercase' }}>BUILD</div>
            <div style={{ marginTop: 5, height: 2, background: '#fbbf24', borderRadius: 2 }} />
            <div style={{ marginTop: 4, height: 2, background: '#fbbf24', opacity: 0.45, borderRadius: 2, width: '65%' }} />
        </div>
    ),

    /* browser window mockup */
    browser: ({ size }) => (
        <div
            style={{
                width: size * 1.6, height: size,
                background: 'linear-gradient(160deg,#f0f9ff,#e0f2fe)',
                border: '2.5px solid #7dd3fc',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '3px 3px 0 #7dd3fc, 0 8px 22px rgba(56,189,248,0.16)',
            }}
        >
            {/* address bar */}
            <div style={{ background: '#bae6fd', padding: '6px 10px', display: 'flex', gap: 5, alignItems: 'center' }}>
                {['#f87171', '#fbbf24', '#34d399'].map((c, i) => (
                    <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
                ))}
                <div style={{
                    flex: 1, marginLeft: 6, height: 11, background: '#e0f2fe',
                    borderRadius: 5, fontSize: 7, color: '#0284c7',
                    display: 'flex', alignItems: 'center', paddingLeft: 5,
                    fontFamily: 'monospace', fontWeight: 600,
                }}>
                    localhost:5173
                </div>
            </div>
            {/* fake content */}
            <div style={{ padding: '7px 10px' }}>
                <div style={{ height: 6, background: '#bae6fd', borderRadius: 3, width: '55%', marginBottom: 5 }} />
                <div style={{ height: 4, background: '#e0f2fe', borderRadius: 3, width: '80%', marginBottom: 4 }} />
                <div style={{ height: 4, background: '#e0f2fe', borderRadius: 3, width: '45%' }} />
            </div>
        </div>
    ),

    /* sparkle / star */
    sparkle: ({ size, uid }) => (
        <div style={{ position: 'relative', width: size, height: size }}>
            <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
                <path d="M30 4 L33.5 23 L52 26 L33.5 30 L30 49 L27.5 30 L8 26 L27.5 23 Z"
                    fill={`url(#sg-${uid})`} stroke="#c4b5fd" strokeWidth="1.2" />
                <circle cx="50" cy="14" r="3" fill="#f9a8d4" />
                <circle cx="12" cy="46" r="2.5" fill="#a5b4fc" />
                <path d="M50 40 L51.5 44 L55 45.5 L51.5 47 L50 51 L48.5 47 L45 45.5 L48.5 44 Z" fill="#fde68a" />
                <defs>
                    <linearGradient id={`sg-${uid}`} x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#ddd6fe" />
                        <stop offset="100%" stopColor="#f9a8d4" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    ),
};

/* ─── main component ─────────────────────────────────────────────────────── */

export default function Sticker({
    type = 'code',
    className = '',
    style = {},
    animDelay = 0,
    size = 64,
    rotate = 0,
    opacity = 0.68,
}) {
    const uid = useId().replace(/:/g, '');
    const Design = designs[type] ?? designs.code;
    const [isDragging, setIsDragging] = useState(false);

    return (
        <motion.div
            /* ── positioning & visibility ── */
            className={`absolute z-20 select-none ${className}`}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity, scale: 1 }}
            transition={{ delay: animDelay, duration: 0.7, type: 'spring', stiffness: 160 }}

            /* ── drag behaviour ── */
            drag
            dragMomentum={false}
            dragElastic={0.08}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            whileDrag={{
                scale: 1.08,
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.18))',
                zIndex: 50,
                cursor: 'grabbing',
            }}

            /* ── cursor + style merged ── */
            style={{
                rotate: `${rotate}deg`,
                opacity,
                cursor: 'grab',
                touchAction: 'none',
                ...style,
            }}
        >
            {/* Float animation — paused while the user is dragging */}
            <motion.div
                animate={isDragging
                    ? { y: 0, rotate: rotate }          /* freeze while grabbed */
                    : { y: [0, -7, 0], rotate: [rotate, rotate + 1.2, rotate] }
                }
                transition={{
                    duration: 6 + animDelay,
                    repeat: isDragging ? 0 : Infinity,
                    ease: 'easeInOut',
                    repeatType: 'mirror',
                }}
            >
                <Design size={size} uid={uid} />
            </motion.div>
        </motion.div>
    );
}
