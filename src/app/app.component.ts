import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'our-website';

  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 720) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
