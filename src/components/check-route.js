import React, {Component} from 'react'
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
    
    // check = () => {
    //     return fetch(`https://api.meetup.com/Melbourne-Code-Mentoring-Web-Development-Design/events?key=269437024311785a26ae4a4d552f&sign=true`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             this.setState({route: 'apology'})
    //         });
    // }

    // componentDidMount() {
    //     this.check()
    // }

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