var Simulator = function (app) {
  this.app = app;
};
module.exports = Simulator;

const mqtt = require("mqtt");
var options = {
  clientId: "DEV_SAC10101",
  username: "DEV_XLOYLUDCHY",
  password: "7wqaskN4z31b",
  qos: 2,
  clean: true,
};

const client = mqtt.connect("mqtt://dev.boodskap.io", options);

var topic1 = "/XLOYLUDCHY/device/SAC10101/msgs/SAC/1.0.1/123456";
var ac_temp = 24;

Simulator.prototype.commands = function (req, res, cbk) {
  var self = this;
  var commandname = req.body.command;

  var deviceid = req.body.deviceid;
  var ac_status;
  if (commandname == "ON") {
    ac_status = "ON";

    var payload = {
      ac_status: ac_status,
      outside_temperature: Math.round(Math.random() * (40 - 25) + 25),
    };
    client.publish(topic1, JSON.stringify(payload));
    cbk(true);
  }
  if (commandname == "OFF") {
    ac_status = "OFF";

    var payload = {
      ac_status: ac_status,
      outside_temperature: Math.round(Math.random() * (40 - 25) + 25),
    };
    client.publish(topic1, JSON.stringify(payload));

    cbk(true);
  }
  if (commandname == "INC_TEMP") {
    ac_temperature = ac_temp + 1;
    var payload = {
      ac_status: "ON",
      ac_temperature: ac_temperature,
      outside_temperature: Math.round(Math.random() * (40 - 25) + 25),
    };
    ac_temp = ac_temperature;
    console.log(payload);
    client.publish(topic1, JSON.stringify(payload));

    cbk(true);
  }
  if(commandname == "DEC_TEMP"){
    ac_temperature = ac_temp - 1;
    var payload = {
      ac_status : "ON",
      ac_temperature:ac_temperature,
      outside_temperature: Math.round(Math.random() * (40 - 25) + 25),
    };
    ac_temp = ac_temperature;

    console.log(payload);
    client.publish(topic1, JSON.stringify(payload));

    cbk(true);
  }
};
