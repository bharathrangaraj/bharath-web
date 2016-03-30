/**
 * Created by Bharath on 29/03/16.
 */
//Specify domain specif data-DESIGN
var chardata=[5,5];
var design=['photoshop CC',"OmniGraffle"];
//Specify domain specif data-PROTOTYPING
var chardata1=[7,5];
var prototype=['Axure RP','Adobe FireWorks'];
//Specify domain specif data-WEB TECHNOLOGIES
var chardata2=[7,6,7,5];
var webTechnologies=['HTML 5','CSS 3','Javascript','PHP'];
//Specify domain specif data-LANGUAGES
var chardata3=[5,7,7,8];
var language=['C','JAVA','SQL','NoSQL'];
//Specify domain specif data-FRAMEWORKS
var chardata4=[8,7,7,7,6,6,8];
var framework=['MongoDB','ExpressJS','AngularJS','Node.js','MongooseJS','JQuery','Bootstrap'];
//height of bar
var barHeight=20;
//canvas height and width
var height=120;
var width=1000;
var heightWeb=150;
var heightFram=300;
//xscale for scaling the skill level with respect to maximumvalue of 10
var xScale = d3.scale.linear()
    .domain([0,10])
    .range([0,width-150]);

//yscale for the name of the technologies
var yScale=d3.scale.linear()
    .domain([0,design.length]).range([0,70]);
var yScale2=d3.scale.linear()
    .domain([0,webTechnologies.length]).range([0,150]);
var yScale3=d3.scale.linear()
    .domain([0,framework.length]).range([0,250]);
//color scale to scale the color for different skill level
var colorScale=d3.scale.linear().domain([0,10]).range(['#ffc7b2','#ff4500']);

//xAxis(use it only once)
var xAxis=d3.svg.axis().scale(xScale).orient('bottom');
//yAxis -mentioning the name of the technolgies
var yAxis=d3.svg.axis().scale(yScale).tickFormat(function(d,i){
    return design[i];
}).tickValues(d3.range(2)).orient('left');
var yAxis1=d3.svg.axis().scale(yScale).tickFormat(function(d,i){
    return prototype[i];
}).tickValues(d3.range(2)).orient('left');
var yAxis2=d3.svg.axis().scale(yScale2).tickFormat(function(d,i){
    return webTechnologies[i];
}).tickValues(d3.range(4)).orient('left');
var yAxis3=d3.svg.axis().scale(yScale2).tickFormat(function(d,i){
    return language[i];
}).tickValues(d3.range(4)).orient('left');
var yAxis4=d3.svg.axis().scale(yScale3).tickFormat(function(d,i){
    return framework[i];
}).tickValues(d3.range(7)).orient('left');

var gr0=d3.select('.hb0')
    .append('svg')
    .attr('width',width)
    .attr('height',50)
    .append('g')
    .attr("transform","translate(170,25)");
//canvas -DESIGN
var gr=d3.select('.hb1')
    .append('svg')
    .attr('width',width)
    .attr('height',height)
    .append('g')
    .attr("transform","translate(170,25)");
//canvas -Protoype
var gr1=d3.select('.hb2')
    .append('svg')
    .attr('width',width)
    .attr('height',height)
    .append('g')
    .attr("transform","translate(170,25)");
//canvas -Web-Technolgies
var gr2=d3.select('.hb3')
    .append('svg')
    .attr('width',width)
    .attr('height',heightWeb)
    .append('g')
    .attr("transform","translate(170,25)");
//canvas - languages
var gr3=d3.select('.hb4')
    .append('svg')
    .attr('width',width)
    .attr('height',heightWeb)
    .append('g')
    .attr("transform","translate(170,25)");
//canvas - transform
var gr4=d3.select('.hb5')
    .append('svg')
    .attr('width',width)
    .attr('height',heightFram)
    .append('g')
    .attr("transform","translate(170,25)");
//draw the bars for the canvas-design
var bars= gr.selectAll('rect')
    .data(chardata)
    .enter()
    .append('rect')
    .style({
        'fill':function(data,i){
            return colorScale(data);
        },
        'stroke':'#7F5343',
        'stroke-width':'5'
    })
    .attr('width',function(d){
        return 0;
    })
    .attr('height',barHeight)
    .attr('x',0)
    .attr('y',function(d,i){
        return (i*35);
    });
