chrome.runtime.onMessage.addListener(function(request) {
    if (request.action == "getTags") {
        var message = document.querySelector('#tags');
        message.innerText = request.tags.join(", ");
    }
});

function onWindowLoad() {
    var message = document.querySelector('#tags');

    chrome.tabs.executeScript(null, {
        file: "gettags.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = "Can't make bookmark for current tab";
        }
    });

}

window.onload = onWindowLoad;