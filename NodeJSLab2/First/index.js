const ticketsModule = require("./Tickets");
// console.log(ticketsModule);
let tickets = ticketsModule.Tickets;

let user1 = new tickets();

user1.createTicket(1, 1, "Borg El Arab", "Sharm El Sheikh Airport");
user1.createTicket(2, 2, "Borg El Arab", "Sharm El Sheikh Airport");
user1.createTicket(3, 3, "Borg El Arab", "Sharm El Sheikh Airport");
user1.createTicket(4, 4, "Borg El Arab", "Sharm El Sheikh Airport");

user1.DisplayAllTickets();
user1.getTicketByID("1-1");
console.log("x".repeat(100));
user1.updateTicketByID("4-4", "Cario", "Alexandria");
