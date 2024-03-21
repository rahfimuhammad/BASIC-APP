const dayElement = document.getElementById("days")
const hoursElement = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")

const newYears = '1 Jan 2025'

const countDown = () => {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) /1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600 % 24)
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    dayElement.innerHTML = formattedTime(days)
    hoursElement.innerHTML = formattedTime(hours)
    minutesElement.innerHTML = formattedTime(minutes)
    secondsElement.innerHTML = formattedTime(seconds)
}

const formattedTime = (time) => {
    return time < 10? `0${time}` : time
}

countDown()

setInterval(countDown, 1000)