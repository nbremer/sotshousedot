///////////////////////////////////////////////////////////////////////////
//////////////////////// Initiate Scatter plot  ///////////////////////////
///////////////////////////////////////////////////////////////////////////
var scatterMargin = {left: 30, top: 20, right: 40, bottom: 100},
	scatterWidth = Math.min($(".dataresource.scatter").width(),900) - scatterMargin.left - scatterMargin.right,
	scatterHeight = Math.min(700, Math.max(500, $(window).height() - 120)) - scatterMargin.top - scatterMargin.bottom;

//Potentie
var svgScatter = d3.select(".dataresource.scatter").append("svg")
		.attr("width", (scatterWidth + scatterMargin.left + scatterMargin.right))
		.attr("height", (scatterHeight + scatterMargin.top + scatterMargin.bottom));
	
var scatterChart = svgScatter.append("g")
		.attr("class", "chartScatter")
		.attr("transform", "translate(" + scatterMargin.left + "," + scatterMargin.top + ")");

//////////////////////////////////////////////////////
///////////// Connected Scatterplot Data /////////////
//////////////////////////////////////////////////////

var gemeentesPlanning = [
{
    "GM_NAAM": "Dordrecht",
    "GM_CODE": "GM0505",
    "houses_planning": 211,
    "houses_transformation": 389,
    "houses_need": 3000,
    "perc_planning": 0.0703,
    "perc_transformation": 0.1297,
    "perc_total": 0.2,
    "orderTotal": 1,
    "orderTrans": 17,
    "orderPlan": 1,
    "orderHouses": 8,
},
{
    "GM_NAAM": "L'dam-Voorburg",
    "GM_CODE": "GM1916",
    "houses_planning": 675,
    "houses_transformation": 230,
    "houses_need": 2700,
    "perc_planning": 0.25,
    "perc_transformation": 0.0852,
    "perc_total": 0.3352,
    "orderTotal": 2,
    "orderTrans": 12,
    "orderPlan": 2,
    "orderHouses": 6,
},
{
    "GM_NAAM": "Rijswijk",
    "GM_CODE": "GM0603",
    "houses_planning": 1986,
    "houses_transformation": 290,
    "houses_need": 6400,
    "perc_planning": 0.3103,
    "perc_transformation": 0.0453,
    "perc_total": 0.3556,
    "orderTotal": 3,
    "orderTrans": 5,
    "orderPlan": 3,
    "orderHouses": 18,
},
{
    "GM_NAAM": "Nieuwegein",
    "GM_CODE": "GM0356",
    "houses_planning": 847,
    "houses_transformation": 226,
    "houses_need": 2200,
    "perc_planning": 0.385,
    "perc_transformation": 0.1027,
    "perc_total": 0.4877,
    "orderTotal": 4,
    "orderTrans": 15,
    "orderPlan": 4,
    "orderHouses": 4,
},
{
    "GM_NAAM": "Amstelveen",
    "GM_CODE": "GM0362",
    "houses_planning": 1869,
    "houses_transformation": 918,
    "houses_need": 4800,
    "perc_planning": 0.3894,
    "perc_transformation": 0.1912,
    "perc_total": 0.5806,
    "orderTotal": 5,
    "orderTrans": 23,
    "orderPlan": 5,
    "orderHouses": 13,
},
{
    "GM_NAAM": "'s-Gravenhage",
    "GM_CODE": "GM0518",
    "houses_planning": 7767,
    "houses_transformation": 2907,
    "houses_need": 18100,
    "perc_planning": 0.4291,
    "perc_transformation": 0.1606,
    "perc_total": 0.5897,
    "orderTotal": 6,
    "orderTrans": 20,
    "orderPlan": 6,
    "orderHouses": 25,
},
{
    "GM_NAAM": "Utrecht",
    "GM_CODE": "GM0344",
    "houses_planning": 15719,
    "houses_transformation": 760,
    "houses_need": 26000,
    "perc_planning": 0.6046,
    "perc_transformation": 0.0292,
    "perc_total": 0.6338,
    "orderTotal": 7,
    "orderTrans": 1,
    "orderPlan": 8,
    "orderHouses": 26,
},
{
    "GM_NAAM": "Stichtse Vecht",
    "GM_CODE": "GM1904",
    "houses_planning": 691,
    "houses_transformation": 228,
    "houses_need": 1200,
    "perc_planning": 0.5758,
    "perc_transformation": 0.19,
    "perc_total": 0.7658,
    "orderTotal": 8,
    "orderTrans": 22,
    "orderPlan": 7,
    "orderHouses": 2,
},
{
    "GM_NAAM": "Leiden",
    "GM_CODE": "GM0546",
    "houses_planning": 3731,
    "houses_transformation": 413,
    "houses_need": 5300,
    "perc_planning": 0.704,
    "perc_transformation": 0.0779,
    "perc_total": 0.7819,
    "orderTotal": 9,
    "orderTrans": 10,
    "orderPlan": 9,
    "orderHouses": 14,
},
{
    "GM_NAAM": "Amersfoort",
    "GM_CODE": "GM0307",
    "houses_planning": 5353,
    "houses_transformation": 315,
    "houses_need": 7100,
    "perc_planning": 0.7539,
    "perc_transformation": 0.0444,
    "perc_total": 0.7983,
    "orderTotal": 10,
    "orderTrans": 4,
    "orderPlan": 10,
    "orderHouses": 21,
},
{
    "GM_NAAM": "Zwolle",
    "GM_CODE": "GM0193",
    "houses_planning": 5663,
    "houses_transformation": 328,
    "houses_need": 6600,
    "perc_planning": 0.858,
    "perc_transformation": 0.0497,
    "perc_total": 0.9077,
    "orderTotal": 11,
    "orderTrans": 7,
    "orderPlan": 12,
    "orderHouses": 19,
},
{
    "GM_NAAM": "Gouda",
    "GM_CODE": "GM0513",
    "houses_planning": 2809,
    "houses_transformation": 592,
    "houses_need": 3300,
    "perc_planning": 0.8512,
    "perc_transformation": 0.1794,
    "perc_total": 1.0306,
    "orderTotal": 12,
    "orderTrans": 21,
    "orderPlan": 11,
    "orderHouses": 9,
},
{
    "GM_NAAM": "Enschede",
    "GM_CODE": "GM0153",
    "houses_planning": 3428,
    "houses_transformation": 270,
    "houses_need": 3400,
    "perc_planning": 1.0082,
    "perc_transformation": 0.0794,
    "perc_total": 1.0876,
    "orderTotal": 13,
    "orderTrans": 11,
    "orderPlan": 13,
    "orderHouses": 10,
},
{
    "GM_NAAM": "Haarlem",
    "GM_CODE": "GM0392",
    "houses_planning": 7899,
    "houses_transformation": 323,
    "houses_need": 6700,
    "perc_planning": 1.179,
    "perc_transformation": 0.0482,
    "perc_total": 1.2272,
    "orderTotal": 14,
    "orderTrans": 6,
    "orderPlan": 15,
    "orderHouses": 20,
},
{
    "GM_NAAM": "Haarlemmermeer",
    "GM_CODE": "GM0394",
    "houses_planning": 12077,
    "houses_transformation": 891,
    "houses_need": 9700,
    "perc_planning": 1.2451,
    "perc_transformation": 0.0919,
    "perc_total": 1.337,
    "orderTotal": 15,
    "orderTrans": 14,
    "orderPlan": 16,
    "orderHouses": 23,
},
{
    "GM_NAAM": "Breda",
    "GM_CODE": "GM0758",
    "houses_planning": 9600,
    "houses_transformation": 212,
    "houses_need": 7100,
    "perc_planning": 1.3521,
    "perc_transformation": 0.0299,
    "perc_total": 1.382,
    "orderTotal": 16,
    "orderTrans": 2,
    "orderPlan": 18,
    "orderHouses": 22,
},
{
    "GM_NAAM": "Arnhem",
    "GM_CODE": "GM0202",
    "houses_planning": 7584,
    "houses_transformation": 719,
    "houses_need": 6000,
    "perc_planning": 1.264,
    "perc_transformation": 0.1198,
    "perc_total": 1.3838,
    "orderTotal": 17,
    "orderTrans": 16,
    "orderPlan": 17,
    "orderHouses": 16,
},
{
    "GM_NAAM": "Hilversum",
    "GM_CODE": "GM0402",
    "houses_planning": 3379,
    "houses_transformation": 684,
    "houses_need": 2900,
    "perc_planning": 1.1652,
    "perc_transformation": 0.2359,
    "perc_total": 1.4011,
    "orderTotal": 18,
    "orderTrans": 25,
    "orderPlan": 14,
    "orderHouses": 7,
},
{
    "GM_NAAM": "Amsterdam",
    "GM_CODE": "GM0363",
    "houses_planning": 49632,
    "houses_transformation": 2433,
    "houses_need": 36100,
    "perc_planning": 1.3748,
    "perc_transformation": 0.0674,
    "perc_total": 1.4422,
    "orderTotal": 19,
    "orderTrans": 9,
    "orderPlan": 19,
    "orderHouses": 27,
},
{
    "GM_NAAM": "'s-Hertogenbosch",
    "GM_CODE": "GM0796",
    "houses_planning": 8595,
    "houses_transformation": 213,
    "houses_need": 5700,
    "perc_planning": 1.5079,
    "perc_transformation": 0.0374,
    "perc_total": 1.5453,
    "orderTotal": 20,
    "orderTrans": 3,
    "orderPlan": 23,
    "orderHouses": 15,
},
{
    "GM_NAAM": "Apeldoorn",
    "GM_CODE": "GM0200",
    "houses_planning": 5601,
    "houses_transformation": 847,
    "houses_need": 4000,
    "perc_planning": 1.4002,
    "perc_transformation": 0.2118,
    "perc_total": 1.612,
    "orderTotal": 21,
    "orderTrans": 24,
    "orderPlan": 20,
    "orderHouses": 11,
},
{
    "GM_NAAM": "Zoetermeer",
    "GM_CODE": "GM0637",
    "houses_planning": 3745,
    "houses_transformation": 383,
    "houses_need": 2500,
    "perc_planning": 1.498,
    "perc_transformation": 0.1532,
    "perc_total": 1.6512,
    "orderTotal": 22,
    "orderTrans": 19,
    "orderPlan": 22,
    "orderHouses": 5,
},
{
    "GM_NAAM": "Helmond",
    "GM_CODE": "GM0794",
    "houses_planning": 6835,
    "houses_transformation": 216,
    "houses_need": 4200,
    "perc_planning": 1.6274,
    "perc_transformation": 0.0514,
    "perc_total": 1.6788,
    "orderTotal": 23,
    "orderTrans": 8,
    "orderPlan": 25,
    "orderHouses": 12,
},
{
    "GM_NAAM": "Maastricht",
    "GM_CODE": "GM0935",
    "houses_planning": 1750,
    "houses_transformation": 322,
    "houses_need": 1200,
    "perc_planning": 1.4583,
    "perc_transformation": 0.2683,
    "perc_total": 1.7266,
    "orderTotal": 24,
    "orderTrans": 27,
    "orderPlan": 21,
    "orderHouses": 1,
},
{
    "GM_NAAM": "Rotterdam",
    "GM_CODE": "GM0599",
    "houses_planning": 17494,
    "houses_transformation": 2912,
    "houses_need": 11500,
    "perc_planning": 1.5212,
    "perc_transformation": 0.2532,
    "perc_total": 1.7744,
    "orderTotal": 25,
    "orderTrans": 26,
    "orderPlan": 24,
    "orderHouses": 24,
},
{
    "GM_NAAM": "Eindhoven",
    "GM_CODE": "GM0772",
    "houses_planning": 13160,
    "houses_transformation": 558,
    "houses_need": 6400,
    "perc_planning": 2.0562,
    "perc_transformation": 0.0872,
    "perc_total": 2.1434,
    "orderTotal": 26,
    "orderTrans": 13,
    "orderPlan": 26,
    "orderHouses": 17,
},
{
    "GM_NAAM": "Roermond",
    "GM_CODE": "GM0957",
    "houses_planning": 3630,
    "houses_transformation": 227,
    "houses_need": 1500,
    "perc_planning": 2.42,
    "perc_transformation": 0.1513,
    "perc_total": 2.5713,
    "orderTotal": 27,
    "orderTrans": 18,
    "orderPlan": 27,
    "orderHouses": 3,
}
];

