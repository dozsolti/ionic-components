import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  } 
  ionDidLoadView() { }

  callback() {
    return new Promise((resolve,reject) => setTimeout(resolve, 1000));
  }
}
