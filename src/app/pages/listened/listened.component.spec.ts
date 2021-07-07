import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenedComponent } from './listened.component';

describe('ListenedComponent', () => {
  let component: ListenedComponent;
  let fixture: ComponentFixture<ListenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
