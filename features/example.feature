# features/documentation.feature
Feature: Example feature
  As a user of the test page
  I want to read some text
  So that I can be enlightened

  Scenario: Show text to read
    Given I am on the test page
    When I click on "SHOW"
    Then I should see "Lorem ipsum"

  Scenario: Dummy does nothing
    Given I am on the test page
    When I click on "DUMMY"
    Then I should see "Lorem ipsum"
