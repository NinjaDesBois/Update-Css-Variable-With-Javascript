let spacing = document.getElementById("spacing");
let image = document.getElementById("image");
let color = document.getElementById("color")
let blur = document.getElementById("blur")

spacing.addEventListener("change", function(event) {
    event.preventDefault


    image.style.padding = spacing.value + "px";
    image.style.backgroundColor = color.value;


})

color.addEventListener("change", function(event) {
    event.preventDefault

    image.style.backgroundColor = color.value;




})

blur.addEventListener("change", function(event) {
    event.preventDefault
    image.style.filter = "blur(" + blur.value + "px)"

})