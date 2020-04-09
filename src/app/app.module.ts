import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent} from './prueba/prueba.component';
import { AltaAlumnoComponent } from './alta-alumno/alta-alumno.component';

@NgModule({
  declarations: [
    AppComponent, PruebaComponent, AltaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
