import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSecretOfTheGoldenFlowerComponent } from './the-secret-of-the-golden-flower.component';

describe('TheSecretOfTheGoldenFlowerComponent', () => {
  let component: TheSecretOfTheGoldenFlowerComponent;
  let fixture: ComponentFixture<TheSecretOfTheGoldenFlowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheSecretOfTheGoldenFlowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSecretOfTheGoldenFlowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
