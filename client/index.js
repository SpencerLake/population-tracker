// function that calls API and creates HTML content using data
$(function (){

    // Setting location where HTML content will be created
    const $cards = $('#cards-container')

    // Ajax request to API
    $.ajax({
        type: 'GET',
        url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
        success: function(data) {
            // Function that creating the content for each data set returned from API
            $.each(data.data, function(i, stuff) {
                // HTML formatting for content
                $cards.append('<div class="card"><p class="card-year"> '+ stuff.Year +'</p><p class="card-population">'+ stuff.Population +'<p></div>')
            })
        }
    })
})

