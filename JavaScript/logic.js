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

    let descriptionArray = JSON.parse(localStorage.getItem('descriptionArray')) || [];

    saveBtn.on('click', (event) => {
        //getting values from within .description
        let value = $(this).siblings('.description').value;
        event.preventDefault();
        console.log(typeof value);
        // creating array to stores values

        
        // push item into array
        descriptionArray.push(value);
        console.log(descriptionArray);
        
        localStorage.setItem('descriptionArray', JSON.stringify(descriptionArray));


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