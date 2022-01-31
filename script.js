{
    const days = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];
    let firstDayOfMonth = 5;


    const createDay = (dayName, emptyDays = 0) => {
        const day = document.createElement('div');
        day.classList.add("day");
        day.innerText = dayName;

        if (emptyDays) {
            day.classList.add("emptyDay");
        };

        return day;
    };

    const createWeek = () => {
        const week = document.createElement('div');

        for (let i = 0; i < 7; i++) {
            week.appendChild(createDay(days[i]))
        };

        return week;
    };

    const createIncompleteWeek = (emptyDays) => {
        const week = document.createElement('div');
        let index = 0;

        for (let i = 0; i < emptyDays.length; i++) {
            week.appendChild(createDay(days[i], emptyDays));
            index++
        };

        for (let i = 0; i < days.length - emptyDays.length; i++) {
            week.appendChild(createDay(days[index]));
            index++;
        };

        return week;
    };

    function createMonth(daysOfMonth) {
        const month = document.createElement('div');
        const weekLength = days.length;
        let emptyDays = [...days].splice(0, firstDayOfMonth);

        for (let i = 0; i < 6; i++) {
            if (!i) {
                month.appendChild(createIncompleteWeek(emptyDays));
            } else {
                month.appendChild(createWeek())
            };
        };

        firstDayOfMonth += daysOfMonth % weekLength;

        if (firstDayOfMonth >= days.length) {
            firstDayOfMonth -= weekLength;
        };

        return month;
    };

    const createYear = () => {
        for (let i = 0; i < 12; i++) {
            document.querySelector(".container").innerHTML += `<div class="day month">${i + 1}</div>`;
            document.querySelector(".container").appendChild(createMonth(new Date(2022, i + 1, 0).getDate()));
        };
    };

    createYear();
};
