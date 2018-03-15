import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from './../service/authenticate.service';


describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [AuthGuard, AuthenticateService]
    });
  });

  it('should be create', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  
  it('should called when user is authenticate or not and return boolean', inject([AuthGuard], (guard: AuthGuard) => {
       guard.canActivate();
  }));
  
});
