import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticateService } from '../service/authenticate.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public _auth: AuthenticateService, public router: Router) {}
  canActivate(): boolean {
    if (!this._auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
