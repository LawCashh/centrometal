import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {delay, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getData<T> (path: string): Observable<T> {
    return this.http.get<T>("http://localhost:3000/" + path);
  }
}
