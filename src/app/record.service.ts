import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Record } from "./record";
import { Observable, of } from "rxjs";
import { tap, catchError, map, } from "rxjs/operators";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecordService {


  constructor(
    private http: HttpClient,
    public messageService: MessageService
      ) { }

      private recordsUrl = 'assets/Nordschleife_lap_times.json';
     
  getRecords(): Observable<Array<Record>> {
    return this.http.get<Array<Record>>(this.recordsUrl);
  }
  getRecordNo404(id: number): Observable<Record> {
    const url = `${this.recordsUrl}/?id=${id}`;
    return this.http.get<Record[]>(url)
      .pipe(
        map(records => records[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} record id=${id}`);
        }),
        catchError(this.handleError<Record>(`getRecord id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getRecord(id: number): Observable<Record> {
    const url = `${this.recordsUrl}/${id}`;
    return this.http.get<Record>(url).pipe(
      tap(_ => this.log(`fetched record id=${id}`)),
      catchError(this.handleError<Record>(`getRecord id=${id}`))
    );
  }


/* GET record whose name contains search term */
  searchRecords(record: string): Observable<Record[]> {
    if (!record.trim()) {
      // if not search record, return empty record array.
      return of([]);
    }
    return this.http.get<Record[]>(`${this.recordsUrl}/?record=${record}`).pipe(
      tap(x => x.length ?
         this.log(`found records matching "${record}"`) :
         this.log(`no records matching "${record}"`)),
      catchError(this.handleError<Record[]>('searchRecords', []))
    );
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(_message: string) {
   
  }
}
