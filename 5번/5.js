let i = 0;

const 출력더하기 = document.querySelectorAll(".number");

for (i = 0; i < 출력더하기.length; i++ ) {
    console.log(Number(출력더하기[i].innerText) + 10)
}
