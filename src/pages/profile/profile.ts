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
  }[] = [];
  
  constructor(public navCtrl: NavController) {

  }

  ionViewWillEnter(){
    this.setTopTen();
  }

  setTopTen(){
    //// Get top ten
    //
    //// Get top ten
    for (let i = this.topTen.length; i < 10; i++) {
      this.topTen.push({userName: '', score: -1});
    }
    while(this.topTen.length > 10){
      this.topTen.pop();
    }
    //// Test data
    this.topTen[0] = {userName: 'Dick', score: 1000};
    this.topTen[1] = {userName: 'Jacob', score: 753};
    this.topTen[2] = {userName: 'Tommy', score: 751};
    this.topTen[3] = {userName: 'Millo', score: 14};
    //// test data
  }
}
