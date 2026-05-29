import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="experience">
      <div class="sec-head" appScrollReveal>
        <span class="sec-num">03</span>
        <span class="sec-title">Experience</span>
        <span class="sec-rule"></span>
      </div>

      <div class="timeline">
        @for (e of data.experience; track e.role; let i = $index) {
          <div class="tl-item" [class.now]="e.now" appScrollReveal [revealDelay]="i * 80">
            <div class="tl-top">
              <div>
                <span class="tl-role">{{ e.role }}</span>
                @if (e.now) {
                  <span class="tl-now-badge">NOW</span>
                }
                <div class="tl-org">{{ e.org }}</div>
              </div>
              <span class="tl-period">{{ e.period }}</span>
            </div>
            <p class="tl-summary">{{ e.summary }}</p>
            <ul class="tl-points">
              @for (pt of e.points; track $index) {
                <li>{{ pt }}</li>
              }
            </ul>
            <div class="tl-tags">
              @for (t of e.tags; track t) {
                <span class="tag">{{ t }}</span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  data = PORTFOLIO;
}
