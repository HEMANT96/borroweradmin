import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import Login from "./components/Login";
import Signupnext from "./components/Signupnext";
import SignupDoc from "./components/SgnupDocupload";
import SignupProfile  from "./components/SingupProfile";
import SignUp from "./components/Signup";
import Navbar from './components/Navbar';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import MyLoans from './components/MyLoan';
import ApplyLoans from './components/ApplyLoan';
import SignupProNext from "./components/SingupProfileNext";
import ViewMore from './components/viewMore';
import Welcome from './components/ApplyLoanWelcome';
import AbotMore from './components/AboutMore';
import AboutYrBussiness from './components/AboutYourBussiness';
import LetUSknowAboutBusniss from './components/LetusKnowAboutBussiness';
import SignuAddress from "./components/SingupProAddrss";
import LetUsknowMore from './components/LetusKnowMore';

var hist = createBrowserHistory()
function App() {
  return (<Router history={hist}>
    <div className="App">
      {/* <Navbar /> */}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/about-more' component={AbotMore}/>
            <Route path='/sign-up-next' component={Signupnext}/>
            <Route path='/sign-up-doc' component={SignupDoc}/>
            <Route path='/sign-up-addres' component={SignuAddress}/>
            <Route path='/sign-up-profile-next' component={SignupProNext}/>
            <Route path='/sign-up-profile' component={SignupProfile}/>
            <Route path='/about-yr-business' component={AboutYrBussiness}/>
            <Route path='/let-us-konw-busines' component={LetUSknowAboutBusniss}/>
            <Route path='/let-us-konw-more' component={LetUsknowMore}/>
            <Route path='/apply-lon-welcome' component={Welcome}/>
            <Route path='/view-more' component={ViewMore}/>          
            <Route path='/my-loan' component={MyLoans}/>
            <Route path='/apply-loan' component={ApplyLoans}/>
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;