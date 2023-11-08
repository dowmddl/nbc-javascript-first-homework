const alertHi = document.querySelector(".alert-hi");


function sayHi() {
    alert("안녕!");
    alertHi.style.display = "block";
}

setTimeout(sayHi, 3000);