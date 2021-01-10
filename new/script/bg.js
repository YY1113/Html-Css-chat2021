const body = document.querySelector("body");

const IMG_NUMBER = 5;

//API로 이미지를 받아올 경우 로딩이 생길 수 있으니, 로딩이 완료된 후에 이미지를 불러오게 하는 기능
// function handleImgLoad() {
//     console.log("finished loading");
// }

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage')
    body.prepend(image);
    //API로 이미지를 받아올 경우 로딩이 생길 수 있으니, 로딩이 완료된 후에 이미지를 불러오게 하는 기능
    // image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}
init();