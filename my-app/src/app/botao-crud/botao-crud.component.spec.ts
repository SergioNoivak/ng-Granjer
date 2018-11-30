import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCRUDComponent } from './botao-crud.component';

describe('BotaoCRUDComponent', () => {
  let component: BotaoCRUDComponent;
  let fixture: ComponentFixture<BotaoCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
