import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteNuevoComponent } from './componente-nuevo/componente-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteNuevoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
