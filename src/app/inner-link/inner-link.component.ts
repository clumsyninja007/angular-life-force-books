import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-link',
  templateUrl: './inner-link.component.html',
  styleUrls: ['./inner-link.component.scss']
})
export class InnerLinkComponent implements OnInit {
  @Input() content: string;
  @Input() href: string;

  constructor() { }

  ngOnInit() {
  }

}
