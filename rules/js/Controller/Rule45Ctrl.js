$( document ).ready(function() {
	//window.onresize = updateWindow;
	width  = $(document).width();
	height = $(document).height();
	origin_X = width/4;
	origin_Y = height/4;
	result_X = (width) * 3/4;
	result_Y = height/4;
    rule45();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x	= 50;
var unit_y	= 50;

function rule45() {
	Draw_Origin();
	Draw_Result();
	Draw_Animation();
}

function Draw_Origin() {
	var svgContainer_origin = d3.select("#origin").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var Rect = [];
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom).
	
	Rect[0] = DrawRect_T(svgContainer_origin, origin_X - unit_x*2, origin_Y + unit_y - 5, unit_x, 10);
	Rect[1] = DrawRect_T(svgContainer_origin, origin_X - unit_x, origin_Y + unit_y - 5, unit_x, 10);
	Rect[2] = DrawRect_T(svgContainer_origin, origin_X, origin_Y + unit_y - 5, unit_x, 10);
	Rect[3] = DrawRect_T(svgContainer_origin, origin_X + unit_x, origin_Y + unit_y - 5, unit_x, 10);
	
	line_row[0] = DrawLine_row(svgContainer_origin, origin_Y + unit_y - 5, origin_X - unit_x*4, origin_X - unit_x*2);
	line_row[1] = DrawLine_row(svgContainer_origin, origin_Y + unit_y - 5, origin_X + unit_x*2, origin_X + unit_x*4);
	line_row[2] = DrawLine_row(svgContainer_origin, origin_Y + unit_y + 5, origin_X - unit_x*4, origin_X - unit_x*2);
	line_row[3] = DrawLine_row(svgContainer_origin, origin_Y + unit_y + 5, origin_X + unit_x*2, origin_X + unit_x*4);
	line_row[4] = DrawLine_row(svgContainer_origin, origin_Y + unit_y, origin_X - unit_x*2, origin_X + unit_x*2);
	line_row[5] = DrawLine_row(svgContainer_origin, origin_Y - 5, origin_X - unit_x*4, origin_X + unit_x*4);
	
	var jsonCircles = [{ "x": origin_X - unit_x*2, "y": origin_Y - 5},
						{ "x": origin_X + unit_x*2, "y": origin_Y - 5},
						{ "x": origin_X - unit_x*2, "y": origin_Y + unit_y},
						{ "x": origin_X + unit_x*2, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_origin, jsonCircles);
	
	Text[0] = DrawText(svgContainer_origin, "Rule45: 變化前", 30, 30);
}

function Draw_Result() {
	var svgContainer_result = d3.select("#result").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var Rect = [];
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom).
	
	Rect[0] = DrawRect_T(svgContainer_result, origin_X - unit_x*2, origin_Y + unit_y - 5, unit_x, 10);
	Rect[1] = DrawRect_T(svgContainer_result, origin_X - unit_x, origin_Y + unit_y - 5, unit_x, 10);
	Rect[2] = DrawRect_T(svgContainer_result, origin_X, origin_Y + unit_y - 5, unit_x, 10);
	Rect[3] = DrawRect_T(svgContainer_result, origin_X + unit_x, origin_Y + unit_y - 5, unit_x, 10);
	Rect[4] = DrawRect_T(svgContainer_result, origin_X - unit_x*2, origin_Y - unit_y + 25, unit_x*4, 20);
	Rect[5] = DrawRect_T(svgContainer_result, origin_X - unit_x*2, origin_Y - unit_y + 5, unit_x*4, 20);
	Rect[6] = DrawRect_T(svgContainer_result, origin_X - unit_x*2, origin_Y - unit_y - 15, unit_x*4, 20);	
	
	line_row[0] = DrawLine_row(svgContainer_result, origin_Y + unit_y - 5, origin_X - unit_x*4, origin_X - unit_x*2);
	line_row[1] = DrawLine_row(svgContainer_result, origin_Y + unit_y - 5, origin_X + unit_x*2, origin_X + unit_x*4);
	line_row[2] = DrawLine_row(svgContainer_result, origin_Y + unit_y + 5, origin_X - unit_x*4, origin_X - unit_x*2);
	line_row[3] = DrawLine_row(svgContainer_result, origin_Y + unit_y + 5, origin_X + unit_x*2, origin_X + unit_x*4);
	line_row[4] = DrawLine_row(svgContainer_result, origin_Y + unit_y, origin_X - unit_x*2, origin_X + unit_x*2);
	line_row[5] = DrawLine_row(svgContainer_result, origin_Y - 5, origin_X - unit_x*4, origin_X + unit_x*4);
	
	var jsonCircles = [{ "x": origin_X - unit_x*2, "y": origin_Y - 5},
						{ "x": origin_X + unit_x*2, "y": origin_Y - 5},
						{ "x": origin_X - unit_x*2, "y": origin_Y + unit_y},
						{ "x": origin_X + unit_x*2, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_result, jsonCircles);
	
	Text[0] = DrawText(svgContainer_result, "Rule45: 變化後", 30, 30);
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
	
	Rect[0] = DrawRect_T(svgContainer_anime, origin_X - unit_x*2, origin_Y + unit_y - 5, unit_x, 10);
	Rect[1] = DrawRect_T(svgContainer_anime, origin_X - unit_x, origin_Y + unit_y - 5, unit_x, 10);
	Rect[2] = DrawRect_T(svgContainer_anime, origin_X, origin_Y + unit_y - 5, unit_x, 10);
	Rect[3] = DrawRect_T(svgContainer_anime, origin_X + unit_x, origin_Y + unit_y - 5, unit_x, 10);
	Rect[4] = DrawRect_T(svgContainer_anime, origin_X - unit_x*2, origin_Y - unit_y + 25, unit_x*4, 20).style("opacity", 0);
	Rect[5] = DrawRect_T(svgContainer_anime, origin_X - unit_x*2, origin_Y - unit_y + 5, unit_x*4, 20).style("opacity", 0);
	Rect[6] = DrawRect_T(svgContainer_anime, origin_X - unit_x*2, origin_Y - unit_y - 15, unit_x*4, 20).style("opacity", 0);	
	
	line_row[0] = DrawLine_row(svgContainer_anime, origin_Y + unit_y - 5, origin_X - unit_x*4, origin_X - unit_x*2);
	line_row[1] = DrawLine_row(svgContainer_anime, origin_Y + unit_y - 5, origin_X + unit_x*2, origin_X + unit_x*4);
	line_row[2] = DrawLine_row(svgContainer_anime, origin_Y + unit_y + 5, origin_X - unit_x*4, origin_X - unit_x*2);
	line_row[3] = DrawLine_row(svgContainer_anime, origin_Y + unit_y + 5, origin_X + unit_x*2, origin_X + unit_x*4);
	line_row[4] = DrawLine_row(svgContainer_anime, origin_Y + unit_y, origin_X - unit_x*2, origin_X + unit_x*2);
	line_row[5] = DrawLine_row(svgContainer_anime, origin_Y - 5, origin_X - unit_x*4, origin_X + unit_x*4);
	
	var jsonCircles = [{ "x": origin_X - unit_x*2, "y": origin_Y - 5},
						{ "x": origin_X + unit_x*2, "y": origin_Y - 5},
						{ "x": origin_X - unit_x*2, "y": origin_Y + unit_y},
						{ "x": origin_X + unit_x*2, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_anime, jsonCircles);
	
	Text[0] = DrawText(svgContainer_anime, "Rule45: 動畫", 30, 30);
	

	
	function animate() {
		if(sw) {
			Rect[4].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[5].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[6].transition()
				.duration(1000)
				.style("opacity", 1);
			
			sw = false;
		}
		else {
			Rect[4].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[5].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[6].transition()
				.duration(1000)
				.style("opacity", 0);
			
			sw = true;
		}
    };
}