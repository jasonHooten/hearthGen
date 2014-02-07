$(document).ready(function() {

  // Place JavaScript code here...

});



(function( hearthGen, $, undefined ) {
    
    //Public Method
    hearthGen.manaCost = function(data){
        $('#manaCost').highcharts({
            title: {
                text: 'Mana Cost',
                margin: 0,
                style: {
                    color: '#2d2d2d',
                    fontSize: '14px',
                }
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: 'mana'
                },
                min: 0,
                max: 10,
                allowDecimals: false,
                gridLineWidth: 0
            },
            plotOptions: {
                series: {
                    color: '#446E9B'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.y +'</b> cards cost <b>'+ this.x +'</b> mana.';
                }
            },
            series: [{
                name: 'Mana Cost',
                data: data
            }]
        });
    };

    
}( window.hearthGen = window.hearthGen || {}, jQuery ));