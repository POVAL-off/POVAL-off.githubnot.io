$(function () {

	var themeOptionBasikColor = localStorage.themeOptionBasikColor;
	var themeOptionHoverColor = localStorage.themeOptionHoverColor;
	var themeOptionSecondsColor = localStorage.themeOptionSecondsColor;
	var body = document.getElementsByTagName('body')[0];
	body.style.cssText = "--basik-color : " + themeOptionBasikColor;
	body.style.cssText += "--hover-color : " + themeOptionHoverColor;
	body.style.cssText += "--seconds-color : " + themeOptionSecondsColor;



	console.log("df");
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
		game_mode = resultModeGameOption;

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


	var readyGames = new Array();
	for (let i=0; i<3; i++) {
		readyGames[i] = new Array();
	}
	readyGames = [
		[3, 3, 1],
		[10, 4, 1],
		[19, 5, 1]
	];

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