import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bannerImg: string;

  constructor() { }

  ngOnInit() {
    this.bannerImg = '/assets/images/lfb-apexbanner.jpg'
  }

}
