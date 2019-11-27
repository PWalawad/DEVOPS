var express=require("express");
var router=express();
var config=require("config");
var mysql=require("mysql");
var Joi=require("joi");

var connection=mysql.createConnection({
    host:config.get("host"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")
});

connection.connect();

router.use(express.json());

router.get("/",(request,response)=>{
    var myquery="select * from ElectionTb";
    connection.query(myquery,(err,result)=>{
        if(err==null)
        {
            response.send(JSON.stringify(result));
        }
        else
        {
            response.send(JSON.stringify(err));
        }
    })
})

router.put("/:id",(request,response)=>{
   var id=request.params.id;
   var state=request.body.state;
   var myquery=`update ElectionTb set state='${state}' where id=${id}`;
   connection.query(myquery,(err,result)=>{
      if(err==null)
      {
          response.send(JSON.stringify(result));
      }
      else
      {
          response.send(JSON.stringify(err));
      }

});
});

router.get("/:id",(request,response)=>{
    var id=request.params.id;
    var myquery=`select * from ElectionTb where id=${id}`;

connection.query(myquery,(err,result)=>{
      if(err==null)
      {
          response.send(JSON.stringify(result));
      }
      else
      {
          response.send(JSON.stringify(err));
      }

});
});

module.exports = router;