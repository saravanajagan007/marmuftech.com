import React from 'react';

type BrandLogoProps = {
  tone?: 'light' | 'dark';
  size?: 'md' | 'sm';
  compact?: boolean;
};

export function BrandLogo({ tone = 'light', size = 'md', compact = false }: BrandLogoProps) {
  const markClass = size === 'sm' ? 'h-9 w-9' : 'h-10 w-10';
  const wordClass = size === 'sm' ? 'text-lg' : 'text-lg sm:text-xl';
  const tile = tone === 'dark' ? '#064e3b' : '#ecfdf5';
  const marmuf = tone === 'dark' ? '#34d399' : '#047857';
  const tech = tone === 'dark' ? '#6ee7b7' : '#10b981';
  const word = tone === 'dark' ? 'text-white' : 'text-slate-900';
  const accent = tone === 'dark' ? 'text-emerald-400' : 'text-emerald-600';

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        className={`${markClass} shrink-0 transition-transform group-hover:scale-105`}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="16" fill={tile} stroke="#10b981" strokeWidth="2" />
        <path d="M10 46V18h6l6 14 6-14h6v28h-6V30l-6 12-6-12v16H10z" fill={marmuf} />
        <path d="M40 18h16v6h-5v22h-6V24h-5V18z" fill={tech} />
      </svg>
      <span className={`${wordClass} font-extrabold tracking-tight ${word} ${compact ? 'hidden sm:inline' : ''}`}>
        Marmuf<span className={accent}>Tech</span>
      </span>
    </span>
  );
}
