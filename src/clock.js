// Hello O_o
function clock(){
    timer()
    actualDate()
}

function timer(){
    const dateTime = new Date()
    const formatter = new Intl.NumberFormat("en-IN", {minimumIntegerDigits: 2})

    let hour = formatter.format(dateTime.getHours())
    let min = formatter.format(dateTime.getMinutes())
    let sec = formatter.format(dateTime.getSeconds())
    let session = "a.m."

    if(hour > 12){
        hour = formatter.format(hour - 12)
        session = "p.m."
    }

    let html = `<span class="textForm">${hour}:${min}:${sec} ${session}</span>`
    document.querySelector("#timerContainer").innerHTML = html
}

function actualDate(){
    const date = new Date()
    const months = [
        "Jan", "Feb",
        "Mar", "Apr",
        "May", "Jun",
        "Jul", "Aug",
        "Sep", "Oct",
        "Nov", "Dec"
    ]

    let day = new Intl.NumberFormat("en-IN", {minimumIntegerDigits: 2}).format(date.getDate())
    let month = months[date.getMonth()]
    let year = date.getFullYear()

    let html = `<span class="textForm">${day} ${month} ${year}</span>`
    document.querySelector("#dateContainer").innerHTML = html
}

setInterval(clock, 10)

