var Common = require("./common")
var Table = require("./tables")
var Simulator=require("../simulator")

var Command = function (app){
    this.app = app;
    this.common = new Common(app);
    this.table = new Table(app);
    this.simulator=new Simulator(app);
}
module.exports = Command;


Command.prototype.sendRawCommand = function (req,res){
 
    const self = this;
  self.simulator.commands(req,res,function(status){
 
   if(status) {
          res.json({status:true,result:"Command sent successfully"});
         
    }
    else{
      res.json({status:false,message:"Error in sending command"});
    
    }
  });
   
}
