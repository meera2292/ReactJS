import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { faArrowTrendDown, faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import axios from "axios";
export function View()
{
    const [values,setValues]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4001/View')
        .then((response)=>response.json())
        .then(result=>setValues(result))

    },[]
    )

    const deleterecord = (sno) => {
        var dataString = {sno:sno};
        var config = {headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:4001/Delete',dataString,config)
        .then(function(res){
            if(res.data.status === 'error') {
                alert('error');
                window.location.reload();
            }
            else if (res.data.status === 'success'){
                alert('Successfully deleted the record');
                window.location.reload();
            }

        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        })
        

    }


    return(
        <>
          <div className="container-fluid col-lg-8 t py-5">
           <div ><br></br>
                <p class="fw-bold fs-1 text-Secondary ">Customer<span class="text-success ">Details</span> </p><br></br>
                <Link to='/Insertcustomer' class="fs-4 fw-bold text-warning float-end" >Add New Customer </Link><br></br>
                
           </div>
           <br></br>
           <table class="table table-info table-striped">
                       <thead>
                           <tr>
                           <th scope="col">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Address</th>
                           <th scope="col">City</th>
                           <th scope="col">Pincode</th>
                           <th scope="col">Country</th>
                           <th scope="col">Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                        {


                            values.map((value,index)=>
                            (
                                <>
                                    <tr>
                                    <th scope="row">{value.sno}</th>
                                    <td>{value.name}</td>
                                    <td>{value.address}</td>
                                    <td>{value.city}</td>
                                    <td>{value.pincode}</td>
                                    <td>{value.country}</td>
                                    <td><Link to={"/Viewcustomeretails/"+value.sno}><FontAwesomeIcon className="text-success" icon={faEye} ></FontAwesomeIcon></Link>&nbsp;
                                    <span><Link to={"/EditDetails/"+value.sno}><FontAwesomeIcon icon={faPen} ></FontAwesomeIcon></Link></span>&nbsp;&nbsp;
                                    <span><td><FontAwesomeIcon className="text-danger" icon={faTrash} onClick={()=>{deleterecord(value.sno)}} ></FontAwesomeIcon></td></span>

                                    
                                    </td>
                                    </tr>
                                
                                </>
                            )

                            )
                        }
                           
                         
                       </tbody>
           </table>
       
           </div>
        </>
    );
}
