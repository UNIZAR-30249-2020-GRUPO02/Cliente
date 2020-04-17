import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReservaComponent } from './reserva/reserva.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'reserva', component: ReservaComponent },
  { path: 'app', component: AppComponent },
  { path: '',
    redirectTo: '/reserva',
    pathMatch: 'full'
  },
  /*{
    path: '**', component: PageNotFoundComponent
  }*/

];

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
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
