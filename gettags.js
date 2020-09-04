function getTags(document_root) {
    return document_root.head.querySelector('meta[name="keywords"]').getAttribute("content")
}

chrome.runtime.sendMessage({
    action: "getTags",
    source: getTags(document)
});