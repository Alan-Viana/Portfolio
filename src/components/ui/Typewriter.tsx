import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

export const Typewriter = ({ 
  text, 
  speed = 30, 
  delay = 0, 
  className = '',
  cursorClassName = '' 
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((current) => {
        if (index >= text.length) {
          clearInterval(intervalId);
          return current;
        }
        return text.slice(0, index + 1);
      });
      index++;
    }, speed);

    return () => clearInterval(intervalId);
  }, [started, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className={`inline-block w-[2px] h-[1em] bg-slate-900 dark:bg-[#33ff33] ml-0.5 align-middle ${cursorClassName}`}
      />
    </span>
  );
};
