/**timeConversion
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 * 
 * Note: Midnight is 12:00:00AM on a 12-hour clock, 
 * and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM 
 * on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 * @param {string} s represents time as a string "hh:mm:ssAM" or "hh:mm:ssPM"
 * @returns {string} military time
 */
function timeConversion(s) {
    let nightOrDay = s[s.length - 2] + s[s.length - 1];
    let hr = s[0] + s[1];
    if (nightOrDay === "PM") {
        if (hr === "12") { return s.slice(0, 8); }
        hr = Number(hr);
        hr += 12;
        return hr + s.slice(2, 8);
    } else if (nightOrDay === "AM" && hr == "12") {
        return "00" + s.slice(2, 8);
    }
    return s.slice(0, 8);
}
