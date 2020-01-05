import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserLogin, User} from '../../shared/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080/email2sms/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(loginFields:IUserLogin): Observable<any> {
    // const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post<any>('http://localhost:9092/token/generate-token', loginFields);
  }


  addUser(user:User): Observable<any> {
    console.log('User ::');
    return this.http.post<any>('http://localhost:9092/signup', user);
  }

}
