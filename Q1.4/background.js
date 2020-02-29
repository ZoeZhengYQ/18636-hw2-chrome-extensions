function sendLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function sendLocation(position) {
            console.log("Send to externel server");
            $.ajax({
                type: "GET",
                url: "https://zoezhengyq.github.io/",
                data: position,
                crossDomain: true, 
                success: function(data) {
                    console.log(data);
                },
                error: function(err) {
                    console.log(data);
                },
            });
        }, function(positionError) {
            console.log(positionError);
        });
    }
}

chrome.browserAction.onClicked.addListener(function() {
    setInterval(sendLocation, 60000);
});
