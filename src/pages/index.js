import React from "react"
import {MEETUP_GREET, MEETUP_NAME, MEETUP_URL} from "../../configure";

//modules
import './index.css';
import 'tachyons';

//react components
import SignUp from '../components/main-page';
import Header from "../components/header";
import Routing from '../components/check-route';
import Apology from '../components/apology';

const IndexPage = () => (
      <div className='Home'>
        <Header siteTitle={MEETUP_NAME}/>
        <Routing/>
      </div>
)

export default IndexPage
