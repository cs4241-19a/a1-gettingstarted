var image = document.getElementById("github")
var githublink = document.getElementById("githublink")
image.addEventListener("click", openlink)
githublink.addEventListener("click", openlink)


function openlink() {
    var url = new URL("https://www.github.com/newtownfam")
    window.open(url)
}