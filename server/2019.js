function popup(state) {
    newState = state.toLowerCase()
    console.log(newState)
    let popup = document.getElementById("statePopup")
    popup.classList.toggle("show")
}


// Function for displaying population of each state during the given year
$(function () {
    
    const $stateCards = $('#cards-container-states')

    // Ajax request to API for getting state information
    $.ajax({
        type: 'GET',
        url: 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019',
        success: function(data) {
            data.preventDefault
            // console.log(data.data)
            $.each(data.data, function(i, stuff) {
                stuff.preventDefault
                let trimmedState = $.trim(stuff.State)
                // console.log(stuff)
                $stateCards.append('<div class="card" id="'+ stuff.State +'"><p class="card-year"> '+ stuff.State +'</p><p class="card-population">'+ stuff.Population +'<p><button id="btn" onClick=popup("'+trimmedState+'")>&#63;</button><span class="popuptext" id="statePopup">Wokring yo</span></div>')
            })
        }
    })

    // $(document).ready(function(){
    //     $('#btn').click(function() {
    //         alert("this is where data goes")
    //         console.log("working")
    //     })
    // })
    
})

