import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyService } from '../../services/scroll-spy.service';

const NAV = [
  { id: 'about',      label: 'about',      idx: '01' },
  { id: 'stack',      label: 'tech-stack', idx: '02' },
  { id: 'experience', label: 'experience', idx: '03' },
  { id: 'projects',   label: 'projects',   idx: '04', soon: true },
  { id: 'articles',   label: 'articles',   idx: '05' },
  { id: 'music',      label: 'music',      idx: '06' },
  { id: 'contact',    label: 'contact',    idx: '07' },
];

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="drawer" [class.open]="open">
      <button class="drawer-close" (click)="close.emit()" aria-label="close">×</button>
      <nav class="nav">
        @for (item of nav; track item.id) {
          <a class="nav-item"
             [class.active]="scrollSpy.activeSection() === item.id"
             href="#{{ item.id }}"
             (click)="navigate($event, item.id)">
            <span class="idx">{{ item.idx }}</span>
            <span>{{ item.label }}</span>
            @if (item.soon) {
              <span class="soon">SOON</span>
            }
          </a>
        }
      </nav>
    </div>
  `,
})
export class DrawerComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();
  nav = NAV;
  scrollSpy = inject(ScrollSpyService);

  navigate(e: Event, id: string) {
    e.preventDefault();
    this.scrollSpy.scrollTo(id);
    this.close.emit();
  }
}
