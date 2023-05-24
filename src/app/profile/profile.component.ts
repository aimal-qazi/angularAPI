import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  data: any;
  constructor(private user: ApiService) {
    this.user.getdata().subscribe((resp: any) => {
      this.data = resp.data;
      console.log(this.data);
    });
  }
}
