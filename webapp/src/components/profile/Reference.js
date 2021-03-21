import React, {Component}  from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

const divStyle = {
  color: '#00d2ee',
};

class Reference extends Component {

  constructor(props) {
    super(props);
    this.state = {
     referencename: '',
     referencename0: '',
     referencenumber: '', 
     referencenumber0: '', 
     updateText : 'Update'       
    }
   }
    async  componentWillMount() {
      var borrower_id = window.localStorage.getItem("BID");
      let data = await ithours_client.getOne("borrower", {
          _id: borrower_id,
      });
      console.log(" refrence dataa");
      console.log(data);
      console.log(" refrence dataa");

      this.state.referencename = data.apidata.Data.referencename1;
      this.state.referencenumber = data.apidata.Data.referencenumber1;
      this.state.referencename0 = data.apidata.Data.referencename2;
      this.state.referencenumber0 = data.apidata.Data.referencenumber2;
      this.setState({})
      }
      async updateRef() {
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
        console.log(data.apidata.Data.address);
       if((this.state.referencename == data.apidata.Data.referencename)&&(this.state.referencenumber == data.apidata.Data.referencenumber))
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
          if(this.state.referencename == data.apidata.Data.referencename){
            toast.dark("please update the reference name field.", {
              position:'bottom-right',
              autoClose:2000,
              hideProgressBar:true,
          });   
          }
          if(this.state.referencenumber == data.apidata.Data.referencenumber) {
          toast.dark("please update the reference number field.", {
            position:'bottom-right',
            autoClose:2000,
            hideProgressBar:true,
          });   
          }
     if((this.state.referencename != data.apidata.Data.referencename)&&(this.state.referencenumber != data.apidata.Data.referencenumber))
       {
        this.state.updateText = 'Updating....';
        this.setState({})
        console.log(this.state);
        var borrower_id = window.localStorage.getItem("BID");
        var findQuery = {
            _id: borrower_id,
        };
        var updateQuery = {
          referencename1: this.state.referencename,
          referencenumber1: this.state.referencenumber,
          referencename2: this.state.referencename0,
          referencenumber2: this.state.referencenumber0
        }
        let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
        console.log(updatedRes);
        toast.dark("reference details updated successfully", {
          position:'bottom-right',
          autoClose:3000,
          hideProgressBar:true,
      });
     }  
       setTimeout(() => {
        this.state.updateText = 'Update';
        this.setState({})
       }, 5000);
      }
  
      onlyNumericandAlphabet(e){
        this.state.referencenumber = e.target.value.replace(/[^0-9]/g, "");
        this.setState({ });
      };
      onlyNumericandAlp(e){
        this.state.referencenumber0 = e.target.value.replace(/[^0-9]/g, "");
        this.setState({ });

      };
      handleActiveLoansChange(e) {
        console.log(e);
        this.state.numberOfActiveLoans = e.target.value;
        this.setState({   });
      };
      handleReferenceNameChange(e) {
        console.log(e);
        this.state.referencename = e.target.value;
        this.setState({   });
      };
      handleReferenceChange(e) {
        console.log(e);
        this.state.referencename0 = e.target.value;
        this.setState({   });
      };
      handleReferenceNumberChange(e) {
        console.log(e);
        this.state.referencenumber = e.target.value;
        this.setState({   });
      };
      handleReferenceNumChange(e) {
        console.log(e);
        this.state.referencenumber0 = e.target.value;
        this.setState({   });
      };
   render(){
    return (
      <div>
       <Form>
        <ToastContainer/>
          <Form.Group className="col-md-12" controlId="formBasicEmail">
                <h4 className="text-left  mt-1 mb-1" style={divStyle} >Reference 1 Details</h4>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Family member's reference name</Form.Label>
                  <Form.Control type="first_name"  placeholder="Family member's reference name" onChange={(e) => this.handleReferenceNameChange(e)}  value={this.state.referencename} />
              </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <Form.Label>Family member's reference number</Form.Label>
                  <Form.Control type="tel" maxLength="16" onKeyUp={(e) => this.onlyNumericandAlphabet(e)} placeholder="Family member's reference number" onChange={(e) => this.handleReferenceNumberChange(e)}  value={this.state.referencenumber} />
              </Form.Group>
         <Form.Group className="col-md-12" controlId="formBasicEmail">
          <h4 className="text-left  mt-1 mb-1" style={divStyle}>Reference 2 Details</h4>
          </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Friend's reference name</Form.Label>
                  <Form.Control type="first_name"  placeholder="Friend's reference name" onChange={(e) => this.handleReferenceChange(e)}  value={this.state.referencename0} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Friend's reference number</Form.Label>
                  <Form.Control type="tel" maxLength="16"  onKeyUp={(e) => this.onlyNumericandAlp(e)} placeholder="Friend's reference number" onChange={(e) => this.handleReferenceNumChange(e)}  value={this.state.referencenumber0} />
              </Form.Group>
              <div className="form-submit">
                 <Button className="cta-btn cta-blue" onClick={() => this.updateRef()} >{this.state.updateText}</Button>
              </div>
          </Form>       
      </div>
     );
   }
}

export default Reference
