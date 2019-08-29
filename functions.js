window.onload = function() {
    console.log( 'this javascript file was successfully loaded.' )
}


function randombg(){
    let random= Math.floor(Math.random() * 39)+1;
    let img_path = '/img/' + random + '.jpg';
    img_path = "url(" + img_path + ")";
    document.getElementById("background").style.backgroundImage = img_path;
    console.log(img_path)
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}