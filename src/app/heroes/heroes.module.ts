import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from "./components/heroe/heroe.component";
import { HeroeListComponent } from "./components/heroe-list/heroe-list.component";



@NgModule({
  declarations:[
    HeroeComponent,
    HeroeListComponent
  ],
  exports:[
    HeroeComponent,
    HeroeListComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesMdule{

}
