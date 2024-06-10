import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [stdata,changedata]=useState(
       [

       ]

    )
    const fetchData=()=>{
    axios.get("https://courseapplogix.onrender.com/getdata").then(
        (response)=>{
            changedata(response.data)
            console.log(response.data)
        }
    ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
    ).finally()
}
useEffect(
    ()=>{fetchData()},[]
)
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-13 col-xxl-12">
                <table class="table">
                        <thead>
                            <tr>
                            
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">College</th>
                            <th scope="col">dob</th>
                            <th scope="col">course</th>
                            <th scope="col">mobile</th>
                            <th scope="col">email</th>
                            <th scope="col">address</th>
                            </tr>
                        </thead>
                        {stdata.map(
                            (value,index)=>{
                                return  <tbody>
                                        <tr>
                                        <td>{index+1}</td>
                                        <td>{value.firstname}</td>
                                        <td>{value.lastname}</td>
                                        <td>{value.college}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.course}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                        </tr>                        
                                    </tbody>
                            }
                        )}
                       
                </table>
                </div>
            </div>
        </div>
    </div>
)
}

export default View