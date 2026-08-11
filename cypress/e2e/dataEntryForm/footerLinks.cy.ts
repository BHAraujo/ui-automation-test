/// <reference types="cypress" />

import { fakerDataGenerator } from '../../support/fakerData/fakerDataGenerator.js'
import { dataEntryFormDataForTesting } from '../../support/pageObjects/dataEntryForm/dataForTesting/dataEntryFormDataForTesting.js'
import { ColorsEnum, CountriesEnum, SortedListEnum } from '../../support/pageObjects/dataEntryForm/enums/dataEntryFormEnum.js'
import type { DataEntryFormLocatorsDataInterface } from '../../support/pageObjects/dataEntryForm/interfaces/dataEntryFormInterface.js'
import type { DatePickersLocatorsInterface } from '../../support/pageObjects/dataEntryForm/interfaces/datePickersInterface.js'
import type { SectionFormSectionsInterface } from '../../support/pageObjects/dataEntryForm/interfaces/sectionFormInterface.js'

describe('Automation Testing Practice', () => {
  beforeEach(() => {
    cy.visit("/")
  })

     it('should be available all Footer Links', () => {
    cy.fixture('sectionFormJson').then((locator: SectionFormSectionsInterface) => {

      cy.prompt([
          'Then the current URL should be "https://testautomationpractice.blogspot.com/"',  
          `When verify "#PageList1 > h2" element has the text "Footer Links"`,
          `And hit the "#PageList1 > .widget-content > ul > :nth-child(2) > a" link`,
          'Then the current URL should be "https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html"',
      ])
    })
  })
})