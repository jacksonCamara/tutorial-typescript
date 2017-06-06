import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesNativasComponent } from './funcoes-nativas.component';

describe('FuncoesNativasComponent', () => {
  let component: FuncoesNativasComponent;
  let fixture: ComponentFixture<FuncoesNativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncoesNativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncoesNativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
