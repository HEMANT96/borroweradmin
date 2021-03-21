import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

//function Contact() {
class Contact extends Component {   
    

    constructor(props) {
        super(props);
        this.state = {
         firstName: '',
         lastName: '' ,
         updateText : 'Update'

        }
    }

    async componentDidMount() {
        var borrower_id = window.localStorage.getItem("BID");
        let data = await ithours_client.getOne("borrower", {
            _id: borrower_id,
        });
        console.log(data);
        this.state.firstName = data.apidata.Data.firstname;
        this.state.lastName = data.apidata.Data.lastname;
        this.setState({})
    }


    async updateCont() {
     this.state.updateText = 'Updating....';
    this.setState({})
    console.log(this.state);
    var borrower_id = window.localStorage.getItem("BID");
    var findQuery = {
        _id: borrower_id,
    };
    var borrower_id = window.localStorage.getItem("BID");
    let data = await ithours_client.getOne("borrower", {
        _id: borrower_id,
    });
   if((this.state.firstName == data.apidata.Data.firstname)&&(this.state.lastName == data.apidata.Data.lastname))
     {
        toast.dark("please update the all details.", {
            position:'bottom-right',
            autoClose:2000,
            hideProgressBar:true,
            });
           setTimeout(() => {
            this.state.updateText = 'Update';
            this.setState({});
           }, 4000);
           return;
      }
      if(this.state.firstName == data.apidata.Data.firstname){
        toast.dark("please update the firstname field.", {
          position:'bottom-right',
          autoClose:2000,
          hideProgressBar:true,
      });   
      }
      if(this.state.lastName == data.apidata.Data.lastname) {
      toast.dark("please update the lastname field.", {
        position:'bottom-right',
        autoClose:2000,
        hideProgressBar:true,
      });   
      }
  if((this.state.firstName != data.apidata.Data.firstname)&&(this.state.lastName != data.apidata.Data.lastname))
    {
        toast.dark("contact updated successfully", {
            position:'bottom-right',
            autoClose:3000,
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
    }
        
       setTimeout(() => {
        this.state.updateText = 'Update';
        this.setState({})
       }, 3000);
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
    
    render() {
    return (
        <div>
            <Form>
                <ToastContainer/>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                    <Form.Control type="first_name"  placeholder="FIRST NAME" onChange={(e) => this.handleFirstChange(e)} value={this.state.firstName} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                    <Form.Control type="last_name"  placeholder="LAST NAME" onChange={(e) => this.handleLastChange(e)} value={this.state.lastName} />
                </Form.Group>
                <div className="form-submit">
                    <Button className="cta-btn cta-blue" onClick={() => this.updateCont()}>
                        {this.state.updateText}
                    </Button>
                </div>
            </Form>
        </div>
      );
    }
}

export default Contact;
