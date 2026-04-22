import type { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}

export const SocialLink = ({ href, label, className = '', children }: SocialLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={className}>
      {children}
    </a>
  );
};