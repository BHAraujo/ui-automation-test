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

  // it('should be able to do upload single file and upload multiple files', () => {
  //   cy.fixture('uploadFilesJson').then((locator: UploadFilesLocatorsInterface) => {
  //     console.log("Uploading single file...")
  //     cy.uploadFile(locator.singleFileInputLocator, [UploadFilesEnum.FILE_1])

  //     console.log("Uploading multiple files...")
  //     cy.uploadFile(locator.multipleFileInputLocator, [UploadFilesEnum.FILE_2, UploadFilesEnum.FILE_3])

  //     cy.prompt([
  //       `When the user clicks the "${locator.singleFileButtonLocator}" button`,
  //       `Then confirm that the "${locator.singleFileStatusTextLocator}" element has the text "${uploadFilesDataForTesting.file_one_text}"`,
  //       `When the user clicks the "${locator.multipleFilesButtonLocator}" button`,
  //       `Then verify "${locator.multipleFileStatusTextLocator}" contains "${uploadFilesDataForTesting.file_two_and_three_text}"`
  //     ])
  //   })
  // })

  // it('should be display all data into the Static Web Table', () => {
  //   cy.fixture('staticWebTableJson').then((locator: StaticWebTableLocatorsInterface) => {

  //     cy.prompt([
  //         `Then verify "${locator.titleTextLocator}" element has the text "Static Web Table"`,
  //         `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.BOOK_NAME}"`,
  //         `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.AUTHOR}"`,
  //         `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.SUBJECT}"`,
  //         `Then verify "${locator.staticWebTableLocator}" element contains "${StaticWebTableHeaders.PRICE}"`,
  //     ])

  //     staticWebTableDataForTesting.staticWebTable.forEach((tableValue: BookDataInterface) => {
      
  //     cy.prompt([
  //       `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.bookName}"`,
  //       `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.author}"`,
  //       `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.subject}"`,
  //       `Then verify "${locator.staticWebTableLocator}" element contains "${tableValue.price}"`,
  //     ])

  //     })

  //   })
  // })

  // it('should be display all data into the Dynamic Web Table', () => {
  //   cy.fixture('dinamicWebTableJson').then((locator: DynamicWebTableLocatorsInterface) => {
  //     cy.prompt([
  //       `Then verify "${locator.titleTextLocator}" element has the text "Dynamic Web Table"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.NAME}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.DISK}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.NETWORK}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.MEMORY}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${DynamicWebTableHeadersEnum.CPU}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.FIREFOX}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.CHROME}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.SYSTEM}"`,
  //       `Then verify "${locator.dinamicWebTableLocator}" element contains "${BrowserNames.INTERNET_EXPLORER}"`
  //     ])

  //     console.log('Starting display values assertions...')

  //     cy.get(locator.displayValues.cpuLoadOfChromeProcess).invoke('text').then(elementText => {
  //       cy.prompt([
  //         `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
  //       ])
  //     })

  //     cy.get(locator.displayValues.memorySizeOfFirefoxProcess).invoke('text').then(elementText => {
  //       cy.prompt([
  //         `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
  //       ])
  //     })

  //     cy.get(locator.displayValues.netWorkSpeedOfChromeProcess).invoke('text').then(elementText => {
  //       cy.prompt([
  //         `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
  //       ])
  //     })

  //     cy.get(locator.displayValues.diskSpaceOfFirefoxProcess).invoke('text').then(elementText => {
  //       cy.prompt([
  //         `Then verify "${locator.dinamicWebTableLocator}" element contains "${elementText}"`,
  //       ])
  //     })
  //   })
  // })

  // it('should be display all data into the Pagination Web Table', () => {
  //   cy.fixture('paginationWebTableJson').then((locator: PaginationWebTableLocatorsInterface) => {
      
  //       cy.prompt([
  //         `Then verify "${locator.titleTextLocator}" element has the text "Pagination Web Table"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.ID}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.NAME}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.PRICE}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${PaginationWebTableHeadersEnum.SELECT}"`,
          
  //       ])

  //       paginationWebTableDataForTesting.paginationOne.forEach((tableValue: PaginationWebTableValuesInterface) => {

  //       cy.prompt([
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`,
  //         `And hit the "${locator.paginationOneButtonLocator}" link`
          
  //       ])
  //     })

  //      paginationWebTableDataForTesting.paginationTwo.forEach((tableValue: PaginationWebTableValuesInterface) => {

  //       cy.prompt([
  //         `When hit the "${locator.paginationTwoButtonLocator}" link`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`
  //       ])
  //     })

  //     paginationWebTableDataForTesting.paginationTree.forEach((tableValue: PaginationWebTableValuesInterface) => {

  //       cy.prompt([
  //         `When hit the "${locator.paginationTreeButtonLocator}" link`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`
  //       ])
  //     })

  //     paginationWebTableDataForTesting.paginationFour.forEach((tableValue: PaginationWebTableValuesInterface) => {

  //       cy.prompt([
  //         `When hit the "${locator.paginationFourButtonLocator}" link`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.id}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.name}"`,
  //         `Then verify "${locator.paginationWebTableLocator}" element contains "${tableValue.price}"`
  //       ])
  //     })
  //   })
  // })

  //  it('should be display all Section Form', () => {
  //   cy.fixture('sectionFormJson').then((locator: SectionFormSectionsInterface) => {

  //     cy.prompt([
  //         `When verify "${locator.sectionOne.sectionOneTextLocator}" element has the text "${SectionFormTitles.SECTION_ONE_TITLE}"`,
  //         `Then verify "${locator.sectionOne.paraOneTextLocator}" element contains "${SectionFormDescription.SECTION_ONE_DESCRIPTION}"`,
  //         `Then validate that the "${locator.sectionOne.inputOneTextLocator}" is empty`,
  //         `Then the "${locator.sectionOne.submitButtonOneLocator}" button should be enabled`
  //     ])

  //     cy.prompt([
  //         `When verify "${locator.sectionTwo.sectionOneTextLocator}" element has the text "${SectionFormTitles.SECTION_TWO_TITLE}"`,
  //         `Then verify "${locator.sectionTwo.paraOneTextLocator}" element contains "${SectionFormDescription.SECTION_TWO_DESCRIPTION}"`,
  //         `Then validate that the "${locator.sectionTwo.inputOneTextLocator}" is empty`,
  //         `Then the "${locator.sectionTwo.submitButtonOneLocator}" button should be enabled`
  //     ])

  //     cy.prompt([
  //         `When verify "${locator.sectionTree.sectionOneTextLocator}" element has the text "${SectionFormTitles.SECTION_TREE_TITLE}"`,
  //         `Then verify "${locator.sectionTree.paraOneTextLocator}" element contains "${SectionFormDescription.SECTION_TREE_DESCRIPTION}"`,
  //         `Then validate that the "${locator.sectionTree.inputOneTextLocator}" is empty`,
  //         `Then the "${locator.sectionTree.submitButtonOneLocator}" button should be enabled`
  //     ])

  //   })
  // })

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