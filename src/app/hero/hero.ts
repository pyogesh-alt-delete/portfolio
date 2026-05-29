import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero.html'
})
export class HeroComponent implements OnInit, OnDestroy {
  data = PORTFOLIO;
  cmd = 'whoami --verbose';
  typed = '';
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit() {
    let i = 0;
    const tick = () => {
      i++;
      this.typed = this.cmd.slice(0, i);
      if (i < this.cmd.length) {
        this.timer = setTimeout(tick, 55 + Math.random() * 40);
      }
    };
    this.timer = setTimeout(tick, 450);
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  scrollToContact(e: Event) {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 4, behavior: 'smooth' });
  }
}
