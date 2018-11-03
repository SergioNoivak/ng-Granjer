import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoUsuarioComponent } from './cartao-usuario.component';

describe('CartaoUsuarioComponent', () => {
  let component: CartaoUsuarioComponent;
  let fixture: ComponentFixture<CartaoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
