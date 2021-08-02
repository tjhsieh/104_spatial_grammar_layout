$( document ).ready(function() {
	//window.onresize = updateWindow;
	width  = $(document).width();
	height = $(document).height();
	origin_X = width/4;
	origin_Y = height/4;
	result_X = (width) * 3/4;
	result_Y = height/4;
    rule20();
});

var width;
var height;
var origin_X;
var origin_Y;
var result_X;
var result_Y;
var unit_x	= 50;
var unit_y	= 50;

function rule20() {
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
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom). 
	
	Rect[0] = DrawRect(svgContainer_origin, origin_X - unit_x, origin_Y - unit_y);
	
	Text[0] = DrawText(svgContainer_origin, "Rule21: 變化前", 30, 30);
}

function Draw_Result() {
	var svgContainer_result = d3.select("#result").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");

	//[0...∞]
	var Rect = [];
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom). 
	
	Rect[0] = DrawRect(svgContainer_result, origin_X - unit_x, origin_Y - unit_y);
	
	Text[0] = DrawText(svgContainer_result, "Rule21: 變化後", 30, 30);
	Text[1] = DrawText(svgContainer_result, "﹀", origin_X - 10, origin_Y - unit_y + 10);
	Text[2] = DrawText(svgContainer_result, "﹀", origin_X - 10, origin_Y + 10);
}

function Draw_Animation() {
	var svgContainer_anime = d3.select("#animation").append("svg")
											.attr("width", "100%")
											.attr("height", "100%");
	var sw = true;
	svgContainer_anime.on("mousedown", animate);
											
	//[0...∞]
	var Rect = [];
	var line_op;
	var Text = [];			//[0...2] = O, P, TEXT
	var line_row = [];		//Row(left to right, top to bottom). 
	
	Rect[0] = DrawRect(svgContainer_anime, origin_X - unit_x, origin_Y - unit_y);
	
	Text[0] = DrawText(svgContainer_anime, "Rule21: 動畫", 30, 30);
	Text[1] = DrawText(svgContainer_anime, "﹀", origin_X - 10, origin_Y - unit_y + 10).style("opacity", 0);
	Text[2] = DrawText(svgContainer_anime, "﹀", origin_X - 10, origin_Y + 10).style("opacity", 0);
	
	function animate() {
		if(sw) {
			Text[1].transition()
				.duration(1000)
				.style("opacity", 1);
			Text[2].transition()
				.duration(1000)
				.style("opacity", 1);
			
			sw = false;
		}
		else {
			Text[1].transition()
				.duration(1000)
				.style("opacity", 0);
			Text[2].transition()
				.duration(1000)
				.style("opacity", 0);

			sw = true;
		}
    };
}