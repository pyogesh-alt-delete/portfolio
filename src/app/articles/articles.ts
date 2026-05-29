import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="articles">
      <div class="sec-head" appScrollReveal>
        <span class="sec-num">05</span>
        <span class="sec-title">Articles</span>
        <span class="sec-rule"></span>
      </div>

      <div class="feed">
        @for (a of data.articles; track a.title; let i = $index) {
          <a class="article" appScrollReveal [revealDelay]="i * 50" href="#" (click)="$event.preventDefault()">
            <span class="a-tag">{{ a.tag }}</span>
            <div class="a-mid">
              <div class="a-title">{{ a.title }}</div>
              <div class="a-meta">
                <span>{{ a.date }}</span>
                <span>{{ a.read }} read</span>
                <span>♥ {{ a.claps }}</span>
              </div>
            </div>
            <span class="a-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7M9 7h8v8"/>
              </svg>
            </span>
          </a>
        }
      </div>

      <div class="feed-foot">
        <div class="medium-note">
          <span class="dot2"></span>
          Imported from Medium · &#64;yogeshthinks
        </div>
      </div>
    </section>
  `,
})
export class ArticlesComponent {
  data = PORTFOLIO;
}
