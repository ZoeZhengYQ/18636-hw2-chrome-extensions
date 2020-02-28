$(document).ready(function(){
    /* Function to send input value from the extension to content script */
    function sendInput() {
        var word = $('#replace-word-input').val();
        var res = $('#result-word-input').val();
        
        // Send request with user input value
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var tab = tabs[0];
            chrome.tabs.sendMessage(tab.id, {replaceWord: word, resWord: res}, null);
        });
    }

    $('#replace-btn').click(sendInput);
});