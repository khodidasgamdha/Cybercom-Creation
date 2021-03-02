import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseFormComponent } from './cruise-form.component';

describe('CruiseFormComponent', () => {
  let component: CruiseFormComponent;
  let fixture: ComponentFixture<CruiseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
