import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipcomponentComponent } from './relationshipcomponent.component';

describe('RelationshipcomponentComponent', () => {
  let component: RelationshipcomponentComponent;
  let fixture: ComponentFixture<RelationshipcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RelationshipcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelationshipcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
