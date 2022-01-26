// Function for displaying population of each state during the given year
$(function () {
    
    const $stateCards = $('#cards-container-states')

    // Ajax request to API for getting state information
    $.ajax({
        type: 'GET',
        url: 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=2018',
        success: function(data) {
            data.preventDefault
            console.log(data.data)
            $.each(data.data, function(i, stuff) {
                stuff.preventDefault
                console.log(stuff)
                $stateCards.append('<div class="card"><p class="card-year"> '+ stuff.State +'</p><p class="card-population">'+ stuff.Population +'<p></div>')
            })
        }
    })
})