///////////////////////////////////////////////////////////////////////////
///////////////////// Initiate Scatterplot visual /////////////////////////
///////////////////////////////////////////////////////////////////////////

function initiateScatter(data, width, height, margin) {

	var moveToRight = 80,
		barChartWidth = Math.min(220, (width-moveToRight)*0.25);
	
	//////////////////////////////////////////////////////
	/////////////////// Initialize Axes //////////////////
	//////////////////////////////////////////////////////
	
	//Set the new x axis range
	var xScale = d3.scale.linear()
		.range([moveToRight, width-barChartWidth])
		//.domain(d3.extent(data, function(d) {return d.perc_total;}))
		.domain([0,2.75]);
		
	//Set new x-axis	
	var xAxis = d3.svg.axis()
		.orient("bottom")
		.ticks(6)
		.scale(xScale)
		.tickFormat(numFormatPercent);	

	//Append the x-axis
	scatterChart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + 0 + "," + (height + 25) + ")")
		.call(xAxis);
		
	//Set the scale for the bubble size
	var rScale = d3.scale.sqrt()
		.range([0, 20])
		.domain([0, d3.max(data, function(d) {return d.houses_need;})]);		
				
	////////////////////////////////////////////////////////////	
	//////////////////// Connecting Lines //////////////////////
	////////////////////////////////////////////////////////////					

	//Lines behind the entire chart width
	scatterElement.append("line")
				.attr("class", "backgroundLine")
				.style("opacity", 0.4)
				.attr("x1", xScale.range()[0])
				.attr("x2", xScale.range()[1])
				.attr("y1", 0)
				.attr("y2", 0);
				
	//Lines connecting the two circles
	scatterElement.append("line")
				.attr("class", "connectLine")
				.style("opacity", 0.6)
				.attr("x1", function(d) {return xScale(d.perc_planning) + 5;})
				.attr("x2", function(d) {return xScale(d.perc_total) - 5;})
				.attr("y1", 0)
				.attr("y2", 0);
				
	////////////////////////////////////////////////////////////	
	/////////////////// Scatterplot Circles ////////////////////
	////////////////////////////////////////////////////////////					
				
	//Planning circles
	scatterElement.append("circle")
				.attr("class", function(d) { return "circleScatter planning " + d.GM_CODE; })
				.style("opacity", 0.8)
				.style("fill", "#8C8C8C")
				.attr("cx", function(d) {return xScale(d.perc_planning);})
				.attr("cy", 0)
				.attr("r", 5);
				//.attr("r", function(d) {return rScale();});

	//Planning+transformation circles
	scatterElement.append("circle")
				.attr("class", function(d) { return "circleScatter total " + d.GM_CODE; })
				.style("opacity", 0.8)
				.style("fill", "#81BC00")
				.attr("cx", function(d) {return xScale(d.perc_total);})
				.attr("cy", 0)
				.attr("r", 5);
				//.attr("r", function(d) {return rScale();});

	////////////////////////////////////////////////////////////	
	//////////////////// Scatterplot Labels ////////////////////
	////////////////////////////////////////////////////////////	

	//Names of the cities
	scatterElement.append("text")
				.attr("class", "legendTitle")
				.style("text-anchor", "end")	
				.style("font-size", "12px")
				.attr("x", xScale(0) - 10)
				.attr("y", 0)
				.attr("dy", "0.35em")
				.text(function(d) { return d.GM_NAAM; });

	////////////////////////////////////////////////////////////	
	////////////////// Bar chart at the right //////////////////
	////////////////////////////////////////////////////////////	

	var barStart = width - barChartWidth + 20,
		barHeight = Math.round(height/data.length * 0.7);
		
	//Set the bar scale
	var barScale = d3.scale.linear()
		.range([0, barChartWidth])
		//.domain(d3.extent(data, function(d) {return d.houses_need;}));
		.domain([0,40000]);

	//Create the bar scale axis	
	var barAxis = d3.svg.axis()
		.orient("bottom")
		.ticks(2)
		.scale(barScale)
		.tickFormat(NLformat);	

	//Append the bar scale axis
	scatterChart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(" + barStart + "," + (height + 25) + ")")
		.call(barAxis);
	
	//Create the bars themselves
	scatterElement.append("rect")
				.attr("class", "scatterBar")
				.attr("x", barStart)
				.attr("y", - barHeight/2)
				.attr("width", function(d) { return barScale(d.houses_need); })
				.attr("height", barHeight)
				.style("fill", "#DCDCDC");
	
	//////////////////////////////////////////////////////
	////////////// Initialize Axis Texts /////////////////
	//////////////////////////////////////////////////////	
	
	//Set up X axis label
	scatterChart.append("g")
		.append("text")
		.attr("class", "x axis label")
		.attr("text-anchor", "middle")
		.attr("transform", "translate(" + (moveToRight + (width-moveToRight-barChartWidth)/2) + "," + (height + 60) + ")")
		.style("font-size", "10px")
		.attr("x", 0)
		.attr("y", 0)
		.attr("dy", "0em")
		.text("Percentage van verwachte huishoudensgroei tot 2025")
		.call(wrap, (width-moveToRight-barChartWidth)*0.9);
		
	//Create the g group to hold the data
	var medianLine = scatterChart.append("g").attr("class", "median")
		.style("cursor", "default");
	//The line itself
	medianLine.append("line")
		.attr("x1", xScale(1))
		.attr("x2",  xScale(1))
		.attr("y1", 30)
		.attr("y2", height + 15)
		.style("stroke", "#B5B5B5")
		.style("shape-rendering", "crispEdges")
		.style("stroke-dasharray", "2 2")
		.style("pointer-events", "none");	
	//The word above the line
	//medianLine.append("text")
	//	.attr("class","legendText")
	//	.attr("transform", "translate(" + (5) + "," + (8) + ")")
	//	.style("text-anchor", "start")
	//	.text("Gemiddelde");	

	//Set up bar chart axis label
	scatterChart.append("g")
		.append("text")
		.attr("class", "bar chart label")
		.attr("text-anchor", "middle")
		.attr("transform", "translate(" + (barStart + barChartWidth/2) + "," + (height + 60) + ")")
		.style("font-size", "10px")
		.attr("x", 0)
		.attr("y", 0)
		.attr("dy", "0em")
		.text("Verwachte huishoudensgroei tot 2025 (absoluut)")
		.call(wrap, barChartWidth*0.9);
		
	//////////////////////////////////////////////////////
	///////////////// Initialize Legend //////////////////
	//////////////////////////////////////////////////////
	
	//Create a wrapper for the circle legend				
	var legendCircle = scatterChart.append("g").attr("class", "legendWrapper")
					.attr("transform", "translate(" + (width/2) + "," + (scatterMargin.top/2) +")");
	
	//The grey circle
	legendCircle.append("text")
		.attr("class","legendTitle")
		.attr("x", -140)
		.attr("y", 0)
		.attr("dy", "0.35em")
		.style("text-anchor", "start")
		.text("Plancapaciteit tot 2025");
	legendCircle.append("circle")
        .attr('r', 5)
        .attr('cx', -150)
        .attr('cy', 0)
		.style("opacity", 0.8)
		.style("fill", "#8C8C8C");	

	//The green circle
	legendCircle.append("text")
		.attr("class","legendTitle")
		.attr("x", 20)
		.attr("y", 0)
		.attr("dy", "0.35em")
		.style("text-anchor", "start")
		.text("Plancapaciteit incl. transformatiepotentie");
	legendCircle.append("circle")
        .attr('r', 5)
        .attr('cx', 10)
        .attr('cy', 0)
		.style("opacity", 0.8)
		.style("fill", "#81BC00");			
	
}//initiateScatter
		
