import React from "react"
import 'tachyons';

import SEO from "./seo"
import SubmissionForm from "./submission-form"

const SignUp = ({meetupGreet}) => (
  <div className='Home'>
    <div className='wrapper mh6'>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className='mt0'>{meetupGreet}</h1>
      <p>Welcome to our meetup!</p>
      <p>Join our slack using the form below</p>
      <SubmissionForm/>
    </div>
  </div>
)

export default SignUp