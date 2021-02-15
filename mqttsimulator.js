
// const mqtt = require('mqtt')
// const schedule = require('node-schedule');
// const random = require('random')

// var options={
//     clientId: "DEV_SAC10101",
//     username: "DEV_XLOYLUDCHY",
//     password: "7wqaskN4z31b",
//     qos: 2,
//     clean: true
//   };
  
//   const client = mqtt.connect('mqtt://dev.boodskap.io', options)
  
//   var topic1 = '/XLOYLUDCHY/device/SAC10101/msgs/SAC/1.0.1/123456';
// client.on('connect', () => {
  
//     var rule = new schedule.RecurrenceRule();

//     rule.minute = new schedule.Range(0, 59, 1);
    
//     schedule.scheduleJob(rule, function(){
//         payload={
//             "ac_status":"ON",
//             "ac_temperature":random.int(min = 16, max = 30),
//             "outside_temperature":Math.round(Math.random() * (30 - 16) +16)
//           }
//           console.log(payload);
//             client.publish(topic1, JSON.stringify(payload))
//         });
     

 

    
//   }); 
