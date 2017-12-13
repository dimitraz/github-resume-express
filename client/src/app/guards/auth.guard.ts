import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {
    }

    canActivate() {
        if (localStorage.getItem("token") === null) {
            this.router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }

}