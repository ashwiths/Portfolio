import { motion } from 'framer-motion';

export default function Sticker({ emoji, className = '', style = {}, animDelay = 0, size = 'text-3xl' }) {
    return (
        <motion.span
            className={`floating-sticker pointer-events-none select-none ${size} ${className}`}
            style={style}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: animDelay, duration: 0.5, type: 'spring', stiffness: 200 }}
        >
            <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + animDelay, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-block' }}
            >
                {emoji}
            </motion.span>
        </motion.span>
    );
}
