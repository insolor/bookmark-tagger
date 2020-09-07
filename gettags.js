function getTags(document_root) {
    var tags = new Set([...document_root.body.querySelectorAll('a[rel="tag"]')].map(x => x.textContent.trim()))
    alert([...tags])
    return [...tags]
}

chrome.runtime.sendMessage({
    action: "getTags",
    source: getTags(document)
});