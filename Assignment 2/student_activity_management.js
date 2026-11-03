const EventEmitter = require("events");

const studentActivity = new EventEmitter();

studentActivity.on("login", () => {

   console.log("Student logged in successfully");

});

studentActivity.on("assignment", () => {

     console.log("Assignment submitted");

});

studentActivity.on("logout", () => {

   console.log("Student logged out");

});

studentActivity.on("exit", () => {

     console.log("Exiting application");

});

console.log("Starting Student Activity Monitoring System...");

studentActivity.emit("login");

studentActivity.emit("assignment");

studentActivity.emit("logout");

studentActivity.emit("exit"); 