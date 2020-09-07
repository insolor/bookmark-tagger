function getTags(document_root) {
    var tags = new Set([...document_root.body.querySelectorAll('a[rel="tag"]')].map(x => x.textContent.trim()))
    console.log([...tags])
    return [...tags]
}

chrome.runtime.sendMessage({
    action: "getTags",
    tags: getTags(document)
});