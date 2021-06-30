// let nightmode = document.getElementById('nightmode');
// let mainContainer = document.querySelector('.main-container');

// let firstImg = document.getElementById("firstImage");
// let secondImg = document.getElementById("secondImage");

// nightmode.addEventListener('click', () => {

//     if (mainContainer.style.background = "white") {
//         mainContainer.style.background = 'black';
//         nightmode.innerText = "lightMode";
//         firstImg.src = "./img/blog2.jpg";
//         secondImg.src = "./img/blog1.jpg";


//     } else {
//         mainContainer.style.background = 'white';
//         nightmode.innerText = "DarkMode";
//         firstImg.src = "./img/blog1.jpg";
//         secondImg.src = "./img/blog2.jpg";
//     }


// });


let imgOne = document.getElementById('imageOne');
let imgTwo = document.getElementById('imageTwo');
let imgThree = document.getElementById('imageThree');


setInterval(imageChanger = () => {
    imgOne.src = './img/popular-blog3.jpg';
    imgTwo.src = './img/popular-blog2.jpg';
    imgThree.src = './img/popular-blog1.jpg';
}, 2000);
setInterval(imageChangerTwo = () => {
    imgOne.src = './img/popular-blog2.jpg';
    imgTwo.src = './img/popular-blog1.jpg';
    imgThree.src = './img/popular-blog3.jpg';
}, 4000);

let close = document.getElementById('close');
let adImage = document.getElementById('adImage');
let ad = document.querySelector('.ad');

close.addEventListener('click', function () {
    ad.style.display = 'none';

});

setTimeout(function () {
    ad.style.display = "block";
    ad.style.right = "5%";
}, 5000);
setInterval(function () {
    close.style.color = "red";

}, 1000);
setInterval(function () {
    close.style.color = "black";
    // adImage.style.height = "150px";

}, 2000);




