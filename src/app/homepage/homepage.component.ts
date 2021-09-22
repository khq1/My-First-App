import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  title = 'angular-fragment';

  constructor(private router: Router) { }

  public buttonClick(fragment: string): void {
    this.router.navigateByUrl('#' + fragment);}
  ngOnInit(): void {
  }

}