//draw the bars for the canvas - prototype
var bars1= gr1.selectAll('rect')
    .data(chardata1)
    .enter()
    .append('rect')
    .style({
        'fill':function(data,i){
            return colorScale(data);
        },
        'stroke':'#7F5343',
        'stroke-width':'5'
    })
    .attr('width',function(d){
        return 0;
    })
    .attr('height',barHeight)
    .attr('x',0)
    .attr('y',function(d,i){
        return (i*35);
    });
//draw the bars for the canvas - Development
var bars2= gr2.selectAll('rect')
    .data(chardata2)
    .enter()
    .append('rect')
    .style({
        'fill':function(data,i){
            return colorScale(data);
        },
        'stroke':'#7F5343',
        'stroke-width':'5'
    })
    .attr('width',function(d){
        return 0;
    })
    .attr('height',barHeight)
    .attr('x',0)
    .attr('y',function(d,i){
        return (i*35);
    });
//draw the bars for the canvas - Framework
var bars3= gr3.selectAll('rect')
    .data(chardata3)
    .enter()
    .append('rect')
    .style({
        'fill':function(data,i){
            return colorScale(data);
        },
        'stroke':'#7F5343',
        'stroke-width':'5'
    })
    .attr('width',function(d){
        return 0;
    })
    .attr('height',barHeight)
    .attr('x',0)
    .attr('y',function(d,i){
        return (i*35);
    });
//draw the bars for the canvas - Framework
var bars4= gr4.selectAll('rect')
    .data(chardata4)
    .enter()
    .append('rect')
    .style({
        'fill':function(data,i){
            return colorScale(data);
        },
        'stroke':'#7F5343',
        'stroke-width':'5'
    })
    .attr('width',function(d){
        return 0;
    })
    .attr('height',barHeight)
    .attr('x',0)
    .attr('y',function(d,i){
        return (i*35);
    });
//up x-axis
gr0.append('g').attr("transform","translate(0,0)").attr('id','upx').call(xAxis);
//group and translation of y axis
gr.append('g').attr("transform","translate(0,5)").call(yAxis);
gr1.append('g').attr("transform","translate(0,5)").call(yAxis1);
gr2.append('g').attr("transform","translate(0,5)").call(yAxis2);
gr3.append('g').attr("transform","translate(0,5)").call(yAxis3);
gr4.append('g').attr("transform","translate(0,5)").call(yAxis4);
//down x axis
gr4.append('g').attr("transform","translate(0,250)").attr('id','downx').call(xAxis);

//apply animation
gr.selectAll('rect').data(chardata).transition().duration(1000).attr('width',function(d){
    return xScale(d);
});
gr1.selectAll('rect').data(chardata1).transition().duration(1000).attr('width',function(d){
    return xScale(d);
});
gr2.selectAll('rect').data(chardata2).transition().duration(1000).attr('width',function(d){
    return xScale(d);
});
gr3.selectAll('rect').data(chardata3).transition().duration(1000).attr('width',function(d){
    return xScale(d);
});
gr4.selectAll('rect').data(chardata4).transition().duration(1000).attr('width',function(d){
    return xScale(d);
});

$(function(){
    $(".typeText").typed({
        strings: ["Javascript", "Full-stack Developer."],
        typeSpeed: 0,
        loop:true
    });
});

$('.jum-but').click(function(){

    gr.selectAll('rect').data(chardata).transition().duration(1000).attr('width',function(d){
        return xScale(d);
    });
    gr1.selectAll('rect').data(chardata1).transition().duration(1000).attr('width',function(d){
        return xScale(d);
    });
    gr2.selectAll('rect').data(chardata2).transition().duration(1000).attr('width',function(d){
        return xScale(d);
    });
    gr3.selectAll('rect').data(chardata3).transition().duration(1000).attr('width',function(d){
        return xScale(d);
    });
    gr4.selectAll('rect').data(chardata4).transition().duration(1000).attr('width',function(d){
        return xScale(d);
    });

})







