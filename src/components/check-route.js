import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {MEETUP_GREET, MEETUP_NAME, MEETUP_URL} from "../../configure";

//react components
import SignUp from './main-page';
import Apology from './apology';
import {currentDateTime,
        timeCheck,
        dateCheck,
        locationCheck} from '../utils/availability-check';
import {
        timeConvert,
        dateConvert,
        msToHours} from '../utils/converters';

// This component is designed to check the time, date and location of the user and whether they're
// in the correct location at the right time to allow them to sign up to the meetup's slack channel

const Routing = () => {
    //query the meetup source plugin for date and time
    const data = useStaticQuery(
        graphql`
            query {
                meetupEvent {
                    local_time
                    local_date
                    duration
                    venue {
                        lat
                        lon
                    }
                }
            }
        
        `
    )

    //check if the user is accessing the app at the correct date
    const correctDate = dateCheck(dateConvert(data.meetupEvent.local_date),
                                  currentDateTime().currentDate);
    //check if the user is accessing the app at a valid time
    const correctTime = timeCheck(timeConvert(data.meetupEvent.local_time),
                                  msToHours(data.meetupEvent.duration),
                                  currentDateTime().currentTime);
    //check if the user is accessing the app while in a valid location
    //TODO
    const correctLocation = false;

    const grantAccess = correctDate && correctTime && correctLocation;

    return grantAccess?(
        <div>
            <div><SignUp meetupGreet={MEETUP_GREET}/> {correctDate + '-' + correctTime}- {data.meetupEvent.local_time}</div> 
        </div>
    )
    :
    (
        <div>
            <Apology/>
        </div>
    )
}

export default Routing;