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
  designLink.style.color = "skyblue";
  mobileLink.style.color = "white";
  socialLink.style.color = "white";
}

mobileLink.addEventListener("click", viewmobile);
function viewmobile() {
  console.log("view mobile");
  designBox.style.cssText = "display:none";
  mobileBox.style.cssText = "display:block";
  socialBox.style.cssText = "display:none";
  designLink.style.color = "white";
  mobileLink.style.color = "skyblue";
  socialLink.style.color = "white";
}

socialLink.addEventListener("click", viewsocial);
function viewsocial() {
  console.log("view social");
  designBox.style.cssText = "display:none";
  mobileBox.style.cssText = "display:none";
  socialBox.style.cssText = "display:block";
  designLink.style.color = "white";
  mobileLink.style.color = "white";
  socialLink.style.color = "skyblue";
}
