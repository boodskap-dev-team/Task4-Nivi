var Simulator=function(app){
  this.app = app;
}
module.exports = Simulator;


const mqtt = require('mqtt')
// const random = require('random')
// const schedule = require('node-schedule');
// const cron = require('node-cron');


var topic2= '/XLOYLUDCHY/device/SAC10101/msgs/SAC/1.0.1/1234567';
 


 Simulator.prototype.publishMessage = function (message,cbk)
 {
  console.log("hhhhh");
  var options={
    clientId: "DEV_SAC10101",
    username: "DEV_XLOYLUDCHY",
    password: "7wqaskN4z31b",
    qos: 2,
    clean: true
  };
  
  const client = mqtt.connect('mqtt://dev.boodskap.io', options)
  
  var topic1 = '/XLOYLUDCHY/device/SAC10101/msgs/SAC/1.0.1/123456';
client.on('connect', () => {
  

  var payload={
    "ac_status":message,
    "ac_temperature":25,
    "outside_temperature":Math.round(0 + Math.random() * (5 - 0)*100)/100
  }
    client.publish(topic1, JSON.stringify(payload))
    
    cbk(true);
  }); 
}
 
Simulator.prototype.nivi = function(req,res,cbk)
{
  var self = this;
   var commandname=req.body.command;
   
   var deviceid=req.body.deviceid;
   var ac_status;
 if(commandname == "ON")
 {
  

   ac_status = "ON";
  self.publishMessage(ac_status,function(status){
     

    cbk(true)
  });
 }

}


