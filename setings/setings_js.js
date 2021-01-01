$(function() {

	var themeOptionBasikColor = localStorage.themeOptionBasikColor;
	var themeOptionHoverColor = localStorage.themeOptionHoverColor;
	var body = document.getElementsByTagName('body')[0];
	body.style.cssText = "--basik-color : " + themeOptionBasikColor;
	body.style.cssText += "--hover-color : " + themeOptionHoverColor;


	var themeColors = new Array();
	var numThemeColors = 5;
	var numForThemeColors = 2;

	for (let i=0; i<numThemeColors; i++) {
		themeColors[i] = new Array();
	}
	themeColors[0][0] = "#63BDED";
	themeColors[1][0] = "#7CCAF3";
	themeColors[2][0] = "#6BC2F1";

	themeColors[0][1] = "#5FDD77";
	themeColors[1][1] = "#7BE48F";
	themeColors[2][1] = "#77ED8E";

	themeColors[0][2] = "#E74A4A";
	themeColors[1][2] = "#ED6969";
	themeColors[2][2] = "#F25B5B";

	themeColors[0][3] = "#D241E3";
	themeColors[1][3] = "#D958E8";
	themeColors[2][3] = "#D34BE3";

	themeColors[0][4] = "#000000";
	themeColors[1][4] = "#323232";
	themeColors[2][4] = "#3B3B3B";

	for (let j=0; j<numThemeColors; j++) {
		$('.theme_setings').append("<a href=\"#\" class=\"theme_option theme_option_" +  (j+1) +"\"> </a>")
		$('.theme_option_' + (j+1)).css({"background-color" :  themeColors[1][j] , "border" : "0.5vh solid " + themeColors[0][j]});
	}

	$(document).on('click', '.theme_option', function(event) {
		var resultThemeOption = (this.classList[1]);
		resultThemeOption = resultThemeOption.slice(-1)-1;
		console.log(resultThemeOption);

		localStorage.themeOptionBasikColor = themeColors[0][resultThemeOption];
		localStorage.themeOptionHoverColor = themeColors[1][resultThemeOption];
		localStorage.themeOptionSecondsColor = themeColors[2][resultThemeOption];

		var body = document.getElementsByTagName('body')[0];
		body.style.cssText = "--basik-color : " + themeColors[0][resultThemeOption];
		body.style.cssText += "--hover-color : " + themeColors[1][resultThemeOption];
	}) 
})