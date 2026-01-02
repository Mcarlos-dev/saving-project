let finalValueEl = document.getElementById("final-value")
let bonusEl = document.getElementById("bonus-el")
let initialEl = document.getElementById("initial-el")
let money = 0
let bonus = 0
let total = 0
let totalBonus = 0
function calculate() {
    money = Number(initialEl.value) 
    bonus = Number(bonusEl.value) 
    totalBonus = bonus * 60
    total = money + totalBonus
    finalValueEl.textContent = total
    console.log(money)
}
function reset() {
    total = 0
    finalValueEl.textContent = total
}