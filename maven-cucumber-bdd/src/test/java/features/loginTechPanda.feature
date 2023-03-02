@login
Feature: Techpanda login page
  @test1
  Scenario: Login with empty Email Password
    Given Open My Account login
    When Enter Email with""
    And Enter Password with""
    And Click login button
   	Then Verify Email empty error message "This is a required field."
		And Verify Password empty error message "This is a required field."

		
		 @test2
  Scenario: Login with invalid Email
    Given Open My Account login
    When Enter Email with"tuem1111@123123"
    And Enter Password with"123456"
    And Click login button
		Then Verify Email invalid error message "Please enter a valid email address. For example johndoe@domain.com."

	@test3
  Scenario: Login with incorrect Email
    Given Open My Account login
    When Enter Email with"tuem34511@gmail.com"
    And Enter Password with"123456"
    And Click login button
   	Then Verify Email incorrect error message "Invalid login or password."
		 @test4
  Scenario: Login with invalid Password
    Given Open My Account login
    When Enter Email with"tuem1111@gmail.com"
    And Enter Password with"12a"
    And Click login button
   	Then Verify Password invalid error message "Please enter 6 or more characters without leading or trailing spaces."

		 @test5
  Scenario: Login with incorrect Email Password
    Given Open My Account login
    When Enter Email with"tuem34511@gmail.com"
    And Enter Password with"1234567"
    And Click login button
   	Then Verify Email Password incorrect error message "Invalid login or password."

	
		 @test6
  Scenario: Login with valid Email Password
    Given Open My Account login
    When Enter Email with"tuem1111@gmail.com"
    And Enter Password with"123456"
    And Click login button
   	Then Verify login success "tuem1111@gmail.com"

	