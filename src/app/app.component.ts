import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any[] = [];
  constructor(private user: ApiService) {
    this.user.getdata().subscribe((resp: any) => {
      this.data = resp.data;
      console.log(this.data);
    });
  }
}
