import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizBusccarComponent } from './matriz-busccar.component';

describe('MatrizBusccarComponent', () => {
  let component: MatrizBusccarComponent;
  let fixture: ComponentFixture<MatrizBusccarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrizBusccarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrizBusccarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
