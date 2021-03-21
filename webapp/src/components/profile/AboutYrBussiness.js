import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Form ,FormControl } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

//function Contact() {
class Abut extends Component {   
    constructor(props) {
        super(props);
        this.state = {
         applyLoanDetails: '',
         date: '' ,
         updateText : 'Upload Additional Documents'
        }
    }

   /*  async componentDidMount() {
        var borrower_id = window.localStorage.getItem("BID");
        let data = await ithours_client.getOne("borrower", {
            _id: borrower_id,
        });
        console.log(data);
        this.state.firstName = data.apidata.Data.firstname;
        this.state.lastName = data.apidata.Data.lastname;
        this.setState({})
    } */


     async update() {
        this.state.updateText = 'Updating....';
        this.setState({})
        console.log(this.state);
        var borrower_id = window.localStorage.getItem("BID");
        var findQuery = {
            _id: borrower_id,
        };
        var borrower_id = window.localStorage.getItem("BID");
        let data = await ithours_client.get("loan", {
            _id: borrower_id,
        });
   /*     if(true)
        {
        toast.dark("please fill the all mandatory details.", {
          position:'bottom-right',
          autoClose:2000,
          hideProgressBar:true,
          });
         setTimeout(() => {
          this.state.updateText = 'Update';
          this.setState({});
         }, 4000);
         return;
    } */
        toast.dark("data has been submitted successfully", {
            position:'bottom-right',
            autoClose:3000,
            hideProgressBar:true,
        });
        this.state.updateText = 'Updating....';
        this.setState({});
        console.log(this.state);
        var borrower_id = window.localStorage.getItem("BID");
        var findQuery = {
            _id: borrower_id,
        };
        var updateQuery = {
            applyLoanDetails:  this.state.applyLoanDetails,
            date:  this.state.date,
        }
        let updatedRes = await ithours_client.getOne("loan", findQuery, updateQuery);
        console.log("update apply loan");
        console.log(updatedRes);
        this.state.updateText = 'Update';
        this.setState({})
    } 

    handleLastChange(e) {
        console.log(e);
        this.state.lastName = e.target.value;
        this.setState({   });
        // this.props.onChange(e);
    };

    handleFirstChange(e) {
        console.log(e);
        this.state.firstName = e.target.value;
        this.setState({   });
        // this.props.onChange(e);
    };
    handleLastChange(e) {
        console.log(e);
        this.state.lastName = e.target.value;
        this.setState({   });
        // this.props.onChange(e);
    };

    handleFirstChange(e) {
        console.log(e);
        this.state.firstName = e.target.value;
        this.setState({   });
        // this.props.onChange(e);
    };  handleLastChange(e) {
        console.log(e);
        this.state.lastName = e.target.value;
        this.setState({   });
        // this.props.onChange(e);
    };

    handleFirstChange(e) {
        console.log(e);
        this.state.firstName = e.target.value;
        this.setState({   });
        // this.props.onChange(e);
    };
    
    render() {
    return (
        <div>
            <Form>
                <ToastContainer/>
                <Form.Group controlId="formBasicEmail">
                   <Form.Label>Loan Amount</Form.Label>
                  <Form.Control type="text" placeholder="Loan Amount" maxlength="20" onChange={(e) => this.handleAddressChange(e)} value={this.state.address} />
              </Form.Group>
               {/*  <Form.Group className="w-100" controlId="formBasicEmail">
                  <Form.Label>Select Tenure*</Form.Label>
                  <Form.Control
                        as="select"
                        onChange={e => {
                            console.log("e.target.value", e.target.value);
                        }}
                        >
                        <option value="DICTUM">10 K (Fixed)</option>
                        <option value="CONSTANCY">20 k (Fixed)</option>
                        <option value="COMPLEMENT">30 K (Fixed)</option>
                   </Form.Control>                 
                </Form.Group> */}
                <Form.Group controlId="formBasicEmail">
                   <Form.Label>Tenure</Form.Label>
                  <Form.Control type="text" className="red" placeholder="Tenure"  maxlength="20" onChange={(e) => this.handleAddressChange(e)} value={this.state.address} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Repayment Cycle</Form.Label>
                  <Form.Control type="text" placeholder="Repayment Cycle" maxlength="20" onChange={(e) => this.handleAddressChange(e)} value={this.state.address} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>EMI Amount</Form.Label>
                  <Form.Control type="text" placeholder="EMI Amount" maxlength="20" onChange={(e) => this.handleAddressChange(e)} value={this.state.address} />
              </Form.Group>
                <div className="form-submit mt-5">
                    <Link to="/let-us-konw-busines">
                       <Button className="cta-btn cta-blue w-100" >
                         {this.state.updateText}
                       </Button>
                    </Link>
                </div>
            </Form>
        </div>
      );
    }
}

export default Abut;
