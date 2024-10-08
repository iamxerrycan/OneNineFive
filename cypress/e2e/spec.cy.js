/* eslint-disable no-undef */
describe('main page visit', () => {
  it('passes', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/')
    
    cy.get("a[href='/about']").click()
    .then(()=>{
      cy.url().should("include", '/about')
    })
  })
})