import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  topFive: {
    userName: string,
    score: number
  }[] = [];
  userName: string = "userName"
  
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter(){
    this.settopFive();
  }

  settopFive(){
    //// Get top ten
    //
    //// Get top ten
    for (let i = this.topFive.length; i < 5; i++) {
      this.topFive.push({userName: '', score: -1});
    }
    while(this.topFive.length > 5){
      this.topFive.pop();
    }
    //// Test data
    this.topFive[0] = {userName: 'Dick', score: 1000};
    this.topFive[1] = {userName: 'Jacob', score: 753};
    this.topFive[2] = {userName: 'Tommy', score: 751};
    this.topFive[3] = {userName: 'Millo', score: 14};
    //// test data
  }
}
