import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
export function View()
{
    return(
        <>
          <div className="container-fluid col-lg-8 border border-dark bg-info py-5">
           <div class="fw-bold fs-2 text-Secondary">
                <p>Customer<span class="text-success ">Details</span> </p>
           </div>
           <table class="table">
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
                           <tr>
                           <th scope="row">1</th>
                           <td>Mark</td>
                           <td>Otto dist</td>
                           <td>Covai</td>
                           <td>596845</td>
                           <td>India</td>
                           <td><FontAwesomeIcon icon={faEye} ></FontAwesomeIcon>&nbsp;&nbsp;
                           <span><Link to='/EditDetails'><FontAwesomeIcon icon={faPen} ></FontAwesomeIcon></Link></span>&nbsp;&nbsp;
                           <span><Link to='/EditDetails'><FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon></Link></span>
                           
                           </td>
                           </tr>
                         
                       </tbody>
           </table>
       
           </div>
        </>
    );
}
