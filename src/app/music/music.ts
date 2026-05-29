import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO } from '../../services/portfolio.data';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './music.html',
})
export class MusicComponent {
  data = PORTFOLIO;
  playingIndex = -1;
  private barSeed = [40, 70, 55, 90, 60, 80, 45, 72, 52, 88, 62, 76, 50, 68];

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  getBars(trackIndex: number): number[] {
    return this.barSeed.map((b) => 30 + ((b + trackIndex * 13) % 70));
  }

  togglePlay(i: number) {
    if (this.playingIndex === i) {
      this.audioPlayer.nativeElement.paused
        ? this.audioPlayer.nativeElement.play()
        : this.audioPlayer.nativeElement.pause();
      this.playingIndex = -1;
      return;
    }

    this.audioPlayer.nativeElement.pause();
    this.audioPlayer.nativeElement.currentTime = 0;

    this.playingIndex = i;
    this.audioPlayer.nativeElement.src = `${this.data.music[i].file}`;
    this.audioPlayer.nativeElement.play();
  }

  onAudioEnded() {
    this.playingIndex = -1;
  }
}
