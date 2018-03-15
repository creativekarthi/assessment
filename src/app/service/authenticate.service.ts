import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {

  constructor() { }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('currentUser')) {
        return true;
    }
    return false;
  }

}
