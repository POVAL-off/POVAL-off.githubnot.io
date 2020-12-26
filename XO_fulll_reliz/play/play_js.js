$(function() {
	var fieldSize = Number(localStorage.field_size);
	var winCombination = Number(localStorage.win_combination);

	for (let i=1; i<=fieldSize*fieldSize; i++) {
		$('article').append("<a href=\"#\" draggable=\"false\" class=\"box_" + i + " box\"> </a>");
	}
	$('article').css({"grid-template-columns" : "repeat(" + fieldSize + ", 1fr)"});
	$('article * ').css({"font-size" : + 70/fieldSize + "vh"});



	var fieldSizeVector = fieldSize*fieldSize;
	var typePlayers = ['X','O'];
	var movePlayers = 0;
	var winPlayer = 2;

	$(document).on('click','.box',function(event) {
      	console.log(this.classList[0]);
		var resultClassBox = (this.classList[0]);

		if ($('.'+resultClassBox).text()!='X' && $('.'+resultClassBox).text()!='O' && winPlayer==2) {			//Провірка чи нема в не заняте поле
			$('.'+resultClassBox).html(typePlayers[movePlayers]);
			movePlayers = 1-movePlayers;
		}


		for (var j=0; j<=1; j++) {
			for (var i=1; i<=fieldSizeVector-winCombination+1; i++) {			//Провірка комбінацій в ряд
				for(var k=i; k<winCombination+i; k++) {

					if (i%fieldSize>(fieldSize-winCombination+1) || i%fieldSize == 0) break;

					if ($('.box_'+k).text()!=typePlayers[j]) 
						break;
					if (k==winCombination+i-1) 
						winPlayer = j;
				}
			}
			for (var i=1; i<=fieldSize*(fieldSize-winCombination+1); i++) {			//Провірка комбінація в стовпчик
				for (var k=i; k<=((winCombination-1)*fieldSize)+i; k=k+fieldSize) {
					if ($('.box_'+k).text()!=typePlayers[j]) 
						break;
					if (k==((winCombination-1)*fieldSize)+i) 
						winPlayer = j;
				}
			}
			for (var i=1; i<fieldSize*(fieldSize-winCombination+1);i++) {				
				for (var k=i; k<=((fieldSize*(winCombination-1))+winCombination-1)+i; k=k+fieldSize+1) {			//Провірка комбінацій по діагоналі '\'

					if (i%fieldSize>(fieldSize-winCombination+1) || i%fieldSize == 0) break;

					if ($('.box_'+k).text()!=typePlayers[j]) 
						break;
					if (k==((fieldSize*(winCombination-1))+winCombination-1)+i) 
						winPlayer = j;
				}

				for (var k=(i+winCombination-1); k<=(fieldSize*(winCombination-1)+i); k=k+(fieldSize-1)) {			//Провірка комбінацій по діагоналі '/'
					if (i%fieldSize>(fieldSize-winCombination+1) || i%fieldSize == 0) break;

					if ($('.box_'+k).text()!=typePlayers[j]) 
						break;
					if (k==(fieldSize*(winCombination-1)+i)) 
						winPlayer = j;
				}
			}
		}
		if (winPlayer==0 || winPlayer==1) {
			var restart = confirm("Победил : " + typePlayers[winPlayer] + "\n Начать сначала?");
			if (restart==true) {
				for (var i=1; i<=fieldSizeVector; i++) {
					$('.box_'+i).html(" ");
					winPlayer=2;
				}
			}
		}
	})
})
