import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {
    this.items = [];
    for (let i = 0; i < 10; i++) {
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }

  }

  itemSelected(item) {
    this.navCtrl.push(DetailPage, {
      item: item
    });
  }

  async logout() {
    try {
      const result = await this.afAuth.auth.signOut();
      console.log(result);
      this.navCtrl.setRoot('LoginPage');
    }
    catch (e) {
      console.error(e);
    }
  }
}
