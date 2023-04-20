import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
export function EditDetails()
{
    return(
        <>
          <div className="container-fluid col-lg-8 border border-dark bg-info py-5">
           <div class="fw-bold fs-2 text-Secondary">
                <p>Edit Customer<span class="text-success ">Details</span> </p>
           </div>
            <div>
            <form className="row g-3 py-5" action="/View" >

                            <div className="col-md-6">
                                <label  className="form-label">Name</label>
                                <input type="text" className="form-control" id="inputname"  />
                            </div>
                            <div className="col-md-6">
                                <label  className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputaddress"  />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" id="inputcity" />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">PinCode</label>
                                <input type="number" className="form-control" id="inputpnumber"/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Country</label>
                                <input type="text" className="form-control" id="inputcountry"  />
                            </div>
                            <div className="col-12">
                                <button type="Submit" className="btn btn-primary" >Update</button>
                            </div>

            </form>
            </div>
       
           </div>
        </>
    );
}
