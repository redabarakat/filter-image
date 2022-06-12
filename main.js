let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let hueRotate = document.getElementById("hue-rotate");
let download = document.getElementById("download");
let reset = document.getElementById("reset");
let upload = document.getElementById("upolad");
let image = document.getElementById("imag");
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

function resetdata() {
    image.style.filter = "none";
    filters.forEach((filter) => {
        let values = filter.getAttribute("value");
        filter.value = values;
    });
}

upload.onchange = function () {
    resetdata();
    download.style.display = "block";
    reset.style.display = "block";
    // let file = new FileReader()
    // file.readAsDataURL(upload.files[0]);
    // file.onloadend = function(){
    //     image.src = file.result;
    // }
    let de = upload.files[0];
    let file = URL.createObjectURL(upload.files[0]);
    image.src = file;
    image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        image.style.display = "none";
    };
};

let filters = document.querySelectorAll(".filters ul li input");
filters.forEach((filter) => {
    filter.addEventListener("input", function () {
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        hue-rotate(${hueRotate.value}deg)
        `;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    });
});

reset.onclick = resetdata;

download.onclick = function () {
    download.href = canvas.toDataURL();
};

files = {
    0: "file name",
    lenght: 1,
};
