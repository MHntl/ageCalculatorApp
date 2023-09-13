//!Flatpicker kodları
flatpickr("#date", {
    dateFormat: "m-d-Y", // Tarih formatını istediğiniz gibi ayarlayabilirsiniz
    maxDate: new Date() // Geçerli tarihi en son tarih olarak ayarlar
});
//---
let icon = document.querySelector(".icon")
icon.addEventListener("click", function name(params) {
    Userinput.focus()
})
//----------------------------

//---------------------------
let result = document.querySelector("#result")
let Userinput = document.querySelector("#date")


Userinput.max = new Date().toISOString().split("T")[0];
Userinput.addEventListener("change", calculateAge)

function calculateAge() {
    let birthDate = new Date(Userinput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date()

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;

    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are  <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old`
}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


let button = document.querySelector(".button")

button.addEventListener("click", classSwap)
function classSwap() {
    result.classList.add("active")
}



