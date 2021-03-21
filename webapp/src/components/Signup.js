import React, { Component } from "react";
import Slider from "./Slider";
import form_logo from '../public/images/credin-logo.png';
import phone from '../public/images/phon.png';
import user from '../public/images/user-icon.svg';
import lock_icon from '../public/images/password-icon.svg';
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
          name:'',
          password: '',
          mobile: '',
          LoginText: 'SIGNUP',
        },
        validate:(values) =>{
            const error = {};
            if (!values.name) {
                error.name = "Please enter your fullname."
            }
            if (!values.email) {
                error.email = "Please enter email."
            }
            if (!values.mobile) {
                error.mobile = "Please enter mobile number."
            }
            if (values.email) {
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                if (!pattern.test(values.email)) {
                  error.email = "Please enter valid email address.";
                }
            }
            if (values.confirmPassword != values.password) {
                error.confirmPassword = "password and confirm-password does not match."
            }
            if (!values.password) {
                error.password = "Please enter password."
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
     
          let datas = await ithours_client.get("User", {email: formik.values.email})
          console.log("check signup email")
          console.log(datas);
          let test = datas.apidata.Data.map((e) => e.email); 
          console.log(test)
          console.log(formik.values.email); 
         // console.log(formik.values.user_name);
           if(test.indexOf(formik.values.email) == -1){
            let data = await ithours_client.add("User", {
                email: formik.values.email,
                password: formik.values.password,
                mobile: formik.values.password,
                name: formik.values.name,
            });
            console.log(data);

                toast.dark("sign-up has been done successfully.", {
                    position:'bottom-right',
                    autoClose:5000,
                    hideProgressBar:true,
             }); 

             let bdat = await ithours_client.add("borrower", {
                email: formik.values.user_name,
            });
            console.log(bdat)

          /*    let bdata = await ithours_client.getOne("borrower", {
                email: formik.values.user_name,
            });
            window.localStorage.setItem("BID" , bdata.apidata.Data._id);
           */
            setTimeout(() => {
                history.push(`/sign-up-next`);
             }, 1000); 
            }
          else{
            toast.dark("Email exist already.", {
                position:'bottom-right',
                autoClose:5000,
                hideProgressBar:true,
            });   
          };              
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
                            <h3 className="account-form-title">Sign Up</h3>
                            <div className="form-group">
                                <img src={user} alt="" />
                                <input type="text" maxLength="26" value={formik.values.name} onChange={(e) => formik.setFieldValue('name',e.target.value)} className="border border-0" placeholder="Please Enter Full Name" />
                            </div>
                            {formik.errors.name &&
                                formik.touched.name && 
                                <span style={{color:"red"}}>{formik.errors.name}</span>}
                            
                            <div className="form-group">
                                <img src={mail_icon} alt="" />
                                <input type="email" maxLength="32" value={formik.values.email} onChange={(e) => formik.setFieldValue('email',e.target.value)} className="border border-0" placeholder="Email" />
                            </div>
                            {formik.errors.email &&
                                formik.touched.email && 
                                <span style={{color:"red"}}>{formik.errors.email}</span>}
                            
                          <div className="form-group">
                            <img src={phone} alt="" />
                               <input type="tel" maxLength="10" value={formik.values.mobile} onChange={(e) => formik.setFieldValue('mobile',e.target.value)} className="border border-0" placeholder="Mobile Number" />
                              </div>
                              {formik.errors.mobile &&
                                formik.touched.mobile && 
                                <span style={{color:"red"}}>{formik.errors.mobile}</span>}

                            <div className="form-group">
                                <img src={lock_icon} alt="" />
                                <input type="password" maxLength="20" onChange={(e) => formik.setFieldValue('password',e.target.value)} className="border border-0" placeholder="Password" />
                            </div>
                                {formik.errors.password &&
                                   formik.touched.password && 
                                    <span style={{color:"red"}}>{formik.errors.password}</span>}
                            <div className="form-group">
                                <img src={lock_icon} alt="" />
                                <input type="password" maxLength="20"  value={formik.values.confirmPassword} onChange={(e) => formik.setFieldValue('confirmPassword',e.target.value)} className="border border-0" placeholder="Confirm Password"/>
                            </div>
                            {formik.errors.confirmPassword &&
                                formik.touched.confirmPassword && 
                                <span style={{color:"red"}}>{formik.errors.confirmPassword}</span>}

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