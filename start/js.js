$(function () {

	var themeOptionBasikColor = localStorage.themeOptionBasikColor;
	var themeOptionHoverColor = localStorage.themeOptionHoverColor;
	var themeOptionSecondsColor = localStorage.themeOptionSecondsColor;
	var body = document.getElementsByTagName('body')[0];
	body.style.cssText = "--basik-color : " + themeOptionBasikColor;
	body.style.cssText += "--hover-color : " + themeOptionHoverColor;
	body.style.cssText += "--seconds-color : " + themeOptionSecondsColor;

	var field_size = 3;
	$('.field_size_minus').click(function() {
		(field_size <= 3)? field_size=3 : field_size--;
	})
	$('.field_size_plus').click(function() {
		field_size++;
	})


	var win_combination = 3;
	$('.win_combination_minus').click(function() {
		(win_combination<=3)? win_combination=3: win_combination--;
	})
	$('.win_combination_plus').click(function() {
		(win_combination>=field_size)? win_combination=field_size: win_combination++;
	})

	var game_mode = 1;
	var numGameMode = 3;

	$('.mode_game_1').css({"background-color":themeOptionBasikColor});

	$('.mode_game *').click(function(event) {
		var resultModeGameOption = (this.classList[0]);
		resultModeGameOption = resultModeGameOption.slice(-1);
		game_mode = Number(resultModeGameOption);

		$('.mode_game_' + (((resultModeGameOption)%numGameMode)+1) + ', .mode_game_' + (((resultModeGameOption+1)%numGameMode)+1)).css({"background-color":themeOptionSecondsColor});
		$('.mode_game_' + resultModeGameOption).css({"background-color":themeOptionBasikColor});
	})


	$('a').click(function(){
		$('.field_size_result').html(field_size + 'x' + field_size);
		$('.win_combination_result').html(win_combination);
		localStorage.field_size = field_size;
		localStorage.win_combination = win_combination;
		localStorage.mode_game = game_mode;
	})

	if (localStorage.getItem('userReadyGames') !== null) {
		var userReadyGames = JSON.parse(localStorage.userReadyGames);
		var userNumReadyGames = userReadyGames[0];
	} else {
		var userReadyGames = new Array();
		var userNumReadyGames = 0;
	}

	//delete localStorage.userReadyGames;

	for (let i=1; i<=userNumReadyGames; i++) {
		if ((userReadyGames[i][0]+userReadyGames[i][1]+userReadyGames[i][2])!==0) {	
			$('.castomizable_game').after("<div class=\"user_ready_game\"> <a href=\"#\" class=\"user_ready_game_play user_ready_game_" + i + "\">Поле " + userReadyGames[i][0] + "X" + userReadyGames[i][0] + "   |   Комбинация " + userReadyGames[i][1] + "   |   Режим игры " + userReadyGames[i][2] + "</a> <a href=\"#\" class=\" remove_ready_game remove_ready_game_" + i + "\">-</a> </div>");
		}
	}

	$('.add_new_ready_game').click(function() {
		userNumReadyGames++;
		userReadyGames[userNumReadyGames] = new Array();
		userReadyGames[userNumReadyGames][0] = field_size;
		userReadyGames[userNumReadyGames][1] = win_combination;
		userReadyGames[userNumReadyGames][2] = game_mode;

		userReadyGames[0] = userNumReadyGames;
		localStorage.userReadyGames = JSON.stringify(userReadyGames);

		$('.castomizable_game').after("<div class=\"user_ready_game\"> <a href=\"#\" class=\"user_ready_game_play user_ready_game_" + userNumReadyGames + "\">Поле " + userReadyGames[userNumReadyGames][0] + "X" + userReadyGames[userNumReadyGames][0] + "   |   Комбинация " + userReadyGames[userNumReadyGames][1] + "   |   Режим игры " + userReadyGames[userNumReadyGames][2] + "</a> <a href=\"#\" class=\" remove_ready_game remove_ready_game_" + userNumReadyGames + "\">-</a> </div>");
	})

	$(document).on('click', '.user_ready_game_play', function(event) {
		var resultUserReadyGameOption = (this.classList[1]);
		resultUserReadyGameOption = resultUserReadyGameOption.slice(-1);
		localStorage.field_size = userReadyGames[resultUserReadyGameOption][0];
	 	localStorage.win_combination = userReadyGames[resultUserReadyGameOption][1];;
	 	localStorage.mode_game = userReadyGames[resultUserReadyGameOption][2];;
	 	$(location).attr('href', "..\\play\\play.html");
	})

	$(document).on('click', '.remove_ready_game', function(event) {
		var resultRemoveReadyGame = (this.classList[1]);
		resultRemoveReadyGame = Number(resultRemoveReadyGame.slice(-1));
		$('.user_ready_game_' + resultRemoveReadyGame).parent()[0].remove();

		for (let i=resultRemoveReadyGame; i<=userNumReadyGames; i++) {
			for (let j=0; j<=2; j++) {
				userReadyGames[i][j] = (i==userNumReadyGames)? 0 : userReadyGames[i+1][j];
			}
		}
		userNumReadyGames--;
		userReadyGames[0]=userNumReadyGames;
		localStorage.userReadyGames = JSON.stringify(userReadyGames);
	})



	var numReadyGames = 3;
	var readyGames = new Array();
	for (let i=0; i<numReadyGames; i++) {
		readyGames[i] = new Array();
	}
	readyGames = [
		[3, 3, 1],
		[10, 4, 1],
		[19, 5, 1]
	];

	for (let i=0; i<numReadyGames; i++) {
		$('article').append("<a href=\"#\" class=\"ready_game ready_game_" + (i+1) + "\">Поле " + readyGames[i][0] + "X" + readyGames[i][0] + " | Комбинация " + readyGames[i][1] + "</a>");
	}

	$('.ready_game').click(function(event) {
		var resultReadyGameOption = (this.classList[1]);
		resultReadyGameOption = resultReadyGameOption.slice(-1);
		localStorage.field_size = readyGames[resultReadyGameOption-1][0];
	 	localStorage.win_combination = readyGames[resultReadyGameOption-1][1];;
	 	localStorage.mode_game = readyGames[resultReadyGameOption-1][2];;
	 	$(location).attr('href', "..\\play\\play.html");
	})

	$('.play').click(function() {
		
	})
})