package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumberOptions.Hooks;
import pageObject.navigation.PageGeneratorManager;
import pageObject.user.MyDashboardPageObject;

public class MyDashboardPageStep {
	WebDriver driver;
	MyDashboardPageObject myDashboardPage;
	public MyDashboardPageStep() {
		this.driver = Hooks.openAndQuitBrowser();
		myDashboardPage = PageGeneratorManager.getMyDashboradPage(driver);
	}
	
	@Then("^Verify login success \"([^\"]*)\"$")
	public void verifyLoginSuccess(String email)  {
		Assert.assertTrue(myDashboardPage.getContactInforText(email));
	}
}
