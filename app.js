const image = document.querySelector("#image-holders");
const timer = document.querySelector('#timer')
const form = document.querySelector('.setSize')
const generateImage = document.querySelector('#getImage')

const options = {
       timeZone:"Africa/Accra",
       hour12 : true,
       hour:  "2-digit",
       minute: "2-digit",
      second: "2-digit"
    };

var time = new Date().toLocaleTimeString("en-US",options);

timer.innerHTML = `${time}`
form.addEventListener("click", function(event) {
    event.preventDefault();
    var imageWidth = document.querySelector('#imageWidth').value
    var imageHeight = document.querySelector('#imageHeight').value
    image.width = imageWidth;
    image.height = imageHeight;
    image.src = `https://picsum.photos/${imageWidth}/${imageHeight}`;

})
