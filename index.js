// An event is a signal that some action has been completed
// in Node, first we emit the event, which is named with a string and can contain other arguments
// We then register event listeners that subscribe to that event and fire callbacks after events trigger

const TicketManager = require("./event-emitters/TicketManager");
const EmailService = require("./event-emitters/EmailService");
const DatabaseService = require("./event-emitters/DatabaseService");

const manager = new TicketManager(5);
const emailService = new EmailService();
const databaseService = new DatabaseService();

const onBuy = () => {
  console.log("This will be removed soon.");
};

// Must register an event listener before the event is emitted
// The parameters passed in on the callback are being sent in from the emitted event on the buy() method in TicketManager
manager.on("buy", (email, price, timestamp) => {
  console.log("A ticket was purchased!");
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

manager.on("buy", onBuy);

manager.on("error", (error) => {
  console.error(`Error: ${error}`);
});

console.log(
  `We have ${manager.listenerCount("buy")} listener(s) for the buy event`
);
console.log(
  `We have ${manager.listenerCount("error")} listener(s) for the error event`
);

manager.buy("jj.vega86@gmail.com", 100);

manager.off("buy", onBuy);
console.log(
  `We have ${manager.listenerCount("buy")} listener(s) for the buy event`
);

manager.buy("jj.vega86@gmail.com", 100);

manager.removeAllListeners("buy");
console.log(
  `We have ${manager.listenerCount("buy")} listener(s) for the buy event`
);
console.log("All tickets purchased");
