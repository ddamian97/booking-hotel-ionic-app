import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule, Validators, FormControl, FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import {NavController} from '@ionic/angular';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-book1',
  templateUrl: './book1.page.html',
  styleUrls: ['./book1.page.scss'],
})
export class Book1Page implements OnInit {
  bookingForm: FormGroup;
  data: any;
  currentDate = new Date().toISOString();
  bookingDetails ={
    data: '',
    name: '',
    lastName: '',
    email: '',
    roomType: '',
    startDate:'',
    endDate: '',
  };
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    if(this.route.snapshot.data.special){
      this.data = this.route.snapshot.data.special;
    }
    this.bookingForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(32),
      ]),
      roomType: new FormControl('', [
        Validators.required,
      ]),
      startDate: new FormControl('', [
        Validators.required,
      ]),
      endDate: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  goBack(){
    this.navCtrl.back();
  }
  formSubmit(){
    const name = this.name;
    const lastName = this.lastName;
    const email = this.email;
    const roomType = this.roomType;
    const bookingDetails = this.bookingDetails;
    const startDate = this.startDate;
    const endDate = this.endDate;
    bookingDetails.data = this.data;
    bookingDetails.name = name.value;
    bookingDetails.lastName = lastName.value;
    bookingDetails.email = email.value;
    bookingDetails.roomType = roomType.value;
    bookingDetails.startDate = startDate.value;
    bookingDetails.endDate = endDate.value;
    const url = '/book2/' + this.data[0];
    const navigationExtras: NavigationExtras = {
      state: {
        bookingDetails: this.bookingDetails
      }
    };
    this.router.navigate(['book2'], navigationExtras);
  }
  get name() {
    return this.bookingForm.get('name');
  }
  get lastName() {
    return this.bookingForm.get('lastName');
  }
  get email() {
    return this.bookingForm.get('email');
  }
  get roomType() {
    return this.bookingForm.get('roomType');
  }
  roomTypes(){
    const tmpArray = this.data[8];
    return tmpArray;
  }
  get startDate() {
    return this.bookingForm.get('startDate');
  }
  get endDate() {
    // console.log(this.bookingForm.get('endDate').value);
    // console.log(typeof this.bookingForm.get('endDate').value);
    return this.bookingForm.get('endDate');
  }
}
