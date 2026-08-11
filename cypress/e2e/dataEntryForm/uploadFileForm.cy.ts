/// <reference types="cypress" />

import type { UploadFilesLocatorsInterface } from '../../support/pageObjects/dataEntryForm/interfaces/uploadFilesInterface.js'
import { uploadFilesDataForTesting } from '../../support/pageObjects/dataEntryForm/dataForTesting/uploadFilesDataForTesting.js'
import { UploadFilesEnum } from '../../support/pageObjects/dataEntryForm/enums/uploadFilesEnum.js'


describe('Automation Testing Practice', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('should be able to do upload single file and upload multiple files', () => {
    cy.fixture('uploadFilesJson').then((locator: UploadFilesLocatorsInterface) => {
      console.log("Uploading single file...")
      cy.uploadFile(locator.singleFileInputLocator, [UploadFilesEnum.FILE_1])

      console.log("Uploading multiple files...")
      cy.uploadFile(locator.multipleFileInputLocator, [UploadFilesEnum.FILE_2, UploadFilesEnum.FILE_3])

      cy.prompt([
        `When the user clicks the "${locator.singleFileButtonLocator}" button`,
        `Then confirm that the "${locator.singleFileStatusTextLocator}" element has the text "${uploadFilesDataForTesting.file_one_text}"`,
        `When the user clicks the "${locator.multipleFilesButtonLocator}" button`,
        `Then verify "${locator.multipleFileStatusTextLocator}" contains "${uploadFilesDataForTesting.file_two_and_three_text}"`
      ])
    })
  })

})