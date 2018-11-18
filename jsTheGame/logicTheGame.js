
var failure = 0;

    if(prompt('Welk type is effectief tegen grass type?') != 'rock type' || 'ice type'){
      addfailure();
    if(prompt('Welk type heeft geen effect op flying type?') != 'fighting type' || 'ground type'){
      addfailure();
    if(prompt('Welk type heeft weinig effect op dark type?') != 'phsycic type' || 'bug type'){
      addfailure();
    if(prompt('Welk type is de volgende move: Scald.') != 'fire type' || 'water type'){
      addfailure();
    if(prompt('Welke move heeft een poison status effect?') != 'sludge bomb' || 'venoschock'){
      addfailure();
    if(prompt('Welke move kan meerdere tegenstanders raken?') != 'razor leaf' || 'night slash'){
      addfailure();
    if(prompt('Is wild charge een electric move of een normal move?') != 'electric move' || 'normal move'){
      addfailure();
    if(prompt('Welke move kan elke aanval tegenhouden?') != 'reflect' || 'protect'){
      addfailure();
    if(prompt('is trick room een dark move of een phsycic move?') != 'phsycic move' || 'dark move'){
      addfailure();
    if(prompt('Welk type is effectief tegen ghost type?') != 'dragon type' || 'ghost type'){
      addfailure();
                      }

                    }

   			   	      }

   			        }
   			   		 
   			      }

            }

   	      } 

        }

   	  }

    }

function addfailure(){
  console.log(failure++);
  if (failure == 3) {
    alert("Game Over. Ververs de pagina om het opnieuw te proberen.");
  }
}