//create variables to select containers
$(document).ready(() => {
    const currentTime = $('#currentDay');
    const tableOfContents = $('.table');
    const timeOfDay = $('.time-block');
    const description = $('.description');
    const saveBtn = $('.saveBtn');

    //create self updating time using setInterval function to display within currentTime container

    window.setInterval(() => {
        const displayCurrentTime = moment();

        currentTime.text(displayCurrentTime.format("MMM Do, YYYY hh:mm:ss"));
    }
        , 1000);

    // create eventListener for save Btn


    saveBtn.on('click', () => {
        let value = $(this).siblings('.description').val();
        console.log(value);
        let valuesArray = [];
        


    });

    
    // create function to set .description color depending on time now

    for (let hour = 9; hour < 18; hour++) {
        let time = "present";
        if (hour > currentTime) {
            time = "future";
        } else if (hour < currentTime) {
            time = "past";
        }

        const timeSlot = $("#hour-" + hour);

        if (timeSlot && timeSlot.length) {
            timeSlot.children().eq(1).addClass(time);
        }
    };
});