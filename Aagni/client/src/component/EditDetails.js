import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function EditDetails() {



    const { sno } = useParams();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');



    useEffect(() => {
        fetch("http://localhost:4001/View/" + sno + "")
            .then(response => response.json())
            .then(function (res) {
                setName(res[0].name);
                setAddress(res[0].address);
                setCity(res[0].city);
                setPincode(res[0].pincode);
                setCountry(res[0].country);

            })

            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }, [])





    const addcustomer = async (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = { headers: { "enctype": "multipart/form-data" } };
        await axios.put('http://localhost:4001/EditDetails/' + sno + '', { name, address, city, pincode, country }, config)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert('error');
                    window.location.href = "/";
                }
                else if (res.data.status === 'success') {
                    alert('Customer Details Updated Successfully')
                    window.location.href = "/";
                }
            })
            .catch(function (err) {
                alert(err);
                window.location.href = "/";
            })

    }


    return (
        <>
            <div className="container-fluid col-lg-4  bg-info py-3 mt-5">
                <div className="mt-5 pt-5">
                <h3 className="text-center fw-bold fs-1 text-secondary mb-3">UPDATE CUSTOMER DETAILS</h3>
                    <form onSubmit={addcustomer}>
                        <label className="form-label"> Name</label>
                        <input type="text" name="name" className="form-control"  placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />

                        <label className="form-label">Address</label>
                        <input type="text" name="address" className="form-control"  placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />

                        <label className="form-label">City</label>
                        <input type="text" name="city" className="form-control"  placeholder="Enter Your City" value={city} onChange={(e) => setCity(e.target.value)} />

                        <label className="form-label">Pin Code</label>
                        <input type="number" name="pincode" className="form-control"  placeholder="Enter Your Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />

                        <label className="form-label">Country</label>
                        <input type="text" name="country" className="form-control"  placeholder="Enter Your country" value={country} onChange={(e) => setCountry(e.target.value)} />


                        <input type="submit" value="Update" className="rounded-3 mt-2 text-center mt-3 fw-bold text secondary fs-5" />

                    </form>
                </div>
            </div>
        </>
    );
}