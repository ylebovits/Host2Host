import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUrl = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.loginUrl = '/tabs/search';
  }

  signIn() {
    console.log("this is working");
    localStorage.setItem('authenticated', '1');
    this.router.navigateByUrl(this.loginUrl);
  }
}
