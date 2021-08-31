
function calculerOperation(pOperation){
	var a =  document.getElementById("a").value;
	console.log("a="+a);
	var b =   document.getElementById("b").value;
	console.log("b="+b);
		  
	var res = 0;
	switch(pOperation){
		  case '+':
		      res = Number(a)+Number(b);   break;
		  case '*':
			  res=a*b;  break;
		  case '-':
			  res=a-b;  break;
		  case '/':
			  res=a/b;  break;
		  default:
			  res="?";  break;
		   }
	var eltSpanRes = document.getElementById("spanRes");
	eltSpanRes.innerHTML = res;
	if(res >= 0)
	  eltSpanRes.style.color = "rgb(0,150,0)";
	else
	  eltSpanRes.style.color = "red";
	  
	var zoneHistorique = document.getElementById("ulHistorique");
	var li = document.createElement("li");
	li.innerHTML=""+ a + pOperation + b +"="+res ;
	li.style.fontStyle='italic';
	zoneHistorique.appendChild(li);
	}

function cacherOuMontrerHistorique(){
		var zoneHistorique = document.getElementById("ulHistorique");
		//var zoneCheckBox = document.getElementById("cbHisto");
		var zoneCheckBox = document.querySelector("#cbHisto");
		if(zoneCheckBox.checked){
			zoneHistorique.style.display="block";
			//zoneHistorique.style.visibility="visible";
		}else{
			zoneHistorique.style.display="none";
			//zoneHistorique.style.visibility="hidden";
		}
	}
	

		
