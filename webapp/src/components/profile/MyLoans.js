import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import arrow_img from '../../public/images/rigtarrow.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

const divStyle = {
    color: '#00d2ee',
};
//function Contact() {
class MyLoans extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loanProduct: '',
            appId: '',
            loanStatus: '',
            loanReleaseDate: '',
            numberOfRepayment: '',
            loanAppDate: '',
            loan: '',
            disbursedDate: '',
            lastPaidEmi: '',
            disbursedamount: '',
            repaymentAmount: '',
            updateText: 'Update',
        }
    }

    async componentDidMount() {
        var borrower_id = window.localStorage.getItem("BID");
        let laons = await ithours_client.getOne("loan", {
            borrower: borrower_id,
        });

        console.log("api loan");
        console.log(laons.apidata.Data);
        this.state.loanProduct = laons.apidata.Data.loanproduct;
        this.state.appId = laons.apidata.Data.loanproductid;
        this.state.loanStatus = laons.apidata.Data.loanstatus;
        this.state.disbursedBy = laons.apidata.Data.distributedby;
        this.state.principleAmuont = laons.apidata.Data.principalamount;
        this.state.loanReleaseDate = laons.apidata.Data.loanreleasedate;
        this.state.numberOfRepayment = laons.apidata.Data.numberofrepayment;
        this.state.loanAppDate = laons.apidata.Data.created_date;
        this.state.loan = laons.apidata.Data.loan;
        this.state.repaymentAmount = laons.apidata.Data.lastrepaymentamount;
        this.state.disbursedDate = laons.apidata.Data.disbursed_date;
        this.state.lastPaidEmi = laons.apidata.Data.emienddate;
        this.state.disbursedamount = laons.apidata.Data.disbursedamount;
       
        this.setState({})
    }


    /*  async update() {
         toast.dark("Update successful", {
             position:'bottom-right',
             autoClose:5000,
             hideProgressBar:true,
         });
         this.state.updateText = 'Updating....';
         this.setState({})
         console.log(this.state);
         var borrower_id = window.localStorage.getItem("BID");
         var findQuery = {
             _id: borrower_id,
         };
         var updateQuery = {
             firstname:  this.state.firstName,
             lastname:  this.state.lastName,
         }
         let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
         console.log(updatedRes);
         this.state.updateText = 'Update';
         this.setState({})
     }
  */
    handleLastChange(e) {
        console.log(e);
        this.state.lastName = e.target.value;
        this.setState({});
        // this.props.onChange(e);
    };

    handleFirstChange(e) {
        console.log(e);
        this.state.firstName = e.target.value;
        this.setState({});
        // this.props.onChange(e);
    };

    render() {
        return (
            <div className="">
                <div className="mt-1">
                    <div className="box-content text-center mt-0 pt-3">
                        <h3>My Loan</h3>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="box-content mt-0 pt-3">
                        <div className="d-flex flex-direction-row">
                        <h3>{this.state.loanProduct}{" "}LOAN-{this.state.loan}</h3>
                        <div style={divStyle} className="border pt-2 px-2 ml-5 rounded-0"> Created</div>
                        </div>
                        <h6 style={divStyle}>EMI are pending</h6>
                        <div className="userinfo-box d-flex pt-2 flex-wrap align-items-center w-100">
                            <div className="user">
                                <div><b>Date Of Application-</b></div>
                                <div><b>Principal-</b></div>
                                <div><b>Last Paid EMI-</b></div>
                                <div><b>Outstanding Amount-</b></div>
                                <div><b>Next Due Date-</b></div>
                            </div>
                            <div className="user-cont">
                                <div>{this.state.loanAppDate}</div>
                                <div>{this.state.principleAmuont}</div>
                                <div>{this.state.lastPaidEmi}</div>
                                <div>{ this.state.disbursedamount }</div>
                                <div>{this.state.disbursedDate}</div>
                            </div>
                        </div>
                        <Link to="/view-more"> 

                        <div className="d-flex h5 mt-4 flex-direction-row">
                            <h5  className="mr-5 h5">View more details</h5>
                            <div className=" px-2 ml-5"><img className="size" src={arrow_img} alt="" /></div>     
                        </div>
                        </Link> 
                    </div>
                </div>
            </div>
        );
    }
}

export default MyLoans;
