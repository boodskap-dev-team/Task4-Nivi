var StatusTable = null;
var Status_list = [];
var CURRENT_TEMP = 24;
$(document).ready(function () {
  mqttConnect();
  loadstatuslist();
});

function mqttListen() {
  mqttSubscribe("/XLOYLUDCHY/log/mrule/123456", 0);
  mqtt_client.onMessageArrived = function (message) {
    var topicName = message.destinationName;
    var parsedData = JSON.parse(message.payloadString);
    if (topicName === "/XLOYLUDCHY/log/mrule/123456") {
      // console.log(parsedData.data)
      // console.log()
      console.log(parsedData.data.includes("__VAL__"));
      if (parsedData.data.includes("__VAL__")) {
        var splitData = parsedData.data.split("|")[1];
        console.log(JSON.parse(splitData));
        var result = JSON.parse(splitData);
        $("#outtemp").html(result.outside_temperature);
        $("#acstatus").html(result.ac_status);
        CURRENT_TEMP = result.ac_temperature;
        $("#temperatures").html(result.ac_temperature);
      }
    }
  };
}

function loadstatuslist() {
  if (StatusTable) {
    StatusTable.destroy();
    $("#myTable").html("");
  }
}

$(".btn").click(function () {
  var id = $(this).attr("id"); // $(this) refers to button that was clicked
  if (id == "offf") {
     values = {
      command: "OFF",
      deviceid: "SAC10101",
    };
    commonSend(values);
  } else if (id == "onn") {
    values = {
      command: "ON",
      deviceid: "SAC10101",
    };
    commonSend(values);
  } else if (id == "tempup") {
    if (CURRENT_TEMP >= 24 && CURRENT_TEMP < 30) {
       values = {
        command: "INC_TEMP",
        deviceid: "SAC10101",
      };
      commonSend(values);
    } else {
      warningMsg("Limit exceeds");
    }
  } else if (id == "tempdown") {
    if (CURRENT_TEMP <=30 && CURRENT_TEMP >16) {
     values = {
      command: "DEC_TEMP",
      deviceid: "SAC10101",
    };
    commonSend(values);
}
else {
    warningMsg("Limit exceeds");
  }
  }
});
function commonSend(values) {
  $.ajax({
    url: BASE_PATH + "/command/send",
    contentType: "application/json",
    type: "POST",
    data: JSON.stringify(values),
    success: function (data) {
      console.log("hi nivi", values);
      console.log(CURRENT_TEMP);
      successMsg("Command sent successfully!");
    },
    error: function (e) {
      errorMsg("Failed!");
    },
  });
}
