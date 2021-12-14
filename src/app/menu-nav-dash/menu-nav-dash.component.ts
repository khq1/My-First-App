import { Component, Injectable } from '@angular/core';
import { RecordService } from '../record.service';
import { Record } from '../record';
import { SearchBarComponent } from '../search-bar/search-bar.component';


@Component({
  selector: 'app-menu-nav-dash',
  templateUrl: './menu-nav-dash.component.html',
  styleUrls: ['./menu-nav-dash.component.scss']
})

export class MenuNavDashComponent {
  
  colspan: number = 4;
  rowspan: number = 2;
  records: Record[] = [];
 
  
  OnExpand(){
    this.colspan = 4;
    this.rowspan = 3;
  }
  OnCollapse(){
    this.colspan = 2;
    this.rowspan = 2;
  }
  onView1(){
    this.colspan = 4;
    this.rowspan = 3;
  }
  onView2(){
    this.colspan = 2;
    this.rowspan = 2;
  }
  onView3(){
    this.colspan = 4;
    this.rowspan = 2;
  }
  onView4(){
    this.colspan = 1;
    this.rowspan = 3;
  }
  onView5(){
    this.colspan = 1;
    this.rowspan = 1;
  }
  
  
  constructor(
    private RecordService: RecordService,
   
  ) {}

  ngOnInit() {
    
    this.getRecords();
    


  }
  getRecords(): void {
    this.RecordService.getRecords().subscribe((records: Record[]) => (this.records = records));
  }
  
}
