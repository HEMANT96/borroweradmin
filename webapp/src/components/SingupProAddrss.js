import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from 'react-indian-state-region-selector';
import Slider from "./Slider";
import form_logo from '../public/images/credin-logo.png';
import pin from '../public/images/pin.png';
import state from '../public/images/state.png';
import address from '../public/images/address.png';
import city from '../public/images/cty.png';

import '../components/login-signup.css';
import '../components/cta-btn.css';
//import { useFormik } from "formik";
//import { Link } from "react-router-dom";
import { Link, Redirect, useHistory} from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
          education:'',
          meritalStatus:'',
          Workstatus:'',
          country:'',
          region:'',
          address:'',
          pincode:'',
          ResdnceType:'',
          LoginText: 'SIGNUP',
        },
        validate:(values) =>{
            const error = {};
            if (!values.country) {
                error.country = "Please select your country."
            }
            if (!values.region) {
                error.region = "Please select your region."
            }
            if (!values.pincode) {
                error.pincode = "Please select your pin code."
            }
            if (!values.address) {
                error.address = "Please select your address."
            }
            return error;
        },
        onSubmit:  ( values,
            {
              setSubmitting,
            }) => {
            apicall();
              
                setSubmitting(true);
       //alert(JSON.stringify(values, null, 2));
        },
      });
      const history = useHistory();

      const  apicall = async() => {

        formik.initialValues.LoginText = 'SIGNUPING...'


        var borrower_id = window.localStorage.getItem("BID");
        var findQuery = {
            _id: borrower_id,
        };

        var updateQuery = {
            address: formik.values.address,
            state:  formik.values.country,
            city:  formik.values.region,
            pincode: formik.values.pincode,
       }
       let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
       console.log(updatedRes);
       
        setTimeout(() => {
            history.push(`/sign-up-doc`);
         }, 1000); 
        /* 
          let datas = await ithours_client.get("User")
          console.log("check")
          console.log(datas);
          let test = datas.apidata.Data.map((e) => e.email); 
          console.log(test)
          console.log(formik.values.email); */
         // console.log(formik.values.user_name);
       /*    if(test.indexOf(formik.values.email) == -1){
            let data = await ithours_client.add("User", {
                email: formik.values.email,
                password: formik.values.password,
            });
            console.log(data);

                toast.dark("sign-up has been done successfully.", {
                    position:'bottom-right',
                    autoClose:5000,
                    hideProgressBar:true,
             }); 
             let bdata = await ithours_client.getOne("borrower", {
                email: formik.values.user_name,
            });
            window.localStorage.setItem("BID" , bdata.apidata.Data._id);
          */
            /*  setTimeout(() => {
                history.push(`/dashboard`);
             }, 1000);  */          
        /*    }
          else{
            toast.dark("Email exist already.", {
                position:'bottom-right',
                autoClose:5000,
                hideProgressBar:true,
            });   
          };     */          
           console.log("api data");
          //console.log(values.user_name);
       };
    return (
        <div className="account-wrap">
            <div className='row no-gutters'>
                <div className="col-lg-8">
                    <Slider />
                </div>
                <div className="col-lg-4">
                    <div className="form-wrap account-form">
                        <div className="account-form-logo">
                            <img src={form_logo} />
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                          <ToastContainer/>
                            <h3 className="account-form-title text-center">Address</h3>
                      <div style={{ width:'110%',  overflow:'hidden'}} className="form-group width1">
                       <img style={{width:"30px", height:"20px" }} src={state} alt="" />
                           <div style={{background:'black'}} >
                            <CountryDropdown
                                    className="width1"
                                    value={formik.values.country}
                                    onChange={(_ , e) => formik.setFieldValue('country',e.target.value)}
                              />
                             </div>
                              </div>
                                {formik.errors.country &&
                                   formik.touched.country && 
                                    <span style={{color:"red"}}>{formik.errors.country}</span>}
                           
                    <div style={{ width:'110%',  overflow:'hidden'}}  className="form-group">
                      <img style={{width:"25px", height:"20px" }} src={city} alt="" />
                        <div style={{ width:'110%',background:"black" }}> 
                          <RegionDropdown
                                className="width1"
                                country={formik.values.country}
                                value={formik.values.region}
                                onChange={(_ , e) => formik.setFieldValue('region',e.target.value)}
                                /> 
                           </div>
                            </div>
                                {formik.errors.region &&
                                   formik.touched.region && 
                                    <span style={{color:"red"}}>{formik.errors.region}</span>}
                           <div  style={{ width:'110%'}} className="form-group">
                                <img style={{width:"25px", height:"20px" }} src={address} alt="" />
                                <input type="text" maxLength="10" value={formik.values.address} onChange={(e) => formik.setFieldValue('address',e.target.value)} className="border border-0" placeholder="Enter Your Address" />
                            </div>
                                {formik.errors.address &&
                                   formik.touched.address && 
                                    <span style={{color:"red"}}>{formik.errors.address}</span>}
                             <div  style={{ width:'110%'}} className="form-group">
                                <img style={{width:"25px", height:"20px" }} src={pin} alt="" />
                                <input type="tel" maxLength="10" value={formik.values.pincode} onChange={(e) => formik.setFieldValue('pincode',e.target.value)} className="border border-0" placeholder="Enter Your Pin Code" />
                            </div>
                                {formik.errors.pincode &&
                                   formik.touched.pincode && 
                                    <span style={{color:"red"}}>{formik.errors.pincode}</span>}
                           {/*  <div className="form-group">
                                <img src={lock_icon} alt="" />
                                <input type="password" maxLength="20"  value={formik.values.confirmPassword} onChange={(e) => formik.setFieldValue('confirmPassword',e.target.value)} className="border border-0" placeholder="CONFIRM PASSWORD"/>
                            </div>
                            {formik.errors.confirmPassword &&
                                formik.touched.confirmPassword && 
                                <span style={{color:"red"}}>{formik.errors.confirmPassword}</span>}
 */}
                            <div style={{width:'110%'}} className="submit-btn">
                                <button  type="submit" className="cta-btn">{formik.initialValues.LoginText}</button>
                            </div>
                            <div className="author-form-note">
                                By creating an account you agree to our <a href="https://credin.shiksha/terms-and-conditions/">Terms of Service</a> and <a href="https://credin.shiksha/privacy-policy/">Privacy Policy</a>
                                <p>If you have already account <Link to="/">Log In</Link>.</p>
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        </div>  
    );
}
export default SignUp