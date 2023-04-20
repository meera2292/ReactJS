import React, { useEffect, useState } from "react";

export function UserDetails() {

    const[values,setValues] = useState([]);
    useEffect(() => {
        fetch('http://localhost:1400/details')
        .then((response) => response.json())
        .then(result => setValues(result))
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
                                    <td>{value.sno}</td>
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