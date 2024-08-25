@login
Feature: Login Test

  Background:
    Given user is on Login page
 
  @positive @tc-1 @regression @smoketest
  Scenario Outline: Success login
    When user login using '<username>' as username and '<password>' as password
    Then user should be redirected to homepage

  Examples:
  | username | password |
  | standard_user | secret_sauce |
  | visual_user | secret_sauce |


  @negative @tc-2
  Scenario: Login with wrong password
    And user input "standard_user" as username
    And user input "very_wrong" as password
    When user click login button
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"

