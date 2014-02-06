$(document).ready(function() {

  // Place JavaScript code here...

});



(function( hearthGen, $, undefined ) {
    
    //Public Method
    hearthGen.manaCost = function(data){
        var reportData = {
            labels : ["0","1","2","3","4","5","6","7","8","9","10"],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,1)",
                    data : data
                }
            ]
        };

        var ctx = $("#manaCost").get(0).getContext("2d");
        var myNewChart = new Chart(ctx).Bar(reportData);
    };

    
}( window.hearthGen = window.hearthGen || {}, jQuery ));