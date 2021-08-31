var tabVal = [12 , 23, 5 , 45 , 7 , 8];
var s=0;
for(var i=0;i<tabVal.length;i++){
    s+=tabVal[i];
}
console.log("somme="+s);

var saisonsCouleurs=[];//tableau associatif
saisonsCouleurs["hiver"]="blanc";
saisonsCouleurs["printemps"]="vert";
saisonsCouleurs["ete"]="jaune";
saisonsCouleurs["automne"]="marron";
for(clef in saisonsCouleurs){
    console.log(clef +":"+saisonsCouleurs[clef]);
}

var devise1 = {
    code : "M1",
    nom : "Monnaie1",
    change : 0.9
};

devise1.change=devise1.change + 0.1; //1.0
devise1["change"]=devise1["change"] + 0.1; //1.1
console.log("devise1.change="+devise1.change);
console.log("devise1 (JSON)="+JSON.stringify(devise1));

function Devise(code,nom,change){
    this.code=code;
    this.nom=nom;
    this.change=change;
    this.display=function(){
        console.log('[' + this.code + "] " 
                   + this.nom + " : " + this.change)
    }
}

var tabDevises=[];
tabDevises.push(new Devise("USD","Dollar",1.0));
tabDevises.push(new Devise("EUR","Euro",0.9));
tabDevises.push(new Devise("GBP","Livre",0.8));
tabDevises.push(new Devise("JPY","Yen",123.0));
for(i in tabDevises){
   tabDevises[i].display();
}

var expression="2*4+8";
var res = eval(expression); console.log(expression+"="+res);

console.log("maintenant="+ (new Date()).toTimeString());
function actionDifferee() {
    console.log("plus tard="+ (new Date()).toTimeString());
}
var refAction  = actionDifferee;
setTimeout(refAction,5000); //déclenchement en différé dans 5000ms
