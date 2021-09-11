const { EventEmitter } = require("events");

// Here we create an instance of the EventEmitter object
// This object will contain the 'on' and 'emit' methods needed to publish and subscribe
// to events
const firstEmitter = new EventEmitter();
const date = new Date();
const formattedDate = date.toDateString();

// listen for an event called 'My first event'
// when that event is emitted, fire a callback function that logs the event and date to the console
firstEmitter.on("My first event", (date) => {
  console.log("Event fired at: ", date);
});

// Emit an event, passing the formatted date as an argument
// when captured, the emit method returns a boolean for event present
let eventPresent = firstEmitter.emit("My first event", formattedDate);
console.log("Line 12: firstEventEmitter: ", eventPresent);
