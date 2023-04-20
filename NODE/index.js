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
        database:"moodleusers"

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

add.get('/details',(request,response)=>{

    let sql="select * from user_reg";
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

add.listen(1400,()=>{
    console.log("running in port 1400 port");
})


