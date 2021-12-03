import { Component, Injectable, ViewChild } from '@angular/core';

import { RecordService } from '../record.service';
import { Record } from '../record';
import { SelectControlValueAccessor } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-menu-nav-dash',
  templateUrl: './menu-nav-dash.component.html',
  styleUrls: ['./menu-nav-dash.component.scss']
})
@Injectable({ providedIn: 'root' })
export class MenuNavDashComponent {
  records: any;

  
  
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
