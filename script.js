const days = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];          

const createDay = (dayName) => {
    const day = document.createElement('div');
    day.classList.add("day");
    day.innerText = dayName;

    return day;
};

const createWeek = (countsDays) => { 
    const week = document.createElement('div');

    for (let i = 0; i < countsDays; i++) {
        week.appendChild(createDay(days[i]));
    };

    return week;
};

function createMonth(daysOfMonth) {
    const weekLength = days.length
    let countsDays = daysOfMonth;

    for (let i = 0; i < Math.ceil(daysOfMonth / weekLength); i++) { 
        
        if (countsDays >= weekLength) {
            document.querySelector(".container").appendChild(createWeek(weekLength));
            countsDays -= weekLength;
        } else {
            document.querySelector(".container").appendChild(createWeek(countsDays));
        };
    };
};

const createYear = () => {
    for (let i = 0; i < 12; i++) {
        document.querySelector(".container").innerHTML += `<div class="day day__month">${i + 1}</div>`;
        createMonth(30);
    };
};

createYear();
