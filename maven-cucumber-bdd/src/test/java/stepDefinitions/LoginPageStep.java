package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumberOptions.Hooks;
import pageObject.navigation.PageGeneratorManager;
import pageObject.user.UserLoginPageObject;

public class LoginPageStep {
	WebDriver driver;
	UserLoginPageObject userLoginPage;

	public LoginPageStep() {
		this.driver = Hooks.openAndQuitBrowser();
		userLoginPage = PageGeneratorManager.getUserLoginPage(driver);
	}

	@When("^Enter Email with\"([^\"]*)\"$")
	public void enterEmailWith(String email) {
		userLoginPage.inputToEmailAddressTextbox(email);
	}

	@When("^Enter Password with\"([^\"]*)\"$")
	public void enterPasswordWith(String password) {
		userLoginPage.inputToPasswordTextbox(password);

	}

	@When("^Click login button$")
	public void clickLoginButton() {
		userLoginPage.clickToLoginButton();

	}

	@Then("^Verify Email empty error message \"([^\"]*)\"$")
	public void verifyEmailEmptyErrorMessage(String message) {
		Assert.assertEquals(userLoginPage.getEmailAddressEmptyErrorMessage(), message);

	}

	@Then("^Verify Password empty error message \"([^\"]*)\"$")
	public void verifyPasswordEmptyErrorMessage(String message) {
		Assert.assertEquals(userLoginPage.getPasswordEmptyErrorMessage(), message);

	}

//	@When("^Close Application$")
//	public void closeApplication() {
//		driver.quit();
//
//	}

	@Then("^Verify Email invalid error message \"([^\"]*)\"$")
	public void verifyEmailInvalidErrorMessage(String message) {
		Assert.assertEquals(userLoginPage.getEmailAddressInvalidErrorMessage(), message);

	}

	@Then("^Verify Email incorrect error message \"([^\"]*)\"$")
	public void verifyEmailIncorrectErrorMessage(String message) {
		Assert.assertEquals(userLoginPage.getEmailAddressPasswordIncorrectMessage(), message);

	}	

	@Then("^Verify Password invalid error message \"([^\"]*)\"$")
	public void verifyPasswordInvalidErrorMessage(String message) {
		Assert.assertEquals(userLoginPage.getPasswordInvalidErrorMessage(), message);

	}


	@Then("^Verify Email Password incorrect error message \"([^\"]*)\"$")
	public void verifyEmailPasswordIncorrectErrorMessage(String message) {
		Assert.assertEquals(userLoginPage.getEmailAddressPasswordIncorrectMessage(), message);

	}

	

}