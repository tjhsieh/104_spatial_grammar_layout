$( document ).ready(function() {
	//window.onresize = updateWindow;
	width  = $(document).width();
	height = $(document).height();
	origin_X = width/4;
	origin_Y = height/4;
	result_X = (width) * 3/4;
	result_Y = height/4;
    rule43();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x	= 50;
var unit_y	= 50;

function rule43() {
	Draw_Origin();
	Draw_Result();
	Draw_Animation();
}

function Draw_Origin() {
	var svgContainer_origin = d3.select("#origin").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	var Text = [];			//[0...2] = O, P, TEXT
	
	Text[0] = DrawText(svgContainer_origin, "Rule43: 變化前", 30, 30);
	Text[1] = DrawText(svgContainer_origin, "d", origin_X, origin_Y);
}

function Draw_Result() {
	var svgContainer_result = d3.select("#result").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var Rect = [];
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom).
	
	Rect[0] = DrawRect_T(svgContainer_result, origin_X - unit_x, origin_Y - 10, unit_x, 10);
	Rect[1] = DrawRect_T(svgContainer_result, origin_X, origin_Y - 10, unit_x, 10);
	
	line_row[0] = DrawLine_row(svgContainer_result, origin_Y - 5, origin_X - unit_x, origin_X + unit_x);
	
	Text[0] = DrawText(svgContainer_result, "Rule43: 變化後", 30, 30);
}

function Draw_Animation() {
	var svgContainer_anime = d3.select("#animation").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");
	var sw = true;
	svgContainer_anime.on("mousedown", animate);
	
	//[0...∞]
	var Rect = [];
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom).
	
	Rect[0] = DrawRect_T(svgContainer_anime, origin_X - unit_x, origin_Y - 10, unit_x, 10).style("opacity", 0);
	Rect[1] = DrawRect_T(svgContainer_anime, origin_X, origin_Y - 10, unit_x, 10).style("opacity", 0);
	
	line_row[0] = DrawLine_row(svgContainer_anime, origin_Y - 5, origin_X - unit_x, origin_X + unit_x).style("opacity", 0);
	
	Text[0] = DrawText(svgContainer_anime, "Rule43: 動畫", 30, 30);
	Text[1] = DrawText(svgContainer_anime, "d", origin_X, origin_Y);
	

	
	function animate() {
		if(sw) {
			Text[1].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[0].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[1].transition()
				.duration(1000)
				.style("opacity", 1);
			line_row[0].transition()
				.duration(1000)
				.style("opacity", 1);
			
			sw = false;
		}
		else {
			Text[1].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[0].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[1].transition()
				.duration(1000)
				.style("opacity", 0);
			line_row[0].transition()
				.duration(1000)
				.style("opacity", 0);
			
			sw = true;
		}
    };
}