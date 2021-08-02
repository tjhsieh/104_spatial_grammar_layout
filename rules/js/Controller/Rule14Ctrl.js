$( document ).ready(function() {
	//window.onresize = updateWindow;
	width  = $(document).width();
	height = $(document).height();
	origin_X = width/4;
	origin_Y = height/4;
	result_X = (width) * 3/4;
	result_Y = height/4;
    rule10();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x	= 50;
var unit_y	= 50;

function rule10() {
	Draw_Origin();
	Draw_Result();
	Draw_Animation();
}

function Draw_Origin() {
	var svgContainer_origin = d3.select("#origin").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var Text = [];			//[0...2] = O, P, TEXT
	
	var jsonCircles = [{ "x": origin_X, "y": origin_Y}];
	
	DrawCircle_F(svgContainer_origin, jsonCircles);
	
	Text[0] = DrawText(svgContainer_origin, "Rule14: 變化前", 30, 30);
}

function Draw_Result() {
	var svgContainer_result = d3.select("#result").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var Text = [];			//[0...2] = O, P, TEXT
	
	var jsonCircles = [{ "x": origin_X, "y": origin_Y}];
	
	DrawCircle_S(svgContainer_result, jsonCircles);
	
	Text[0] = DrawText(svgContainer_result, "Rule14: 變化後", 30, 30);
}

function Draw_Animation() {
	var svgContainer_anime = d3.select("#animation").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");
	var sw = true;
	svgContainer_anime.on("mousedown", animate);
											
	//[0...∞]
	var jsonCircles = [];
	var Text = [];			//[0...2] = O, P, TEXT
	
	jsonCircles[0] = [{ "x": origin_X, "y": origin_Y}];
	
	jsonCircles[1] = [{ "x": origin_X, "y": origin_Y}];
	
	circles_be = DrawCircle_F(svgContainer_anime, jsonCircles[0]);
	circles_af = DrawCircle_S(svgContainer_anime, jsonCircles[1]).style("opacity", 0);
	
	Text[1] = DrawText(svgContainer_anime, "Rule14: 動畫", 30, 30);
	
	function animate() {
		if(sw) {
			circles_af.transition()
				.duration(1000)
				.style("opacity", 1);
				
			sw = false;
		}
		else {
			circles_af.transition()
					.duration(100)
					.style("opacity", 0);
			
			sw = true;
		}
    };
}