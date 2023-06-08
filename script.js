/*menu slide*/
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

/*Play Button*/
function play() {
    var play = document.getElementById('play');
    play.style.display = 'block';
    play.play();
    var img = document.getElementById('image');
    img.style.display = 'none';
    var icon = document.getElementById('icon');
    icon.style.display = 'none';

}
// /*Loading Animation*/
// var loader = document.getElementById("preLoader");
// window.addEventListener("load", function() {
//     videoPlay();
//     setTimeout(function() {
//         loader.style.display = "none";

//     }, 3500);


// });
/*Header Video*/
function videoPlay() {
    var video = document.getElementById('headerVideo');
    video.addEventListener('canplay', function() {
        video.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
        });
    });
}
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    var aTags = document.getElementsByTagName("a");
    var nav = document.querySelector("nav");
    toggle.style.background = "white";

    for (let i = 0; i < aTags.length; i++) {
        aTags[i].style.color = "white";
    }
    nav.style.backgroundColor = "black";
});