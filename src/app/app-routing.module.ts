import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuNavDashComponent } from './menu-nav-dash/menu-nav-dash.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
 
  {path: 'app-search-bar',component: SearchBarComponent },
  {path:'app-page-list',component:PageListComponent},
  {path:'app-menu-nav-dash',component:MenuNavDashComponent},
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
