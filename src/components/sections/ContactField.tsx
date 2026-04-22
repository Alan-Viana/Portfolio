import type { ChangeEventHandler } from 'react';

type ContactFieldType = 'text' | 'email' | 'tel';

interface ContactFieldProps {
  label: string;
  name: string;
  id: string;
  placeholder: string;
  error?: string;
  type?: ContactFieldType;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  as?: 'input' | 'textarea';
  rows?: number;
  optionalLabel?: string;
}

const inputBaseClass = 'w-full bg-white dark:bg-black border text-slate-900 dark:text-[#33ff33] placeholder:text-slate-400 dark:placeholder:text-[#33ff33]/50 px-4 py-3 focus:outline-none focus:border-blue-500 dark:focus:border-[#33ff33] focus:ring-1 focus:ring-blue-500 dark:focus:ring-[#33ff33] transition-all text-sm';

export const ContactField = ({
  label,
  name,
  id,
  placeholder,
  error,
  type = 'text',
  autoComplete,
  required = false,
  value,
  onChange,
  as = 'input',
  rows = 4,
  optionalLabel,
}: ContactFieldProps) => {
  const fieldClassName = `${inputBaseClass} ${error ? 'border-red-500' : 'border-slate-300 dark:border-[#33ff33]'}`;
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm text-white/80 dark:text-[#33ff33] uppercase tracking-wider transition-colors">
        {label}
        {optionalLabel && <span className="text-[10px] lowercase opacity-70"> {optionalLabel}</span>}
      </label>

      {as === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          required={required}
          aria-required={required || undefined}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          rows={rows}
          placeholder={placeholder}
          className={fieldClassName}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          autoComplete={autoComplete}
          required={required}
          aria-required={required || undefined}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          placeholder={placeholder}
          className={fieldClassName}
          value={value}
          onChange={onChange}
        />
      )}

      {error && <span id={`${id}-error`} className="text-red-400 text-xs">{error}</span>}
    </div>
  );
};