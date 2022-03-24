Feature: SpotOn interview

Background: 
  Given I am on the homepage

  Scenario Outline: As a customer, I want adopt Brooke, add Chewy Toy and Teavel Carrier and pay with Check
    When I adopt puppy "Brook"
    And I add "Chew Toy" product for puppy "Brook"
    * I add "Travel Carrier" product for puppy "Brook"
    * I complete adoption with following details:
      | name      | address           | email             | payType |
      | Customer  | 1098 Testers ST.  | tester@spoton.com | Check   |
    Then Thanks notice should be visible

  Scenario Outline: As a customer, I want adopt Sparky, add Collar & Leash and pay with Credit card
    When I go to page "2"
    And I can see puppy "Sparky"
    * I adopt puppy "Sparky"
    * I add "Collar & Leash" product for puppy "Sparky"
    * I complete adoption with following details:
      | name      | address           | email             | payType       |
      | Customer  | 1098 Testers ST.  | tester@spoton.com | Credit card   |
    Then Thanks notice should be visible

  Scenario Outline: As a customer, I want adopt 2 Random Dogs, add a Collar & Leash to each and pay with Credit Card
    When I adopt random puppy
    And I want to adopt another puppy
    * I go to page "2"
    * I adopt random puppy
    * I add "Collar & Leash" product for each puppie
    * I complete adoption with following details:
      | name      | address           | email             | payType       |
      | Customer  | 1098 Testers ST.  | tester@spoton.com | Credit card   |
    Then Thanks notice should be visible

  Scenario Outline: As a customer. I want adopt 2 Random Dogs, add a 3 Random Accessories to first and pay with Credit Card
    When I adopt random puppy
    And I want to adopt another puppy
    * I go to page "2"
    * I adopt random puppy
    * I add "3" products for puppy number "1"
    * I complete adoption with following details:
      | name      | address           | email             | payType       |
      | Customer  | 1098 Testers ST.  | tester@spoton.com | Credit card   |
    Then Thanks notice should be visible