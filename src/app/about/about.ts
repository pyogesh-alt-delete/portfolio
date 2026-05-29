import { Component } from '@angular/core';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
})
export class AboutComponent {
  data = PORTFOLIO;
}
