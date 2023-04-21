import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function Viewcustomeretails() {
    const { sno } = useParams();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');



    useEffect(() => {
        fetch("http://localhost:4001/Viewcustomeretails/" + sno + "")
            .then(response => response.json())
            .then(function (res) {
                setName(res[0].name);
                setAddress(res[0].address);
                setCity(res[0].city);
                setPincode(res[0].pincode);
                setCountry(res[0].country);

            })

            .catch(function (error) {
                alert("error");
                window.location.href = "/";
            })
    }, [])



    return (
        <>
            <div className=" container-fluid col-lg-6 border border-dark bg-light py-3">
                <div className=" mt-5 pt-5">
                    <h3 className="text-center fw-bold fs-2">Customer Details</h3>
                    <form >
                        <label className="form-label"> Name</label>
                        <input type="text" name="firstname" className="form-control"   value={name} />

                        <label className="form-label">Address</label>
                        <input type="text" name="address" className="form-control"   value={address} />

                        <label className="form-label">City</label>
                        <input type="text" name="city" className="form-control"   value={city} />

                        <label className="form-label">Pin Code</label>
                        <input type="number" name="pincode" className="form-control"   value={pincode} />

                        <label className="form-label">Country</label>
                        <input type="text" name="country" className="form-control"   value={country} />


                        <Link to='/'><input type="Button" value="Home" className="rounded-3 mt-2" /></Link>

                    </form>
                </div>
            </div>
        </>
    );
}