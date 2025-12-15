import { PROFILE } from '../../data/profile';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import profileImage from '../../assets/img/profile.avif';

export function ProfileHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROFILE.flipSentences.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="screen-line-before screen-line-after flex border-x border-edge">
      <div className="relative shrink-0 border-r border-edge">
        <div className="mx-0.5 my-[3px]">
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${PROFILE.displayName}'s avatar`}
            src={profileImage}
            fetchPriority="high"
          />
        </div>
        <a
          href="https://www.gob.pe/catalogos/34-tramitesyservicios"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 -left-px"
        >
          {/* Flag of Peru */}
          <svg
            className="h-8 sm:h-9"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 480"
          >
            <title>Flag of Perú</title>
            <path fill="#D91023" d="M0 0h640v480H0z" />
            <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
          </svg>
        </a>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {'text-3xl '}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {' font-medium'}
          </div>
        </div>
        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold">
              {PROFILE.displayName}
            </h1>
          </div>
          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: -1, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className=" font-mono text-sm text-balance text-muted-foreground"
              >
                {PROFILE.flipSentences[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
