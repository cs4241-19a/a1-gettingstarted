window.addEventListener("hashchange", offsetAnchor);

function collapse(button) {
    let content = button.nextElementSibling; //returns element defined right after coll[i] in index
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 150);
    }
}




