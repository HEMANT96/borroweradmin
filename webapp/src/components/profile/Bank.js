import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

class Bank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfActiveLoans:'',
      totalMonthlyActiveEMI: '',
      monthlyIncome:'',
      bankName: '',
      bankAccountNumber:'',
      confirmBankAccountNumber:'',
      ifscCode:'',
      updateText : 'Update',    
    }
}
async componentDidMount() {
  var borrower_id = window.localStorage.getItem("BID");
  let data = await ithours_client.getOne("borrower", {
      _id: borrower_id,
  });
  console.log(data);
  this.state.numberOfActiveLoans = data.apidata.Data.activeloan;
  this.state.totalMonthlyActiveEMI = data.apidata.Data.activeamount;
  this.state.monthlyIncome = data.apidata.Data.monthlyincome;
  this.state.bankName = data.apidata.Data.bankname;
  this.state.bankAccountNumber = data.apidata.Data.bankaccount;
  this.state.confirmBankAccountNumber = data.apidata.Data.bankaccount;
  this.state.ifscCode = data.apidata.Data.ifscode;
  this.setState({})
}
async updateBank() {
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
  if((this.state.numberOfActiveLoans == data.apidata.Data.activeloan)&&(this.state.totalMonthlyActiveEMI == data.apidata.Data.activeamount)&&(this.state.monthlyIncome == data.apidata.Data.monthlyincome)&&(this.state.bankName == data.apidata.Data.bankname)&&(this.state.bankAccountNumber == data.apidata.Data.bankaccount)&&(this.state.ifscCode == data.apidata.Data.ifscode))
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
if(this.state.numberOfActiveLoans == data.apidata.Data.activeloan) {
  toast.dark("please update number of active loans field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.totalMonthlyActiveEMI == data.apidata.Data.activeamount) {
toast.dark("please update total monthly active EMI field.", {
  position:'bottom-right',
  autoClose:2000,
  hideProgressBar:true,
});   
}
if(this.state.monthlyIncome == data.apidata.Data.monthlyincome) {
  toast.dark("please update monthly income field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.bankName == data.apidata.Data.bankname) {
toast.dark("please update bank name field.", {
  position:'bottom-right',
  autoClose:2000,
  hideProgressBar:true,
});   
}
if(this.state.bankAccountNumber == data.apidata.Data.bankaccount) {
  toast.dark("please update bank account number field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.ifscCode == data.apidata.Data.ifscode) {
toast.dark("please update IFSC code field.", {
  position:'bottom-right',
  autoClose:2000,
  hideProgressBar:true,
});   
}
  if(this.state.bankAccountNumber == this.state.confirmBankAccountNumber){
        toast.dark("bank details updated successfully.", {
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
        activeloan: this.state.numberOfActiveLoans,
        activeamount: this.state.totalMonthlyActiveEMI,
        monthlyincome: this.state.monthlyIncome,
        bankname: this.state.bankName ,
        bankaccount: this.state.bankAccountNumber,
        ifscode: this.state.ifscCode,
      }
      let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
      console.log(updatedRes);
     setTimeout(() => {
      this.state.updateText = 'Update';
      this.setState({})
     }, 3000);
  }else{
    toast.dark("account and confirm account number does not matched.", {
      position:'bottom-right',
      autoClose:5000,
      hideProgressBar:true,
  });
  }
 
}
onlyNumericLoanActive(e) {
  this.state.numberOfActiveLoans = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyTotalwork(e) {
  this.state.totalMonthlyActiveEMI =  e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyNumeric(e) {
  this.state.monthlyIncome = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyNumericAccountNo(e) {
  this.state.bankAccountNumber = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyNumericAccountConfirm(e) {
  this.state.confirmBankAccountNumber = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyNumericandAlphabet(e){
  this.state.ifscCode = e.target.value.replace(/[^0-9A-Za-z]/g, "");
  this.setState({   });
};
handleActiveLoansChange(e) {
  console.log(e);
  this.state.numberOfActiveLoans = e.target.value;
  this.setState({   });
};
handleTotalMonthalyIncomeChange(e) {
  console.log(e);
  this.state.totalMonthlyActiveEMI = e.target.value;
  this.setState({   });
};
handleMonthlyIncomeChange(e) {
  console.log(e);
  this.state.monthlyIncome = e.target.value;
  this.setState({   });
};
handleBankNameChange(e) {
  console.log(e);
  this.state.bankName = e.target.value;
  this.setState({   });
};
handleBankAccountNumberChange(e) {
  console.log(e);
  this.state.bankAccountNumber = e.target.value;
  this.setState({   });
};
handleConfirmBankAccountNumberChange(e){
  console.log(e);
  this.state.confirmBankAccountNumber = e.target.value;
  this.setState({   });
}
handleIfscCodeChange(e) {
  console.log(e);
  this.state.ifscCode = e.target.value;
  this.setState({   });
};

   render(){
    return (
      <div>
        <Form>
          <ToastContainer/>
              <Form.Group controlId="exampleForm.ControlSelect1">
               <Form.Label>Number Of Active Loans</Form.Label>
                <Form.Control type="tel" placeholder=" Please enter active loans " onKeyUp={(e) => this.onlyNumericLoanActive(e)} maxlength="4"  onChange={(e) => this.handleActiveLoansChange(e)} value={this.state.numberOfActiveLoans}>
                </Form.Control>                
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                   <Form.Label>Total Monthly Active EMI</Form.Label>
                <Form.Control type="tel" placeholder=" Please enter total monthly active EMI" onKeyUp={(e) => this.onlyTotalwork(e)} onChange={(e) => this.handleTotalMonthalyIncomeChange(e)} maxlength="4" vlaue={this.state.totalMonthlyActiveEMI}>
                </Form.Control>                
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Monthly Income</Form.Label>
                  <Form.Control type="business_name" maxlength="8" onKeyUp={(e) => this.onlyNumeric(e)} placeholder="Monthly Income" onChange={(e) => this.handleMonthlyIncomeChange(e)} value={this.state.monthlyIncome} />
              </Form.Group>
               <Form.Group controlId="formBasicEmail">
               <Form.Label>Bank Name</Form.Label>
                 <Form.Control as="select" onChange={(e) => this.handleBankNameChange(e)} value={this.state.bankName}>
                  <option>ICICI Bank Ltd</option>
                  <option>State Bank Of India</option>
                  <option>Bank of Badhodhra</option>
                  <option>Allahbad Bank</option>
                  <option>Punjab National Bank</option>
                  <option>Axis Bank</option>
                  <option>Yes Bank</option>
                  <option>HDFC Bank</option>
                 </Form.Control>                  
               </Form.Group>
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>Bank Account Number</Form.Label>
                  <Form.Control type="business_name" maxlength="18" onKeyUp={(e) => this.onlyNumericAccountNo(e)} placeholder="Bank Account Number" onChange={(e) => this.handleBankAccountNumberChange(e)} value={this.state.bankAccountNumber} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Confirm Bank Account Number</Form.Label>
                  <Form.Control type="text" maxlength="18" onKeyUp={(e) => this.onlyNumericAccountConfirm(e)} placeholder="Bank Account Number" onChange={(e) => this.handleConfirmBankAccountNumberChange(e)}  value={this.state.confirmBankAccountNumber} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>IFSC Code</Form.Label>
                  <Form.Control type="text" maxlength="16" onKeyUp={(e) => this.onlyNumericandAlphabet(e)} placeholder="IFSC CODE" onChange={(e) => this.handleIfscCodeChange(e)} value={this.state.ifscCode} />
              </Form.Group>   
           <div className="form-submit">
                <Button className="cta-btn cta-blue" onClick={() => this.updateBank()} >{this.state.updateText}</Button>
              </div>
          </Form>
      </div>
     );
   }
}
export default Bank;
