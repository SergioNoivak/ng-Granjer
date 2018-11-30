import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoHomeComponent } from './cartao-home.component';

describe('CartaoHomeComponent', () => {
  let component: CartaoHomeComponent;
  let fixture: ComponentFixture<CartaoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
