//create variables to select containers
$(document).ready(() => {
    let displayhourNow = $('#currentDay');
    let saveBtn = $('.saveBtn');
    let hourNow = moment().format('hh');
    
    //create self updating time using setInterval function to display within displayhourNow container

    setInterval(() => {
        let displaydisplayhourNow = moment();

        displayhourNow.text(displaydisplayhourNow.format('MMM Do, YYYY hh:mm:ss'));

    }, 1000); //looping every sec to update the time displayed

    // create eventListener for save Btn

    saveBtn.on('click', function () {
        //getting the value from all Btn siblings
        console.log($(this));
        let value = $(this).siblings('.description').val().trim();
        let time = $(this).parent().attr('id');
        console.log(value);
        console.log(time);
        // setting item value in local Storage 
        localStorage.setItem(time, value);
    });

    for (let i = 9; i < 18; i++) {
        $('#hour-' + i).children().eq(1).val(localStorage.getItem('hour-' + i));
    }

    // create function to set .description color depending on time now
    // loop thru all hour items to set their color

    for (var hour = 9; hour < 18; hour++) {
        let time = 'present';
        if (hour > hourNow) {
            time = 'future';
        } else if (hour < hourNow) {
            time = 'past';
        }
        // select the items with id initials hour-X . with X being any number after the dash sign
        const timeSlot = $('#hour-' + hour);
        // grabbing from pre-defined values for variable time it sets of the color of the children element accordingly
        if (timeSlot && timeSlot.length) {
            timeSlot.children().eq(1).addClass(time);
        }
    };
});