/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      uploadFile(locator: string, fileName: string[]): Chainable<JQuery<HTMLElement>>
      replaceValueInLocator(locator: string, replace: string): string
    }
  }
}



Cypress.Commands.add('uploadFile', (locator , fileName) => {
    const filePaths = fileName.map(file => `cypress/fixtures/${file}`)
    
    cy.get(locator).selectFile(filePaths)
})





