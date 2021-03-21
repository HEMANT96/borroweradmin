import React, { Component } from "react";
import Slider from "./Slider";
import form_logo from '../public/images/credin-logo.png';
import phone from '../public/images/phon.png';
import otp from '../public/images/otp.png';
import mail_icon from '../public/images/mail-icon.svg';
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
          email: '',
          confirmPassword: '',
          password: '',
          otp:'',
          mobile: '',
          LoginText: 'SIGNUP',
        },
        validate:(values) =>{
            const error = {};
            if (!values.otp) {
                error.otp = "Please enter email."
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
        setTimeout(() => {
            history.push(`/sign-up-profile`);
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
                            <h3 className="account-form-title">Enter OTP</h3>

                            <div className="form-group">
                                <img style={{width:'25px', height:'20px'}} src={otp} alt="" />
                                <input type="otp" maxLength="32" value={formik.values.otp} onChange={(e) => formik.setFieldValue('otp',e.target.value)} className="border border-0" placeholder="Please enter OTP" />
                            </div>
                            {formik.errors.otp &&
                                formik.touched.otp && 
                                <span style={{color:"red"}}>{formik.errors.otp}</span>}
                        
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