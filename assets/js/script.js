// Adds current time
window.setInterval(function () {
    $('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}, 1000);

// Retrieves task for each hour from local storage
function init () {
    $('#8h .description').val(localStorage.getItem('8h'));
    $('#9h .description').val(localStorage.getItem('9h'));
    $('#10h .description').val(localStorage.getItem('10h'));
    $('#11h .description').val(localStorage.getItem('11h'));
    $('#12h .description').val(localStorage.getItem('12h'));
    $('#13h .description').val(localStorage.getItem('13h'));
    $('#14h .description').val(localStorage.getItem('14h'));
    $('#15h .description').val(localStorage.getItem('15h'));
    $('#16h .description').val(localStorage.getItem('16h'));
    $('#17h .description').val(localStorage.getItem('17h'));

    checkTime();
}

// Provides functionality to the save buttons
$('.saveBtn').on('click', function(){
    let task  = $(this).siblings('.description').val();
    let hour = $(this).parent().attr('id');
    localStorage.setItem(hour, task)

})

// Colors boxes based off current hour
function checkTime(){
    let currentHour = moment().hour()

    $(".timeBlock").each(function(){
        if ($(this).attr('id').split('h')[0] < currentHour) {
            $(this).children('input').addClass('past')
        } else if ($(this).attr('id').split('h')[0] == currentHour){
            $(this).children('input').addClass('present')
        } else{
            $(this).children('input').addClass('future')
        }
    })
}

init()
