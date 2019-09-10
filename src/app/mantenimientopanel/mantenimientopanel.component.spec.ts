import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientopanelComponent } from './mantenimientopanel.component';

describe('MantenimientopanelComponent', () => {
  let component: MantenimientopanelComponent;
  let fixture: ComponentFixture<MantenimientopanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientopanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientopanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
