import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { FootersectionComponent } from './footersection/footersection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerosectionComponent,
    FootersectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
