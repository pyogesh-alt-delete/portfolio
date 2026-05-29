import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;
  private el: HTMLElement;

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.classList.add('reveal');
    const vh = window.innerHeight;
    if (this.el.getBoundingClientRect().top > vh * 0.88) {
      this.el.classList.add('pre');
    }
    if (this.revealDelay) {
      this.el.style.transitionDelay = `${this.revealDelay}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.classList.remove('pre');
            this.observer?.unobserve(this.el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    this.observer.observe(this.el);

    // Safety fallback
    setTimeout(() => this.el.classList.remove('pre'), 3000);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
