import React, {Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
     uniqueNumber: '',
     mobileNumber: '',
     title:'',
     gender:'',
     email:'',
     dob:'',
     panCard:'',
     meritalStatus:'',
     eductionQualification:'',
     workingStatus:'',
     landLine:'',
     residenceType:'',
     rentCopy: null,
     updateText : 'Update'   
       }
    }
  
  componentWillMount() {
    this.apiCall();
  }
async apiCall(){
  var borrower_id = window.localStorage.getItem("BID");
  let data = await ithours_client.getOne("borrower", {
      _id: borrower_id,
  });
  console.log(data);
 /*  this.state.uniqueNumber = data.apidata.Data.unique;
  this.state.mobileNumber = data.apidata.Data.mobile;
  this.state.title = data.apidata.Data.title;
  this.state.gender = data.apidata.Data.gender;
  this.state.email = data.apidata.Data.email;
  this.state.dob = data.apidata.Data.DOB;
  this.state.panCard = data.apidata.Data.pancard;
  this.state.meritalStatus = data.apidata.Data.maritial;
  this.state.eductionQualification = data.apidata.Data.educational;
  this.state.workingStatus = data.apidata.Data.workingstatus;
  this.state.landLine = data.apidata.Data.phone;
  this.state.residenceType= data.apidata.Data.residencetype;
  this.state.rentCopy = data.apidata.Data.ownerelecticitybillfile; */
  this.setState({ uniqueNumber: data.apidata.Data.unique});
  this.setState({ mobileNumber: data.apidata.Data.mobile});
  this.setState({ title: data.apidata.Data.title});
  this.setState({ gender: data.apidata.Data.gender});

  this.setState({ email: data.apidata.Data.email});
  this.setState({ dob: data.apidata.Data.DOB});
  this.setState({ panCard: data.apidata.Data.pancard});
  this.setState({ meritalStatus: data.apidata.Data.maritial});
  this.setState({ landLine: data.apidata.Data.phone});
  this.setState({ eductionQualification: data.apidata.Data.educational});
  this.setState({ workingStatus: data.apidata.Data.workingstatus});
  this.setState({ residenceType: data.apidata.Data.residencetype});
}

  async updateProfile() {
  
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
    if((this.state.mobileNumber == data.apidata.Data.mobile)&&(this.state.title == data.apidata.Data.title)&&(this.state.email == data.apidata.Data.email)&&(this.state.dob == data.apidata.Data.DOB)&&(this.state.panCard == data.apidata.Data.pancard)&&(this.state.landLine == data.apidata.Data.phone))
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
 
  if(this.state.mobileNumber == data.apidata.Data.mobile) {
    toast.dark("mobile number is mandatory.", {
      position:'bottom-right',
      autoClose:2000,
      hideProgressBar:true,
  });   
}
if(this.state.title == data.apidata.Data.title) {
  toast.dark("title is mandatory.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}

if(this.state.email == data.apidata.Data.email) {
  toast.dark("email is mandatory.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.dob == data.apidata.Data.DOB) {
  toast.dark("DOB is mandatory.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.panCard == data.apidata.Data.pancard) {
  toast.dark("pan card is mandatory.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}

if(this.state.landLine == data.apidata.Data.phone) {
  toast.dark("landline is mandatory.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}

/* if(this.state.rentCopy == data.apidata.Data.ownerelecticitybillfile) {
  toast.dark("rent agreement is mandatory", {
    position:'bottom-right',
    autoClose:5000,
    hideProgressBar:true,
});   
} */
if((this.state.mobileNumber != data.apidata.Data.mobile)&&(this.state.title != data.apidata.Data.title)&&(this.state.email != data.apidata.Data.email)&&(this.state.dob != data.apidata.Data.DOB)&&(this.state.panCard != data.apidata.Data.pancard)&&(this.state.landLine != data.apidata.Data.phone))
{
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let regexp = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  if(!regEmail.test(this.state.email)){
      toast.dark("email address should be valid.", {
      position:'bottom-right',
      autoClose:3000,
      hideProgressBar:true,
      });
  }
  if(!regexp.test(this.state.panCard)){
    toast.dark("PAN number should be valid.", {
      position:'bottom-right',
      autoClose:3000,
      hideProgressBar:true,
      });
  }
  else{
   
  var updateQuery = {
    unique:  this.state.uniqueNumber,
    mobile:  this.state.mobileNumber,
    title: this.state.title,
    gender: this.state.gender,
    email: this.state.email,
    DOB: this.state.dob,
    pancard: this.state.panCard,
    maritial: this.state.meritalStatus,
    educational: this.state.eductionQualification,
    workingstatus: this.state.workingStatus,
    phone:  this.state.landLine,
    residencetype: this.state.residenceType,
    ownerelecticitybillfile: this.state.rentCopy,
}
    let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
    toast.dark("profile details has been updated successfully.", {
    position:'bottom-right',
    autoClose:3000,
    hideProgressBar:true,
    });
    console.log("profile")
    console.log(updatedRes);
  }   
}
setTimeout(() => {
  this.state.updateText = 'Update';
  this.setState({});
 }, 4000);
}
 onlyNumeric(e) {
  this.state.mobileNumber = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyPanNumeric(e) {
  this.state.panCard = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
onlyLandlineNumeric(e) {
  this.state.landLine = e.target.value.replace(/[^0-9]/g, "");
  this.setState({   });
};
handleUploadPanCardChange(e) {
 
  //this.setState({});
};

handleUniqueNumChange(e) {
  console.log(e);
  this.state.uniqueNumber = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};

handleMobileNumberChange(e) {
  console.log(e);
  this.state.mobileNumber = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
}; 
handleTitleChange(e) {
  console.log(e);
  this.state.title = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleGenderChange(e) {
  console.log(e);
  this.state.gender = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleEmailChange(e) {
  console.log(e);
  this.state.email = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleDOBChange(e) {
  console.log(e);
  this.state.dob = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handlePanCardChange(e) {
  console.log(e);
  this.state.panCard = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleMeritalStatusChange(e) {
  console.log(e);
  this.state.meritalStatus = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleEductionalQChange(e) {
  console.log(e);
  this.state.eductionQualification = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleWorkingStatusChange(e) {
  console.log(e);
  this.state.workingStatus = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
 handleLandLineChange(e) {
  console.log(e);
  this.state.landLine = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleResidenceTypeChange(e) {
  console.log(e);
  this.state.residenceType = e.target.value;
  this.setState({   });
  // this.props.onChange(e);
};
handleRentCopyChange(e) {
  let pan = e.target.value;
  console.log(pan);
  this.state.rentCopy = pan;
  this.setState({   });

};


    render(){
      return (
        <div>
            <Form> 
              <ToastContainer/>
            <Form.Group controlId="formBasicEmail">
                   <Form.Label>Unique Number</Form.Label>
                    <Form.Control type="first_name"  placeholder="Unique Number"  maxlength="16" onChange={(e) => this.handleUniqueNumChange(e)} disabled value={this.state.uniqueNumber}/>
                </Form.Group>
            <Form.Group controlId="formBasicEmail">
                   <Form.Label>Mobile Number*</Form.Label>
                    <Form.Control type="text" maxlength="10" onKeyUp={(e) => this.onlyNumeric(e)} placeholder="Mobile Number" onChange={(e) => this.handleMobileNumberChange(e)} value={this.state.mobileNumber} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                     <Form.Label>Title*</Form.Label>
                  <Form.Control as="select" onChange={(e) => this.handleTitleChange(e)} value={this.state.title}>
                    <option>Mr.</option>
                    <option>Miss.</option>
                    <option>Mrs.</option>
                  </Form.Control>                
                </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Gender</Form.Label>
                  <Form.Control as="select" onChange={(e) => this.handleGenderChange(e)}  value={this.state.gender}>
                    <option>Male</option>
                   <option>Female</option>
                  </Form.Control>
               </Form.Group>
                <Form.Group controlId="formBasicEmail">
                   <Form.Label>Email*</Form.Label>
                    <Form.Control type="first_name" maxlength="32" placeholder="Email" onChange={(e) => this.handleEmailChange(e)} value={this.state.email} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>DOB*</Form.Label>
                    <Form.Control type="date"  placeholder="DATE" onChange={(e) => this.handleDOBChange(e)} value={this.state.dob} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                     <Form.Label>Pan Card Number*</Form.Label>
                    <Form.Control type="tel"  placeholder="PAN CARD NUMBER"   maxlength="10" onChange={(e) => this.handlePanCardChange(e)} value={this.state.panCard} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                     <Form.Label>Merital Status</Form.Label>
                  <Form.Control as="select" onChange={(e) => this.handleMeritalStatusChange(e)} value={this.state.meritalStatus} >
                    <option>Unmarried</option>
                    <option>Married</option>
                  </Form.Control>                
                </Form.Group>
               
                <Form.Group controlId="exampleForm.ControlSelect1">
                     <Form.Label>Educational Qualification</Form.Label>
                  <Form.Control as="select" onChange={(e) => this.handleEductionalQChange(e)} value={this.state.eductionQualification}>
                    <option>10th</option>
                    <option>12th</option>
                  </Form.Control>                
                </Form.Group>
          
                <Form.Group controlId="exampleForm.ControlSelect1">
                     <Form.Label>Working Status</Form.Label>
                  <Form.Control as="select" onChange={(e) => this.handleWorkingStatusChange(e)} value={this.state.workingStatus}>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Control>                
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                     <Form.Label>Landline number*</Form.Label>
                    <Form.Control type="tel" placeholder="Landline Number" maxlength="12" onKeyUp={(e) => this.onlyLandlineNumeric(e)} onChange={(e) => this.handleLandLineChange(e)} value={this.state.landLine} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                     <Form.Label>Residence Type</Form.Label>
                  <Form.Control as="select" onChange={(e) => this.handleResidenceTypeChange(e)} value={this.state.residenceType}>
                    <option>Owned</option>
                    <option>Rented</option>
                    <option>Parented</option>
                    <option>Company provided</option>
                  </Form.Control>                
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                     <Form.Label>UPLOAD RENT AGREEMENT COPY </Form.Label>
                    <Form.Control type="file" onChange={(e) => this.handleRentCopyChange(e)} value={this.state.rentCopy} accept=".pdf,.doc,.jpeg,.png,.jpg" />
                </Form.Group>
                <div className="form-submit">
                    <Button className="cta-btn cta-blue" onClick={() => this.updateProfile()} >{this.state.updateText}</Button>
                </div>
            </Form>
        </div>
       );
    }
}

export default Profile
