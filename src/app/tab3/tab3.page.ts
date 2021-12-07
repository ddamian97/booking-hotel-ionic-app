import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import {DataService} from "../services/data.service";




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  data: any;

  constructor(private route: ActivatedRoute,  private navCtrl: NavController, private router: Router) {
  }
  ngOnInit(){
    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
    }
  }
  goBack(){
    this.navCtrl.back();
  }
  goHome(){
    this.router.navigate(['/tabs/']);
  }
  openBook1WithService(id){
    const url = '/book1/' + id;
    this.router.navigateByUrl(url);
  }
  counter(i: number) {
    const starsCounter: number = + i;
    return new Array <number>(starsCounter);
  }
}
