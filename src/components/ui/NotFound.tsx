import { useEffect } from 'react';

export const NotFound = () => {
  useEffect(() => {
    const handleKeyDown = () => {
      window.location.href = '/';
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0000AA] text-white font-mono p-6 sm:p-8 flex flex-col items-center justify-center text-center select-none cursor-none overflow-hidden">
      <div className="w-full max-w-3xl space-y-6 sm:space-y-8">
        <h1 className="bg-[#AAAAAA] text-[#0000AA] inline-block px-4 py-1 text-6xl sm:text-8xl font-bold mb-8 sm:mb-12 shadow-lg">
          :(
        </h1>
        
        <p className="text-lg sm:text-xl md:text-3xl leading-relaxed font-medium">
          Um erro ocorreu em <span className="uppercase break-all">{window.location.pathname}</span>. A aplicação atual será encerrada.
        </p>

        <ul className="text-base sm:text-lg md:text-2xl list-none space-y-4 text-left mx-auto max-w-2xl mt-8 sm:mt-12 px-4">
          <li>* Pressione qualquer tecla para retornar à aplicação anterior.</li>
        </ul>

        <p className="mt-12 sm:mt-20 text-xl sm:text-2xl animate-pulse font-bold">
           _
        </p>
      </div>
    </div>
  );
};
