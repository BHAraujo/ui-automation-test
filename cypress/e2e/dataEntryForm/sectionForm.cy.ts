/// <reference types="cypress" />

import { SectionFormDescription, SectionFormTitles } from '../../support/pageObjects/dataEntryForm/enums/sectionFormEnum.js'
import type { SectionFormSectionsInterface } from '../../support/pageObjects/dataEntryForm/interfaces/sectionFormInterface.js'

describe('Automation Testing Practice', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  
   it('should be display all Section Form', () => {
    cy.fixture('sectionFormJson').then((locator: SectionFormSectionsInterface) => {

      cy.prompt([
          `When verify "${locator.sectionOne.sectionOneTextLocator}" element has the text "${SectionFormTitles.SECTION_ONE_TITLE}"`,
          `Then verify "${locator.sectionOne.paraOneTextLocator}" element contains "${SectionFormDescription.SECTION_ONE_DESCRIPTION}"`,
          `Then validate that the "${locator.sectionOne.inputOneTextLocator}" is empty`,
          `Then the "${locator.sectionOne.submitButtonOneLocator}" button should be enabled`
      ])

      cy.prompt([
          `When verify "${locator.sectionTwo.sectionOneTextLocator}" element has the text "${SectionFormTitles.SECTION_TWO_TITLE}"`,
          `Then verify "${locator.sectionTwo.paraOneTextLocator}" element contains "${SectionFormDescription.SECTION_TWO_DESCRIPTION}"`,
          `Then validate that the "${locator.sectionTwo.inputOneTextLocator}" is empty`,
          `Then the "${locator.sectionTwo.submitButtonOneLocator}" button should be enabled`
      ])

      cy.prompt([
          `When verify "${locator.sectionTree.sectionOneTextLocator}" element has the text "${SectionFormTitles.SECTION_TREE_TITLE}"`,
          `Then verify "${locator.sectionTree.paraOneTextLocator}" element contains "${SectionFormDescription.SECTION_TREE_DESCRIPTION}"`,
          `Then validate that the "${locator.sectionTree.inputOneTextLocator}" is empty`,
          `Then the "${locator.sectionTree.submitButtonOneLocator}" button should be enabled`
      ])

    })
  })
})