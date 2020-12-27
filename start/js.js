$(function () {
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
	$('.mode_game_XO').css({"background-color":"#9EDBFC"});
	$('.mode_game_XO').click(function() {
		game_mode = 1;
		$('.mode_game_XO').css({"background-color":"#9EDBFC"});
		$('.mode_game_XOP').css({"background-color":"#79C8F2"});
	})
	$('.mode_game_XOP').click(function() {
		game_mode = 2;
		$('.mode_game_XOP').css({"background-color":"#9EDBFC"});
		$('.mode_game_XO').css({"background-color":"#79C8F2"});
	})

	$('a').click(function(){
		$('.field_size_result').html(field_size + 'x' + field_size);
		$('.win_combination_result').html(win_combination);
		localStorage.field_size = field_size;
		localStorage.win_combination = win_combination;
		localStorage.mode_game = game_mode;
	})

	$('.reday_game_1').click(function() {
		localStorage.field_size = 3;
		localStorage.win_combination = 3;
		localStorage.mode_game = 1;
		$(location).attr('href', "..\\play\\play.html")
	})

	$('.reday_game_2').click(function() {
		localStorage.field_size = 10;
		localStorage.win_combination = 4;
		localStorage.mode_game = 1;
		$(location).attr('href', "..\\play\\play.html")
	})

	$('.reday_game_3').click(function() {
		localStorage.field_size = 19;
		localStorage.win_combination = 5;
		localStorage.mode_game = 1;
		$(location).attr('href', "..\\play\\play.html")
	})

	$('.play').click(function() {
		
	})
})