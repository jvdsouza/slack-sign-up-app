import React from "react"
import {MEETUP_GREET, MEETUP_NAME} from "../../configure.js";
// import { Link } from "gatsby"
import './index.css';
import 'tachyons';

// import Layout from "../components/layout"
import SEO from "../components/seo"
import SubmissionForm from "../components/submission-form"
import Header from "../components/header";

const IndexPage = () => (
  <div className='Home'>
    <Header meetupName={MEETUP_NAME}/>
    <div className='wrapper mh6'>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1 className='mt0'>Hello {MEETUP_GREET}</h1>
      <p>Welcome to our meetup!</p>
      <p>Join our slack using the submission form below</p>
      <SubmissionForm/>
    </div>
  </div>
)

export default IndexPage
