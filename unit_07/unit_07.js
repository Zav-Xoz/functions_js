const sliderFunction = () => {

    // ------------------------- Variables Start

    const arrayOfQuotes = [
        "Начальник не всегда прав, но он всегда начальник.",
        "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
        "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
        "Не спеши выполнять приказ — его могут отменить.",
        "Тому, кто сам ничего не делает, все кажется по плечу.",
        "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
        "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
        "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
        "Не будь незаменимым — тебя никогда не повысят.",
        "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
    ];

    const backgroundColor = [
        '#CC0000',
        '#FF6600',
        '#FF3366',
        '#9933CC',
        '#003333',
        '#708090'
    ];

    const mainBody = document.querySelector('body');
    const btnStart = document.querySelector('.btn-start')

    let mainCounter = 0;
    let slideCollection;



    // ------------------------- Variables End 

    // ------------------------- Main body

    const applicationLaunch = (event) => {
        event.stopPropagation();
        document.querySelector('.btn-start').classList.add('hide');
        contentRendering();
    }

    btnStart.addEventListener('click', applicationLaunch);

    const contentRendering = () => {

        for (let i = 0; i < arrayOfQuotes.length; i++) {
            let div = document.createElement('div');
            div.classList.add('slide');
            if (i !== 0) div.classList.add('hide');
            if (i === 0) div.style.background = backgroundColor[getRandomNumber(0, backgroundColor.length - 1)];
            let quote = document.createElement('div');
            quote.textContent = arrayOfQuotes[i];
            div.append(quote);
            mainBody.append(div);
        }
        mainBody.addEventListener('click', showSlide);
        slideCollection = document.querySelectorAll('.slide');
    }

    const showSlide = (event) => {
        hideSingleSlide(mainCounter);
        if (mainCounter + 1 < arrayOfQuotes.length) {
            mainCounter++;
        }
        else {
            mainCounter = 0;
        }
        showSingleSlide(mainCounter);
    }

    const showSingleSlide = (n) => {
        slideCollection[n].classList.remove('hide');
        slideCollection[n].style.background = backgroundColor[getRandomNumber(0, backgroundColor.length - 1)];
    }

    const hideSingleSlide = (n) => {
        slideCollection[n].classList.add('hide');
    }

    const getRandomNumber = (min, max) => {
        const random = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
    }
}

document.addEventListener("DOMContentLoaded", sliderFunction);
