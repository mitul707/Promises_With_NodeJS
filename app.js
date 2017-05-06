var dateFormat = require('dateformat');

var isUserWakenUpInTime = function (user) {
    var now = new Date();
    //dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");    
    return new Promise(function(resolve, reject) {
        if(dateFormat(now, "TT") === "AM") {
            msg = "Good Morning " + user;
            
        }
        else {
            msg = "Good Afternoon " + user;
        }
        console.log(msg);
        console.log("Performing Tasks.....");
        setTimeout(function() {
            // Perform Some Tasks....(i.e. "Getting Ready...")
            console.log("Finished Tasks.....");
            if(dateFormat(now, "TT") === "AM") {
                resolve();
            }
            else {
                reject();
            }
        }, 3000);
    })
};

var CanPerformNextTask = function () {
    return new Promise(function(resolve, reject) {
        var now = new Date();
        console.log("Performing Other Tasks.....");
        setTimeout(function() {
            // Perform Some Tasks....(i.e. "Getting Ready...")
            console.log("Finished All the Tasks.....");
            if(dateFormat(now, "TT") === "PM") {
                resolve("Next Task: Go to Bank");
            }
            else {
                reject("Next Task: Go to Office");
            }
        }, 2000);
        
        
    })
};


var user = "Mitul";
var promise = isUserWakenUpInTime(user);

promise.then(function () {
    CanPerformNextTask().then(function(a) { 
        console.log(a);
    }).catch(function (data) {
        console.log(data);
    })
}).catch(function() {
    console.log("Next Task: Go to Office");
})