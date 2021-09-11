const { EventEmitter } = require("events");

const firstEmitter = new EventEmitter();
const date = new Date();
const formattedDate = date.toDateString();

firstEmitter.on("My first event", (date) => {
  console.log("Event fired at: ", date);
});

let eventPresent = firstEmitter.emit("My first event", formattedDate);
console.log("Line 6: firstEventEmitter: ", eventPresent);
