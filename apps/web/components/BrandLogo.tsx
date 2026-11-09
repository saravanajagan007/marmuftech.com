import React from 'react';

type BrandLogoProps = {
  tone?: 'light' | 'dark';
  size?: 'md' | 'sm';
  compact?: boolean;
};

export function BrandLogo({ tone = 'light', size = 'md', compact = false }: BrandLogoProps) {
  const markClass = size === 'sm' ? 'h-9 w-9' : 'h-10 w-10';
  const wordClass = size === 'sm' ? 'text-lg' : 'text-lg sm:text-xl';
  const word = tone === 'dark' ? 'text-white' : 'text-slate-900';
  const accent = tone === 'dark' ? 'text-emerald-400' : 'text-emerald-600';

  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src="/brand/marmuf-logo.png"
        alt=""
        width={150}
        height={150}
        className={`${markClass} shrink-0 rounded-xl object-cover transition-transform group-hover:scale-105`}
      />
      <span className={`${wordClass} font-extrabold tracking-tight ${word} ${compact ? 'hidden sm:inline' : ''}`}>
        Marmuf<span className={accent}>Tech</span>
      </span>
    </span>
  );
}
