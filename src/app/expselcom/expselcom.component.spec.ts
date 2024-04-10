import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpselcomComponent } from './expselcom.component';

describe('ExpselcomComponent', () => {
  let component: ExpselcomComponent;
  let fixture: ComponentFixture<ExpselcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpselcomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpselcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
