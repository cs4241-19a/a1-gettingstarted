var seeMoreButton = document.getElementById("seeMore")
var myLanguages = document.getElementById("languageList")
seeMoreButton.addEventListener("click", addLanguage)

var extraLanguages = ["C#", "C", "C++", "MySQL", "Oracle"]

// adds extra languages when the see more button is clicked
function addLanguage() {
    for(x in extraLanguages) {
        var node = createListElement(extraLanguages[x])
        myLanguages.appendChild(node)
        seeMoreButton.remove()
    }
}

// creates a list element
function createListElement(x) {
    var node = document.createElement("li")
    var temp = document.createTextNode(x)
    node.appendChild(temp)
    return node
}