/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.page.html',
  styleUrls: ['./profile-creation.page.scss'],
})
export class ProfileCreationPage implements OnInit {

  isHidden = true;
  constructor() { }

  ngOnInit() {
  }

 changeStatus(event){
    if (event.target.value == "NM") {
      this.isHidden=true;
    }
    else {
      this.isHidden=false;
    }
  }

}
