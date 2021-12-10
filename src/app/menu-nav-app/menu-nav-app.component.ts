import { Component, OnInit, } from '@angular/core';
import { BreakpointObserver, Breakpoints, } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-nav-app',
  templateUrl: './menu-nav-app.component.html',
  styleUrls: ['./menu-nav-app.component.scss']
})
export class MenuNavAppComponent implements OnInit {

    
  constructor(private route: ActivatedRoute,    
      private breakpointObserver: BreakpointObserver) {}
      isHandset$: Observable<boolean> = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );


name='';
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
        
      });

    }
  }