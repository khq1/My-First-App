import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Record } from "./record";
import { Observable, of } from "rxjs";
import { tap, catchError, } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RecordService {


  constructor(
    private http: HttpClient,
      ) { }

      private recordsUrl = 'assets/Nordschleife_lap_times.json';
     
  getRecords(): Observable<Array<Record>> {
    return this.http.get<Array<Record>>(this.recordsUrl);
  }
  searchRecords(vehicle: string): Observable<Record[]> {
    if (!vehicle.trim()) {
      // if not search vehicle, return empty hero array.
      return of([]);
    }
    return this.http.get<Record[]>(`${this.recordsUrl}/?vehicle=${vehicle}`).pipe(
      tap(x => x.length ?
         this.log(`found records matching "${vehicle}"`) :
         this.log(`no records matching "${vehicle}"`)),
      catchError(this.handleError<Record[]>('searchRecords', []))
    );
  }
  log(arg0: string): void {
    throw new Error("Method not implemented.");
  }
  handleError<T>(arg0: string, arg1: never[]): (err: any, caught: Observable<Record[]>) => import("rxjs").ObservableInput<any> {
    throw new Error("Method not implemented.");
  }
}