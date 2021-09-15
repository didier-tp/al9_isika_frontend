import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

function isNotNullNumber(v : number | undefined | null) : boolean{
  return (v==null)?false:!(isNaN(v));
}

function isNullOrNaN(v : number | undefined | null) : boolean{
  return (v==null)?true:(isNaN(v)); //rappel avec == (sans ===) undefined est considere comme null
}

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  modeChoisi : string | undefined; //"simple" ou "sophistiquee"

  //a : number = NaN;
  //a! : number; // ! pour permettre undefined au tout debut
  a : number | undefined  ; //doit être ulterieurement testé
  b : number | undefined  ;
  res : number = 0; 

  montrerHisto : boolean = true;
  historiqueCalculs :string[] = [];


  onCalculer(op:string){
       //if(this.a == null || this.b == null ) return;
       if(isNullOrNaN(this.a) || isNullOrNaN(this.b) ) { this.res=0; return;}

       switch(op){
         case "+" :
            this.res = Number(this.a) + Number(this.b);  break;
        case "-" :
              this.res = Number(this.a)- Number(this.b);  break;
        case "*" :
            this.res = Number(this.a) * Number(this.b);  break;
        default:
            this.res = 0;
       }
       this.historiqueCalculs.push(`${this.a} ${op} ${this.b} = ${this.res}`)
  }

  //coordonnées relatives de la souris qui survole une div
  x :number = 0; 
  y :number = 0;

  onMouseMove(evt :MouseEvent){
    let currentDiv : HTMLElement  = <HTMLElement> evt.target;
    this.x = evt.pageX - currentDiv.offsetLeft;
    this.y = evt.pageY - currentDiv.offsetTop;
  }

  onMouseLeave(evt : MouseEvent){
    this.x=0; this.y=0;
  }

  constructor(route : ActivatedRoute) { 
    route.params.subscribe(
      (params: Params)=> {
        this.modeChoisi = params['mode'];
      }
    )
    //NB: params['mode'] car  { path: 'calculatrice/:mode', ... },
  }

  ngOnInit(): void {
  }

}
