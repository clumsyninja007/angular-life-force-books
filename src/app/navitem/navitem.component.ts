import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Nav } from '../nav';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navitem',
  templateUrl: './navitem.component.html',
  styleUrls: ['./navitem.component.scss']
})
export class NavitemComponent implements OnInit {
  @Input() nav: Nav;
  @Input() setNav: string;
  @Input() parent: string;
  @Input() externalURL: string;
  faCaretDown = faCaretDown;
  active = false;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    if(this.setNav) {
      this.nav = new Nav(this.setNav)
    }
  }
}
