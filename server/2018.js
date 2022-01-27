// Function for adding content to the Modal popup
function popup(state) {
    
    newState = state.toLowerCase()

    // Ajax query calling slug information from API and posting it onto popup
    $(function () {

        $.ajax({
            type: 'GET',
            url: 'https://datausa.io/api/profile?slug=geo&id='+ newState +'',
            success: function(data) {

                const $title = $('#stateModalTitle')
                const $info = $('#info1')

                // Populating content
                $title.append(state)
                $info.append(data.ids)
            }
        })
    })
}

// Function that makes it so the information on the Modal popup is cleared
function clearPopup() {
    const $title = $('#stateModalTitle')
    const $info = $('#info1') 

    // Clears selected tag
    $title.empty()
    $info.empty()
}


// Function for displaying population of each state during the given year
$(function () {
    
    const $stateCards = $('#cards-container-states')

    // Ajax request to API for getting state information
    $.ajax({
        type: 'GET',
        url: 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=2018',
        success: function(data) {
            $.each(data.data, function(i, stateData) {

                const s = stateData
                let trimmedState = $.trim(s.State)

                // Formatting for the state/population cards, and includes the function calls
                $stateCards.append('<div class="card" id="'+ s.State +'"><p class="card-year"> '+ s.State +'</p><p class="card-population">'+ s.Population +'<p><a href="#" class="btn btn-primary" id="btn" data-toggle="modal" data-target="#stateModal" onClick=popup("'+trimmedState+'")>&#63;</a></div>')
            })
        }
    })    
})