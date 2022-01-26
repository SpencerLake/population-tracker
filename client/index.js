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
            data.preventDefault
            // Function that creating the content for each data set returned from API
            $.each(data.data, function(i, stuff) {
                // HTML formatting for content
                $cards.append('<a class="card-holder" id="'+ stuff.Year +'" href="'+ stuff.Year +'.html"><div class="card"><p class="card-year"> '+ stuff.Year +'</p><p class="card-population">'+ stuff.Population +'<p></div></a>')
            })
        }
    })
})