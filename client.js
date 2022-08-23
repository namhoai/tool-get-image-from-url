
const element = document.getElementsByClassName("pview-thumb-slide")

const images = element[0].getElementsByTagName('img');

let imagetext = ""

for (let i = 0; i < images.length; i++) {
    imagetext += `'${images[i].src}',`
}

console.log(imagetext)
