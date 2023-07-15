import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { WordsComponent } from './pages/words/words.component';
import { SpecialComponent } from './pages/special/special.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    CarouselComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    WordsComponent,
    SpecialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
