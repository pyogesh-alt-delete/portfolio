import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  activeSection = signal<string>('about');

  private sectionIds = ['about', 'stack', 'experience', 'projects', 'articles', 'music', 'contact'];

  init() {
    this.onScroll();
    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
  }

  destroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 4, behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private onScroll() {
    const line = 140;
    let cur = this.sectionIds[0];
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) cur = id;
    }
    this.activeSection.set(cur);
  }
}
