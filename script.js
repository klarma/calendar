const days = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];
let firstDayOfWeek = 0;

const createDay = (dayName) => {
    const day = document.createElement('div');
    day.classList.add("day");
    day.innerText = dayName;

    return day;
};

const createWeek = (countDays, firstDayOfWeek) => {
    const week = document.createElement('div');

    for (let i = 0; i < countDays; i++) {
        week.appendChild(createDay(days[firstDayOfWeek]));

        firstDayOfWeek++
        if (firstDayOfWeek >= days.length) {
            firstDayOfWeek = 0
        };
    };

    return week;
};

function createMonth(daysOfMonth) {
    const weekLength = days.length
    let countDays = daysOfMonth;

    for (let i = 0; i < Math.ceil(daysOfMonth / weekLength); i++) {
        if (countDays >= weekLength) {
            document.querySelector(".container").appendChild(createWeek(weekLength, firstDayOfWeek));
            countDays -= weekLength;
        } else {
            document.querySelector(".container").appendChild(createWeek(countDays, firstDayOfWeek));
        };
    };

    firstDayOfWeek += daysOfMonth%weekLength
    if (firstDayOfWeek >= days.length) {
        firstDayOfWeek = 0
    };
    
};

const createYear = () => {
    for (let i = 0; i < 12; i++) {
        document.querySelector(".container").innerHTML += `<div class="day day__month">${i + 1}</div>`;
        createMonth(30);
    };
};

createYear();
