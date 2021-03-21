import React, { Component } from "react";
import Slider from "./Slider";
import form_logo from '../public/images/credin-logo.png';
import adhar from '../public/images/addhar.png';
import lock_icon from '../public/images/password-icon.svg';
import pancard from '../public/images/pan.png';
import ebill from '../public/images/ebill.png';
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
          pan:'',
          aadharfront:'',
          aadharback:'',
          electricbill:'',
          LoginText: 'SIGNUP'
        },
        validate:(values) =>{
            const error = {};
            if (!values.pan) {
                error.pan = "Please submit your pan card."
            }
            if (!values.aadharfront) {
                error.aadharfront = "Please submit your aadhar front ."
            }
            
            if (!values.aadharback) {
                error.aadharback = "Please submit your aadhar back."
            }

            if (!values.electricbill) {
                error.electricbill = "Please submit your electricity bill ."
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
            pandocumentfiles: formik.values.pan,
            addharfrontfiles: formik.values.aadharfront,
            addharbackfiles: formik.values.aadharback,
            electricitybillFiles: formik.values.electricbill,
           // photoinsidefiles: this.state.selfPhoto,
          }
          let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
          console.log(updatedRes);
          setTimeout(() => {
            history.push(`/dashboard`);
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
                            <h3 className="account-form-title">Documents Upload</h3>

                            <div className="form-group">
                                <img src={pancard} alt="" />
                                <input type="file" maxLength="32" value={formik.values.pan} onChange={(e) => formik.setFieldValue('pan',e.target.value)} className="border border-0" />
                            </div>
                            {formik.errors.pan &&
                                formik.touched.pan && 
                                <span style={{color:"red"}}>{formik.errors.pan}</span>}
                            
                          <div className="form-group">
                            <img style={{width:'22px',height:'20px'}} src={adhar} alt="" />
                               <input type="file" maxLength="10" value={formik.values.aadharfront} onChange={(e) => formik.setFieldValue('aadharfront',e.target.value)} className="border border-0" />
                              </div>
                              {formik.errors.aadharfront &&
                                formik.touched.aadharfront && 
                                <span style={{color:"red"}}>{formik.errors.aadharfront}</span>}

                            <div className="form-group">
                                <img  style={{width:'22px',height:'20px'}} src={adhar} alt="" />
                                <input type="file" maxLength="20"  value={formik.values.aadharback} onChange={(e) => formik.setFieldValue('aadharback',e.target.value)} className="border border-0" />
                            </div>
                                {formik.errors.aadharback &&
                                   formik.touched.aadharback && 
                                    <span style={{color:"red"}}>{formik.errors.aadharback}</span>}
                            <div className="form-group">
                                <img style={{width:'28px',height:'20px'}} src={ebill} alt="" />
                                <input type="file" maxLength="20"  value={formik.values.electricbill} onChange={(e) => formik.setFieldValue('electricbill',e.target.value)} className="border border-0" />
                            </div>
                            {formik.errors.electricbill &&
                                formik.touched.electricbill && 
                                <span style={{color:"red"}}>{formik.errors.electricbill}</span>}

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