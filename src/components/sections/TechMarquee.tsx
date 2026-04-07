export const TechMarquee = () => {
  return (
    <div className="w-full py-4 bg-white dark:bg-[#050505] border-y border-slate-200 dark:border-[#33ff33] overflow-hidden transition-colors">
      <div className="flex animate-marquee whitespace-nowrap min-w-full">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex gap-8 mx-4 text-slate-400 dark:text-slate-500 font-mono text-sm uppercase tracking-widest transition-colors shrink-0">
            <span>JAVASCRIPT</span>
            <span>•</span>
            <span>REACT</span>
            <span>•</span>
            <span>TYPESCRIPT</span>
            <span>•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
