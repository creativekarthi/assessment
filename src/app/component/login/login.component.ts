import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: any = {};
  constructor( private router: Router) { }

  ngOnInit() {
    const getUserDetail = localStorage.getItem('currentUser');
    if (getUserDetail) {
      this.router.navigate(['user']);
    }
  }

  onSubmitCheck() {
    const set = localStorage.setItem('currentUser', JSON.stringify(this.loginModel));
    this.router.navigate(['user']);
  }

}
