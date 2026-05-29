import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar';
import { HeroComponent } from './hero/hero';
import { AboutComponent } from './about/about';
import { StackComponent } from './stack/stack';
import { ExperienceComponent } from './experience/experience';
import { ProjectsComponent } from './projects/projects';
import { ArticlesComponent } from './articles/articles';
import { MusicComponent } from './music/music';
import { ContactComponent } from './contact/contact';
import { ScrollSpyService } from '../services/scroll-spy.service';
import { ThemeService } from '../services/theme.service';
import { SidebarComponent } from './sidebar/sidebar';
import { DrawerComponent } from './drawer/drawer';
import { ThemePanelComponent } from './theme-panel/theme-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    TopbarComponent,
    DrawerComponent,
    HeroComponent,
    AboutComponent,
    StackComponent,
    ExperienceComponent,
    ProjectsComponent,
    ArticlesComponent,
    MusicComponent,
    ContactComponent,
    ThemePanelComponent,
  ],
  template: `
    <app-topbar (menuOpen)="drawerOpen = true" />
    <app-drawer [open]="drawerOpen" (close)="drawerOpen = false" />

    <div class="shell">
      <app-sidebar />
      <main class="main">
        <div class="wrap">
          <app-hero />
          <app-about />
          <app-stack />
          <app-experience />
          <app-projects />
          <app-articles />
          <app-music />
          <app-contact />
        </div>
      </main>
    </div>

    <app-theme-panel />
  `,
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  drawerOpen = false;
  private scrollSpy = inject(ScrollSpyService);
  private theme = inject(ThemeService);

  ngOnInit() {
    this.scrollSpy.init();
  }

  ngOnDestroy() {
    this.scrollSpy.destroy();
  }
}
