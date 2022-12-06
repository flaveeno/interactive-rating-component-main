const container = document.querySelector(".container")
const thankyou = document.querySelector(".thank-you")
const submit = document.getElementById("submit")
const rateagain = document.getElementById("rateagain")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submit.addEventListener("click", ()=>{
    thankyou.classList.remove("hidden")
    container.style.display = "none"
})

rateagain.addEventListener("click", ()=>{
    thankyou.classList.add("hidden")
    container.style.display = "block"

})
rates.forEach((rate)=>{
    rate.addEventListener("click", ()=>{
        rating.innerHTML=rate.innerHTML
    })
})
