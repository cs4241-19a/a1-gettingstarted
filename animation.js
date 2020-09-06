var buttons = document.getElementsByTagName("button");
var i;
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        const content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}