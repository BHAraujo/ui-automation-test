/// <reference types="cypress" />

import { fakerDataGenerator } from '../../support/fakerData/fakerDataGenerator.js'
import { dataEntryFormDataForTesting } from '../../support/pageObjects/dataEntryForm/dataForTesting/dataEntryFormDataForTesting.js'
import { ColorsEnum, CountriesEnum, SortedListEnum } from '../../support/pageObjects/dataEntryForm/enums/dataEntryFormEnum.js'
import type { DataEntryFormLocatorsDataInterface } from '../../support/pageObjects/dataEntryForm/interfaces/dataEntryFormInterface.js'
import type { DatePickersLocatorsInterface } from '../../support/pageObjects/dataEntryForm/interfaces/datePickersInterface.js'


describe('Automation Testing Practice', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('should fill all input and select all dropdown options', () => {
    cy.fixture('dataEntryFormJson').then((locator: DataEntryFormLocatorsDataInterface) => {
      cy.prompt([
        `When type "${dataEntryFormDataForTesting.name}" in the "${locator.nameInputLocator}" field`,
        `And type "${dataEntryFormDataForTesting.email}" in the "${locator.emailInputLocator}" field`,
        `And type "${dataEntryFormDataForTesting.phone}" in the "${locator.phoneInputLocator}" field`,
        `And type "${dataEntryFormDataForTesting.address}" in the "${locator.addressTextAreaLocator}" field`,
        `When click the "${locator.genderMaleRadioButtonLocator}" input`,
        `Then assert the "${locator.genderMaleRadioButtonLocator}" input is checked`,
        `And click the "${locator.sundayDayCheckBoxLocator}" input`,
        `Then assert the "${locator.sundayDayCheckBoxLocator}" input is checked`,
        `And click the "${locator.mondayDayCheckBoxLocator}" input`,
        `Then assert the "${locator.mondayDayCheckBoxLocator}" input is checked`,
        `And click the "${locator.tuesdayDayCheckBoxLocator}" input`,
        `Then assert the "${locator.tuesdayDayCheckBoxLocator}" input is checked`,
        `And click the "${locator.wednesdayDayCheckBoxLocator}" input`,
        `Then assert the "${locator.wednesdayDayCheckBoxLocator}" input is checked`,
        `And click the "${locator.thursdayDayCheckBoxLocator}" input`,
        `Then assert the "${locator.thursdayDayCheckBoxLocator}" input is checked`,
        `And click the "${locator.fridayDayCheckBoxLocator}" input`,
        `Then assert the "${locator.fridayDayCheckBoxLocator}" input is checked`,
        `And click the "${locator.saturdayDayCheckBoxLocator}" input`,
        `Then assert the "${locator.saturdayDayCheckBoxLocator}" input is checked`,
        `And select "${CountriesEnum.CANADA}" from the Country dropdown`,
        `Then and "${CountriesEnum.CANADA}" is selected`,
        `And select "${ColorsEnum.BLUE}" from the Colors dropdown`,
        `Then and "${ColorsEnum.BLUE}" is selected`,
        `And select "${SortedListEnum.DOG}" from the Sorted List dropdown`,
        `Then and "${SortedListEnum.DOG}" is selected`,
      ])

      cy.fixture('datePickersJson').then((locator: DatePickersLocatorsInterface) => {
        const currentDayNumber = locator.datePickerOneCurrentDayLocator.replace('?', fakerDataGenerator.generateCurrentDayNumber().toString())
        const euaCurrentDate = fakerDataGenerator.generateCurrentDateFormatByLocate('eu-US')
        const ptBrCurrentDate = fakerDataGenerator.generateCurrentDateFormatByLocate('pt-BR')
        const caCurrentDate = fakerDataGenerator.generateCurrentDateFormatCypress('en-CA')

        cy.prompt([
          `And click the ${locator.datePickerOneLocator} input`,
          `And click the ${currentDayNumber} button`,
          `Then confirm that the ${locator.datePickerOneLocator} element has the text ${euaCurrentDate}`,
          `And click the ${locator.datePickerTwoLocator} input`,
          `And click the ${currentDayNumber} button`,
          `Then confirm that the ${locator.datePickerTwoLocator} element has the text ${ptBrCurrentDate}`,
          `And fill the ${locator.datePickerThreeStartDateInputLocator} input with "${caCurrentDate}"`,
          `And fill the ${locator.datePickerThreeEndDateInputLocator} input with "${caCurrentDate}"`,
          `And click the ${locator.datePickerThreeSubmitButton} button`,
          `Then confirm that the "${locator.resultLocator}" element has the text "${locator.resultTextLocator}"`,
        ])
      })
    })
  })
})