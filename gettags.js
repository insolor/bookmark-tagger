function getTags(document_root) {
    return document_root.head.querySelector('meta[name="keywords"]').getAttribute("content").split(", ")
}

chrome.runtime.sendMessage({
    action: "getTags",
    source: getTags(document)
});