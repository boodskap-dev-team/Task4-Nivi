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