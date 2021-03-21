import React, { Component } from "react";
import Slider from "./Slider";
import form_logo from '../public/images/credin-logo.png';
import gender from '../public/images/gender.png';
import pancard from '../public/images/pan.png';
import date from '../public/images/date.png';
import landline from '../public/images/landline.png';
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
          pan:'',
          gender:'',
          dob:'',
          landline:'',
          LoginText: 'SIGNUP',

        },
        validate:(values) =>{
            const error = {};
         /*    if (!values.otp) {
                error.otp = "Please enter email."
            } */
            if (!values.pan) {
                error.pan = "Please enter your pan number."
            }
            if (!values.gender) {
                error.gender = "Please enter your gender."
            }
            if (!values.dob) {
                error.dob = "Please enter your date of birth."
            }
            if (!values.landline) {
                error.landline = "Please enter your landline number."
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
        gender: formik.values.gender,
        DOB: formik.values.dob,
        pancard: formik.values.pan,
        phone: formik.values.landline,
    }
    let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
    console.log("updated data")
    console.log(updatedRes)
        setTimeout(() => {
            history.push(`/sign-up-profile-next`);
         }, 1000); 
        /* 
          let datas = await ithours_client.get("User")
          console.log("check")
          console.log(datas);
          let test = datas.apidata.Data.map((e) => e.email); 
          console.log(test)
          console.log(formik.values.email); */
         // console.log(formik.values.user_name);
       /*    if(test.indexOf(formik.val  email: '',
          confirmPassword: '',
          password: '',
          mobile: '',
          pan:'',
          gender:'',
          dob:'',
          landline:'',
          LoginText: 'SIGNUP',ues.email) == -1){
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
                            <h3 className="account-form-title">Profile Details <small>(step1)</small></h3>
                            <div className="form-group">
                                <img src={pancard} alt="" />
                                <input type="tel" maxLength="16" value={formik.values.pan} onChange={(e) => formik.setFieldValue('pan',e.target.value)} className="border border-0" placeholder="Please Enter Pan Number" />
                            </div>
                            {formik.errors.pan &&
                                formik.touched.pan && 
                                <span style={{color:"red"}}>{formik.errors.pan}</span>} 

                           <div className="form-group">
                            <img src={date} alt="" />
                               <input type="date"  value={formik.values.dob} onChange={(e) => formik.setFieldValue('dob',e.target.value)} className="border border-0" placeholder="Please Enter DOB*" />
                              </div>
                              {formik.errors.dob &&
                                formik.touched.dob && 
                                <span style={{color:"red"}}>{formik.errors.dob}</span>} 

                         <div className="form-group">
                                <img src={landline} alt="" />
                                <input type="tel" maxLength="20" value={formik.values.landline}  onChange={(e) => formik.setFieldValue('landline',e.target.value)} className="border border-0" placeholder="Please Enter Landline." />
                             </div>
                                {formik.errors.landline &&
                              formik.touched.landline && 
                       <span style={{color:"red"}}>{formik.errors.landline}</span>} 

                      <div className="form-group">
                          <img style={{width:"30px", height:"30px" }} src={gender} alt="" />
                              <select as="select" className="width1"  value={formik.values.gender}  onChange={(e) => formik.setFieldValue('gender',e.target.value)}>
                                   <option>Gender</option>
                                   <option>Male</option>
                                   <option>Female</option>
                              </select>  
                            </div>
                                  {formik.errors.gender &&
                                formik.touched.gender && 
                              <span style={{color:"red"}}>{formik.errors.gender}</span>} 


                           {/*  <div className="form-group">
                                <img src={lock_icon} alt="" />
                                <input type="otp" maxLength="32" value={formik.values.otp} onChange={(e) => formik.setFieldValue('otp',e.target.value)} className="border border-0" placeholder="Please enter OTP" />
                            </div>
                            {formik.errors.otp &&
                                formik.touched.otp && 
                                <span style={{color:"red"}}>{formik.errors.otp}</span>} */}
                        
                            <div className="submit-btn">
                                <button type="submit" className="cta-btn">{formik.initialValues.LoginText}</button>
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