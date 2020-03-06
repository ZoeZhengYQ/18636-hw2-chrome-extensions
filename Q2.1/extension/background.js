function handleURLChange(tabID, changeInfo, tab) {
    // If user agent change url
    if (changeInfo.url) {
        // Send to server with a post request
        $.ajax({
            type: "POST",
            url: "http://localhost:3001/history/",
            data: {
                newURL: changeInfo.url
            },
            crossDomain: true, 
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err);
            },
        });
    }
}

// Send user agent info
function getUserAgentInfo() {
    var info = window.navigator.userAgent;
    $.ajax({
        type: "POST",
        url: "http://localhost:3001/platform/",
        data: {
            platformInfo: info,
        },
        crossDomain: true, 
        success: function(data) {
            console.log(data);
        },
        error: function(err) {
            console.log(err);
        },
    });
}

chrome.runtime.onStartup.addListener(getUserAgentInfo);

chrome.tabs.onUpdated.addListener(handleURLChange);


