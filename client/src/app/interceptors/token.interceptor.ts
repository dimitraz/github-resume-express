import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private authService: AuthService;

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.authService = this.injector.get(AuthService); // get it here within intercept
        let token = this.authService.getToken();

        const authRequest = request.clone({
            headers: request.headers.set('Authorization', `bearer ${token}`)
        });
        console.log(authRequest);

        return next.handle(authRequest);
    }

}