 
  
  let url = `https://dev.boodskap.io/api/push/json/XLOYLUDCHY/7wqaskN4z31b/SAC10101/SAC/1.0.1/123456`;
 

var loads = document.getElementById('sendvalues');
loads.addEventListener('click', function() {
    var status=document.getElementById('status').value;
    var ac_temperature=document.getElementById('temperature').value;
    var outsidetemperature=document.getElementById('outsidetemperature').value;
    var mode=document.getElementById('mode').value;
    var fanspeed=document.getElementById('fanspeed').value;
    var power=document.getElementById('power').value;
    var swing=document.getElementById('swing').value;
    var sleep=document.getElementById('sleep').value;
    var timeron=document.getElementById('timeron').value;
    var timeroff=document.getElementById('timeroff').value;
    var selfclean=document.getElementById('selfclean').value;
    var reset=document.getElementById('reset').value;
    payload={
    "ac_temperature" :ac_temperature,
    "ac_status": status,
    "fanspeed":fanspeed,
    "mode" :mode,
    "outside_temperature":outsidetemperature,
    "power":power,
    "reset":reset,
    "selfclean":selfclean,
    "sleep":sleep,
    "swingmode":swing,
    "timeroff":timeroff,
    "timeron":timeron
    }
    console.log(payload);
    $.ajax({
        url:url,
        contentType: "application/json",
        type: 'POST',
        data:JSON.stringify(payload),
        success: function (data) {
          successMsg("Command Sent successfully")
        },
        error: function (e) {           
            errorMsg("Failed!");            
        }
      });


 
 
}, false);
         




 