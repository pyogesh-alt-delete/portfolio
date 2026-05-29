import { Component, Output, EventEmitter, inject } from '@angular/core';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ThemeService } from '../../services/theme.service';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  template: `
    <div class="topbar">
      <div class="tb-brand" (click)="scrollSpy.scrollToTop()" style="cursor:pointer">
        <div class="mono-mark">PY</div>
        <span class="tb-name">{{ data.identity.name }}</span>
      </div>
      <div class="tb-actions">
        <button class="theme-toggle-btn" (click)="theme.toggleMode()" [title]="theme.mode() === 'dark' ? 'Switch to light' : 'Switch to dark'">
          @if (theme.mode() === 'dark') {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
          } @else {
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          }
        </button>
        <button class="menu-btn" (click)="menuOpen.emit()" aria-label="menu">
          <i></i><i></i><i></i>
        </button>
      </div>
    </div>
  `,
})
export class TopbarComponent {
  @Output() menuOpen = new EventEmitter<void>();
  data = PORTFOLIO;
  theme = inject(ThemeService);
  scrollSpy = inject(ScrollSpyService);
}
