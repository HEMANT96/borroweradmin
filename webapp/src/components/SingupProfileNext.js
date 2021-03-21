import React, { Component } from "react";
import Slider from "./Slider";
import form_logo from '../public/images/credin-logo.png';
import residence from '../public/images/residence.png';
import merid from '../public/images/merid.png';
import education from '../public/images/edu.png';
import working from '../public/images/woking.png';

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
          ResdnceType:'',
          LoginText: 'SIGNUP',
        },
        validate:(values) =>{
            const error = {};
            if (!values.education) {
                error.education = "Please select your education."
            }
            if (!values.meritalStatus) {
                error.meritalStatus = "Please select your meritalStatus."
            }
            if (!values.Workstatus) {
                error.Workstatus = "Please select your workstatus."
            }
            if (!values.ResdnceType) {
                error.ResdnceType = "Please select your residence type."
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
            maritial: formik.values.meritalStatus,
            educational: formik.values.education,
            workingstatus: formik.values.Workstatus,
            residencetype: formik.values.ResdnceType,
        }
    let updatedRes = await ithours_client.update("borrower", findQuery, updateQuery);
    console.log("updated data")
    console.log(updatedRes)
        setTimeout(() => {
            history.push(`/sign-up-addres`);
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
                            <h3 className="account-form-title">Profile Details <small> (Step2) </small></h3>

                            <div className="form-group">
                                <img  src={education} alt="" />
                                <select as="select" className="width1"  value={formik.values.education}  onChange={(e) => formik.setFieldValue('education',e.target.value)}  placeholder="Please Enter Gender.">
                                   <option>Education Qualification</option>
                                   <option>10th</option>
                                   <option>12th</option>
                                   <option>Deploma</option>
                                   <option>Graduate</option>
                                   <option>Postgraduate</option>
                              </select>  
                            </div>
                                {formik.errors.education &&
                                   formik.touched.education && 
                                    <span style={{color:"red"}}>{formik.errors.education}</span>}

                           <div className="form-group">
                                <img style={{width:"30px", height:"20px" }} src={merid} alt="" />
                                <select as="select" className="width1"  value={formik.values.meritalStatus}  onChange={(e) => formik.setFieldValue('meritalStatus',e.target.value)}  placeholder="Please Enter Gender.">
                                <option>Married status</option>
                                <option>Unmarried</option>
                               <option>Married</option>
                              </select>  
                            </div>
                                {formik.errors.meritalStatus &&
                                   formik.touched.meritalStatus && 
                                    <span style={{color:"red"}}>{formik.errors.meritalStatus}</span>}
                       <div className="form-group">
                                <img style={{width:"30px", height:"20px" }} src={working} alt="" />
                                <select as="select" className="width1"  value={formik.values.Workstatus}  onChange={(e) => formik.setFieldValue('Workstatus',e.target.value)}  placeholder="Please Enter Gender.">
                                   <option>Working status</option>
                                   <option>Yes</option>
                                   <option>No</option>
                              </select>  
                            </div>
                                {formik.errors.Workstatus &&
                                   formik.touched.Workstatus && 
                                    <span style={{color:"red"}}>{formik.errors.Workstatus}</span>}
                             <div className="form-group">
                                <img  src={residence} alt="" />
                                <select as="select" className="width1"  value={formik.values.ResdnceType}  onChange={(e) => formik.setFieldValue('ResdnceType',e.target.value)}  placeholder="Please Enter Gender.">
                                <option>Residence Type</option>
                                <option>Owned</option>
                                <option>Rented</option>
                                <option>Parented</option>
                                <option>Company provided</option>
                              </select>  
                            </div>
                                {formik.errors.ResdnceType &&
                                   formik.touched.ResdnceType && 
                                    <span style={{color:"red"}}>{formik.errors.ResdnceType}</span>}
                           {/*  <div className="form-group">
                                <img src={lock_icon} alt="" />
                                <input type="password" maxLength="20"  value={formik.values.confirmPassword} onChange={(e) => formik.setFieldValue('confirmPassword',e.target.value)} className="border border-0" placeholder="CONFIRM PASSWORD"/>
                            </div>
                            {formik.errors.confirmPassword &&
                                formik.touched.confirmPassword && 
                                <span style={{color:"red"}}>{formik.errors.confirmPassword}</span>}
 */}
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