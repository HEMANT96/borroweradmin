import React from 'react';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

class Documents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uploadPanCard: '',
      uploadAdharCardFront: '',
      uploadAdharCardBack: '',
      latestElectricityBill: '',
      selfPhoto: '',
      updateText: 'Update'
    }
  }
  async componentDidMount() {
    var borrower_id = window.localStorage.getItem("BID");
    let data = await ithours_client.getOne("borrower", {
      _id: borrower_id,
    });
    console.log(data);
    /* this.setState({uploadPanCard: data.apidata.Data.pandocumentfiles[0]});
    this.setState({uploadAdharCardFront: data.apidata.Data.addharfrontfiles});
    this.setState({uploadAdharCardBack: data.apidata.Data.addharbackfiles});
    this.setState({latestElectricityBill: data.apidata.Data.electricitybillFiles});
    this.setState({selfPhoto: data.apidata.Data.photoinsidefiles}); */
    console.log(this.state.uploadPanCard);
    console.log(this.state.uploadAdharCardFront);
    console.log(this.state.uploadAdharCardBack);
    console.log(this.state.latestElectricityBill);
    
    console.log("self Photo");
    console.log(this.state.latestElectricityBill);
  }
  async updateDoc() {
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
    if((this.state.uploadPanCard == data.apidata.Data.pandocumentfiles[0])&&(this.state.uploadAdharCardFront == data.apidata.Data.addharfrontfiles)&&(this.state.uploadAdharCardFront == data.apidata.Data.addharfrontfiles))
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
if(this.state.uploadPanCard == data.apidata.Data.pandocumentfiles[0]) {
  toast.dark("pan card is mandatory field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.uploadAdharCardFront == data.apidata.Data.addharfrontfiles) {
toast.dark("adhar card front is mandatory field.", {
  position:'bottom-right',
  autoClose:2000,
  hideProgressBar:true,
});   
}
if(this.state.uploadAdharCardBack == data.apidata.Data.addharbackfiles) {
  toast.dark("adhar card back is mandatory field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if(this.state.latestElectricityBill == data.apidata.Data.electricitybillFiles) {
toast.dark("latest electricity bill is mandatory field.", {
  position:'bottom-right',
  autoClose:2000,
  hideProgressBar:true,
});   
}
if(this.state.selfPhoto == data.apidata.Data.photoinsidefiles) {
  toast.dark("address is mandatory field.", {
    position:'bottom-right',
    autoClose:2000,
    hideProgressBar:true,
});   
}
if((this.state.uploadPanCard != data.apidata.Data.pandocumentfiles[0])&&(this.state.uploadAdharCardFront != data.apidata.Data.addharfrontfiles)&&(this.state.uploadAdharCardFront != data.apidata.Data.addharfrontfiles))
{
  toast.dark("document updated successfully.", {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: true,
  });
  this.state.updateText = 'Updating....';
  //this.setState({})
  var borrower_id = window.localStorage.getItem("BID");
  var findQuery = {
    _id: borrower_id,
  };
  var updateQuery = {
    pandocumentfiles: this.state.uploadPanCard,
    addharfrontfiles: this.state.uploadAdharCardFront,
    addharbackfiles: this.state.uploadAdharCardBack,
    electricitybillFiles: this.state.latestElectricityBill,
    photoinsidefiles: this.state.selfPhoto,
  }
  let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
  console.log(updatedRes);
} 
setTimeout(() => {
  this.state.updateText = 'Update';
    this.setState({})
}, 2000);
  }
  handleUploadPanCardChange(e) {
    let pan = e.target.value;
    console.log(pan);
    this.state.uploadPanCard = pan;
    //this.setState({});
  };
  handleAddraFrontChange(e) {
    let front = e.target.value;
    console.log(front);
    this.state.uploadAdharCardFront = front;
    //this.setState({});
  };
  handleAdharBackChange(e) {
    let Change = e.target.value;
    console.log(Change);
    this.state.uploadAdharCardBack = Change;
    //this.setState({});
  };
  handleElectricityChange(e) {
    let Bill = e.target.value;
    console.log(Bill);
    this.state.latestElectricityBill = Bill;
   // this.setState({});
  };
  handleselftPhotoChange(e) {
    let Photo = e.target.value;
    console.log(Photo);
    this.state.selfPhoto = Photo;
    //this.setState({   });
  };
  render() {
    return (
      <div>
        <Form>
          <ToastContainer />
          <Form.Group className="col-md-12" controlId="formBasicEmail">
            <Form.Label>UPLOAD PANCARD*</Form.Label>
            <Form.Control type="file" onChange={(e) => this.handleUploadPanCardChange(e)}  accept=".pdf,.doc,.jpeg,.png,.jpg"/>
          </Form.Group>
          <Form.Group className="col-md-12" controlId="formBasicEmail">
            <Form.Label>UPLOAD AADHAR FRONT SIDE*</Form.Label>
            <Form.Control type="file" onChange={(e) => this.handleAddraFrontChange(e)}  accept=".pdf,.doc,.jpeg,.png,.jpg"/>
          </Form.Group>
          <Form.Group className="col-md-12" controlId="formBasicEmail">
            <Form.Label>UPLOAD AADHAR BACK SIDE*</Form.Label>
            <Form.Control type="file" onChange={(e) => this.handleAdharBackChange(e)} accept=".pdf,.doc,.jpeg,.png,.jpg"/>
          </Form.Group>
          <Form.Group className="col-md-12" controlId="formBasicEmail">
            <Form.Label>LATEST ELECTRICITY BILL*</Form.Label>
            <Form.Control type="file" onChange={(e) => this.handleElectricityChange(e)}  accept=".pdf,.doc,.jpeg,.png,.jpg" />
          </Form.Group>
          <Form.Group  className="col-md-12" controlId="formBasicEmail">
            <Form.Label>SELF PHOTO*</Form.Label>
            <Form.Control type="file" onChange={(e) => this.handleselftPhotoChange(e)}  accept=".pdf,.doc,.jpeg,.png,.jpg" />
          </Form.Group>
          {/* <Form.Group controlId="formBasicEmail">
                   
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="file"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="file"/>
                </Form.Group>   */}
          <div className="form-submit">
            <Button className="cta-btn cta-blue" onClick={() => this.updateDoc()} >{this.state.updateText}</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default Documents
