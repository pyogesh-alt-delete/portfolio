import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="stack">
      <div class="sec-head" appScrollReveal>
        <span class="sec-num">02</span>
        <span class="sec-title">Tech Stack</span>
        <span class="sec-rule"></span>
      </div>

      <div class="stack-grid">
        @for (g of data.stack; track g.group; let i = $index) {
          <div class="stack-card" [class]="'card-' + g.icon" appScrollReveal [revealDelay]="i * 60"
               [style.--card-hue]="g.color">
            <div class="card-header">
              <div class="card-icon">
                <ng-container [ngSwitch]="g.icon">
                  <!-- Frontend: monitor with code -->
                  <svg *ngSwitchCase="'frontend'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="anim-icon">
                    <rect x="2" y="3" width="20" height="14" rx="2" class="icon-monitor"/>
                    <path d="m8 10 2 2-2 2" class="icon-code-l"/>
                    <path d="m13 14 3-2-3-2" class="icon-code-r"/>
                    <path d="M8 21h8M12 17v4" class="icon-stand"/>
                  </svg>
                  <!-- Backend: server stack -->
                  <svg *ngSwitchCase="'backend'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="anim-icon">
                    <rect x="2" y="2" width="20" height="6" rx="1.5" class="icon-server-1"/>
                    <rect x="2" y="9" width="20" height="6" rx="1.5" class="icon-server-2"/>
                    <rect x="2" y="16" width="20" height="6" rx="1.5" class="icon-server-3"/>
                    <circle cx="18" cy="5" r="1" fill="currentColor" class="icon-dot-1"/>
                    <circle cx="18" cy="12" r="1" fill="currentColor" class="icon-dot-2"/>
                    <circle cx="18" cy="19" r="1" fill="currentColor" class="icon-dot-3"/>
                  </svg>
                  <!-- AI/ML: brain/circuit -->
                  <svg *ngSwitchCase="'ai'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="anim-icon">
                    <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12" class="icon-brain-top"/>
                    <path d="M8 5.5A4 4 0 0 0 8 13" class="icon-brain-left"/>
                    <path d="M16 5.5A4 4 0 0 1 16 13" class="icon-brain-right"/>
                    <path d="M12 12v3" class="icon-brain-stem"/>
                    <circle cx="9" cy="17" r="2" class="icon-node-1"/>
                    <circle cx="15" cy="17" r="2" class="icon-node-2"/>
                    <circle cx="12" cy="21" r="1.5" class="icon-node-3"/>
                    <path d="M9 17h6M11 19l1 2M13 19l-1 2" class="icon-connect"/>
                  </svg>
                  <!-- Data: database -->
                  <svg *ngSwitchCase="'data'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="anim-icon">
                    <ellipse cx="12" cy="5" rx="9" ry="3" class="icon-db-top"/>
                    <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" class="icon-db-mid"/>
                    <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" class="icon-db-bot"/>
                    <path d="M12 8v0M12 14v0M12 20v0" stroke-width="2" stroke-linecap="round" class="icon-db-dots"/>
                  </svg>
                  <!-- Cloud & DevOps: cloud with arrows -->
                  <svg *ngSwitchCase="'cloud'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="anim-icon">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" class="icon-cloud"/>
                    <path d="M13 14l2 2-2 2" class="icon-arrow-r"/>
                  </svg>
                  <!-- Testing: checkmark shield -->
                  <svg *ngSwitchCase="'testing'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="anim-icon">
                    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" class="icon-shield"/>
                    <path d="m9 12 2 2 4-4" class="icon-check"/>
                  </svg>
                </ng-container>
              </div>
              <div class="card-meta">
                <span class="card-group">{{ g.group }}</span>
                 <span class="card-count">{{ g.items.length.toString().padStart(2, '0') }}</span>
              </div>
            </div>
            <div class="card-chips">
              @for (item of g.items; track item; let j = $index) {
                <span class="chip" [style.--chip-delay]="j * 30 + 'ms'">{{ item }}</span>
              }
            </div>
            <div class="card-glow"></div>
          </div>
        }
      </div>
    </section>
  `,
})
export class StackComponent {
  data = PORTFOLIO;
}
