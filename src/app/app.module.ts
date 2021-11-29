import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuNavAppComponent } from './menu-nav-app/menu-nav-app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuNavDashComponent } from './menu-nav-dash/menu-nav-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MenuNavTableComponent } from './menu-nav-table/menu-nav-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatRadioModule } from '@angular/material/radio';
import { RadioButComponent } from './radio-but/radio-but.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatRippleModule} from '@angular/material/core';
import { RecordService } from './record.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavAppComponent,
    MenuNavDashComponent,
    MenuNavTableComponent,
    RadioButComponent,
    HomepageComponent,
    PageNotFoundComponent,
    GridListComponent,
    ContactFormComponent,
    FileUploadComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRadioModule,
   HttpClientModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTooltipModule,
    CdkAccordionModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatRippleModule,
    
  ],
  providers: [HttpClientModule,RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
