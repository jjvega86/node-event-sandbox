const EventEmitter = require("events");

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  formatDate() {
    const date = new Date();
    const formattedDate = date.toDateString();
    return formattedDate;
  }

  buy(email, price) {
    if (this.supply > 0) {
      this.supply--;
      this.emit("buy", email, price, this.formatDate());
    } else {
      this.emit("error", new Error("No more tickets left to purchase!"));
    }
  }
}

module.exports = TicketManager;
