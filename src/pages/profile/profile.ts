import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  topTen: {
    userName: string,
    score: number
  }[];
  
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter(){
    this.topTen = [{userName: 'Dick', score: 1000}, {userName: 'Jacob', score: 753}, {userName: 'Tommy', score: 751}, {userName: 'Millo', score: 14}];
    for (let i = 0; i < 6; i++) {
      this.topTen.push({userName: '', score: -1});
    }
  }
}
