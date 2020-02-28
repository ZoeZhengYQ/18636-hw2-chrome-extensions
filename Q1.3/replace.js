/* Upon receiving the message from popup, replace text with user input word */
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    var regex = new RegExp(request.replaceWord, 'g');
    var replaced = $("body").html().replace(regex, request.resWord);
    $("body").html(replaced);
});