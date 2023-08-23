import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MarcaTextoDirective } from './directives/marca-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]//inicializador
})
export class AppModule { }
