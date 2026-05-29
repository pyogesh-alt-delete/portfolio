import { Injectable, signal, effect } from '@angular/core';

export type ThemeMode = 'dark' | 'light';
export type AccentColor = 'white' | 'purple' | 'blue' | 'green' | 'amber' | 'red' | 'cyan';

export const ACCENT_COLORS: Record<AccentColor, { hex: string; label: string }> = {
  white:  { hex: '#e5e5e5', label: 'Mono' },
  purple: { hex: '#c084fc', label: 'Purple' },
  blue:   { hex: '#60a5fa', label: 'Blue' },
  green:  { hex: '#4ade80', label: 'Green' },
  amber:  { hex: '#f59e0b', label: 'Amber' },
  red:    { hex: '#f87171', label: 'Red' },
  cyan:   { hex: '#22d3ee', label: 'Cyan' },
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  mode = signal<ThemeMode>('dark');
  accent = signal<AccentColor>('white');

  constructor() {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode | null;
    const savedAccent = localStorage.getItem('theme-accent') as AccentColor | null;
    if (savedMode) this.mode.set(savedMode);
    if (savedAccent && ACCENT_COLORS[savedAccent]) this.accent.set(savedAccent);

    effect(() => {
      this.applyTheme(this.mode(), this.accent());
    });
  }

  setMode(mode: ThemeMode) {
    this.mode.set(mode);
    localStorage.setItem('theme-mode', mode);
  }

  setAccent(accent: AccentColor) {
    this.accent.set(accent);
    localStorage.setItem('theme-accent', accent);
  }

  toggleMode() {
    this.setMode(this.mode() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(mode: ThemeMode, accent: AccentColor) {
    const root = document.documentElement;
    const accentHex = ACCENT_COLORS[accent]?.hex ?? '#e5e5e5';

    root.setAttribute('data-theme', mode);
    root.style.setProperty('--accent', accentHex);

    if (mode === 'light') {
      root.style.setProperty('--bg',         '#f8f8f8');
      root.style.setProperty('--bg-2',       '#ffffff');
      root.style.setProperty('--bg-3',       '#f0f0f0');
      root.style.setProperty('--bg-inset',   '#e8e8e8');
      root.style.setProperty('--fg',         '#0f0f12');
      root.style.setProperty('--fg-1',       '#1a1a24');
      root.style.setProperty('--fg-2',       '#3a3a4a');
      root.style.setProperty('--fg-3',       '#6a6a7a');
      root.style.setProperty('--fg-4',       '#9a9aaa');
      root.style.setProperty('--line',       'rgba(0,0,0,0.12)');
      root.style.setProperty('--line-soft',  'rgba(0,0,0,0.08)');
      root.style.setProperty('--line-strong','rgba(0,0,0,0.2)');
      root.style.setProperty('--topbar-bg',  'rgba(248,248,248,0.85)');
    } else {
      root.style.setProperty('--bg',         'oklch(0.155 0.004 264)');
      root.style.setProperty('--bg-2',       'oklch(0.185 0.005 264)');
      root.style.setProperty('--bg-3',       'oklch(0.215 0.006 264)');
      root.style.setProperty('--bg-inset',   'oklch(0.135 0.004 264)');
      root.style.setProperty('--fg',         'oklch(0.965 0.003 264)');
      root.style.setProperty('--fg-1',       'oklch(0.80 0.004 264)');
      root.style.setProperty('--fg-2',       'oklch(0.62 0.005 264)');
      root.style.setProperty('--fg-3',       'oklch(0.46 0.005 264)');
      root.style.setProperty('--fg-4',       'oklch(0.36 0.005 264)');
      root.style.setProperty('--line',       'oklch(0.30 0.006 264 / 0.7)');
      root.style.setProperty('--line-soft',  'oklch(0.28 0.006 264 / 0.45)');
      root.style.setProperty('--line-strong','oklch(0.42 0.008 264)');
      root.style.setProperty('--topbar-bg',  'oklch(0.155 0.004 264 / 0.85)');
    }

    // Accent derived vars
    root.style.setProperty('--accent-fg', this.getAccentFg(accentHex));
    root.style.setProperty('--accent-dim', this.hexWithAlpha(accentHex, 0.16));
    root.style.setProperty('--accent-line', this.hexWithAlpha(accentHex, 0.38));
    root.style.setProperty('--accent-glow', this.hexWithAlpha(accentHex, 0.22));
  }

  private getAccentFg(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) > 128000 ? '#0c0c0e' : '#f5f5f5';
  }

  private hexWithAlpha(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
}
