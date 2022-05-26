const adviceId = document.querySelector("#adviceID");
const advice = document.querySelector("#advice");
const getAdviceBtn = document.querySelector(".new-advice");

async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();

    adviceId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
    console.log(data)
}

getAdviceBtn.addEventListener("click", getAdvice)