$(document).ready(function() {

  // Place JavaScript code here...

});



(function( hearthGen, $, undefined ) {
    
    //////////////////////////////////////////////////////////////////////////////////////////
    // Mana distribution (line)
    hearthGen.manaCost = function(data){
        $('#c_manaCost').highcharts({
            chart: {
                type: 'line',
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(255, 255, 255, 0.1)'],
                        [1, '#3399F3']
                    ]
                },
                backgroundColor:'rgba(255, 255, 255, 0.1)'
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
                    text: null
                },
                min: 0,
                allowDecimals: false,
                gridLineWidth: 0
            },
            plotOptions: {
                series: {
                    color: '#3399F3'
                },
                line:{
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    }
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

    //////////////////////////////////////////////////////////////////////////////////////////
    // Attack distribution (line)
    hearthGen.attackMinion = function(data){
        $('#c_attack').highcharts({
            chart: {
                type: 'line',
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(255, 255, 255, 0.1)'],
                        [1, '#bf9853']
                    ]
                },
                backgroundColor:'rgba(255, 255, 255, 0.1)'
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
                    text: null
                },
                min: 0,
                allowDecimals: false,
                gridLineWidth: 0
            },
            plotOptions: {
                series: {
                    color: '#bf9853'
                },
                line:{
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    }
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

    //////////////////////////////////////////////////////////////////////////////////////////
    // Health distribution (line)
    hearthGen.healthMinion = function(data){
        $('#c_health').highcharts({
            chart: {
                type: 'line',
                plotBackgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, 'rgba(255, 255, 255, 0.1)'],
                        [1, '#CD0200']
                    ]
                },
                backgroundColor:'rgba(255, 255, 255, 0.1)'
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
                    text: null
                },
                min: 0,
                allowDecimals: false,
                gridLineWidth: 0
            },
            plotOptions: {
                series: {
                    color: '#CD0200'
                },
                line:{
                    lineWidth: 4,
                    states: {
                        hover: {
                            lineWidth: 5
                        }
                    },
                    marker: {
                        enabled: false
                    }
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

    //////////////////////////////////////////////////////////////////////////////////////////
    // Minion distribution (Pie)
    hearthGen.cardDistri = function(data){
        $('#c_distri').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor:'rgba(255, 255, 255, 0.1)'
            },
            title: {
                text: 'Minions vs. Spells'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },


            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            colors: ['#3FB618', '#007FFF'],
            plotOptions: {
                series: {
                    dataLabels: { enabled: false }
                },
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Cards',
                data: [
                    ['Spells',  13],
                    ['Minions',   17]
                ]
            }]
        });
    };
}( window.hearthGen = window.hearthGen || {}, jQuery ));