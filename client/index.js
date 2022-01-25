
console.log('Hello World')

$.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then((data) => {
        // console.log(data)

        const yearPaste = $('.card-year')
        const popPaste = $('.card-population')
        
        const yearData = data.year
        
        yearPaste.append(yearData)
        console.log(yearData)

        for(let i; i > data.length; i++){
            console.log(data[i])
            // data[i].push(information)
        }

        // let allStuff = data

        // let year = data.
        // console.log(information)
    }).catch((e) => {
        console.log(e)
    })

// const getData = () => {

//     let endpoint = "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
//     let apiKey = ""
// }
