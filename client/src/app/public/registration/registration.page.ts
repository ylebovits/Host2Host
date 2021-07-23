import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  first_name: string;
  last_name: string;
  age: number;
  email: string;
  password: string;
  phone_number: string;

  doSomething() {
    console.log("stuff");
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
            "first_name": this.first_name,
            "last_name": this.last_name,
            "age": this.age,
            "email": this.email,
            "password": this.password,
            "phone_number": this.phone_number,
    }

    this.http.post("http://127.0.0.1:8000/api/users/register/", postData, {})
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }

}