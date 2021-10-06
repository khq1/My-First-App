import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
 

  constructor(private router: Router) { }

  public buttonClick(fragment: string): void {
    this.router.navigate(['/app-homepage']).then(()=>{
    window.location.hash=fragment;	
   });
     {
     
    }
    }ngOnInit() {
  }
}
