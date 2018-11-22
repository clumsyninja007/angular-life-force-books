import { Component, OnInit, Input } from '@angular/core';

import { Nav } from '../nav';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navs: Nav[];
  faBars = faBars;
  showMobile = false;

  constructor() {}

  ngOnInit() {
    this.navs = [
      new Nav("HOME"),
      new Nav("LIFE FORCE SCIENCE"),
      new Nav("ENERGY CULTIVATION"),
      new Nav("STORE",
        [
          "The Secret of the Golden Flower a Kundalini Meditation Method",
          "Deciphering the Golden Flower"
        ]
      ),
      new Nav("SISTER SITES",
        [
          "Golden Flower Meditation|https://www.goldenflowermediation.com",
          "Common Sense Kundalini|https://www.commonsensekundalini.com"
        ]
      ),
      new Nav("CALENDAR"),
      new Nav("ANNOUNCEMENTS"),
    ];
  }

  toggleMobileMenu() {
    this.showMobile = !this.showMobile;
  }
}
