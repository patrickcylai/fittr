import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {
	public goal: number = 5000;  

  constructor(public navCtrl: NavController, 
  	public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Daily Step Goal',
      subTitle: 'Enter a new step goal',
      inputs: [
      	{ 
      		name: 'newGoal',
      		placeholder: 'Enter a new goal'
      	}
      ],
      buttons: [
      	{
      		text: 'Cancel',
      		role: 'cancel',
      		handler: () => { 
      			console.log('Cancel clicked');
      		}
      	},
      	{ 
      		text: 'Save',
      		role: 'save',
      		handler: data => { 
      			this.goal = data.newGoal;
      			console.log(data.newGoal);
      		}
      	}
      ]
    });
    alert.present();
  }

}
