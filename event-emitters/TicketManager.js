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
    this.supply--;
    this.emit("buy", email, price, this.formatDate());
  }
}

module.exports = TicketManager;
