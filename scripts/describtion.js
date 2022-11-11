console.log("sejal");

let des_largeImg =  document.querySelectorAll(".describtionLargeImg");
let count = 0;
des_largeImg.forEach((element,i) => {
     element.style.left = `${i*100}%`;
});

const previous = () => {
    count--;
    console.log("prev")
    slideImage();
}
 
const next = () => {
   count++;
   console.log("next")
   slideImage();
}
const img1 = () =>{
    // console.log("OOOOOO");
    count =0; 
    slideImage();
}
const img2 = () =>{
    // console.log("aaaa")
   count =1 
   slideImage()
}
const slideImage = () => {
    if(count < 0){
      count = des_largeImg.length-1;
    }
    if(count == des_largeImg.length){
       count =0;
    }
    des_largeImg.forEach((el) => {
        el.style.translate = `-${100 * count}%`;
    });
    console.log("slide")
}
