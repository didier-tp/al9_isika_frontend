import { HttpClient, HttpClientModule} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { fail } from 'assert';

import { DeviseService } from './devise.service';

describe('DeviseService', () => {
  let service: DeviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ HttpClientModule],
      providers: [ HttpClient  ]  
       /* providers: DeviseService already provided in root */
    });
    service = TestBed.inject(DeviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert EUR to USD correctly with backend WS ', (done) => {
    service.convertir$(200,"EUR","USD").subscribe(
      (montantConverti) => { 
        console.log("montantConverti="+montantConverti);
        expect(montantConverti).toBeCloseTo(217.4,0.1); 
        done();
      },
      (err)=> { fail("convert error :" + JSON.stringify(err));}
    )
    
  });
});

//ng test --include=**/service/*.spec.ts pour ne lancer que les tests unitaires sur les services