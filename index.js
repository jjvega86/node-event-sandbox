// An event is a signal that some action has been completed
// in Node, first we emit the event, which is named with a string and can contain other arguments
// We then register event listeners that subscribe to that event and fire callbacks after events trigger

const TicketManager = require("./event-emitters/TicketManager");

let manager = new TicketManager(5);
console.log(manager.supply);

// Must register an event listener before the event is emitted
manager.on("buy", () => {
  console.log("A ticket was purchased!");
});

manager.buy("jj.vega86@gmail.com", 100);
manager.buy("jj.vega86@gmail.com", 100);

manager.once("buy", () => {
  console.log("This only fires once");
});

manager.buy("jj.vega86@gmail.com", 100); // Both event listeners will fire for this event
manager.buy("jj.vega86@gmail.com", 100); // Now just the first event listener fires
