import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { SugerenciasComponent} from './sugerencias/sugerencias.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { PerfilComponent } from './perfil/perfil.component';


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
    path: 'video/:id',
    component: VideoComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
