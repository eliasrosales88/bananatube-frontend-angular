import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { SugerenciasComponent} from './sugerencias/sugerencias.component';
import { FooterComponent } from './footer/footer.component';
import { ConfiguracionComponent}  from './configuracion/configuracion.component';
import { ListadeamigosComponent}  from './listadeamigos/listadeamigos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sugerencias',
    component: SugerenciasComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent
  },
  {
    path: 'listadeamigos',
    component: ListadeamigosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
