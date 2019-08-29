window.addEventListener("hashchange", offsetAnchor);
document.getElementsByClassName("nav_bar").addEventListener("click",boldNavEntry());

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


function boldNavEntry(){
    let allAnchors = document.getElementsByTagName("a");
    let curLoc = location.hash;
    for(x = 0; x < allAnchors.length; x++){
        console.log("checking " + allAnchors.item(x).getAttribute("href") + " against " + curLoc);
        if(curLoc===allAnchors.item(x).getAttribute("href")){
            allAnchors.item(x).style.fontWeight = "800";
            break;
        }
        else {
            allAnchors.item(x).style.fontWeight = "400";
        }
    }
}



