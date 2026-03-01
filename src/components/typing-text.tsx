'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypingTextProps {
    words: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export function TypingText({
    words,
    className,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseDuration = 2000,
}: TypingTextProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (words.length === 0) return;

        const currentWord = words[index];

        if (subIndex === currentWord.length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={cn("inline-block", className)}>
            <span className="relative">
                {words[index].substring(0, subIndex)}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="absolute -right-2 top-0 bottom-0 w-[0.1em] bg-current"
                />
            </span>
        </span>
    );
}
