import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [stdata,changedata]=useState(
       [

       ]

    )
    const fetchData=()=>{
    axios.get("http://localhost:8080/view").then(
        (response)=>{
            changedata(response.data)
            console.log(response.data)
        }
    ).catch(
        (error)=>{
            console.log(error.message)
            
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
                            
                            <th scope="col"> Name</th>
                            <th scope="col">Adm no</th>
                            <th scope="col">Roll no</th>
                            <th scope="col">dob</th>
                            <th scope="col">parentname</th>
                            <th scope="col">College</th>
                            <th scope="col">email</th>
                            <th scope="col">password</th>
                                                       </tr>
                        </thead>
                        {stdata.map(
                            (value,index)=>{
                                return  <tbody>
                                        <tr>
                                        <td>{index+1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.admNo}</td>
                                        <td>{value.rollNo}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.parentname}</td>
                                        <td>{value.college}</td>
                                      
                                        
                                        <td>{value.email}</td>
                                        <td>{value.password}</td>
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