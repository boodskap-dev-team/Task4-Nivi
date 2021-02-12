$(document).ready(function(){
    mqttConnect(); 
})

 
function mqttListen(){  
    mqttSubscribe("/XLOYLUDCHY/log/mrule/#",0);    
    mqtt_client.onMessageArrived = function(message){        
        var topicName = message.destinationName;
        var parsedData = JSON.parse(message.payloadString);
     if(topicName === "/XLOYLUDCHY/log/mrule/123456"){
        if(parsedData.level === 'info'){
            load();
        }
      }
    };
}

function load(){
    $.ajax({
        url: BASE_PATH+"/tempstatus/list",
        contentType: "application/json",
        type: 'POST',
        success: function (data) {
            var resultData = data.result.data.data;
                     
            var sl= document.getElementById("outtemp");   
            sl.innerHTML = resultData[0].outside_temperature;    
            var s2= document.getElementById("acstatus");   
            s2.innerHTML = resultData[0].ac_status;      
        },
        error: function (e) {           
            errorMsg("Failed!");            
        }
})
}

var on=document.getElementById('onn');
on.addEventListener('click',function(){
    var values={
        "command" : "ON",
        "deviceid" :"SAC10101"
    }
     
    $.ajax({
        url:BASE_PATH+"/command/send",
        contentType: "application/json",
        type: 'POST',
        data:JSON.stringify(values),
        success: function (data) {
          
          successMsg(data);
        },
        error: function (e) {           
            errorMsg("Failed!");            
        }
      });
})
