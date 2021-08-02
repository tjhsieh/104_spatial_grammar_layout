$( document ).ready(function() {
	//window.onresize = updateWindow;
	width  = $(document).width();
	height = $(document).height();
	origin_X = width/4;
	origin_Y = height/4;
	result_X = (width) * 3/4;
	result_Y = height/4;
    rule25();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x	= 50;
var unit_y	= 50;

function rule25() {
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
	var line_col = [];		//Row(left to right, top to bottom). 
	
	line_col[0] = DrawDashline_S(svgContainer_origin, origin_X - 5, origin_X - 5, origin_Y - unit_y, origin_Y + unit_y);
	line_col[1] = DrawDashline_S(svgContainer_origin, origin_X + 5, origin_X + 5, origin_Y - unit_y, origin_Y + unit_y);
	
	var jsonCircles = [{ "x": origin_X, "y": origin_Y - unit_y},
						{ "x": origin_X, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_origin, jsonCircles);
	
	Text[0] = DrawText(svgContainer_origin, "Rule26: 變化前", 30, 30);
}

function Draw_Result() {
	var svgContainer_result = d3.select("#result").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	var line_col = [];		//Row(left to right, top to bottom). 
	
	line_col[0] = DrawLine_col(svgContainer_result, origin_X - 5, origin_Y - unit_y, origin_Y + unit_y);
	line_col[1] = DrawLine_col(svgContainer_result, origin_X + 5, origin_Y - unit_y, origin_Y + unit_y);
	
	var jsonCircles = [{ "x": origin_X, "y": origin_Y - unit_y},
						{ "x": origin_X, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_result, jsonCircles);
	
	Text[0] = DrawText(svgContainer_result, "Rule26: 變化後", 30, 30);
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
	var line_col = [];		//Row(left to right, top to bottom). 
	
	line_col[0] = DrawDashline_S(svgContainer_anime, origin_X - 5, origin_X - 5, origin_Y - unit_y, origin_Y + unit_y);
	line_col[1] = DrawDashline_S(svgContainer_anime, origin_X + 5, origin_X + 5, origin_Y - unit_y, origin_Y + unit_y);
		
	line_col[2] = DrawLine_col(svgContainer_anime, origin_X - 5, origin_Y - unit_y, origin_Y + unit_y).style("opacity", 0);
	line_col[3] = DrawLine_col(svgContainer_anime, origin_X + 5, origin_Y - unit_y, origin_Y + unit_y).style("opacity", 0);
	
	var jsonCircles = [{ "x": origin_X, "y": origin_Y - unit_y},
						{ "x": origin_X, "y": origin_Y + unit_y}];
	
	DrawCircle_F(svgContainer_anime, jsonCircles);
	
	Text[0] = DrawText(svgContainer_anime, "Rule26: 動畫", 30, 30);
	
	function animate() {
		if(sw) {
			line_col[0].transition()
				.duration(100)
				.style("opacity", 0);
			line_col[1].transition()
				.duration(100)
				.style("opacity", 0);
			line_col[2].transition()
				.duration(1000)
				.style("opacity", 1);
			line_col[3].transition()
				.duration(1000)
				.style("opacity", 1);

			sw = false;
		}
		else {
			line_col[0].transition()
				.duration(1000)
				.style("opacity", 1);
			line_col[1].transition()
				.duration(1000)
				.style("opacity", 1);
			line_col[2].transition()
				.duration(100)
				.style("opacity", 0);
			line_col[3].transition()
				.duration(100)
				.style("opacity", 0);
			
			sw = true;
		}
    };
}