const cursor = document.querySelector(".heart");
const cursor2 =document.querySelector (".heart2");
const cursor3 = document.querySelector(".heart3");


document.addEventListener("mousemove", (e) => {

    cursor.style.cssText =  cursor2.style.cssText = cursor3.style.cssText= "left:" + e.clientX + "px; top:" + e.clientY + "px;"; 

})