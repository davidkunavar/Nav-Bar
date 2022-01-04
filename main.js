const btn = document.getElementById("bars");
const links = document.querySelector(".links");
const navcenter = document.querySelector(".nav-center");

btn.addEventListener("click", function () {
    if (links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    }
    navcenter.style.boxShadow = "0 0 0 0";
})