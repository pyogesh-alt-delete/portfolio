import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ACCENT_COLORS, AccentColor } from '../../services/theme.service';

@Component({
  selector: 'app-theme-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Floating toggle button -->
    <button class="theme-fab" (click)="panelOpen = !panelOpen" [title]="panelOpen ? 'Close theme panel' : 'Customize theme'">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" class="fab-icon" [class.spin]="panelOpen">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
      </svg>
    </button>

    <!-- Panel -->
    @if (panelOpen) {
      <div class="theme-panel">
        <div class="tp-header">
          <span class="tp-title">Theme</span>
          <button class="tp-close" (click)="panelOpen = false">×</button>
        </div>

        <div class="tp-body">
          <!-- Mode toggle -->
          <div class="tp-section">Mode</div>
          <div class="mode-toggle">
            <button class="mode-btn" [class.active]="theme.mode() === 'dark'" (click)="theme.setMode('dark')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="14" height="14">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              Dark
            </button>
            <button class="mode-btn" [class.active]="theme.mode() === 'light'" (click)="theme.setMode('light')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" width="14" height="14">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
              Light
            </button>
          </div>

          <!-- Accent colors -->
          <div class="tp-section">Accent Color</div>
          <div class="color-grid">
            @for (entry of accentEntries; track entry.key) {
              <button class="color-swatch"
                      [class.active]="theme.accent() === entry.key"
                      [style.background]="entry.hex"
                      [title]="entry.label"
                      (click)="theme.setAccent(entry.key)">
                @if (theme.accent() === entry.key) {
                  <svg viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2">
                    <path d="M2 6l3 3 5-5"/>
                  </svg>
                }
              </button>
            }
          </div>
          <div class="color-label">{{ currentLabel }}</div>
        </div>
      </div>
    }
  `,
})
export class ThemePanelComponent {
  theme = inject(ThemeService);
  panelOpen = false;

  get accentEntries() {
    return Object.entries(ACCENT_COLORS).map(([key, val]) => ({
      key: key as AccentColor,
      hex: val.hex,
      label: val.label,
    }));
  }

  get currentLabel() {
    return ACCENT_COLORS[this.theme.accent()]?.label ?? '';
  }
}
