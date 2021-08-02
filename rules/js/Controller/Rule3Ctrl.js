$( document ).ready(function() {
	//window.onresize = updateWindow;
	width  = $(document).width();
	height = $(document).height();
	origin_X = width/4;
	origin_Y = height/4;
	result_X = (width) * 3/4;
	result_Y = height/4;
    rule1();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x	= 50;
var unit_y	= 50;

function rule1() {
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
	
	line_row[0] = DrawLine_row(svgContainer_origin, origin_Y - unit_y - 10, origin_X - unit_x*3, origin_X + unit_x*3);
	line_row[1] = DrawLine_row(svgContainer_origin, origin_Y + unit_y + 10, origin_X - unit_x*3, origin_X + unit_x*3);
	line_col[0] = DrawLine_col(svgContainer_origin, origin_X - unit_x*3 - 10, origin_Y - unit_y, origin_Y + unit_y);
	line_col[1] = DrawLine_col(svgContainer_origin, origin_X + unit_x*3 + 10, origin_Y - unit_y, origin_Y + unit_y);
	
	Rect[0] = DrawRect(svgContainer_origin, origin_X - unit_x*3, origin_Y - unit_y);
	Rect[1] = DrawRect(svgContainer_origin, origin_X - unit_x, origin_Y - unit_y);
	Rect[2] = DrawRect(svgContainer_origin, origin_X + unit_x, origin_Y - unit_y);
	Rect[3] = DrawRect(svgContainer_origin, origin_X - unit_x*3, origin_Y);
	Rect[4] = DrawRect(svgContainer_origin, origin_X - unit_x, origin_Y);
	Rect[5] = DrawRect(svgContainer_origin, origin_X + unit_x, origin_Y);
	
	var jsonCircles = [{ "x": origin_X - unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x*3, "y": origin_Y},
					   { "x": origin_X - unit_x*3, "y": origin_Y + unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y},
					   { "x": origin_X - unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y},
					   { "x": origin_X + unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y},
					   { "x": origin_X + unit_x*3, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_origin, jsonCircles);
	
	line_op = DrawDashline(svgContainer_origin, origin_X, origin_Y - unit_y*2, origin_Y + unit_y*2);
	
	Text[0] = DrawText(svgContainer_origin, "O", origin_X + 5, origin_Y + 20);
	Text[1] = DrawText(svgContainer_origin, "P", origin_X + 5, origin_Y - unit_y*2);
	Text[2] = DrawText(svgContainer_origin, "Rule3: 變化前", 30, 30);
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
	
	line_row[0] = DrawLine_row(svgContainer_result, origin_Y - unit_y - 10, origin_X - unit_x*5, origin_X - unit_x);
	line_row[1] = DrawLine_row(svgContainer_result, origin_Y - unit_y - 10, origin_X + unit_x, origin_X + unit_x*5);
	line_row[2] = DrawLine_row(svgContainer_result, origin_Y + unit_y + 10, origin_X - unit_x*5, origin_X - unit_x);
	line_row[3] = DrawLine_row(svgContainer_result, origin_Y + unit_y + 10, origin_X + unit_x, origin_X + unit_x*5);
	line_col[0] = DrawLine_col(svgContainer_result, origin_X - unit_x*5 - 10, origin_Y - unit_y, origin_Y + unit_y);
	line_col[1] = DrawLine_col(svgContainer_result, origin_X + unit_x*5 + 10, origin_Y - unit_y, origin_Y + unit_y);
	
	Rect[0] = DrawRect(svgContainer_result, origin_X - unit_x*5, origin_Y - unit_y);
	Rect[1] = DrawRect(svgContainer_result, origin_X - unit_x*3, origin_Y - unit_y);
	Rect[2] = DrawRect(svgContainer_result, origin_X + unit_x, origin_Y - unit_y);
	Rect[3] = DrawRect(svgContainer_result, origin_X + unit_x*3, origin_Y - unit_y);
	Rect[4] = DrawRect(svgContainer_result, origin_X - unit_x*5, origin_Y);
	Rect[5] = DrawRect(svgContainer_result, origin_X - unit_x*3, origin_Y);
	Rect[6] = DrawRect(svgContainer_result, origin_X + unit_x, origin_Y);
	Rect[7] = DrawRect(svgContainer_result, origin_X + unit_x*3, origin_Y);
	
	var jsonCircles = [{ "x": origin_X - unit_x*5, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x*5, "y": origin_Y},
					   { "x": origin_X - unit_x*5, "y": origin_Y + unit_y},
					   { "x": origin_X - unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x*3, "y": origin_Y},
					   { "x": origin_X - unit_x*3, "y": origin_Y + unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y},
					   { "x": origin_X - unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y},
					   { "x": origin_X + unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y},
					   { "x": origin_X + unit_x*3, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x*5, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x*5, "y": origin_Y},
					   { "x": origin_X + unit_x*5, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_result, jsonCircles);
	
	line_op = DrawDashline(svgContainer_result, origin_X, origin_Y - unit_y*2, origin_Y + unit_y*2);
	
	Text[0] = DrawText(svgContainer_result, "O", origin_X + 5, origin_Y + 20);
	Text[1] = DrawText(svgContainer_result, "P", origin_X + 5, origin_Y - unit_y*2);
	Text[2] = DrawText(svgContainer_result, "Rule3: 變化後", 30, 30);
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
	
	line_row[0] = DrawLine_row(svgContainer_anime, origin_Y - unit_y - 10, origin_X - unit_x*3, origin_X + unit_x*3);
	line_row[1] = DrawLine_row(svgContainer_anime, origin_Y + unit_y + 10, origin_X - unit_x*3, origin_X + unit_x*3);
	line_col[0] = DrawLine_col(svgContainer_anime, origin_X - unit_x*3 - 10, origin_Y - unit_y, origin_Y + unit_y);
	line_col[1] = DrawLine_col(svgContainer_anime, origin_X + unit_x*3 + 10, origin_Y - unit_y, origin_Y + unit_y);
	
	Rect[0] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y - unit_y);
	Rect[1] = DrawRect(svgContainer_anime, origin_X - unit_x, origin_Y - unit_y);
	Rect[2] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y - unit_y);
	Rect[3] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y);
	Rect[4] = DrawRect(svgContainer_anime, origin_X - unit_x, origin_Y);
	Rect[5] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y);
	
	
	line_row[2] = DrawLine_row(svgContainer_anime, origin_Y - unit_y - 10, origin_X + unit_x, origin_X + unit_x*5).style("opacity", 0);
	line_row[3] = DrawLine_row(svgContainer_anime, origin_Y + unit_y + 10, origin_X + unit_x, origin_X + unit_x*5).style("opacity", 0);
	
	Rect[6] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y - unit_y).style("opacity", 0);
	Rect[7] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y - unit_y).style("opacity", 0);
	Rect[8] = DrawRect(svgContainer_anime, origin_X - unit_x*3, origin_Y).style("opacity", 0);
	Rect[9] = DrawRect(svgContainer_anime, origin_X + unit_x, origin_Y).style("opacity", 0);
	
	jsonCircles[0] = [{ "x": origin_X - unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x*3, "y": origin_Y},
					   { "x": origin_X - unit_x*3, "y": origin_Y + unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y},
					   { "x": origin_X - unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y},
					   { "x": origin_X + unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y},
					   { "x": origin_X + unit_x*3, "y": origin_Y + unit_y}];
					   
	jsonCircles[1] = [{ "x": origin_X - unit_x*5, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x*5, "y": origin_Y},
					   { "x": origin_X - unit_x*5, "y": origin_Y + unit_y},
					   { "x": origin_X - unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x*3, "y": origin_Y},
					   { "x": origin_X - unit_x*3, "y": origin_Y + unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X - unit_x, "y": origin_Y},
					   { "x": origin_X - unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x, "y": origin_Y},
					   { "x": origin_X + unit_x, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x*3, "y": origin_Y},
					   { "x": origin_X + unit_x*3, "y": origin_Y + unit_y},
					   { "x": origin_X + unit_x*5, "y": origin_Y - unit_y},
					   { "x": origin_X + unit_x*5, "y": origin_Y},
					   { "x": origin_X + unit_x*5, "y": origin_Y + unit_y}];
	
	circles_be = DrawCircle_F(svgContainer_anime, jsonCircles[0]);
	
	circles_af = DrawCircle_F(svgContainer_anime, jsonCircles[1]).style("opacity", 0);
	
	line_op = DrawDashline(svgContainer_anime, origin_X, origin_Y - unit_y*2, origin_Y + unit_y*2);
	
	Text[0] = DrawText(svgContainer_anime, "O", origin_X + 5, origin_Y + 20);
	Text[1] = DrawText(svgContainer_anime, "P", origin_X + 5, origin_Y - unit_y*2);
	Text[2] = DrawText(svgContainer_anime, "Rule3: 動畫", 30, 30);
	
	function animate() {
		if(sw) {
			Rect[1].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[4].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[0].transition()
				.duration(1000)
				.attr("x", origin_X - unit_x*5);
			Rect[2].transition()
				.duration(1000)
				.attr("x", origin_X + unit_x*3);
			Rect[3].transition()
				.duration(1000)
				.attr("x", origin_X - unit_x*5);
			Rect[5].transition()
				.duration(1000)
				.attr("x", origin_X + unit_x*3);
			Rect[6].transition()
				.duration(1500)
				.style("opacity", 1);
			Rect[7].transition()
				.duration(1500)
				.style("opacity", 1);
			Rect[8].transition()
				.duration(1500)
				.style("opacity", 1);
			Rect[9].transition()
				.duration(1500)
				.style("opacity", 1);
			line_row[0].transition()
				.duration(1000)
				.attr("x1", origin_X - unit_x*5)
				.attr("x2", origin_X - unit_x);
			line_row[1].transition()
				.duration(1000)
				.attr("x1", origin_X - unit_x*5)
				.attr("x2", origin_X - unit_x);
			line_row[2].transition()
				.duration(1000)
				.style("opacity", 1);
			line_row[3].transition()
				.duration(1000)
				.style("opacity", 1);
			line_col[0].transition()
				.duration(1000)
				.attr("x1", origin_X - unit_x*5 - 10)
				.attr("x2", origin_X - unit_x*5 - 10);
			line_col[1].transition()
				.duration(1000)
				.attr("x1", origin_X + unit_x*5 + 10)
				.attr("x2", origin_X + unit_x*5 + 10);
			circles_be.transition()
				.duration(100)
				.style("opacity", 0);
			circles_af.transition()
				.delay(500)
				.duration(1000)
				.style("opacity", 1);
			
			sw = false;
		}
		else {
			Rect[1].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[4].transition()
				.duration(1000)
				.style("opacity", 1);
			Rect[0].transition()
				.duration(1000)
				.attr("x", origin_X - unit_x*3);
			Rect[2].transition()
				.duration(1000)
				.attr("x", origin_X + unit_x);
			Rect[3].transition()
				.duration(1000)
				.attr("x", origin_X - unit_x*3);
			Rect[5].transition()
				.duration(1000)
				.attr("x", origin_X + unit_x);
			Rect[6].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[7].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[8].transition()
				.duration(1000)
				.style("opacity", 0);
			Rect[9].transition()
				.duration(1000)
				.style("opacity", 0);
			line_row[0].transition()
				.duration(1000)
				.attr("x1", origin_X - unit_x*3)
				.attr("x2", origin_X + unit_x*3);
			line_row[1].transition()
				.duration(1000)
				.attr("x1", origin_X - unit_x*3)
				.attr("x2", origin_X + unit_x*3);
			line_row[2].transition()
				.duration(1000)
				.style("opacity", 0);
			line_row[3].transition()
				.duration(1000)
				.style("opacity", 0);
			line_col[0].transition()
				.duration(1000)
				.attr("x1", origin_X - unit_x*3 - 10)
				.attr("x2", origin_X - unit_x*3 - 10);
			line_col[1].transition()
				.duration(1000)
				.attr("x1", origin_X + unit_x*3 + 10)
				.attr("x2", origin_X + unit_x*3 + 10);
			circles_be.transition()
				.delay(500)
				.duration(1000)
				.style("opacity", 1);
			circles_af.transition()
				.duration(100)
				.style("opacity", 0);
			
			sw = true;
		}
    };
}