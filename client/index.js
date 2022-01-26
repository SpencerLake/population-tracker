let yearSelection = ''

// function that calls API and creates HTML content using data
$(function(e) {
    e.preventDefault
    // Setting location where HTML content will be created (year page)
    const $cards = $('#cards-container')

    // Ajax request to API for getting year information
    $.ajax({
        type: 'GET',
        url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
        success: function(data) {
            // Function that creating the content for each data set returned from API
            $.each(data.data, function(i, stuff) {
                // HTML formatting for content
                // $cards.append('<a class="card-holder" id="'+ stuff.Year +'" href="states.html" onClick="selectingYear('+stuff.Year+')"><div class="card"><p class="card-year"> '+ stuff.Year +'</p><p class="card-population">'+ stuff.Population +'<p></div></a>')
                $cards.append('<a class="card-holder" id="'+ stuff.Year +'" href="states.html" (click)="$event.preventDefault()" onClick="selectingYear('+stuff.Year+')"><div class="card"><p class="card-year"> '+ stuff.Year +'</p><p class="card-population">'+ stuff.Population +'<p></div></a>')
            })
        }
    })
})

function selectingYear(year) {
    year.preventDefault
    yearSelection = year
    console.log(yearSelection)
}

// Function for displaying population of each state during the given year
$(function(e) {
    e.preventDefault
    // Setting location where HTML content will be created (states page)
    const $stateCards = $('#cards-container-states')

    // Ajax request to API for getting state information
    $.ajax({
        type: 'GET',
        url: `https://datausa.io/api/data?drilldowns=State&measures=Population&year=${yearSelection}`,
        success: function(data) {
            // console.log(yearSelection)
            // console.log(data.data)
            $.each(data.data, function(i, stuff) {
                // console.log(stuff)
                $stateCards.append('<div class="card"><p class="card-year"> '+ stuff.State +'</p><p class="card-population">'+ stuff.Population +'<p></div>')
            })
        }
    })
})

