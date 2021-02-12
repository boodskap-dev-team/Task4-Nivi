var Common = require("./common")
var Table = require("./tables")

var Status = function (app){
    this.app = app;
    this.common = new Common(app);
    this.table = new Table(app);
}
module.exports = Status;

Status.prototype.sendRawCommand = function (req,res){

    const self = this;

   
}
