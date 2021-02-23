import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqresLoginComponent } from './reqres-login.component';

describe('ReqresLoginComponent', () => {
  let component: ReqresLoginComponent;
  let fixture: ComponentFixture<ReqresLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqresLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqresLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
