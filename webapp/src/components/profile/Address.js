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
     address: '',
     country: '',
     country0:'', 
     region: '',
     region0:'',
     pincode:'',  
     address0: '',
     state0: '',
     city0:'',
     pincode0:'', 
     updateText : 'Update'    
    }
}
  
  async componentDidMount() {
    var borrower_id = window.localStorage.getItem("BID");
    let data = await ithours_client.getOne("borrower", {
        _id: borrower_id,
    });
    console.log("api data form address")
    console.log(data);
    this.state.address = data.apidata.Data.address;
    this.state.country = data.apidata.Data.state;
    this.state.region  = data.apidata.Data.city;
    this.state.pincode = data.apidata.Data.pincode;
    this.state.address0 = data.apidata.Data.currentadd;
    this.state.region0 =  data.apidata.Data.currentcity;
    this.state.country0 = data.apidata.Data.currentstate;
    this.state.pincode0 =  data.apidata.Data.currentpincode;
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
if(this.state.region == data.apidata.Data.city) {
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
if((this.state.address != data.apidata.Data.address)&&(this.state.country != data.apidata.Data.state)&&(this.state.region != data.apidata.Data.city)&&(this.state.pincode != data.apidata.Data.pincode))
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
     currentadd: this.state.address0,
     currentcity: this.state.region0,
     currentstate: this.state.country0,
     currentpincode: this.state.pincode0,
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
    this.setState({country0: this.state.country })
    this.setState({region0: this.state.region })
    this.setState({pincode0: this.state.pincode })
  } else {
    this.setState({address0: '' })
    this.setState({country0: '' })
    this.setState({region0: '' })
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
selectCountry0 (val) {
  this.setState({ country0: val });
}
selectRegion (val) {
  this.setState({ region: val });
}
selectRegion0 (val) {
  this.setState({ region0: val });
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
  this.state.country0 = e.target.value;
  this.setState({   });
};
handleCity0Change(e) {
  console.log(e);
  this.state.region0 = e.target.value;
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
          <Form>
           <ToastContainer/>
          <Form.Group className="col-md-12" controlId="formBasicEmail">
           <h4 className="text-left mt-1 mb-1" style={divStyle}>Permanent Address</h4>
          </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Address*</Form.Label>
                  <Form.Control type="first_name" placeholder="Address" maxlength="20" onChange={(e) => this.handleAddressChange(e)} value={this.state.address} />
              </Form.Group>
              <Form.Group  controlId="exampleForm.ControlSelect1">
                   <Form.Label>State*</Form.Label>
                   <Form.Group className="border p-2 w-100 bg-dark">
                  <CountryDropdown
                      className="border-0"
                      value={this.state.country}
                      onChange={(val) => this.selectCountry(val)} 
                     />
             </Form.Group>
                   
             </Form.Group>
            
              <Form.Group controlId="exampleForm.ControlSelect1">
                   <Form.Label>City*</Form.Label>
                <Form.Group className="border p-2 w-100 bg-dark" >
                     <RegionDropdown
                     country={this.state.country}
                     value={this.state.region}
                     onChange={(val) => this.selectRegion(val)} /> 
             </Form.Group>
                                 
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Pin Code*</Form.Label>
                  <Form.Control type="business_name"   placeholder="Pin Code" maxlength="6" onKeyUp={(e) => this.onlyNumeric(e)} onChange={(e) => this.handlePinCodeChange(e)} value={this.state.pincode} />
              </Form.Group>
              <Form.Group className="col-md-12" controlId="formBasicEmail">
                <h4 className="text-left mt-1 mb-1" style={divStyle}>Current Address</h4>
          </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Address*</Form.Label>
                  <Form.Control type="first_name"  placeholder="Address"  maxlength="20" onChange={(e) => this.handleAddress0Change(e)} value={this.state.address0} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                   <Form.Label>State*</Form.Label>
                   <Form.Group className="border p-2 w-100 bg-dark" >
                  <CountryDropdown
                      className="border-0"
                      value={this.state.country0}
                      onChange={(val) => this.selectCountry0(val)} 
                     />
             </Form.Group>                
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                   <Form.Label>City*</Form.Label>
                   <Form.Group className="border p-2 w-100 bg-dark" >
                     <RegionDropdown
                     country={this.state.country0}
                     value={this.state.region0}
                     onChange={(val) => this.selectRegion0(val)} /> 
             </Form.Group>              
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Pin Code*</Form.Label>
                  <Form.Control type="business_name"  maxlength="6" onKeyUp={(e) => this.onlyNumeric0(e)} placeholder="Pin Code" value={this.state.pincode0} onChange={(e) => this.handlePinCode0Change(e)} />
                </Form.Group>
              <Form.Group className="col-md-12">
          <Form.Check
            required
            onChange={(e)=> this.changeValue(e)}
            name="terms"
            label="Current address same as Permanent address"
            id="switch"
          />
        </Form.Group>
          <div className="form-submit">
               <Button className="cta-btn cta-blue" onClick={() => this.updateAdd()} >{this.state.updateText}</Button>
              </div>
          </Form>
      </div>
    );
   }
}

export default Address
