console.log('Hello World')

$(function (){

    const $cards = $('#cards-container')

    $.ajax({
        type: 'GET',
        url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
        success: function(data) {
            console.log(data)
            $.each(data.data, function(i, stuff) {
                $cards.append('<div class="card"><p class="card-year"> '+ stuff.Year +'</p><p class="card-population">'+ stuff.Population +'<p></div>')
                // console.log(stuff.Year)
            })
        }
    })

})

