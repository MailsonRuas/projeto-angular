import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CepPipe } from './cep.pipe';
import { AppRoutingModule } from './app-routing.module';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { NavComponent } from './nav/nav.component';
import { Ex1Component } from './ex1/ex1.component';
import { FoneMaskDirective } from './fone-mask.directive';

@NgModule({
  declarations: [
    AppComponent,
    CepPipe,
    Ex2Component,
    Ex3Component,
    NavComponent,
    Ex1Component,
    FoneMaskDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
