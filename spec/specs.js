describe('Ticket', function() {

  it("creates a new ticket class with variables", function() {
    var expensiveTicket = new Ticket(false, true, 18);
    expect(expensiveTicket.newRelease).to.equal(false);
    expect(expensiveTicket.matinee).to.equal(true);
    expect(expensiveTicket.viewerAge).to.equal(18);
  });

  it("returns the price of ticket", function() {
    var newTicket = new Ticket(false, true, 18); // false = newRelease and true = matinee
    expect(newTicket.price()).to.equal(10);
  });

  it("checks age pricing", function() {
    var youngTicket = new Ticket(false, true, 8);
    var adultTicket = new Ticket(false, true, 18);
    var seniorTicket = new Ticket(false, true, 88);
    expect(youngTicket.price() < adultTicket.price());
    expect(seniorTicket.price() < adultTicket.price());
  });
});
