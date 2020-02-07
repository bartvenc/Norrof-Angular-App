import { TestBed } from '@angular/core/testing';

import { PokemonFetchService } from './pokemon-fetch.service';

describe('PokemonFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonFetchService = TestBed.get(PokemonFetchService);
    expect(service).toBeTruthy();
  });
});
