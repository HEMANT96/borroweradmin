import React, { Component, useState, useEffect } from "react";
import Slider from "./Slider";
import { connect } from 'react-redux';
import form_logo from '../public/images/credin-logo.png';
import user_icon from '../public/images/user-icon.svg';
import mail_icon from '../public/images/mail-icon.svg';
import pass_icon from '../public/images/password-icon.svg';
import '../components/login-signup.css';
import '../components/cta-btn.css';
import { Link, Redirect, useHistory} from "react-router-dom";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare var ithours_client;


const Login = () => {
    const formik = useFormik({
        initialValues: {
          user_name: '',
          password: '',
          LoginText: 'Login'
        },
        validate:(values) =>{
            const error = {};
            if (!values.user_name) {
                error.user_name = "Please enter user name."
            }
            if (!values.password) {
                error.password = "Please enter password."
            }
            return error;
        },
       /*  useEffect: () => (() => {
            apicall();
         }, []), */
        onSubmit:  ( values,
            {
              setSubmitting,
            }) => {
         
            apicall();
             formik.initialValues.LoginText = 'Loging....'
             setSubmitting(true);
        // alert(JSON.stringify(values, null, 2));
        },
      });
    /*   */
    /*  const handleSubmit = (e) => {
        e.preventDefault();
        apicall();
      }; */
      const history = useHistory();

    const  apicall = async() => {
        formik.initialValues.LoginText = 'Loging....'
        let data = await ithours_client.getOne("User", {
            email: formik.values.user_name,
            password: formik.values.password,
        });
        console.log("signin page");
        console.log(data);
        //window.localStorage.setItem("BID" ,data.apidata.Data._id)


        
        if(data.apidata.Message =='Success'){
            if(data.apidata.Data != null){
               
                //var borrower_id = window.localStorage.getItem("BID");
                let bdata = await ithours_client.getOne("borrower", {
                    email: formik.values.user_name,
                });
//
               // window.localStorage.setItem("BID" ,bdata.apidata.Data._id)
                window.localStorage.setItem("BID",'6007dcefe0a6433bfc3dd8d0')
                /* email: "hemu@gmail.com"
                   password: "Aur1234$" */

             formik.initialValues.LoginText = 'Loging....'
              formik.initialValues.LoginText = 'Loging....'
                toast.dark("Sign in has been done successfully.", {
                    position:'bottom-right',
                    autoClose:4000,
                    hideProgressBar:true,
                });
              /*   let bdata = await ithours_client.getOne("borrower", {
                    email: formik.values.user_name,
                });
                window.localStorage.setItem("BID" , bdata.apidata.Data._id);
              */
                setTimeout(() => {
                    history.push(`/dashboard`);
                 }, 1000); 
             }
             else{
                toast.dark("Wrong username or password.  ", {
                    position:'bottom-right',
                    autoClose:4000,
                    hideProgressBar:true,
                });
                setTimeout(() => {
                    formik.initialValues.LoginText = 'Login'
                }, 1000); 
            }   
        }
        else{
            toast.dark("Wrong username or password.  ", {
                position:'bottom-right',
                autoClose:4000,
                hideProgressBar:true,
            });
            setTimeout(() => {
                formik.initialValues.LoginText = 'Login'
            }, 1000); 
        }

         console.log("api data");
        //console.log(values.user_name);
         console.log(data);
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
                            <h3 className="account-form-title">Log In</h3>

                            <div className="form-group ">
                                <img src={mail_icon} alt="" />
                                <input type="text"  onChange={(e) => formik.setFieldValue('user_name',e.target.value)} className="border border-0" placeholder="EMAIL" />
                            </div>
                            {formik.errors.user_name &&
                                formik.touched.user_name && 
                                <span style={{color:"red"}}>{formik.errors.user_name}</span>}

                            <div className="form-group">
                                <img src={pass_icon} alt="" />
                                <input type="password" style={{border:"white"}} onChange={(e) => formik.setFieldValue('password',e.target.value)} className="border border-0" placeholder="PASSWORD" />
                            </div>
                            {formik.errors.password &&
                                formik.touched.password && 
                                <span style={{color:"red"}}>{formik.errors.password}</span>}
                            {/* <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div> */}
                            <div className="submit-btn">
                                <button type="submit"  className="cta-btn">{formik.initialValues.LoginText}</button>
                            </div>
                            <div className="author-form-note">
                                By creating an account you agree to our <a href="https://credin.shiksha/terms-and-conditions/">Terms of Service</a> and <a href="https://credin.shiksha/privacy-policy/">Privacy Policy</a>
                               <p>If you don't have an account? <Link to="/sign-up">Create new account</Link></p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>      
        </div>
    );
}

        // if (!localStorage.getItem('token')) {
        //     this.props.history.push('/sign-up')
        // }
        

export default Login