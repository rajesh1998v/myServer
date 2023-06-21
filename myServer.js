let express = require("express") ;
let app = express();
app.use(express.json ());
app.use( function (req, res, next) {
res.header("Access-Control-Allow-Origin","*");
res.header( "Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD");
res. header( "Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
next();
});
var port = process.env.PORT || 2410;
app.listen(port,()=>console.log(`Listening on port ${port}!`));

let {students} = require("./studentData");

app.get("/students",function(req,res){
    res.send(students);
})

app.post("/students",async function(req, res){
   let body = req.body;
   let maxid = students.reduce((acc,curr)=>curr.id>acc?curr.id:acc,0);
   let newSt = {id:maxid+1,...body}
   students.push(newSt);
   res.send(newSt);
});
