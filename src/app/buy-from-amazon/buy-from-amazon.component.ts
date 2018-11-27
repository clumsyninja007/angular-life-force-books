import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-from-amazon',
  templateUrl: './buy-from-amazon.component.html',
  styleUrls: ['./buy-from-amazon.component.scss']
})
export class BuyFromAmazonComponent implements OnInit {
  src = "/assets/images/buy_from_amazon_faded.gif";
  @Input() href: string;

  constructor() { }

  ngOnInit() {
  }

  handleMouseOver(): void {
    this.src = "/assets/images/buy_from_amazon.gif";
  }

  handleMouseOut(): void {
    this.src = "/assets/images/buy_from_amazon_faded.gif";
  }
}
