'use client';

import Image from 'next/image';
import { useReducedMotion, useSpring, motion, useMotionValue } from 'framer-motion';
import { useCallback } from 'react';

interface ProductShowcaseProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}

export function ProductShowcase({
  src,
  alt,
  sizes,
  className = '',
}: ProductShowcaseProps) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateX = useSpring(pointerY, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(pointerX, { stiffness: 180, damping: 22 });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || event.pointerType !== 'mouse') return;

      const bounds = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      pointerX.set(x * 10);
      pointerY.set(y * -10);
    },
    [pointerX, pointerY, prefersReducedMotion],
  );

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative [perspective:1200px] ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        style={{ rotateX: prefersReducedMotion ? 0 : rotateX, rotateY: prefersReducedMotion ? 0 : rotateY }}
        animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="group relative h-full w-full transform-gpu"
      >
        <div className="pointer-events-none absolute inset-[15%] rounded-full bg-white/10 blur-3xl transition-opacity duration-700 group-hover:opacity-70" />
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="z-10 object-contain drop-shadow-[0_24px_24px_rgba(0,0,0,0.2)] transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      </motion.div>
    </motion.div>
  );
}
