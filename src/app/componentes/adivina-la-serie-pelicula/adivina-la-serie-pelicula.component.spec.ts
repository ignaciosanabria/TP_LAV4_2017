import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaLaSeriePeliculaComponent } from './adivina-la-serie-pelicula.component';

describe('AdivinaLaSeriePeliculaComponent', () => {
  let component: AdivinaLaSeriePeliculaComponent;
  let fixture: ComponentFixture<AdivinaLaSeriePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaLaSeriePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaLaSeriePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
