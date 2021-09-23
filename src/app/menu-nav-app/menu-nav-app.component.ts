import { Component, } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-nav-app',
  templateUrl: './menu-nav-app.component.html',
  styleUrls: ['./menu-nav-app.component.scss']
})
export class MenuNavAppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,) {}

name='';
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
      });
    }}