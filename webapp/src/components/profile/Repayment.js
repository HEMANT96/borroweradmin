import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { CountryDropdown, RegionDropdown } from 'react-indian-state-region-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

const divStyle = {
  color: '#00d2ee',
};
class Address extends Component {

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
      amount:'',
      lastPaidEmi: '',
      disbursedamount: '',
      repaymentAmount: '',
      emiAmount:'',
      paymentRecycleDate:'',
      updateText: 'Update',
  }
}
  
async componentDidMount() {
  var borrower_id = window.localStorage.getItem("BID");
  let laons = await ithours_client.getOne("loan", {
      borrower: borrower_id,
  });

  console.log("repayment loan");
  console.log(laons.apidata.Data);
  this.state.paymentRecycleDate = laons.apidata.Data.tenurestartdate;
  this.state.amount = laons.apidata.Data.principalamount;
  this.state.emiAmount = laons.apidata.Data.totaldue;
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

async updateAdd() {
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
  if((this.state.address == data.apidata.Data.address)&&(this.state.country == data.apidata.Data.state)&&(this.state.city == data.apidata.Data.city)&&(this.state.pincode == data.apidata.Data.pincode))
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
if(this.state.address == data.apidata.Data.address) {
  toast.dark("address is mandatory field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.country == data.apidata.Data.state) {
toast.dark("state is mandatory field.", {
  position:'bottom-right',
  autoClose:2000,
  hideProgressBar:true,
});   
}
if(this.state.city == data.apidata.Data.city) {
  toast.dark("city is mandatory field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.pincode == data.apidata.Data.pincode) {
toast.dark("pincode is mandatory field.", {
  position:'bottom-right',
  autoClose:2000,
  hideProgressBar:true,
});   
}
if((this.state.address != data.apidata.Data.address)&&(this.state.state != data.apidata.Data.state)&&(this.state.city != data.apidata.Data.city)&&(this.state.pincode != data.apidata.Data.pincode))
{
  toast.dark("address updated successfully.", {
    position:'bottom-right',
    autoClose:3000,
    hideProgressBar:true,
});
var updateQuery = {
     address: this.state.address,
     state: this.state.country,
     city: this.state.region,
     pincode: this.state.pincode,
}
let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
console.log(updatedRes);
}
  setTimeout(() => {
   this.state.updateText = 'Update';
  this.setState({})
  }, 4000);
}
changeValue(e){
  var decider = document.getElementById('switch');
  if(decider.checked){
    this.setState({address0: this.state.address })
    this.setState({state0: this.state.country })
    this.setState({city0: this.state.region })
    this.setState({pincode0: this.state.pincode })
  } else {
    this.setState({address0: '' })
    this.setState({state0: '' })
    this.setState({city0: '' })
    this.setState({pincode0: '' })
  }
  /* */
}
onlyNumeric(e) {
  this.state.pincode = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyNumeric0(e) {
  this.state.pincode0 = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
handleAddressChange(e) {
  console.log(e);
  this.state.address = e.target.value;
  this.setState({   });
};
/* handleStateChange(e) {
  console.log(e);
  this.state.state = e.target.value;
  this.setState({   });
}; */
selectCountry (val) {
  this.setState({ country: val });
}

selectRegion (val) {
  this.setState({ region: val });
}
/* handleCityChange(e) {
  console.log(e);
  this.state.city = e.target.value;
  this.setState({   });
}; */
handlePinCodeChange(e) {
  console.log(e);
  this.state.pincode = e.target.value;
  this.setState({   });
};
handleAddress0Change(e) {
  console.log(e);
  this.state.address0 = e.target.value;
  this.setState({   });
};
handleState0Change(e) {
  console.log(e);
  this.state.state0 = e.target.value;
  this.setState({   });
};
handleCity0Change(e) {
  console.log(e);
  this.state.city0 = e.target.value;
  this.setState({   });
};
handlePinCode0Change(e) {
  console.log(e);
  this.state.pincode0 = e.target.value;
  this.setState({   });
};
   render(){
    const { country, region } = this.state;
    return (
      <div>
         <div className="mt-4">
             <div className=" mt-0 pt-0">
                <h3>Description:</h3>
                    </div>
              </div>
              <div className="mt-4">
                    <div className="box-content shadow mt-0 pt-3">
                        <div className="d-flex justify-content-between ">
                           <div>
                              <div className="text-primary">Repayment Cycle: {this.state.paymentRecycleDate}</div>
                                </div>
                          <div>
                        <div className="text-danger round">UNPAID</div>
                    </div>
                    </div>
                    <div className="d-flex ">
                    <div>
                    <div className="mt-3 p-1">Amount:</div>
                      <div className="p-1 mr-2">EMI Amount:</div>
                    </div>
                    <div>
                        <div  className="mt-3 p-1">{this.state.amount}</div>
                        <div className="p-1">{this.state.emiAmount}</div>
                    </div>
                    </div>
                </div>
           </div>
      </div>
    );
   }
}

export default Address
