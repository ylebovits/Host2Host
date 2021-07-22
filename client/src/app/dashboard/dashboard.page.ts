import { Component } from '@angular/core';
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

  displayItinerary() {
    return false;
  }
  
  rate=0;
  onRate(rate) {
    console.log(rate)
    this.rate = rate;
  }
}
