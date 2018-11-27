import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss']
})
export class ImgBoxComponent implements OnInit {
  @Input() src: string;
  @Input() alt: string;
  @Input() href: string;
  @Input() title: string;
  @Input() body: string;

  constructor() { }

  ngOnInit() {
  }

}
