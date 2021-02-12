import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetAleartComponent } from './sweet-aleart.component';

describe('SweetAleartComponent', () => {
  let component: SweetAleartComponent;
  let fixture: ComponentFixture<SweetAleartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweetAleartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetAleartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
