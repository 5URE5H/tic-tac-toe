import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayGroundComponent } from './components/play-ground/play-ground.component';
import { CellComponent } from './components/cell/cell.component';
import { BlockComponent } from './components/block/block.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayGroundComponent,
    CellComponent,
    BlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
