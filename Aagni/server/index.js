const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const database = require('mysql');

const add=express();
add.use(cors());
add.use(bodyparser.json());
add.use(express.json());
add.use(express.static('public'));
//connection
let a= new database.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"123456",
        database:"employeedetails"

    }
)
a.connect(function (error)
{
    if(error)
    {
        console.log("error");
    }
    else{
        console.log("connected");
    }
}
)

add.get('/View',(request,response)=>{

    let sql="select * from aagnidetails";
    a.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else
        {
            response.send(result);
        }


    })
   
})

add.listen(3000,()=>{
    console.log("running in port 3000 port");
})


