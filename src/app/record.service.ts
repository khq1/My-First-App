import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Record } from "./record";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RecordService {


  constructor(
    private http: HttpClient,
      ) { }

  getRecords(): Observable<Array<Record>> {
    return this.http.get<Array<Record>>('assets/Nordschleife_lap_times.json');
  }
}