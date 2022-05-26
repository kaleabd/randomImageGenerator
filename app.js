const image = document.querySelector("#image-holders");
const timer = document.querySelector('#timer')
const form = document.querySelector('.setSize')
const generateImage = document.querySelector('#getImage')

var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();

timer.innerHTML = `${hour} : ${minute}`
form.addEventListener("click", function(event) {
    event.preventDefault();
    var imageWidth = document.querySelector('#imageWidth').value
    var imageHeight = document.querySelector('#imageHeight').value
    image.width = imageWidth;
    image.height = imageHeight;
    image.src = `https://picsum.photos/${imageWidth}/${imageHeight}`;

})
