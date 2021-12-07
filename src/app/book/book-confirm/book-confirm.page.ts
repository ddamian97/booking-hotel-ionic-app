import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-confirm',
  templateUrl: './book-confirm.page.html',
  styleUrls: ['./book-confirm.page.scss'],
})
export class BookConfirmPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  goHome(){
    this.router.navigate(['/tabs/']);
  }

}
