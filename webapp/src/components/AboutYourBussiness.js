import React, { useState, useEffect, Component } from 'react'
import { Accordion, Card } from 'react-bootstrap'
//import Address from './profile/Address'
import AboutyrBussiness from './profile/AboutYrBussiness';
//import Documents from './profile/Documents'
//import OfficeAddress from './profile/OfficeAddress'
//import OfficeDetails from './profile/OfficeDetails'
//import Profile from './profile/Profile'
//import Bank from './profile/Bank'
import {Link} from "react-router-dom";
//import Reference from './profile/Reference'
import logo from '../public/images/credin-logo.png';
import logo_white from '../public/images/credin-logo-white.png';
import home from '../public/images/home.png';
import product from '../public/images/pocketl.png';
import shiksha from '../public/images/shiksha.png';
import "../components/dashboard.css"
import "../components/sidebar.css"
import "../components/user-profile.css"
import "../components/sidebar-nav.css"
import "../components/header.css"
import "../components/search.css"
import "../components/header-notification.css"
import "../components/box-content.css"
import "../components/userinfo-box.css"
import "../components/titles.css"
import "../components/custom-progress-bar.css"
import "../components/custom-accordion.css"
import "../components/form.css"
import "../components/icon-box.css"
import "../components/timeline-list.css"
import "../components/sub-menu.css"
declare var ithours_client;

class ApplyLoan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            firstName: " ",
            image: "",
            lastName:" ",
            email:" ",
            activeAmount:" ",
            activeLoan:" "
        }
        this. handleToggle = this. handleToggle.bind(this);
    }
   componentWillMount() {
        this.callApi();
    }
   async callApi(){
    var borrower_id = window.localStorage.getItem("BID");
    let data = await ithours_client.getOne("borrower", {
        _id: borrower_id,
    });
    console.log(data)
    console.log("api data");
    console.log(data.apidata.Data);
    
    console.log(data);
     /* this.state.firstName = data.apidata.Data.firstname;
     console.log(this.state.firstName);
     this.state.lastName = data.apidata.Data.lastname;
     this.state.image =data.apidata.Data.borrowerphoto;
     this.state.email = data.apidata.Data.email;
     this.state.activeAmount = data.apidata.Data.activeamount;
     this.state.activeLoan = data.apidata.Data.activeloan; */
     this.setState({firstName: data.apidata.Data.firstname});
     this.setState({lastName: data.apidata.Data.lastname});
     this.setState({image: data.apidata.Data.borrowerphoto});
     this.setState({email: data.apidata.Data.email});
     this.setState({activeAmount: data.apidata.Data.activeamount});
     this.setState({activeLoan: data.apidata.Data.activeloan});

   }
     handleToggle(){
        this.setState((e) => ({ isActive: !e.isActive}));
        }; 
  /*   const [isActive, setActive] = useState("false");
    const [image, setImage] = useState("");
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [activeAmount, setActiveAmount] = useState(" ");
    const [activeLoan, setActiveLoan] = useState(" ");

   
     
    useEffect(() => {
       apicall();
      
    }, []);
 /*  const  gotologout = () => {
        const history = useHistory();
        history.push(`/dashboard`);
    }; */
 
        // console.log("test to hello");
        // console.log(data.apidata.Data.lastname);
       //  setlastName(data.apidata.Data.lastname);
        // console.log(data.apidata.Data.borrowerphoto);
        // setimage(data.apidata.Data.borrowerphoto);
       // setEmail(data.apidata.Data.email);
       //  setactiveAmount(data.apidata.Data.activeamount);
       //  setactiveLoan(data.apidata.Data.activeloan);
