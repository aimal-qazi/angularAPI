import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  display0 = false;
  display1 = false;
  display2 = false;
  display3 = false;
  display4 = false;
  display5 = false;
  display6 = false;
  display7 = false;
  display8 = false;
  display9 = false;

  data: any[] = [];
  constructor(private user: ApiService) {
    this.user.getdata().subscribe((resp: any) => {
      this.data = resp.data;
      console.log(this.data);
    });
  }

  toggle0() {
    this.display0 = !this.display0;
  }
  toggle1() {
    this.display1 = !this.display1;
  }
  toggle2() {
    this.display2 = !this.display2;
  }
  toggle3() {
    this.display3 = !this.display3;
  }
  toggle4() {
    this.display4 = !this.display4;
  }
  toggle5() {
    this.display5 = !this.display5;
  }
  toggle6() {
    this.display6 = !this.display6;
  }
  toggle7() {
    this.display7 = !this.display7;
  }
  toggle8() {
    this.display8 = !this.display8;
  }
  toggle9() {
    this.display9 = !this.display9;
  }
}
