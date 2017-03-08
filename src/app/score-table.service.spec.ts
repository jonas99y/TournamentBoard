/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ScoreTableService } from './score-table.service';

describe('ScoreTablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoreTableService]
    });
  });

  it('should ...', inject([ScoreTableService], (service: ScoreTableService) => {
    expect(service).toBeTruthy();
  }));
});