render(){
    return (
        <div className="dashboard">
            <div className="header-wrap">
                <div className="header-inner d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <div className="header-right d-flex align-items-center justify-content-end flex-grow-1">
                        
                        <div className="header-notification">
                            <a href="javascript:"><i className="fa fa-bell-o" aria-hidden="true"></i></a>
                            <ul className="sub-menu">
                                <li><a href="/">Menu 1</a></li>
                                <li><a href="/">Menu 2</a></li>
                                <li><a href="/">Menu 3</a></li>
                                <li><a href="/">Menu 4</a></li>
                            </ul>
                        </div>
                        <div className="logout">
                            <a href="javascript:;"><Link to="/"><i className="fa fa-sign-out" aria-hidden="true"></i></Link> </a>
                        </div>
                        <div className="menu-toggle">
                            <a href="javascript:;" onClick={this.handleToggle}><i className="fa fa-bars" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={this.state.isActive ? "sidebar d-flex flex-column" : "sidebar d-flex flex-column open"}>
                <div className="close-sidebar">
                    <a href="javascript:;" onClick={this.handleToggle}><i className="fa fa-times" aria-hidden="true"></i></a>
                </div>
                <div className="logo">
                    <a href="#"><img src={logo_white} alt="" /></a>
                </div>
                <div className="user-profile">
                    <div className="user-profile-wrap d-inline-flex flex-wrap align-items-center">
                        <div className="user-prof-img"><img src={this.state.image} alt="" /></div>
                        <div className="user-prof-text">
                            <div className="name width">{this.state.firstName}{" "}{this.state.lastName}</div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        <li><Link to="/dashboard" ><i className="fa fa-home" aria-hidden="true"></i>Dashboard</Link></li>
                        <li><Link to="/my-loan"><i className="fa fa-folder" aria-hidden="true"></i>My Loans</Link></li>
                        <li><Link to="/apply-loan" className="active"><i className="fa fa-pie-chart" aria-hidden="true"></i>Apply New Loan</Link></li>
                       <li><a href=""><i className="fa fa-calculator" aria-hidden="true"></i>Loan Calculator</a></li>
                        <li><a href=""><i className="fa fa-cog" aria-hidden="true"></i>Settings</a></li>
                     </ul>
                </div>
            </div>
            <div className="dashboard-wrap">
                <div className="dashboard-row d-flex flex-wrap">
                    <div className="dashboard-col">
                        <div className="box-content d-flex align-items-center h-100">
                            <div className="userinfo-box d-flex flex-wrap align-items-center w-100">
                                <div className="user-img">
                                    <img src={this.state.image} alt="" />
                                </div>
                                <div className="user-content">
                                    <h2>Welcome {this.state.firstName}</h2>
                                    <p>Now it had seen unable uneasy. Drawings can followed by improved out socialle not.</p>
                                    <div className="user-mail"><a href="mailto:swapnil.dreamwind@gmail.com">{this.state.email}</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-col">
                        <div className="box-content d-flex align-items-center h-100">
                            <div className="profile-status w-100">
                                <div className="title title-line">
                                    <h4>Profile Status</h4>
                                    <p>Compelete your profile now</p>
                                </div>
                                <div className="custom-progress-bar d-flex align-items-end">
                                    <div className="progress-bar-wrap flex-grow-1">
                                        <span style={{width: "25%"}}></span>
                                    </div>
                                    <div className="progress-num">25%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-row d-flex flex-wrap dashboard-row-reverse">
                    <div className="dashboard-col">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="icon-box">
                                    <div className="icon-wrap"><i className="fa fa-clone" aria-hidden="true"></i></div>
                                    <h4>{this.state.activeAmount}</h4>
                                    <p>Amount</p>
                                    <div className="icon-box-link">
                                        <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="icon-box box-green">
                                    <div className="icon-wrap"><i className="fa fa-download" aria-hidden="true"></i></div>
                                    <h4>{this.state.activeLoan}</h4>
                                    <p>Loan</p>
                                    <div className="icon-box-link">
                                        <a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="title title-line">
                                <h4>Status</h4>
                                <p>Requests Approval Status</p>
                            </div>
                            <div className="timeline-list">
                                <ul>
                                    <li className="completed">
                                        <i className="fa fa-check" aria-hidden="true"></i>
                                        <div className="title">
                                            <h4>Awaiting Approval</h4>
                                            <p>4 Requests</p>
                                        </div>
                                    </li>
                                    <li className="pending">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <div className="title">
                                            <h4>Pending Action</h4>
                                            <p>31 Requests</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-col color1 rounded">
                        <AboutyrBussiness/>
                       {/*  <div className="custom-accordion">
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <i className="fa fa-pie-chart text-dark" aria-hidden="true"></i>                                    <div className="title title-line">
                                        <h4>Apply Loan Details</h4>
                                    </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="form-wrap form-cols"><ApplyLoans/></div>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                           </Accordion>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
     );
   }
}
export default ApplyLoan
