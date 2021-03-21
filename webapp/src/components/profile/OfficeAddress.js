import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { CountryDropdown, RegionDropdown } from 'react-indian-state-region-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

class OfficeAddress extends Component {

    constructor(props) {
        super(props);
        this.state = {
         address: '',
         country: '', 
         region: '',
         pincode:'',
         officelandLine:'',
         officehrName:'',
         updateText : 'Update'       
        }
    }
    async componentDidMount() {
        var borrower_id = window.localStorage.getItem("BID");
        let data = await ithours_client.getOne("borrower", {
            _id: borrower_id,
        });
        console.log(data);
        this.state.address = data.apidata.Data.officeadd;
        this.state.country = data.apidata.Data.officestate;
        this.state.region = data.apidata.Data.officecity;
        this.state.pincode = data.apidata.Data.pincode;
        this.state.officelandLine = data.apidata.Data.officenumber;
        this.state.officehrName = data.apidata.Data.officehr
        this.setState({})
    }

    async updateOffAdd() {
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
      console.log(data.apidata.Data.phone);
      if((this.state.address == data.apidata.Data.address)&&(this.state.country == data.apidata.Data.state)&&(this.state.region == data.apidata.Data.city)&&(this.state.pincode == data.apidata.Data.pincode)&&(this.state.officelandLine == data.apidata.Data.officenumber))
      {
      toast.dark("please update the all details.", {
        position:'bottom-right',
        autoClose:3000,
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
    toast.dark("pin is mandatory field.", {
      position:'bottom-right',
      autoClose:2000,
      hideProgressBar:true,
  });   
  }
  if(this.state.officelandLine == data.apidata.Data.officenumber) {
    toast.dark("office landline is mandatory field.", {
      position:'bottom-right',
      autoClose:2000,
      hideProgressBar:true,
  });   
  }
  setTimeout(() => {
    this.state.updateText = 'Update';
    this.setState({})
  }, 2000);
  if((this.state.address != data.apidata.Data.address)&&(this.state.country != data.apidata.Data.state)&&(this.state.region != data.apidata.Data.city)&&(this.state.pincode != data.apidata.Data.pincode)&&(this.state.officelandLine != data.apidata.Data.officenumber))
       {
            toast.dark("office address updated successfully", {
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
              address: this.state.address,
              state: this.state.country,
              city: this.state.region,
              pincode: this.state.pincode,
              officenumber: this.state.officelandLine
          }
          let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
          console.log(updatedRes);
          this.state.updateText = 'Update';
          this.setState({})
        } 
        setTimeout(() => {
          this.state.updateText = 'Update';
          this.setState({})
        }, 2000);
      }
      handleAddressChange(e) {
        console.log(e);
        this.state.address = e.target.value;
        this.setState({   });
      };
    /*   handleStateChange(e) {
        console.log(e);
        this.state.state = e.target.value;
        this.setState({   });
      }; */

     /*  handleCityChange(e) {
        console.log(e);
        this.state.city = e.target.value;
        this.setState({   });
      }; */
      selectCountry (val) {
        this.setState({ country: val });
      }
      
      selectRegion (val) {
        this.setState({ region: val });
      }
      handlePinCodeChange(e) {
        console.log(e);
        this.state.pincode = e.target.value;
        this.setState({   });
      };
      handleLandlineChange(e) {
        console.log(e);
        this.state.officelandLine = e.target.value;
        this.setState({   });
      };
      handleHrNameChange(e){
        console.log(e);
        this.state.officehrName = e.target.value;
        this.setState({   });
      }
      onlyNumeric(e) {
        this.state.pincode = e.target.value.replace(/[^0-9]/g, "");
        this.setState({   });
      };
      onlyNumericLanline(e) {
        this.state.officelandLine  = e.target.value.replace(/[^0-9]/g, "");
        this.setState({   });
      };
    render(){
      const { country, region } = this.state;
        return (
            <div>
                <Form>
                  <ToastContainer/>
                    <Form.Group controlId="formBasicEmail">
                         <Form.Label>Address*</Form.Label>
                        <Form.Control type="first_name"  placeholder="FIRST NAME" onChange={(e) => this.handleAddressChange(e)} value={this.state.address} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>State*</Form.Label>
                         <Form.Group className="border p-2 w-100 bg-dark">
                  <CountryDropdown
                      className="border-0"
                      value={country}
                      onChange={(val) => this.selectCountry(val)} 
                     />
             </Form.Group>               
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>City*</Form.Label>
                         <Form.Group className="border p-2 w-100 bg-dark" >
                   <RegionDropdown
                      country={country}
                      value={region}
                      onChange={(val) => this.selectRegion(val)} /> 
                   </Form.Group>              
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                         <Form.Label>Pin Code*</Form.Label>
                        <Form.Control type="business_name" maxlength="6" placeholder="Pin Code" onKeyUp={(e) => this.onlyNumeric(e)} onChange={(e) => this.handlePinCodeChange(e)} value={this.state.pincode}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                         <Form.Label>Office Landline Number(<small>with</small> STD Code)*</Form.Label> 
                        <Form.Control type="last_name" maxlength="12" onKeyUp={(e) => this. onlyNumericLanline(e)} placeholder="Office Landline Number" onChange={(e) => this.handleLandlineChange(e)} value={this.state.officelandLine} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                         <Form.Label>Office Hr Name*</Form.Label>
                        <Form.Control type="business_name"  placeholder="Office Hr Name"onChange={(e) => this.handleHrNameChange(e)} value={this.state.officehrName} />
                    </Form.Group>
                    <div className="form-submit">
                       <Button className="cta-btn cta-blue" onClick={() => this.updateOffAdd()} >{this.state.updateText}</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default OfficeAddress
