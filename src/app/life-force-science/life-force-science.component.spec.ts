import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeForceScienceComponent } from './life-force-science.component';

describe('LifeForceScienceComponent', () => {
  let component: LifeForceScienceComponent;
  let fixture: ComponentFixture<LifeForceScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeForceScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeForceScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
