import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { HeroeListComponent } from './heroes/heroe-list/heroe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent,
    HeroeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
