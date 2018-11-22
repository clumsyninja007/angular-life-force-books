import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SisterSitesComponent } from './sister-sites.component';

describe('SisterSitesComponent', () => {
  let component: SisterSitesComponent;
  let fixture: ComponentFixture<SisterSitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SisterSitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SisterSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
