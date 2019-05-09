//This file is a utility file to help check
//the current date, time and location of the user against
//the event date, time and location

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

const timeCheck = (eventTime, eventDuration, currentTime) => {
    //checks the current time against the event time, in 24 hours formatting
    const eventTimeNumber = Number(eventTime);
    const eventDurationNumber = Number(eventDuration);
    const currentTimeNumber = Number(currentTime);

    //if we're in the current time of the event
    if (currentTimeNumber >= eventTimeNumber 
        && currentTimeNumber <= (eventTimeNumber + eventDurationNumber)) {
        return true;
    }
    return false;
}

const dateCheck = (eventDate, currentDate) => {
    //checks the current date against the event date in yyyymmdd formatting

    //if it's the day of the event
    if (eventDate === currentDate) {
        return true;
    }
    return false;
}

const locationCheck = (option, eventLocation = null, eventIP = null) => {
    //TODO checks the current location against the location of the user by either IP or lat/long coordinates
}

export {
    currentDateTime,
    timeCheck,
    dateCheck,
    locationCheck
}