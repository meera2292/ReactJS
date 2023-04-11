import React, { useEffect, useState } from "react";

import axios from "axios";

export function UserDetails() {

    const[values,setValues] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/crud/getAll')
        .then((res) => 
        {
            console.log(res);
            setValues(res.data.jData);
        })
    },[])

    return(
        <>
        <h3>ViewDetails</h3>
            <table class="table table-info table-striped">
                <thead>
                    <tr>
                        <td>S No</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Mobile no</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        values.map((value,index) => (
                            <>
                                <tr>
                                    <td>{value.sNo}</td>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.mobnum}</td>
                                    <td>{value.email}</td>
                                </tr>
                            </>
                        )

                        )
                    }
                </tbody>
            </table>
        </>
    )
}