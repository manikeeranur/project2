let designLink = document.querySelector(".design-link");
let mobileLink = document.querySelector(".mobile-link");
let socialLink = document.querySelector(".social-link");

let designBox = document.querySelector("#design");
let mobileBox = document.querySelector("#mobile");
let socialBox = document.querySelector("#social");

mobileBox.style.cssText = "display:none";
socialBox.style.cssText = "display:none";

designLink.addEventListener("click", viewdesign);
function viewdesign() {
  console.log("viewd design");
  designBox.style.cssText = "display:block";
  mobileBox.style.cssText = "display:none";
  socialBox.style.cssText = "display:none";
  designLink.style.backgroundColor = "skyblue";
  mobileLink.style.backgroundColor = "white";
  socialLink.style.backgroundColor = "white";
}

mobileLink.addEventListener("click", viewmobile);
function viewmobile() {
  console.log("view mobile");
  designBox.style.cssText = "display:none";
  mobileBox.style.cssText = "display:block";
  socialBox.style.cssText = "display:none";
  designLink.style.backgroundColor = "white";
  mobileLink.style.backgroundColor = "skyblue";
  socialLink.style.backgroundColor = "white";
}

socialLink.addEventListener("click", viewsocial);
function viewsocial() {
  console.log("view social");
  designBox.style.cssText = "display:none";
  mobileBox.style.cssText = "display:none";
  socialBox.style.cssText = "display:block";
  designLink.style.backgroundColor = "white";
  mobileLink.style.backgroundColor = "white";
  socialLink.style.backgroundColor = "skyblue";
}
// ....portfolio...
let allbutton = document.querySelector(".all-btn");
let htmlbutton = document.querySelector(".html-btn");
let photoshopbutton = document.querySelector(".photoshop-btn");
let wordpressbutton = document.querySelector(".wordpress-btn");
let mobilephonebutton = document.querySelector(".mobilephone-btn");

let all = document.querySelector(".all");
let html = document.querySelector(".html");
let photoshop = document.querySelector(".photoshop");
let wordpress = document.querySelector(".wordpress");
let mobilephone = document.querySelector(".mobilephone");

allbutton.addEventListener("click", viewall);
function viewall(e) {
  all.style.cssText = "display:flex";
  html.style.cssText = "display:none";
  photoshop.style.cssText = "display:none";
  wordpress.style.cssText = "display:none";
  mobilephone.style.cssText = "display:none";

  allbutton.style.cssText = "background-color:grey;color:white";
  htmlbutton.style.cssText = "background-color:none";
  photoshopbutton.style.cssText = "background-color:none";
  wordpressbutton.style.cssText = "background-color:none";
  mobilephonebutton.style.cssText = "background-color:none";
}

htmlbutton.addEventListener("click", viewhtml);
function viewhtml() {
  all.style.cssText = "display:none";
  html.style.cssText = "display:flex";
  photoshop.style.cssText = "display:none";
  wordpress.style.cssText = "display:none";
  mobilephone.style.cssText = "display:none";

  allbutton.style.cssText = "background-color:none";
  htmlbutton.style.cssText = "background-color:grey;color:white";
  photoshopbutton.style.cssText = "background-color:none";
  wordpressbutton.style.cssText = "background-color:none";
  mobilephonebutton.style.cssText = "background-color:none";
}

photoshopbutton.addEventListener("click", viewphotoshop);
function viewphotoshop() {
  all.style.cssText = "display:none";
  html.style.cssText = "display:none";
  photoshop.style.cssText = "display:flex";
  wordpress.style.cssText = "display:none";
  mobilephone.style.cssText = "display:none";

  allbutton.style.cssText = "background-color:none";
  htmlbutton.style.cssText = "background-color:none";
  photoshopbutton.style.cssText = "background-color:grey;color:white";
  wordpressbutton.style.cssText = "background-color:none";
  mobilephonebutton.style.cssText = "background-color:none";
}

wordpressbutton.addEventListener("click", viewwordpress);
function viewwordpress() {
  all.style.cssText = "display:none";
  html.style.cssText = "display:none";
  photoshop.style.cssText = "display:none";
  wordpress.style.cssText = "display:flex";
  mobilephone.style.cssText = "display:none";

  allbutton.style.cssText = "background-color:none";
  htmlbutton.style.cssText = "background-color:none";
  photoshopbutton.style.cssText = "background-color:none";
  wordpressbutton.style.cssText = "background-color:grey;color:white";
  mobilephonebutton.style.cssText = "background-color:none";
}

mobilephonebutton.addEventListener("click", viewmobilephone);
function viewmobilephone() {
  all.style.cssText = "display:none";
  html.style.cssText = "display:none";
  photoshop.style.cssText = "display:none";
  wordpress.style.cssText = "display:none";
  mobilephone.style.cssText = "display:flex";

  allbutton.style.cssText = "background-color:none";
  htmlbutton.style.cssText = "background-color:none";
  photoshopbutton.style.cssText = "background-color:none";
  wordpressbutton.style.cssText = "background-color:none";
  mobilephonebutton.style.cssText = "background-color:grey;color:white";
}
