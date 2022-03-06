import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getUpcomingLaunches(): Observable<any> {
    return this.http.get('http://localhost:8080/upcoming', { observe: 'body' });
  }
  getRocket(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/rockets/${id}`, {
      observe: 'body',
    });
  }
  getCrew(id: string): Observable<any> {
    return this.http.get(`http://localhost:8080/crew/${id}`, {
      observe: 'body',
    });
  }
}
