import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './shared/constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.startsWith('/api')) {
      req = req.clone({
        url: req.url.replace('/api', environment.apiUrl)
      })
    }
    return next.handle(req)
  }


}
export const AppInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS
}