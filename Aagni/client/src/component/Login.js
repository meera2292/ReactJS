import React, { useEffect, useState }  from "react";
export function Login()
{

    const [usname,setUsname]=useState('');
    const [loginuser,setLoginuser]=useState('');
    function Checklogin()
    {
            
            var passuname=document.getElementById("username").value;
            var passpwd=document.getElementById("password").value;
                    useEffect(()=>{
                        fetch('http://localhost:4000/Login'+passuname+passpwd+"")
                        .then((response)=>response.json())
                        .then((result)=>{
                            setUsname(result[0].username);
                            setLoginuser(result[0].loginuser);
                        })
                        console.log(usname);
                        console.log(loginuser);
                    },[])
    }
   
    return(
       

        <>
        
        <div class="container-fluid col-lg-4 bg-light my-5">
                <p class="fw-bold fs-1 text-success">Login</p>
                <div class="col-6 container-fluid my-3"><input type="text"  id="username"></input></div>
                <div class="col-6 container-fluid my-3"><input type="text"  id="password"></input></div>
                <div class="col-6 container-fluid py-2 my-3"><button class="btn btn-success " type="submit" onClick={Checklogin}>LogIn</button></div>
           </div>
        
        </>
    );
} 