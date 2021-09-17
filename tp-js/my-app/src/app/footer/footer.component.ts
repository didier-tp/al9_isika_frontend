import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
  public couleurFondPrefereeLocale : string = "lightgrey";

  public listeCouleurs : string[] = [ "lightyellow", "white",
     "lightgrey" , "lightgreen" , "lightpink" , "lightblue"] ;
     

  constructor(private _preferencesService : PreferencesService) {
        //synchronisation de la "copie locale":
        this._preferencesService.couleurFondPrefereeObservable
            .subscribe(
              //callback qui sera éventuellement re-déclenchée plusieurs fois:
              (couleurFondPreferee)=>{
                  this.couleurFondPrefereeLocale=couleurFondPreferee;}
            );
  }

  public onCouleurFondPrefereeLocaleChange(){
    this._preferencesService.couleurFondPreferee=this.couleurFondPrefereeLocale;
  }

  ngOnInit(): void {
  }

}
