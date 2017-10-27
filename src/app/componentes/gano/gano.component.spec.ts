import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GanoComponent } from './gano.component';

describe('GanoComponent', () => {
  let component: GanoComponent;
  let fixture: ComponentFixture<GanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
