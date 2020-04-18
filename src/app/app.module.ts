import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RouterModule, Routes } from '@angular/router';
import { GerenciaComponent } from './gerencia/gerencia.component';
import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes = [
  { path: 'reserva', component: ReservaComponent },
  { path: 'gerencia', component: GerenciaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'app', component: AppComponent },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    GerenciaComponent,
    InicioComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
