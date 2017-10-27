import { TestBed, inject } from '@angular/core/testing';

import { ArchivoJugadoresServiceService } from './archivo-jugadores-service.service';

describe('ArchivoJugadoresServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchivoJugadoresServiceService]
    });
  });

  it('should be created', inject([ArchivoJugadoresServiceService], (service: ArchivoJugadoresServiceService) => {
    expect(service).toBeTruthy();
  }));
});
