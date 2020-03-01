function handleURLChange(tabID, changeInfo, tab) {
    // If user agent change url
    if (changeInfo.url) {
        // Send to server with a post request
        $.ajax({
            type: "POST",
            url: "http://localhost:3001/",
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

chrome.tabs.onUpdated.addListener(handleURLChange);