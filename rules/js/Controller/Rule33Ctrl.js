$( document ).ready(function() {
	//window.onresize = updateWindow;
	width  = $(document).width();
	height = $(document).height();
	origin_X = width/4;
	origin_Y = height/4;
	result_X = (width) * 3/4;
	result_Y = height/4;
    rule33();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x	= 50;
var unit_y	= 50;

function rule33() {
	Draw_Origin();
	Draw_Result();
	Draw_Animation();
}

function Draw_Origin() {
	var svgContainer_origin = d3.select("#origin").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom). 
	var line_wd;
	
	line_row[0] = DrawDashline_S(svgContainer_origin, origin_X - unit_x*2, origin_X + unit_x*2, origin_Y, origin_Y);
	line_wd = DrawLine_row(svgContainer_origin, origin_Y + 5, origin_X - unit_x, origin_X + unit_x);
	
	var jsonCircles = [{ "x": origin_X - unit_x, "y": origin_Y},
						{ "x": origin_X + unit_x, "y": origin_Y}];
	
	DrawCircle_F(svgContainer_origin, jsonCircles);
	
	Text[0] = DrawText(svgContainer_origin, "Rule33: 變化前", 30, 30);
	Text[1] = DrawText(svgContainer_origin, "﹀", origin_X - 10, origin_Y + 5);
	Text[2] = DrawText(svgContainer_origin, "Wd", origin_X + unit_x*2, origin_Y);
	Text[3] = DrawText(svgContainer_origin, "a", origin_X - unit_x - 10, origin_Y + 20);
}

function Draw_Result() {
	var svgContainer_result = d3.select("#result").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom). 
	var line_wd;
	
	line_row[0] = DrawDashline_S(svgContainer_result, origin_X - unit_x*2, origin_X + unit_x*2, origin_Y, origin_Y);
	line_wd = DrawLine_row(svgContainer_result, origin_Y + 5, origin_X - unit_x, origin_X + unit_x);
	
	var jsonCircles = [{ "x": origin_X - unit_x, "y": origin_Y},
						{ "x": origin_X + unit_x, "y": origin_Y}];
	
	DrawCircle_F(svgContainer_result, jsonCircles);
	
	Text[0] = DrawText(svgContainer_result, "Rule33: 變化後", 30, 30);
	Text[1] = DrawText(svgContainer_result, "﹀", origin_X - 10, origin_Y + 5);
	Text[2] = DrawText(svgContainer_result, "w", origin_X - unit_x - 20, origin_Y + 20);
	Text[3] = DrawText(svgContainer_result, "w", origin_X + unit_x, origin_Y + 20);
}

function Draw_Animation() {
	var svgContainer_anime = d3.select("#animation").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");
	var sw = true;
	svgContainer_anime.on("mousedown", animate);
	
	//[0...∞]
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom). 
	var line_wd;
	
	line_row[0] = DrawDashline_S(svgContainer_anime, origin_X - unit_x*2, origin_X + unit_x*2, origin_Y, origin_Y);
	
	line_wd = DrawLine_row(svgContainer_anime, origin_Y + 5, origin_X - unit_x, origin_X + unit_x);
	
	var jsonCircles = [{ "x": origin_X - unit_x, "y": origin_Y},
						{ "x": origin_X + unit_x, "y": origin_Y}];
	
	DrawCircle_F(svgContainer_anime, jsonCircles);
	
	Text[0] = DrawText(svgContainer_anime, "Rule33: 動畫", 30, 30);
	Text[1] = DrawText(svgContainer_anime, "﹀", origin_X - 10, origin_Y + 5);
	Text[2] = DrawText(svgContainer_anime, "Wd", origin_X + unit_x*2, origin_Y);
	Text[3] = DrawText(svgContainer_anime, "a", origin_X - unit_x - 10, origin_Y + 20);
	Text[4] = DrawText(svgContainer_anime, "w", origin_X - unit_x - 20, origin_Y + 20).style("opacity", 0);
	Text[5] = DrawText(svgContainer_anime, "w", origin_X + unit_x, origin_Y + 20).style("opacity", 0);
	
	function animate() {
		if(sw) {
			Text[2].transition()
				.duration(1000)
				.style("opacity", 0);
			Text[3].transition()
				.duration(1000)
				.style("opacity", 0);
			Text[4].transition()
				.duration(1000)
				.style("opacity", 1);
			Text[5].transition()
				.duration(1000)
				.style("opacity", 1);
			
			sw = false;
		}
		else {
			Text[2].transition()
				.duration(1000)
				.style("opacity", 1);
			Text[3].transition()
				.duration(1000)
				.style("opacity", 1);
			Text[4].transition()
				.duration(1000)
				.style("opacity", 0);
			Text[5].transition()
				.duration(1000)
				.style("opacity", 0);

			sw = true;
		}
    };
}