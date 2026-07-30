import { motion } from 'framer-motion';
import { Win95Window } from '@/components/ui/Win95Window';

interface DevLogsProps {
  className?: string;
  title?: string;
  lines?: string[];
}

export const DevLogs = ({
  className = '',
  title = 'logs.txt',
  lines = ['construindo interfaces acessíveis', 'aprendendo continuamente'],
}: DevLogsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mx-auto w-full max-w-3xl ${className}`}
      role="region"
      aria-label="Logs de desenvolvimento"
    >
      <Win95Window
        title={title}
        className="w-full shadow-[8px_8px_0_rgba(0,0,0,0.2)]"
        contentClassName="border-[#808080] bg-white p-4 sm:p-5"
      >
        <div className="space-y-2 font-mono text-sm leading-relaxed text-slate-900 sm:text-base">
          {lines.map((line, index) => (
            <p key={line}>
              <span aria-hidden="true">&gt; </span>{line}
              {index === lines.length - 1 && <span aria-hidden="true" className="animate-pulse">_</span>}
            </p>
          ))}
        </div>
      </Win95Window>
    </motion.div>
  );
};
