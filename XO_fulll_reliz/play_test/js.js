var x=3;			//розмір
var n = x*x;
var win=2+(Math.floor(x/3));		//кількость в ряд хрестиків або ноликів для вийграша
var xo = ['X','O'];
var m = 0;
var winPlayer = 2;

$(function(){

	for (var i=1; i<=n; i++) {												//Робит лиш один раз при запускови
		$('article').html($('article').html()+'<a href=\"#\" draggable=\"false\" class=\"box box_'+ i + '\"> </a>');
		$('article').css({"grid-template-columns":"repeat(" + x + ", 1fr)","grid-template-rows":"repeat(" + x +", 1fr)","grid-gap": + (1/x) + "vw"});
		$('.box').css({"height":45/x-0.3 +"vw", "font-size":(45/x-0.3)*0.8 + "vw"});
	}	

	$('.plus').click(function(){ 		//плюс ід розміру
		x++;
		n = x*x;
	})

	$('.minus').click(function(){		//мінус ід розміру
		x = (x>3)? x=x-1 : x=3;
		n = x*x;
	})


	$('.plus_win').click(function(){
		win = (win<x)? win=win+1 : win=x;
		$('.size_win').html(win);
	})

	$('.minus_win').click(function(){
		win = (win<=3)? win=3 : win=win-1;
		$('.size_win').html(win);
	})

	$('.head_item*a, .head_item_win*a').click(function(){			//Прогрузка настройок в голові
		$('article').html(' ');
		for (var i=1; i<=n; i++) {					//настрройка ігрового поля 
			$('article').html($('article').html()+'<a href=\"#\" draggable=\"false\" class=\"box box_'+ i + '\"> </a>');
			$('article').css({"grid-template-columns":"repeat(" + x + ", 1fr)","grid-template-rows":"repeat(" + x +", 1fr)","grid-gap": + (1/x) + "vw"});
			$('.box').css({"height":45/x-0.3 +"vw", "font-size":(45/x-0.3)*0.8 + "vw"});
		
		}
		$('.size').html(x+'x'+x);
		$('.size_win').html(win);
	})

	$(document).on('click','.box',function(event) {
      	console.log(this.classList[1]);
		var res = (this.classList[1]);

		if ($('.'+res).text()!='X' && $('.'+res).text()!='O' && winPlayer==2) {			//Провірка чи нема в не заняте поле
			$('.'+res).html(xo[m]);
			m = 1-m;
		}

		for (var j=0; j<=1; j++) {
			for (var i=1; i<=n-win+1; i++) {			//Провірка комбінацій в ряд
				for(var k=i; k<win+i; k++) {

					if (i%x>(x-win+1) || i%x == 0) break;

					if ($('.box_'+k).text()!=xo[j]) 
						break;
					if (k==win+i-1) 
						winPlayer = j;
				}
			}
			for (var i=1; i<=x*(x-win+1); i++) {			//Провірка комбінація в стовпчик
				for (var k=i; k<=((win-1)*x)+i; k=k+x) {
					if ($('.box_'+k).text()!=xo[j]) 
						break;
					if (k==((win-1)*x)+i) 
						winPlayer = j;
				}
			}
			for (var i=1; i<x*(x-win+1);i++) {				
				for (var k=i; k<=((x*(win-1))+win-1)+i; k=k+x+1) {			//Провірка комбінацій по діагоналі '\'

					if (i%x>(x-win+1) || i%x == 0) break;

					if ($('.box_'+k).text()!=xo[j]) 
						break;
					if (k==((x*(win-1))+win-1)+i) 
						winPlayer = j;
				}

				for (var k=(i+win-1); k<=(x*(win-1)+i); k=k+(x-1)) {			//Провірка комбінацій по діагоналі '/'
					if (i%x>(x-win+1) || i%x == 0) break;

					if ($('.box_'+k).text()!=xo[j]) 
						break;
					if (k==(x*(win-1)+i)) 
						winPlayer = j;
				}
			}
		}
		if (winPlayer==0 || winPlayer==1) {
			var restart = confirm("Победил : " + xo[winPlayer] + "\n Начать сначала?");
			if (restart==true) {
				for (var i=1; i<=n; i++) {
					$('.box_'+i).html(" ");
					winPlayer=2;
				}
			}
		}
	})

});