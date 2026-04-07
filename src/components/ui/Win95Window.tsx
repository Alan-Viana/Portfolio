import React from 'react';

interface Win95WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  buttonClassName?: string;
  icon?: string | React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  isMaximized?: boolean;
  centerTitle?: boolean;
}

export const Win95Window: React.FC<Win95WindowProps> = ({ 
  title, 
  children, 
  className = '', 
  headerClassName = '', 
  contentClassName = '',
  buttonClassName = '',
  icon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  onClose,
  onMinimize,
  onMaximize,
  isMaximized = false,
  centerTitle = false
}) => {
  const btnClasses = `win95-btn w-5 h-5 flex items-center justify-center text-[10px] font-bold leading-none pb-1 transition-colors ${buttonClassName || 'text-black dark:text-slate-200 dark:bg-[#333] dark:border-[#555]'}`;
  const closeBtnClasses = `win95-btn w-5 h-5 flex items-center justify-center text-[10px] font-bold leading-none pb-1 transition-colors ${buttonClassName || 'text-black dark:text-black dark:bg-red-600 dark:border-red-800 dark:hover:bg-red-500'}`;

  return (
    <div className={`win95-window flex flex-col max-w-full min-w-0 ${className}`}>
      {/* Title Bar */}
      <div className={`win95-title-bar mb-1 ${headerClassName}`}>
        <div className={`flex items-center gap-2 select-none min-w-0 flex-1 ${centerTitle ? 'justify-center' : ''}`}>
          {icon && (
            typeof icon === 'string' ? (
              <img src={icon} alt="icon" className="w-4 h-4" />
            ) : (
              <div className="w-4 h-4 flex items-center justify-center">{icon}</div>
            )
          )}
          <span className="truncate">{title}</span>
        </div>
        <div className="flex gap-1 shrink-0">
          {onMinimize && (
            <button 
              onClick={onMinimize} 
              className={btnClasses}
              aria-label="Minimize"
              title="Minimize"
            >
              <div className="w-2 h-0.5 bg-current translate-y-1"></div>
            </button>
          )}
          {onMaximize && (
            <button 
              onClick={onMaximize} 
              className={btnClasses}
              aria-label={isMaximized ? "Restore" : "Maximize"}
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? (
                <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" className="translate-y-[1px]">
                  <path d="M2 0H10V8H2V0ZM9 1H3V7H9V1Z" fillRule="evenodd" />
                  <path d="M0 3H8V11H0V3ZM7 4H1V10H7V4Z" fillRule="evenodd" />
                  <rect x="1" y="4" width="6" height="1" />
                  <rect x="3" y="1" width="6" height="1" />
                </svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="translate-y-[1px]">
                  <path d="M0 0H9V9H0V0ZM8 2H1V8H8V2Z" fillRule="evenodd" />
                  <rect x="0" y="0" width="9" height="2" />
                </svg>
              )}
            </button>
          )}
          {onClose && (
            <button 
              onClick={onClose} 
              className={closeBtnClasses}
              aria-label="Close"
              title="Close"
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="translate-y-px">
                <path d="M1 0L0 1L3 4L0 7L1 8L4 5L7 8L8 7L5 4L8 1L7 0L4 3L1 0Z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className={`flex-1 border-2 border-inset border-[#808080] dark:border-[#333] overflow-auto ${contentClassName ? contentClassName : 'bg-white dark:bg-black text-slate-900 dark:text-[#33ff33] p-4'}`}>
        {children}
      </div>
    </div>
  );
};
