import React, {Component} from 'react';
import {check, test} from '../utils/availability-check';
import {MEETUP_GREET, MEETUP_NAME, MEETUP_URL} from "../../configure";

//react components
import SignUp from './main-page';

export default class Routing extends Component {
    constructor() {
        super();
        this.state = {
            route: 'home'
        }
    }
    
    

    render() {
        return (
            <div>
                {this.state.route === 'home' ? 
                    <div>{check()}<SignUp meetupGreet={MEETUP_GREET}/></div> 
                    : 
                    <div>Apology</div>}
            </div>
        )
    }
}