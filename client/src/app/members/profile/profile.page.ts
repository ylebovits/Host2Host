import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class profilePage {

  constructor(private http:HttpClient){}

  runHttp(){
    this.http.get('https://host2host-320515.nn.r.appspot.com/api/users/2/').subscribe(data=>{
      console.log(data)
    })
  }
}