$(document).ready(function() {

  // Place JavaScript code here...

});



(function( hearthGen, $, undefined ) {
    
    //Public Method
    hearthGen.manaCost = function(data){
        $('#c_manaCost').highcharts({
            chart: {
                type: 'line',
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, '#3399F3']
                    ]
                }
            },
            title: {
                text: 'Mana Cost',
                margin: 5,
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
                    text: 'Average: <b>' + 4 + '</b>'
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
                    color: '#3399F3'
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

    hearthGen.attackMinion = function(data){
        $('#c_attack').highcharts({
            chart: {
                type: 'line',
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, '#bf9853']
                    ]
                }
            },
            title: {
                text: 'Attack of Minions',
                margin: 5,
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
                    text: 'Average: <b>' + 3 + '</b>'
                }
            },
            yAxis: {
                title: {
                    text: 'attack'
                },
                min: 0,
                max: 10,
                allowDecimals: false,
                gridLineWidth: 0
            },
            plotOptions: {
                series: {
                    color: '#bf9853'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.y +'</b> minions have <b>'+ this.x +'</b> attack power.';
                }
            },
            series: [{
                name: 'Attack',
                data: data
            }]
        });
    };

    hearthGen.healthMinion = function(data){
        $('#c_health').highcharts({
            chart: {
                type: 'line',
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgb(255, 255, 255)'],
                        [1, '#CD0200']
                    ]
                }
            },
            title: {
                text: 'Health of Minions',
                margin: 5,
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
                    text: 'Average: <b>' + 3 + '</b>'
                }
            },
            yAxis: {
                title: {
                    text: 'health'
                },
                min: 0,
                max: 10,
                allowDecimals: false,
                gridLineWidth: 0
            },
            plotOptions: {
                series: {
                    color: '#CD0200'
                }
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.y +'</b> minions have <b>'+ this.x +'</b> health.';
                }
            },
            series: [{
                name: 'Health',
                data: data
            }]
        });
    };

    
}( window.hearthGen = window.hearthGen || {}, jQuery ));