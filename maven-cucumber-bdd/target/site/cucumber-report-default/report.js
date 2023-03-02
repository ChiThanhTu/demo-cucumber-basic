$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginTechPanda.feature");
formatter.feature({
  "line": 2,
  "name": "Techpanda login page",
  "description": "",
  "id": "techpanda-login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Login with empty Email Password",
  "description": "",
  "id": "techpanda-login-page;login-with-empty-email-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open My Account login",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter Email with\"\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Enter Password with\"\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Verify Email empty error message \"This is a required field.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify Password empty error message \"This is a required field.\"",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStep.openMyAccountLogin()"
});
formatter.result({
  "duration": 7945976000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "LoginPageStep.enterEmailWith(String)"
});
formatter.result({
  "duration": 1239662100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "LoginPageStep.enterPasswordWith(String)"
});
formatter.result({
  "duration": 1134498200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.clickLoginButton()"
});
formatter.result({
  "duration": 1128670400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 34
    }
  ],
  "location": "LoginPageStep.verifyEmailEmptyErrorMessage(String)"
});
formatter.result({
  "duration": 1113831900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a required field.",
      "offset": 37
    }
  ],
  "location": "LoginPageStep.verifyPasswordEmptyErrorMessage(String)"
});
formatter.result({
  "duration": 1092252800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with invalid Email",
  "description": "",
  "id": "techpanda-login-page;login-with-invalid-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Open My Account login",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Enter Email with\"tuem1111@123123\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Enter Password with\"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify Email invalid error message \"Please enter a valid email address. For example johndoe@domain.com.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.openMyAccountLogin()"
});
formatter.result({
  "duration": 2172876400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tuem1111@123123",
      "offset": 17
    }
  ],
  "location": "LoginPageStep.enterEmailWith(String)"
});
formatter.result({
  "duration": 1136631800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "LoginPageStep.enterPasswordWith(String)"
});
formatter.result({
  "duration": 1163229400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.clickLoginButton()"
});
formatter.result({
  "duration": 1124478600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter a valid email address. For example johndoe@domain.com.",
      "offset": 36
    }
  ],
  "location": "LoginPageStep.verifyEmailInvalidErrorMessage(String)"
});
formatter.result({
  "duration": 1154908400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login with incorrect Email",
  "description": "",
  "id": "techpanda-login-page;login-with-incorrect-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@test3"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Open My Account login",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Enter Email with\"tuem34511@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Enter Password with\"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify Email incorrect error message \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.openMyAccountLogin()"
});
formatter.result({
  "duration": 2198785700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tuem34511@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginPageStep.enterEmailWith(String)"
});
formatter.result({
  "duration": 1145924700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "LoginPageStep.enterPasswordWith(String)"
});
formatter.result({
  "duration": 1126997300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.clickLoginButton()"
});
formatter.result({
  "duration": 2231071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login or password.",
      "offset": 38
    }
  ],
  "location": "LoginPageStep.verifyEmailIncorrectErrorMessage(String)"
});
formatter.result({
  "duration": 1079152500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Login with invalid Password",
  "description": "",
  "id": "techpanda-login-page;login-with-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@test4"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Open My Account login",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "Enter Email with\"tuem1111@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Enter Password with\"12a\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Verify Password invalid error message \"Please enter 6 or more characters without leading or trailing spaces.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.openMyAccountLogin()"
});
formatter.result({
  "duration": 2224648200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tuem1111@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginPageStep.enterEmailWith(String)"
});
formatter.result({
  "duration": 1190331900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12a",
      "offset": 20
    }
  ],
  "location": "LoginPageStep.enterPasswordWith(String)"
});
formatter.result({
  "duration": 1125742100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.clickLoginButton()"
});
formatter.result({
  "duration": 1107960500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter 6 or more characters without leading or trailing spaces.",
      "offset": 39
    }
  ],
  "location": "LoginPageStep.verifyPasswordInvalidErrorMessage(String)"
});
formatter.result({
  "duration": 1081186900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Login with incorrect Email Password",
  "description": "",
  "id": "techpanda-login-page;login-with-incorrect-email-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@test5"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "Open My Account login",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "Enter Email with\"tuem34511@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Enter Password with\"1234567\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Verify Email Password incorrect error message \"Invalid login or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.openMyAccountLogin()"
});
formatter.result({
  "duration": 1910633500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tuem34511@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginPageStep.enterEmailWith(String)"
});
formatter.result({
  "duration": 1195739200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567",
      "offset": 20
    }
  ],
  "location": "LoginPageStep.enterPasswordWith(String)"
});
formatter.result({
  "duration": 1192138200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.clickLoginButton()"
});
formatter.result({
  "duration": 2562211700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login or password.",
      "offset": 47
    }
  ],
  "location": "LoginPageStep.verifyEmailPasswordIncorrectErrorMessage(String)"
});
formatter.result({
  "duration": 1072401100,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Login with valid Email Password",
  "description": "",
  "id": "techpanda-login-page;login-with-valid-email-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@test6"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "Open My Account login",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "Enter Email with\"tuem1111@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Enter Password with\"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click login button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Verify login success \"tuem1111@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStep.openMyAccountLogin()"
});
formatter.result({
  "duration": 1946959600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tuem1111@gmail.com",
      "offset": 17
    }
  ],
  "location": "LoginPageStep.enterEmailWith(String)"
});
formatter.result({
  "duration": 1141397600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 20
    }
  ],
  "location": "LoginPageStep.enterPasswordWith(String)"
});
formatter.result({
  "duration": 1148013400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.clickLoginButton()"
});
formatter.result({
  "duration": 2636618200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tuem1111@gmail.com",
      "offset": 22
    }
  ],
  "location": "MyDashboardPageStep.verifyLoginSuccess(String)"
});
formatter.result({
  "duration": 1127771700,
  "status": "passed"
});
});