import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFromAmazonComponent } from './buy-from-amazon.component';

describe('BuyFromAmazonComponent', () => {
  let component: BuyFromAmazonComponent;
  let fixture: ComponentFixture<BuyFromAmazonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyFromAmazonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFromAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
