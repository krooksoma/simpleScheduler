//create variables to select containers
$(document).ready(() => {
    let displayhourNow = $('#currentDay');    
    let saveBtn = $('.saveBtn');
    
       
    //create self updating time using setInterval function to display within displayhourNow container

    setInterval(() => {
        let displaydisplayhourNow = moment(); 

        displayhourNow.text(displaydisplayhourNow.format('MMM Do, YYYY hh:mm:ss'));
    
    }, 1000); //looping every sec to update the time displayed

    // create eventListener for save Btn

    

    saveBtn.on('click', () => {
        let value = $(this).siblings('.description').val();
        let time = $(this).parent().attr('id');
        //getting values from within .description
        for(let i = 9; i < 18; i++){
            $('#hour-' + i).children('.description').val(localStorage.getItem('.hour-' +i));
            console.log(i);
        }
        
        console.log(value);
        // setting item value in local Storage
        
        localStorage.setItem(time, value);
    });

   
   
      
    // create function to set .description color depending on time now
        // loop thru all hour items to set their color

    let hourNow = moment().format('hh');


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