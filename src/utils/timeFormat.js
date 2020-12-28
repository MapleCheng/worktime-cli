
export const hourFormat = (time) => {
    time = parseInt(time) || 0;
    let hour = Math.floor(time/60)
    return hour<10?`0${hour}`:`${hour}`
}
export const minuteFormat = (time) => {
    time = parseInt(time) || 0;
    let minute = time % 60
    return minute<10?`0${minute}`:`${minute}`
}