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

    check = () => {

        return true
    }

    routeChange = () => {
        if (this.check()) {
            this.setState({route: 'home'})
        } else {
            this.setState({route: 'apology'})
        }
    }

    componentDidMount() {
        this.routeChange()
    }

    render() {
        return (
            <div>
                {this.state.route === 'home' ? <SignUp meetupGreet={MEETUP_GREET}/> : <div>fail</div>}
            </div>
        )
    }
}