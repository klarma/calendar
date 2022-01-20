const days = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];

const createDay = (i) => {
    document.querySelector(".container").innerHTML += `<div class="day">${days[i]}</div>`;
};

const createWeek = () => {
    for (let i = 0; i < days.length; i++) {
        createDay(i);
    };
};

const createMonth = (daysOfMonth) => {
    for (let i = 0; i < Math.floor(daysOfMonth / days.length); i++) {
        createWeek();
    };
    for (let i = 0; i < (daysOfMonth % days.length); i++) {
        createDay(i);
    };
};

const createYear = () => {
    for (let i = 0; i < 12; i++) {
        document.querySelector(".container").innerHTML += `<div class="day day__month">${i + 1}</div>`;
        createMonth(30);
    };
};

createYear();
