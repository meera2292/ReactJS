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
//check login credentials
add.get('/Login',(request,response)=>{
    
    let sql="select * from logintb where username=? and password=? and status=?";
    a.query(sql,[username,password,1],(error,result)=>{
        if(error)
        {
            response.send(error);

        }
        else
        {
            response.send(result);
        }
    })

}
)

//view details in table
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

//deletion
add.post('/Delete',(request,response)=>{
    let sno = request.body.sno;
    let sql = 'delete from aagnidetails where sno = ?';

    a.query (sql,[sno],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s)
        }
    })
})

//insertion customer
add.post('/NewUser',(request,response)=>{
    let {name,address,city,pincode,country} = request.body;
    let sql = 'insert into aagnidetails(name,address,city,pincode,country,status) values (?,?,?,?,?,?)';
    a.query(sql,[name,address,city,pincode,country,1],(error,result)=>{
        if (error) {
            let s = {"status":"error"}
            response.send(s);
        }
        else{
            let s = {"status":"success"}
            response.send(s);
        }
    })
})



//updation


//getdetails


add.get('/View/:sno',(request,response)=>{
    let sno = request.params.sno;
    let sql = 'select * from aagnidetails where sno=?';
    a.query(sql,[sno],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

//update the details


add.put('/EditDetails/:sno',(request,response)=>{
    let sno = request.params.sno;
    let {name,address,city,pincode,country} = request.body;
    
    let sql = 'update aagnidetails set name=?,address=?,city=?,pincode=?,country=? where sno=?';
    a.query(sql,[name,address,city,pincode,country,sno],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"success"};
            response.send(s)
        }  

})
})


//retreive specific file



add.get('/Viewcustomeretails/:sno',(request,response)=>{
    let sno = request.params.sno;
    let sql = 'select * from aagnidetails where sno=?';
    a.query(sql,[sno],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})




add.listen(4000,()=>{
    console.log("running in port 4000 port");
});