//////////////////////////////////////////////////////
//////////////// Draw Scatterplot Data ///////////////
//////////////////////////////////////////////////////

//Set the new x axis range
var yScaleScatter = d3.scale.linear()
	.range([scatterHeight, 0])
	.domain([0, gemeentesPlanning.length])
	.nice();
	
//Groups for each row
var scatterElement = scatterChart.selectAll(".wrappingElement")
			.data(gemeentesPlanning)
			.enter().append("g")
				.attr("class", "wrappingElement")
				.attr("transform", function(d, i) {return "translate(0," + yScaleScatter(i) + ")" ;});

//When you click the buttons
d3.select("#totalButton").on("click", function(d){ 
		scatterChart.selectAll(".wrappingElement")
				.transition().duration(1000)
				.attr("transform", function(d, i) {return "translate(0," + yScaleScatter(d.orderTotal - 1) + ")" ;})
});
/*
d3.select("#transButton").on("click", function(d){ 
		scatterChart.selectAll(".wrappingElement")
				.transition().duration(1000)
				.attr("transform", function(d, i) {return "translate(0," + yScaleScatter(d.orderTrans - 1) + ")" ;})
});
d3.select("#planButton").on("click", function(d){ 
		scatterChart.selectAll(".wrappingElement")
				.transition().duration(1000)
				.attr("transform", function(d, i) {return "translate(0," + yScaleScatter(d.orderPlan - 1) + ")" ;})
});*/
d3.select("#housesButton").on("click", function(d){ 
		scatterChart.selectAll(".wrappingElement")
				.transition().duration(1000)
				.attr("transform", function(d, i) { return "translate(0," + yScaleScatter(d.orderHouses - 1) + ")" ;})
});

//Draw the scatterplot	
initiateScatter(gemeentesPlanning, scatterWidth, scatterHeight, scatterMargin);