var Utils = require("../modules/utils");
var Boodskap = require("../modules/boodskap");
var Commons = require("../modules/common");
var Tables = require("../modules/tables");
var Status=require("../modules/temperature")
var Student = require("../modules/student");
var Command=require("../modules/command");
var Simulator=require("../simulator");


var APIRoutes = function (app,router) {

    this.app = app;
    this.router = router;
    this.conf = app.conf;

    this.utils = new Utils(app);
    this.common = new Commons(app);
    this.table = new Tables(app);
    this.student = new Student(app);
    this.status = new Status(app);
 this.command=new Command(app);
 this.simulator= new Simulator(app);

    this.init();

};
module.exports = APIRoutes;



APIRoutes.prototype.init = function () {

    const self = this;

    var sessionCheck = function (req, res, next) {

        var sessionObj = req.session['sessionObj'];

        if (sessionObj && sessionObj.token) {

            next();

        }
        else {
            res.status(401).json({status:false,message:'Unauthorized Access'})
        }
    };

    //Authentication, Activation & Reset Password

    self.router.post('/login', function (req, res) {
        var boodskap = new Boodskap(self.app)
        boodskap.login(req,res);

    });

    self.router.post('/logout', sessionCheck, function (req, res) {
        var sessionObj = req.session['sessionObj'];
        var boodskap = new Boodskap(self.app, sessionObj.token)
        boodskap.logout(req,function (status) {
            res.json({status:true});
        });
    });
    self.router.post('/student/:action', sessionCheck, function (req, res) {
        self.student.performAction(req,res);
    });
    self.router.post('/tempstatus/:action', sessionCheck, function (req, res) {
        self.status.performAction(req,res);
    });
    self.router.post('/command/send', sessionCheck, function (req, res) {
        self.command.sendRawCommand(req,res);
    });

   

    self.app.use(self.app.conf.web.basepath,self.router);

};
