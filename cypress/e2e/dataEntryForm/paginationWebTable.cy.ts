/// <reference types="cypress" />

import { paginationWebTableDataForTesting } from '../../support/pageObjects/dataEntryForm/dataForTesting/paginationWebTableDataForTesting.js'
import type {PaginationWebTableLocatorsInterface, PaginationWebTableValuesInterface } from '../../support/pageObjects/dataEntryForm/interfaces/paginationWebTableInterface.js'
import { PaginationWebTableHeadersEnum } from '../../support/pageObjects/dataEntryForm/enums/paginationWebTableEnum.js'


describe('Automation Testing Practice', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('should be display all data into the Pagination Web Table', () => {
    cy.fixture('paginationWebTableJson').then((locator: PaginationWebTableLocatorsInterface) => {
      
        cy.prompt([
          `Then verify "${locator.titleTextLocator}" element has the text "Pagination Web Table"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.ID}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.NAME}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.PRICE}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.SELECT}"`,
          
        ])

        paginationWebTableDataForTesting.paginationOne.forEach((tableValue: PaginationWebTableValuesInterface) => {

        cy.prompt([
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`,
          `And hit the "${locator.paginationOneButtonLocator}" link`
          
        ])
      })

       paginationWebTableDataForTesting.paginationTwo.forEach((tableValue: PaginationWebTableValuesInterface) => {

        cy.prompt([
          `When hit the "${locator.paginationTwoButtonLocator}" link`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`
        ])
      })

      paginationWebTableDataForTesting.paginationTree.forEach((tableValue: PaginationWebTableValuesInterface) => {

        cy.prompt([
          `When hit the "${locator.paginationTreeButtonLocator}" link`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`
        ])
      })

      paginationWebTableDataForTesting.paginationFour.forEach((tableValue: PaginationWebTableValuesInterface) => {

        cy.prompt([
          `When hit the "${locator.paginationFourButtonLocator}" link`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
          `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`
        ])
      })
    })
  })

})