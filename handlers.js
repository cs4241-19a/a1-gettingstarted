const WHO = "who",
    WHAT = "what",
    HOW = "how",
    CONTAINERS = [WHO, WHAT, HOW],
    CONTAINER_POSTFIX = "_container";

function hideOnStart() {
    CONTAINERS.forEach( function (item, index) {
        document.getElementById(item + CONTAINER_POSTFIX).hidden = true;
    });
}

function showRelatedInfo(button_pressed) {
    //make sure all other containers are hidden
    CONTAINERS.forEach( function (item, index){
        //this should only have to find the element once so we could have it
        //break once it finds it.
        let cur_element = document.getElementById(item+CONTAINER_POSTFIX);
        if (cur_element.hidden===false){
            cur_element.hidden=true;
        }
    });
    let element_to_show = button_pressed + CONTAINER_POSTFIX;
    document.getElementById(element_to_show).hidden = !document.getElementById(
        element_to_show
    ).hidden;
}

//initializations
let who_button = document.getElementById(WHO);
let what_button = document.getElementById(WHAT);
let how_button = document.getElementById(HOW);

who_button.addEventListener("click", function () {
    showRelatedInfo(WHO);
}, false);
what_button.addEventListener("click", function () {
    showRelatedInfo(WHAT);
}, false);
how_button.addEventListener("click", function () {
    showRelatedInfo(HOW);
}, false);

hideOnStart();