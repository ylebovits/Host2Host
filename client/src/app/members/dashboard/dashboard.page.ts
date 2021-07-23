import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class dashboardPage {

  constructor(public alertCtrl: AlertController, private toastCtrl: ToastController) {}

  CheckInEvent() {
    alert("Hello! I am an alert box!!");
  }

  report() {
    const alert = this.alertCtrl.create({
      header: 'Emergency Support Initiated',
      message: 'Help is on the way! Hang tight.',
      buttons: ['OK']
    }).then(res=> {
        res.present();
    })  
  }

  ReviewAlert() {
    const alert = this.alertCtrl.create({
      header: 'Review Submitted',
      message: 'Thanks for taking the time to submit a review! We appreciate it! :)',
      buttons: ['OK']
    }).then(res=> {
        res.present();
    })  
  }

  displayItinerary() {
    return false;
  }
  
  rate=0;
  onRate(rate) {
    console.log(rate)
    this.rate = rate;
  }

  private buttonColor: string = "primary";
  private disabled: string = "false";
  
  checkInEvent() {
      this.buttonColor = "success";
      this.disabled = "true";
  }

  btn_txt = 'Check In';
  check() {
    if (this.btn_txt == 'Check In') {
        //do some logic
        this.btn_txt = 'Welcome!';
    } else {
      this.btn_txt = 'Check In';
    }
    
  }

  experienceVal(newRangeValue){
    console.log("Range :"+newRangeValue.detail.value); 
  }

  interactionVal(newRangeValue){
    console.log("Range :"+newRangeValue.detail.value); 
  }
  
  cleanVal(newRangeValue){
    console.log("Range :"+newRangeValue.detail.value); 
  }
  
  recVal(newRangeValue){
    console.log("Range :"+newRangeValue.detail.value); 
  }
  
  private formData: FormGroup;
  
  onNgInit(){
    this.formData = new FormGroup({
      review: new FormControl()
    });
  }

  onSubmit(reviewVal){
    console.log(reviewVal);
  }
}