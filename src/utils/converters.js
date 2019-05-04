//This file is a utility file used to help convert
//the time and date to a format easily usable to check
//for certain parameters that allow the user to sign up

const timeConvert = (time) => {
    //converts 24 hour time from hh:mm to hhmm and return as a string
    //get the hours
    const hours = String(time).slice(0,2);
    //get the minutes
    const minutes = String(time).slice(3);
    //convert to hhmm
    const convertedTime = String(Number(hours) * 100 + Number(minutes));
    
    return convertedTime;
}

const dateConvert = (date) => {
    //converts date from yyyy-mm-dd to yyyymmdd and return as a string
    //get the year
    const year = String(date).slice(0, 5);
    //get the month
    const month = String(date).slice(6, 9);
    //get the day
    let day = String(date).slice(10);
    //convert to yyyymmdd
    const convertedDate = String(Number(year) * 10000 + Number(month) * 100) + day;

    return convertedDate;
}

const latitudeToMeters = (latitude) => {

}

const longitudeToMeters = (longitude) => {
    
}

export {
    timeConvert,
    dateConvert
}