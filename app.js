const image = document.querySelector("#image-holders");
const timer = document.querySelector('#timer')

const generateRandom = document.querySelector("#getImage");
var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();

timer.innerHTML = `${hour} : ${minute}`
image.src = "https://picsum.photos/300/500";
generateRandom.addEventListener("click", function() {
    image.src = "https://picsum.photos/500/500";
    setTimeout(function() {
        location.reload();
    }, 10);


})