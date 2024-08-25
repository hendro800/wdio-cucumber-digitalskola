@additem
Feature: add Item and validate item on cart

    Background:
    Given user is on Login page
    And user login using 'standard_user' as username and using 'secret_sauce' as password

    Scenario Outline: add item
    And  user is on Home page
    Then user add '<item>' to cart

    Examples:
    | item |
    | #add-to-cart-sauce-labs-backpack |
    | #add-to-cart-sauce-labs-fleece-jacket |

    Scenario: Validate Item On Cart Page
    And user click Cart Icon
    Then Validate item is on the Page

