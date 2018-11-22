import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyCultivationComponent } from './energy-cultivation.component';

describe('EnergyCultivationComponent', () => {
  let component: EnergyCultivationComponent;
  let fixture: ComponentFixture<EnergyCultivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyCultivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyCultivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
