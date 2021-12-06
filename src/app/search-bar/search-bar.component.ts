import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import { RecordService } from '../record.service';
import { Record } from '../record';
import { Router } from '@angular/router';




@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
  myControl = new FormControl();
  records: Record[] = [];
  filteredRecords: Observable<Record[]> | undefined;
 
 

  ngOnInit() {



    this.filteredRecords = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.vehicle)),
      map(vehicle => (vehicle ? this._filter(vehicle) : this.records.slice())),
    );
  }
  

  displayFn(record: Record): string {
    return record && record.vehicle ? record.vehicle : '';
  }

  private _filter(vehicle: string): Record[] {
    const filterValue = vehicle.toLowerCase();

    return this.records.filter(record => record.vehicle.toLowerCase().includes(filterValue));
  }

  constructor(
    private RecordService: RecordService,
    private router: Router,
  ) {
    
    this.getRecords();
  }
  

  getRecords(): void {
    this.RecordService.getRecords().subscribe((records: Record[]) => (this.records = records));
  }
  onSubmit(myControl: FormControl){
    this.router.navigate(['record',myControl.value.search])
    }
  


  

}
