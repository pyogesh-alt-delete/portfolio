import { Component, inject } from '@angular/core';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective],
    templateUrl: './contact.html',
})
export class ContactComponent {
  data = PORTFOLIO;
  scrollSpy = inject(ScrollSpyService);

  get emailHref() {
    const email = this.data.identity.socials.find(s => s.label === 'email');
    return email ? `mailto:${email.handle}` : '#';
  }
}
