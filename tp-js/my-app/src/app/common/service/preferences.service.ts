import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee$ :BehaviorSubject<string> ;

  constructor() { 
    let c = localStorage.getItem('preferences.couleurFond');
    c=c?c:'lightgrey';
    this._couleurFondPreferee$ = new BehaviorSubject<string>(c);
  }

  /*
  //NB: un $ en fin de méthode est une convention de nommage
  //quelquefois utilisée pour préciser que le type de retour 
  //est de type observable
  public get couleurFondPreferee$() :BehaviorSubject<string>{
    return this._couleurFondPreferee$;
  }
  */

  public get couleurFondPrefereeObservable() :BehaviorSubject<string>{
    return this._couleurFondPreferee$;
  }

  public set couleurFondPreferee(c:string){
    this._couleurFondPreferee$.next(c);
    localStorage.setItem('preferences.couleurFond',c);
  }

}
