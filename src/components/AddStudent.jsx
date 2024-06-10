import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [fdata,stdata]=useState(
        {
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            // "gender":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
            // "lnge":"",
            // "time":""
        }
    )
    const inputHandler=(event)=>{
        stdata({...fdata,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(fdata)
        axios.post("https://courseapplogix.onrender.com/addstudents",fdata).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                } else {
                    alert("error")
                }
            }
        ).catch()

    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">First name</label>
                            <input type="text" className="form-control" name='firstname' value={fdata.firstname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Lastname</label>
                            <input type="text" className="form-control" name='lastname' value={fdata.lastname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={fdata.college} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">D-O-B</label>
                            <input type="date" name="dob" id="" className="form-control" value={fdata.dob} onChange={inputHandler}/>
                        </div>
                        {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <br />
                        <label htmlFor="male" className="form-label">Male</label>
                        <input type="radio" name="gender" id="male" value="male" onChange={inputHandler} checked={fdata.gender === 'male'} />
                        <span style={{ marginRight: '10px' }}></span>
                        
                        <label htmlFor="female" className="form-label">Female</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={inputHandler} checked={fdata.gender === 'female'} />
                        <span style={{ marginRight: '10px' }}></span>
                        
                        <label htmlFor="others" className="form-label">Others</label>
                        <input type="radio" name="gender" id="others" value="others" onChange={inputHandler} checked={fdata.gender === 'others'} />
                        </div> */}

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course</label>
                            <select name="course" value={fdata.course} onChange={inputHandler} id="" className="form-control">
                                <option value="">...Select Course...</option>
                                <option value="BCA">BCA</option>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Mobile</label>
                            <input type="text" className="form-control" name='mobile' value={fdata.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                        <input type="email" name="email" id="" className="form-control" value={fdata.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control"name='address' value={fdata.address} onChange={inputHandler}/>
                        </div>
                        {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">language</label><br></br>
                            <input type="checkbox" name=""  id=""  />
                            <label htmlFor="" className="form-label">Hindi</label>
                            &nbsp;&nbsp;
                            <input type="checkbox" name="" id=""  />
                            <label htmlFor="" className="form-label">Malayalam</label>
                            &nbsp;&nbsp;
                            <input type="checkbox" name=""  id=""  />
                            <label htmlFor="" className="form-label">English</label>
                        </div> */}
                        {/* <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Joined Time</label>
                            <input type="time" name="time" value={fdata.time} onChange={inputHandler}id="" className="form-control" />
                        </div> */}
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-primary" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent