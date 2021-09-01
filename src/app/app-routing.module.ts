import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuNavAppComponent } from './menu-nav-app/menu-nav-app.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
