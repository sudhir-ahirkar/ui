import { ValidatorService } from './../shared/components/form-control-messages/validator.service';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse, HttpEvent
} from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenStorage } from './token.storage';
import { Observable } from 'rxjs';
const TOKEN_HEADER_KEY = 'Authorization';

import { map, filter, tap } from 'rxjs/operators';
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private token: TokenStorage, private router: Router, private validator: ValidatorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    let authReq = req;
    if (this.token.getToken() != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.token.getToken()) });
    }
    return next.handle(authReq).pipe(
      tap(
        (response: HttpEvent<any>) => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            console.log(err)
            if (err.status === 401) {
              const error = err.error.applicationMessage || 'UnAuthorized User';
            }
            if (err.status === 500) {
              const error = err.error.errorMessage || err.error.applicationMessage;
            }
            if (err.status === 400) {
              this.validator.setformSererValidator(err.error.errors);
            }

          }
        }
      )
    )
  }

}
