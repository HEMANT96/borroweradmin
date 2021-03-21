import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

class OfficeDetails extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
     typeofProfission:'',
     employerName:'',
     designation:'',
     workWithCurrentEmployer:'',
     totalWorkExperience:'',
     modeOfIncome:'',
     updateText : 'Update',    
       }
    }

    async componentDidMount() {
      var borrower_id = window.localStorage.getItem("BID");
      let data = await ithours_client.getOne("borrower", {
          _id: borrower_id,
      });
      console.log(data);
      this.state.typeofProfission = data.apidata.Data.professiontype;
      this.state.employerName = data.apidata.Data.empname;
      this.state.designation = data.apidata.Data.designation;
      this.state.workWithCurrentEmployer = data.apidata.Data.currentemp;
      this.state.totalWorkExperience = data.apidata.Data.workexperience;
      this.state.modeOfIncome = data.apidata.Data.source;
      this.setState({})
  }
  async updateOffDet() {
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
   if((this.state.typeofProfission == data.apidata.Data.professiontype)&&(this.state.employerName == data.apidata.Data.empname)&&(this.state.designation == data.apidata.Data.designation)&&(this.state.workWithCurrentEmployer == data.apidata.Data.currentemp)&&(this.state.totalWorkExperience == data.apidata.Data.workexperience)&&(this.state.modeOfIncome == data.apidata.Data.source))
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
      if(this.state.typeofProfission == data.apidata.Data.professiontype){
        toast.dark("please update the type of profission field.", {
          position:'bottom-right',
          autoClose:2000,
          hideProgressBar:true,
      });   
      }
      if(this.state.employerName == data.apidata.Data.empname) {
      toast.dark("please update the employer name field.", {
        position:'bottom-right',
        autoClose:2000,
        hideProgressBar:true,
      });   
      }  if(this.state.designation == data.apidata.Data.designation){
        toast.dark("please update the designation field.", {
          position:'bottom-right',
          autoClose:2000,
          hideProgressBar:true,
      });   
      }
      if(this.state.workWithCurrentEmployer == data.apidata.Data.currentemp) {
      toast.dark("please update the work with current employer field.", {
        position:'bottom-right',
        autoClose:2000,
        hideProgressBar:true,
      });   
      }  if(this.state.totalWorkExperience == data.apidata.Data.workexperience){
        toast.dark("please update the total work experience field.", {
          position:'bottom-right',
          autoClose:2000,
          hideProgressBar:true,
      });   
      }
      if(this.state.modeOfIncome == data.apidata.Data.source) {
      toast.dark("please update the mode of income field.", {
        position:'bottom-right',
        autoClose:2000,
        hideProgressBar:true,
      });   
      }
      if((this.state.typeofProfission != data.apidata.Data.professiontype)&&(this.state.employerName != data.apidata.Data.empname)&&(this.state.designation != data.apidata.Data.designation)&&(this.state.workWithCurrentEmployer != data.apidata.Data.currentemp)&&(this.state.totalWorkExperience != data.apidata.Data.workexperience)&&(this.state.modeOfIncome != data.apidata.Data.source))
     {
      toast.dark("office details updated successfully", {
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
      professiontype: this.state.typeofProfission,
      empname: this.state.employerName,
      designation: this.state.designation,
      currentemp: this.state.workWithCurrentEmployer,
      workexperience: this.state.totalWorkExperience,
      source: this.state.modeOfIncome,
    }
    let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
    console.log(updatedRes);
     }
     
    setTimeout(() => {
      this.state.updateText = 'Update';
      this.setState({})
    }, 4000);
  }
  onlyNumeric(e) {
    this.state.workWithCurrentEmployer = e.target.value.replace(/[^0-9]/g, "");
    this.setState({   });
  };
  onlyTotalworkNumeric(e) {
    this.state.totalWorkExperience = e.target.value.replace(/[^0-9]/g, "");
    this.setState({   });
  };
  handleProfissionTypeChange(e) {
    console.log(e);
    this.state.typeofProfission = e.target.value;
    this.setState({   });
  };
  handleEmployerNameChange(e) {
    console.log(e);
    this.state.employerName = e.target.value;
    this.setState({   });
  };
  handleDesignationChange(e) {
    console.log(e);
    this.state.designation = e.target.value;
    this.setState({   });
  };
  handleCurrentEmpChange(e) {
    console.log(e);
    this.state.workWithCurrentEmployer = e.target.value;
    this.setState({   });
  };
  handleTotalworkExperinceChange(e) {
    console.log(e);
    this.state.totalWorkExperience = e.target.value;
    this.setState({   });
  };
  handleModeofInComeChange(e) {
    console.log(e);
    this.state.modeOfIncome = e.target.value;
    this.setState({   });
  };
    render(){
    return (
      <div>
        <Form>
         <ToastContainer/>
          <Form.Group controlId="exampleForm.ControlSelect1">
                   <Form.Label>Type of Profession</Form.Label>
                <Form.Control as="select" onChange={(e) => this.handleProfissionTypeChange(e)} value={this.state.typeofProfission}>
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                </Form.Control>                
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                   <Form.Label>Employer Name/Business Name</Form.Label>
                  <Form.Control type="first_name" maxlenght="18" placeholder="Employer Name/Business Name" onChange={(e) => this.handleEmployerNameChange(e)} value={this.state.employerName} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                 <Form.Label>Designation</Form.Label>
                  <Form.Control type="last_name"  placeholder="Designation" onChange={(e) => this.handleDesignationChange(e)} value={this.state.designation}/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Work With Current Employer(In Month)</Form.Label>
                  <Form.Control type="business_name"  onKeyUp={(e) => this.onlyNumeric(e)}  maxLength="4"  placeholder="Work With Current Employer(In Month)" onChange={(e) => this.handleCurrentEmpChange(e)} value={this.state.workWithCurrentEmployer} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Total Work Experience(In Month)</Form.Label>
                  <Form.Control type="business_name" onKeyUp={(e) => this.onlyTotalworkNumeric(e)} maxLength="4"   placeholder="Total Work Experience(In Month)" onChange={(e) => this.handleTotalworkExperinceChange(e)} value={this.state.totalWorkExperience} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                   <Form.Label>Mode Of Income</Form.Label>
                <Form.Control as="select" onChange={(e) => this.handleModeofInComeChange(e)} value={this.state.modeOfIncome}>
                  <option>Cash</option>
                  <option>Cheque</option>
                  <option>Bank Transfer</option>
                </Form.Control>                
              </Form.Group>
              <div className="form-submit">
                <Button className="cta-btn cta-blue" onClick={() => this.updateOffDet()} >{this.state.updateText}</Button>
              </div>
          </Form>
      </div>
     );
   }
}

export default OfficeDetails
