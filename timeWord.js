// Solve the following problem in JavaScript:

// Turn a string of 24h time into words.

// You can trust that you'll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

// Examples of the output we'd like:

// Input	Expected Output
// 00:00	midnight
// 00:12	twelve twelve am
// 01:00	one o'clock am
// 06:01	six oh one am
// 06:10	six ten am
// 06:18	six eighteen am
// 06:30	six thirty am
// 10:34	ten thirty four am
// 12:00	noon
// 12:09	twelve oh nine pm
// 23:23	eleven twenty three pm



function timeWord(time) {
    const stringTimes = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "fourty", "fourty one", "fourty two", "fourty three", "fourty four", "fourty five", "fourty six", "fourty seven", "fourty eight", "fourty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"]
    if (time === "00:00") {
        return "midnight"
    }
    if (time === "12:00") {
        return "noon"
    }
    let amPm;
    let left = time.slice(0,2);
    if (left[0] === "0") {
        left = time.slice(1,2);
    }
    if (+left > 11) { 
        amPm = "pm" 
    } else {
        amPm = "am"
    }
    if (+left > 12) {
        left = +left - 12
    }
    let right = time.slice(3,5);
    if (right === "00") {
        right = "o'clock"
    } else if (right[0] === "0") {
        right = `oh ${stringTimes[+time.slice(3,5)]}`
    } else {
        right = `${stringTimes[+time.slice(3,5)]}`;
    }
    return `${stringTimes[+left]} ${right} ${amPm}`;
}

module.exports = timeWord;
