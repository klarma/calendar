{
    const days = ["pon", "wt", "śrd", "czw", "pt", "sb", "niedz"];
    const weekLength = days.length;
    let firstDayOfMonth = 5;

    const createDay = (dayName, emptyDays) => {
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

        for (let i = 0; i < weekLength; i++) {
            week.appendChild(createDay(days[i]))
        };

        return week;
    };

    const createFirstWeek = (emptyDays) => {
        const week = document.createElement('div');
        const amountOfEmptyDays = emptyDays.length;
        let index = 0;

        for (let i = 0; i < amountOfEmptyDays; i++) {
            week.appendChild(createDay(days[i], emptyDays));
            index++
        };

        for (let i = 0; i < weekLength - amountOfEmptyDays; i++) {
            week.appendChild(createDay(days[index]));
            index++;
        };

        return week;
    };

    const createPenultimateWeek = (emptyDays) => {
        const week = document.createElement('div');
        const twoLastWeeksLength = weekLength * 2;
        let index = 0;

        if (emptyDays <= weekLength) {
            for (let i = 0; i < weekLength; i++) {
                week.appendChild(createDay(days[i]));
            };
        } else {
            for (let i = 0; i < twoLastWeeksLength - emptyDays; i++) {
                week.appendChild(createDay(days[i]));
                index++;
            };

            for (let i = 0; i < weekLength - (twoLastWeeksLength - emptyDays); i++) {
                week.appendChild(createDay(days[index], emptyDays));
                index++;
            };
        };

        return week;
    };

    const createLastWeek = (emptyDays) => {
        const week = document.createElement('div');
        let index = 0;

        if (emptyDays > weekLength) {
            for (let i = 0; i < weekLength; i++) {
                week.appendChild(createDay(days[i], emptyDays));
            };
        } else {
            for (let i = 0; i < weekLength - emptyDays; i++) {
                week.appendChild(createDay(days[i]));
                index++;
            };

            for (let i = 0; i < emptyDays; i++) {
                week.appendChild(createDay(days[index], emptyDays));
                index++
            };
        };

        return week;
    };

    function createMonth(daysOfMonth) {
        const month = document.createElement('div');
        const allDaysDisplayedInMonth = 42;
        const allWeeksDisplayedInMonth = 6;
        const emptyDays = [...days].splice(0, firstDayOfMonth);
        const emptyLastDays = allDaysDisplayedInMonth - daysOfMonth - emptyDays.length;
        const indexOfPenultimateDisplayedWeek = 4;
        const indexOfLastDisplayedWeek = 5;

        for (let i = 0; i < allWeeksDisplayedInMonth; i++) {
            if (!i) {
                month.appendChild(createFirstWeek(emptyDays));
            } else if (i === indexOfPenultimateDisplayedWeek) {
                month.appendChild(createPenultimateWeek(emptyLastDays));
            } else if (i === indexOfLastDisplayedWeek) {
                month.appendChild(createLastWeek(emptyLastDays));
            } else {
                month.appendChild(createWeek());
            };
        };

        firstDayOfMonth += daysOfMonth % weekLength;

        if (firstDayOfMonth >= weekLength) {
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
