import { Injectable } from '@angular/core';
import { Headers, Response, URLSearchParams, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
    providedIn: 'root'
  })
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:9092';
  
getUsers(sort: string, size: number, page: number, body: any): Observable<any> {
    const href = `${this.userUrl}/users`;
    return this.http.post<any>(href, body, {
      params: new HttpParams()
        .set('page', page.toString())
        .set('size', size.toString())
        .set('sort', sort.toString())
    });
  }
  
  create(data: any) {
    const href = `${this.userUrl}/signup`;
    return this.http.post<any>(href, data);
  }

  update(id:number, data: any) {
    const href = `${this.userUrl}/users/${id}`;
    return this.http.put<any>(href, data);
  }

  remove(id:number): Observable<any> {
    const href = `${this.userUrl}/users/${id}`;
    return this.http.delete<any>(href);
  }

  view(id:number): Observable<any> {
    const href = `${this.userUrl}/users/${id}`;
    return this.http.get<any>(href);
  }

  getCountryRef(): Observable<any> {
    const href = `${this.userUrl}/ref-data/user`;
    return this.http.get<any>(href);
  }
  

}
