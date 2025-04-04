import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './components/lista-alumno';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,  
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }