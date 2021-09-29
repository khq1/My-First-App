import { NgModule } from '@angular/core';
import { ExtraOptions, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuNavDashComponent } from './menu-nav-dash/menu-nav-dash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuNavTableComponent } from './menu-nav-table/menu-nav-table.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ContactFormComponent} from './contact-form/contact-form.component';
const routes: Routes = [
  { path: 'app-homepage', component: HomepageComponent },
  { path: 'app-menu-nav-table', component: MenuNavTableComponent },
  { path:'app-menu-nav-dash', component:MenuNavDashComponent},
  { path:'app-grid-list', component:GridListComponent},
  { path:'app-contact-form', component:ContactFormComponent},
  { path: '',   redirectTo: 'app-homepage', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: "reload",
  
};

@NgModule({
  imports: [RouterModule.forRoot(routes ,routerOptions,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
