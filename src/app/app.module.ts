import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { FooterComponent } from './footer/footer.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ListadeamigosComponent } from './listadeamigos/listadeamigos.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    SidebarComponent,
    HeaderComponent,
    WrapperComponent,
    SugerenciasComponent,
    ConfiguracionComponent,
    FooterComponent,
    ListadeamigosComponent,
    ContactoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
