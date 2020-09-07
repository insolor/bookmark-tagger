chrome.runtime.onMessage.addListener(function(request) {
    alert("got message")
    if (request.action == "getTags") {
        message.innerText = request.tags;
    }
});

function onWindowLoad() {
    var message = document.querySelector('#tags');

    chrome.tabs.executeScript(null, {
        file: "gettags.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        } else {
            message.innerText = "Loading tags..."
        }
    });

}

window.onload = onWindowLoad;