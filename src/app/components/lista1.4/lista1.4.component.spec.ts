import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista14Component } from './lista1.4.component';

describe('Lista14Component', () => {
  let component: Lista14Component;
  let fixture: ComponentFixture<Lista14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lista14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lista14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
