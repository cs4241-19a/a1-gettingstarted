var seeMoreButton = document.getElementById("seeMore")
var languages = document.getElementById("languages")
seeMoreButton.addEventListener("click", showAllLanguages)

// list to hold more languages
var moreLanguages = ["C", "C++", "Linux", "Intelx86 Assembly Language", "SQL"]


function showAllLanguages() {
   console.log("showing all programming languages...")
   removeButton()
   for (lang in moreLanguages) {
    var node = document.createElement("li")
    var text = document.createTextNode(moreLanguages[lang])
    node.appendChild(text)
    languages.appendChild(node)
   }
}

function removeButton() {
    console.log("removing see more button")
    seeMoreButton.remove(seeMoreButton)
}
