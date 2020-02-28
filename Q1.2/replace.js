$(document).ready(function(){
    var replaced = $("body").html().replace(/Chrome/g,"Firefox");
    $("body").html(replaced);
    var imgURL = chrome.extension.getURL("firefox.png");
    var logo = $('#logo img');
    logo.attr("src", imgURL);
    logo.css({
        "height": "80px", 
        "width": "auto",
    });
});