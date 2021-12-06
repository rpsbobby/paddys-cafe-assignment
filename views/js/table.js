
console.log('hello from table.js')
function drawTable() {
    $("#results").empty();
    $.getHTMLuncashed = function(url){
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html){
                $("#results").append(html)
            }
        })
    }
    $.getHTMLuncashed("/get/html");

};

$(document).ready(function(){
    drawTable();
})
