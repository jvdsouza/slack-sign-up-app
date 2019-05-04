import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

//TODO
//check location and time
//if at the location and at the time
// - involves converting time from string and checking
//   if the time is both in hours and minutes past the
//   starting time of the event
// - requires the same for date
// - must also terminate after duration is over
// - possibly 
//route to index
//otherwise route to apology pages

//Time and location

const currentDateTime = () => {

    //obtain data to get dates
    const datetime = new Date();
    //get and format date into yyyymmdd
    let date = String(datetime.getFullYear()*10000 + (datetime.getMonth()+1)*100)
    const day = datetime.getDate()
    if (day < 10){
        date += '0' + String(day) //to keep the formatting at yyyymmdd and not yyyymmd
    } else {
        date += day
    }
    const today = date; //store as a constant
    //get and format hours and minutes in 24 hours time (hhmm)
    const time = datetime.getHours() * 100 + datetime.getMinutes()

    return {currentTime: time, currentDate: today};
}

const timeCheck = (eventTime) => {
    //checks the current time against the event time, in 24 hours formatting
}

const dateCheck = (eventDate) => {
    //checks the current date against the event date in yyyymmdd formatting
}

const locationCheck = (option) => {
    //checks the current location against the location of the user by either IP or lat/long coordinates
}

export {
    currentDateTime,
    timeCheck,
    dateCheck,
    locationCheck
}