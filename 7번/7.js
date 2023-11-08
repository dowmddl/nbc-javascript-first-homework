const adBox = document.querySelector(".ad-box");
const timer = document.querySelector(".timer");

let count = Number(timer.textContent);

const intervalId = setInterval(() => {
	
  console.log("setInterval 실행중??");
  if (count < 10 ) {
    count = count + 1 ;
    timer.innerHTML = count;
  } else {
    adBox.style.display = "none";
    clearInterval(intervalId);
  }
}, 1000);