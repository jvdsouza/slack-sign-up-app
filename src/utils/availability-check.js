//TODO
//check location and time
//if at the location and at the time
//route to index
//otherwise route to apology pages

//Time and location
const MEETUP_API_KEY = process.env.GATSBY_MEETUP_API_KEY;
const check = (meetupUrl) => {
    fetch(`https://api.meetup.com/Melbourne-Code-Mentoring-Web-Development-Design/events?key=397a605695b1e216c74691c7a6611e&sign=true`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data["group"])
            return true
        })
        .catch(err => false);
}

const test = () => {
    return `hi`
    
}

export {
    check,
    test
}