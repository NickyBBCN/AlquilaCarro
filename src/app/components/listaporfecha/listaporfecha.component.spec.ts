import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaporfechaComponent } from './listaporfecha.component';

describe('ListaporfechaComponent', () => {
  let component: ListaporfechaComponent;
  let fixture: ComponentFixture<ListaporfechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaporfechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaporfechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
