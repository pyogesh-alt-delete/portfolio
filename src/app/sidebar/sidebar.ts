import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { ThemeService } from '../../services/theme.service';
import { PORTFOLIO } from '../../services/portfolio.data';

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
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
    templateUrl: './sidebar.html',
})
export class SidebarComponent {
  data = PORTFOLIO;
  nav = NAV;
  scrollSpy = inject(ScrollSpyService);
  theme = inject(ThemeService);

  navigate(e: Event, id: string) {
    e.preventDefault();
    this.scrollSpy.scrollTo(id);
  }
}
