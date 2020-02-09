import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResultsComponent } from './results/results.component';
// import {MatButtonModule,
//  MatCheckboxModule,
//  MatCardModule,
//  MatProgressSpinnerModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  BrowserAnimationsModule,
  // MatCardModule,
  // MatProgressSpinnerModule,
  // MatButtonModule,
  // MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
