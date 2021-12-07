import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-book2',
  templateUrl: './book2.page.html',
  styleUrls: ['./book2.page.scss'],
})
export class Book2Page implements OnInit {
  data: any;
  bookingDetails: any;
  constructor(private alertController: AlertController, private route: ActivatedRoute,  private navCtrl: NavController, private router: Router, public datepipe: DatePipe) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.bookingDetails = this.router.getCurrentNavigation().extras.state.bookingDetails;
      }
    });
  }
  goBack(){
    this.navCtrl.back();
  }
  ngOnInit(){
  }

  async showConfirmAlert(){
    await this.alertController.create({
      header:  'Czy potwierdasz zamówienie?',
      subHeader: 'Zamówienie wiąże się z opłatą',
      buttons: [
        {text: 'Potwierdź', handler: (res) =>{
            this.router.navigate(['/book-confirm']);
          }
        },{
          text: 'Anuluj'
        }
      ]
    }).then(res => res.present());
  }
  startDate(){
    const tmpStartDate = this.datepipe.transform(this.bookingDetails.startDate, 'dd-MM-yyyy');
    return tmpStartDate;
  }
  endDate(){
    const tmpEndDate = this.datepipe.transform(this.bookingDetails.endDate, 'dd-MM-yyyy');
    return tmpEndDate;
  }
  getDays(){
    let days: any;
    const tmpStartDate = new Date(this.bookingDetails.startDate);
    const tmpEndDate = new Date(this.bookingDetails.endDate);

    days = tmpEndDate.getTime() - tmpStartDate.getTime();
    days = Math.ceil(days / (1000 * 3600 * 24));
    console.log(typeof tmpStartDate);
    console.log(tmpEndDate);
    console.log(days);
    return days;
  }
  getPrice(){
    let price: any;
    const days = this.getDays();
    // eslint-disable-next-line prefer-const
    price = days * this.bookingDetails.data[6];
    return price;
  }

}
