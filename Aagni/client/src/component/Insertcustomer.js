import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export function Insertcustomer()
{
    const adddetails = async (event) => {
        event.preventDefault();

        var config = { headers: { "enctype": "multipart/form-data" } };
        var name = document.getElementById("inputname").value;
        var address = document.getElementById("inputaddress").value;
        var city = document.getElementById("inputcity").value;
        var pincode = document.getElementById("inputpnumber").value;
        var country = document.getElementById("inputcountry").value;

        if (name === '' || name === 'null') {
            alert("Enter Valid name")
        } else if (address === '' || address === 'null') {
            alert("Enter address")
        } else if (city === '' || city === 'null') {
            alert("Enter city")
        } else if (pincode === '' || pincode === 'null') {
            alert("Enter pincode")
        } else if (country === '' || country === 'null') {
            alert("Enter country")

        } else {
            await axios.post("http://localhost:4000/NewUser", { name, address, city, pincode, country }, config)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert('error')
                        window.location.reload();
                    } else if (res.data.status === 'success') {
                        alert('Customer Details added successfully')
                        window.location.href = "/";
                    }
                })
        }
    }

    return(
        <>
          <div className="container-fluid col-lg-8 border border-dark bg-light py-5">
           <div class="fw-bold fs-4 text-Secondary">
                <p class="fw-bold fs-4 text-info">Add<span class="text-success ">&nbsp;Customer</span> </p>
           </div>
            <div>
            <form className="row g-3 py-5" onSubmit={adddetails} >

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
                                <button type="Submit" className="btn btn-primary" >Add Customer</button>
                            </div>

            </form>
            </div>
       
           </div>
        </>
    );
}
