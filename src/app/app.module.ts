import { CounterModule } from './counter/counter.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesMdule } from './heroes/heroes.module';
import {BdzModule} from './bdz/dbz.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesMdule,
    BdzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
