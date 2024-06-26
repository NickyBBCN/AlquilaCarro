import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerXdiamesComponent } from './alquiler-xdiames.component';

describe('AlquilerXdiamesComponent', () => {
  let component: AlquilerXdiamesComponent;
  let fixture: ComponentFixture<AlquilerXdiamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlquilerXdiamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlquilerXdiamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
