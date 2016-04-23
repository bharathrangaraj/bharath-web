

var radioVal=1;
var tit;
$.stellar();
$(document).ready(function() {

    if(window.location.href.indexOf('#pdui') != -1) {
        $('#pdui').modal('show');
    }

});
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){
    var data = initialize(radioVal);
    console.log(data);

    var chart = new google.visualization.BarChart(document.getElementById('myChart'));
    var options={
        title:tit,
        backgroundColor:{fill:'transparent'},
        titleTextStyle: { color: '#E74C3C' },
        hAxis: {
            textStyle: {
                color:'#E74C3C',

            }
        },
        vAxis: {
            textStyle: {
                color:'#E74C3C'
            }
        },
        colors:['#E74C3C'],
        legend:'none',
        'tooltip' : {
            trigger: 'none'
        }
    };
    chart.draw(data,options);
}

$(window).resize(function(){
    drawChart();

});
//typed js for producing the typewriter js
$(function(){
    $(".typeText").typed({
        strings: ["JS FULL-STACK DEVELOPER."],
        typeSpeed: 0
    });
});

$("input[type='radio']").click(function(){
    radioVal=$("input[name='ssradio']:checked").val();
    console.log(radioVal);
    drawChart(radioVal);
});

function initialize(){

    var data=new google.visualization.DataTable();

    if(radioVal=='1') {
        console.log('called');
        data.addColumn('string', 'Design');
        data.addColumn('number', 'Level');
        tit="Design";
        data.addRows([
            ['Photoshop', 5],
            ['Axure RP', 8]
        ]);
    }else if(radioVal=='2'){
        data.addColumn('string', 'Web Technology');
        data.addColumn('number', 'Level');
        tit="Web Technologies";
        data.addRows([
            ['HTML 5', 6],
            ['CSS 3', 6],
            ['Javascript', 7]
        ]);
    }else if(radioVal=='3'){
        data.addColumn('string', 'Frameworks');
        data.addColumn('number', 'Level');
        tit="Frameworks";
        data.addRows([
            ['Bootstrap', 8],
            ['Angular', 7],
            ['Node', 7],
            ['Express',7],
            ['jQuery',6],
            ['MongooseJs',6]
        ]);
    }else if(radioVal=='4'){
        data.addColumn('string', 'Databases');
        data.addColumn('number', 'Level');
        tit="Databases";
        data.addRows([
            ['MySQl', 5],
            ['MongoDB', 8],
        ]);
    }else if(radioVal==5){
        data.addColumn('string', 'SCM');
        data.addColumn('number', 'Level');
        tit="SCM";
        data.addRows([
            ['SVN', 5],
            ['Git', 7],
        ]);
    }
    return data;
}