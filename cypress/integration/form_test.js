describe("Test", ()=> {
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    })
    it("Enter Order", ()=> {
        cy.get('[href="/pizza"]').click()
        cy.get("#name").type("Test Name").should("have.value", "Test Name")
        cy.get('[name="meatball"]').check()
        cy.get('[name="pepperoni"]').check()
        cy.get('#submitOrderButton').click()
    })
})