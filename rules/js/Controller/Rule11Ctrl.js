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
	var line_row = [];		//Row(left to right, top to bottom). 
	var line_col = [];		//Column(top to bottom, left to right).
	var Rect = [];
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	
	Rect[0] = DrawRect_T(svgContainer_origin, origin_X - unit_x, origin_Y - unit_y*2, 100, 100);
	Rect[1] = DrawRect_T(svgContainer_origin, origin_X - unit_x, origin_Y, 100, 100);
	
	var jsonCircles = [{ "x": origin_X - unit_x, "y": origin_Y - unit_y*2},
					   { "x": origin_X - unit_x, "y": origin_Y},
					   { "x": origin_X - unit_x, "y": origin_Y + unit_y*2},
					   { "x": origin_X + unit_x, "y": origin_Y - unit_y*2},
					   { "x": origin_X + unit_x, "y": origin_Y},
					   { "x": origin_X + unit_x, "y": origin_Y + unit_y*2}];
	
	DrawCircle_F(svgContainer_origin, jsonCircles);
	
	Text[0] = DrawText(svgContainer_origin, "Rule11: 變化前", 30, 30);
}

function Draw_Result() {
	var svgContainer_result = d3.select("#result").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");
											
	//[0...∞]
	var line_row = [];		//Row(left to right, top to bottom). 
	var line_col = [];		//Column(top to bottom, left to right).
	var Rect = [];
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	
	Rect[0] = DrawRect_T(svgContainer_result, origin_X - unit_x, origin_Y - unit_y*2, 100, 200);
	
	var jsonCircles = [{ "x": origin_X - unit_x, "y": origin_Y - unit_y*2},
					   { "x": origin_X - unit_x, "y": origin_Y + unit_y*2},
					   { "x": origin_X + unit_x, "y": origin_Y - unit_y*2},
					   { "x": origin_X + unit_x, "y": origin_Y + unit_y*2}];
	
	DrawCircle_F(svgContainer_result, jsonCircles);
	
	Text[0] = DrawText(svgContainer_result, "Rule11: 變化後", 30, 30);
}

function Draw_Animation() {
	var svgContainer_anime = d3.select("#animation").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");
	var sw = true;
	svgContainer_anime.on("mousedown", animate);
											
	//[0...∞]
	var jsonCircles = [];
	var line_row = [];		//Row(left to right, top to bottom). 
	var line_col = [];		//Column(top to bottom, left to right).
	var Rect = [];
	var circles_be;
	var circles_af;
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	
	Rect[0] = DrawRect_T(svgContainer_anime, origin_X - unit_x, origin_Y - unit_y*2, 100, 100);
	Rect[1] = DrawRect_T(svgContainer_anime, origin_X - unit_x, origin_Y, 100, 100);
	
	Rect[2] = DrawRect_T(svgContainer_anime, origin_X - unit_x, origin_Y - unit_y*2, 100, 200).style("opacity", 0);
	
	jsonCircles[0] = [ { "x": origin_X - unit_x, "y": origin_Y - unit_y*2},
					   { "x": origin_X - unit_x, "y": origin_Y + unit_y*2},
					   { "x": origin_X + unit_x, "y": origin_Y - unit_y*2},
					   { "x": origin_X + unit_x, "y": origin_Y + unit_y*2}];

	jsonCircles[1] = [ { "x": origin_X - unit_x, "y": origin_Y},
						{ "x": origin_X + unit_x, "y": origin_Y}];
	
	circles_be = DrawCircle_F(svgContainer_anime, jsonCircles[0]);
	circles_af = DrawCircle_F(svgContainer_anime, jsonCircles[1]);
	
	Text[1] = DrawText(svgContainer_anime, "Rule11: 動畫", 30, 30);
	
	function animate() {
		if(sw) {
			Rect[0].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[1].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[2].transition()
				.duration(1000)
				.style("opacity", 1);
			circles_af.transition()
				.duration(100)
				.style("opacity", 0);
			
			sw = false;
		}
		else {
			Rect[0].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[1].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[2].transition()
				.duration(1000)
				.style("opacity", 0);
			circles_af.transition()
				.delay(500)
				.duration(1000)
				.style("opacity", 1);
			
			sw = true;
		}
    };
}