import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RouterModule, Routes } from '@angular/router';
import { GerenciaComponent } from './gerencia/gerencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AcceptComponent } from './accept/accept.component';
import { HttpClientModule } from '@angular/common/http';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SeleccionEspaciosComponent } from './seleccion-espacios/seleccion-espacios.component';
import { MaterialModule } from './material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { ModDatosComponent } from './mod-datos/mod-datos.component';
import { ModHorarioComponent } from './mod-horario/mod-horario.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InfoEspacioComponent } from './info-espacio/info-espacio/info-espacio.component';
import { VentanaDialogoComponent } from './ventana-dialogo/ventana-dialogo.component';

// Rutas necesarias para navegar entre componentes
const appRoutes: Routes = [
  { path: 'reserva', component: ReservaComponent },
  { path: 'mod-datos', component: ModDatosComponent, canActivate: [AuthGuard] },
  { path: 'mod-horario', component: ModHorarioComponent },
  { path: 'accept', component: AcceptComponent, canActivate: [AuthGuard]  },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'seleccion-espacios', component: SeleccionEspaciosComponent },
  { path: 'gerencia', component: GerenciaComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioComponent },
  { path: 'app', component: AppComponent },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  exports: [],
  declarations: [
    AppComponent,
    ReservaComponent,
    GerenciaComponent,
    InicioComponent,
    LoginComponent,
    AcceptComponent,
    BusquedaComponent,
    SeleccionEspaciosComponent,
    ModDatosComponent,
    ModHorarioComponent,
    InfoEspacioComponent,
    VentanaDialogoComponent,
  ],
  entryComponents: [BusquedaComponent, ModHorarioComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    MatDialogModule,
    NoopAnimationsModule
    //MatDatepickerModule
  ],
  providers: [
  ModHorarioComponent,
  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent, ModHorarioComponent],
})
export class AppModule { }
