import React, {Component} from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {MEETUP_GREET, MEETUP_NAME, MEETUP_URL} from "../../configure";

//react components
import SignUp from './main-page';
import {currentDateTime,
        timeCheck,
        dateCheck,
        locationCheck} from '../utils/availability-check';

// This component is designed to check the time, date and location of the user and whether they're
// in the correct location at the right time to allow them to sign up to the meetup's slack channel

export default () => {
    //query the meetup source plugin for date and time
    const data = useStaticQuery(
        graphql`
            query {
                meetupEvent {
                    local_time
                    local_date
                }
            }
        
        `
    )

    const now = currentDateTime().currentTime + '-' + currentDateTime().currentDate;
    
    return (
        <div>
            <div><SignUp meetupGreet={MEETUP_GREET}/>{now} - {data.meetupEvent.local_time}</div> 
        </div>
    )
}