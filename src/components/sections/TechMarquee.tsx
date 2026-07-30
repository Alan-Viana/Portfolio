export const TechMarquee = () => {
  return (
    <div className="w-full py-4 bg-white border-y border-slate-200 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap min-w-full">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex gap-8 mx-4 text-slate-400 font-mono text-sm uppercase tracking-widest shrink-0">
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
