import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre : string = "titre_par_defaut";

  myMenuDefs : MenuDefinition[] = [
    { label : "Pour admin" , 
      children : [
        { label : "login" , path : "ngr-login" } ,
        { label : "basic" , path : "ngr-basic" } ,
        { divider : true },
        { label : "welcome" , path : "ngr-welcome" },
      ]
    },
    { label : "basic" , path : "ngr-basic" } , 
    { label : "welcome" , path : "ngr-welcome" }
    ];
 
  constructor(public preferencesService : PreferencesService) { 
      console.log("dans constructor de HeaderComponent , titre="+this.titre)
  }

  //ngOnInit() ressemble à @PostConstruct de java
  ngOnInit(): void {
    console.log("dans ngOnInit de HeaderComponent , titre="+this.titre)
  }

}
