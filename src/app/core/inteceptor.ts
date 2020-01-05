import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse} from '@angular/common/http';
import { Router } from '@angular/router';
import {TokenStorage} from './token.storage';
import { Observable } from 'rxjs';
// import { filter } from 'rxjs/operators';
const TOKEN_HEADER_KEY = 'Authorization';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/Observable';
// import 'rxjs/add/observable/throw';
import { map, filter, tap } from 'rxjs/operators';
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let authReq = req;
    if (this.token.getToken() != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken())});
    }
    return next.handle(authReq).pipe(
        // (err: any) => {
        //   if (err instanceof HttpErrorResponse) {
        //     console.log(err);
        //     console.log('req url :: ' + req.url);
        //     if (err.status === 401) {
        //       this.router.navigate(['user']);
        //     }
        //   }
        // }
      );
  }

}
