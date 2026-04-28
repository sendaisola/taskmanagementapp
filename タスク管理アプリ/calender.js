const monthElement = document.getElementById("month");
const dateElement = document.getElementById("date");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
const today = new Date();

const monthNames= ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

function Calender(year, month){
    monthElement.textContent = `${year}年 ${monthNames[month]}`; 
    dateElement.innerHTML = ""; 

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDayOfMonth; i++){
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("empty-day");
        dateElement.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.classList.add("day"); 

        const currentDayOfWeek = (firstDayOfMonth + day - 1) % 7;
        
        if (currentDayOfWeek === 0) {
            dayDiv.classList.add("sun");
        } else if (currentDayOfWeek === 6) {
            dayDiv.classList.add("sat");
        }

        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayDiv.classList.add("today");
        }

        dateElement.appendChild(dayDiv); 
    }
}

function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();
    
    Calender(currentYear, currentMonth);
}

document.addEventListener('DOMContentLoaded', () => {
    if (!monthElement || !dateElement) {
        console.warn('calender.js: required elements (#month or #date) not found in DOM.');
        return;
    }

    Calender(currentYear, currentMonth);

    if (prevMonth) {
        prevMonth.addEventListener('click', () => {
            changeMonth(-1);
        });
    }

    if (nextMonth) {
        nextMonth.addEventListener('click', () => {
            changeMonth(1);
        });
    }
});