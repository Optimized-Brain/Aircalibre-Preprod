'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DecodeTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}

const chars = '!<>-_\\\\/[]{}—=+*^?#________';

export function DecodeText({ text, className, speed = 50, delay = 0 }: DecodeTextProps) {
    const [displayedText, setDisplayedText] = useState(text.replace(/./g, ' '));
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current) return;

        hasAnimated.current = true;
        let iteration = 0;
        let timeoutId: NodeJS.Timeout;

        const animate = () => {
            setDisplayedText((prev) => {
                const arr = prev.split('');
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === ' ' || text[i] === '\n') {
                        arr[i] = text[i];
                        continue;
                    }
                    if (i < iteration) {
                        arr[i] = text[i];
                    } else {
                        arr[i] = chars[Math.floor(Math.random() * chars.length)];
                    }
                }
                return arr.join('');
            });

            if (iteration < text.length) {
                iteration += 1 / 3; // Speed multiplier
                timeoutId = setTimeout(animate, speed);
            }
        };

        const initialDelay = setTimeout(animate, delay);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(initialDelay);
        };
    }, [isInView, text, speed, delay]);

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {displayedText}
        </span>
    );
}
