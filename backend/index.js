// const express =require('express');
// // const cors = require("cors");
// const app = express();
// // app.use(cors());
// const port = 3000;

// const dssv=require("./DSSV.json")

// app.get("/",(req, res)=>{
//     res.send("Xin chào đến với EXPRESS Backend");
// });

const express = require('express');
const cors = require("cors");
const app = express();
let corsOptions = {
    origin:['http://127.0.0.1:5500','http://localhost:5500']
};
app.use(cors(corsOptions));
const port = 3000;

const dssv = require('./DSSV.json');

app.get('/',(req, res)=>{
    res.send('Welecome to EXPRESS backend!!');
});

//GET
app.get("/students",(req, res)=>{
    res.send(Object.values(dssv));
});
app.get("/students/:MaSV",(req, res)=>{
    console.log(req.params.mssv);
    let i=0;
    for(i; i<dssv.length;i++){
        if(dssv[i].MaSV==req.params.MaSV) break;
    }
    if(i<dssv.length) res.send(dssv[i]);
        else res.send("Not FOUND !!!");
}); 

//POST
app.post("/students",(req, res)=>{
    res.send("POST student!");
});
app.put("/students",(req, res)=>{
    res.send("PUT student!");
});
app.delete("/students",(req, res)=>{
    res.send("DELETE student!");
});
 app.listen(port,()=> console.log(`App is running at port ${port}`));