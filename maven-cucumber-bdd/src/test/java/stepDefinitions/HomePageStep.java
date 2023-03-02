package stepDefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumberOptions.Hooks;
import pageObject.navigation.PageGeneratorManager;
import pageObject.user.UserHomePageObject;


public class HomePageStep {
	WebDriver driver;
	UserHomePageObject userHomePage;
	
	public HomePageStep() {
		this.driver = Hooks.openAndQuitBrowser();
		userHomePage = PageGeneratorManager.getUserHomePage(driver);
		
	}
	@Given("^Open My Account login$")
	public void openMyAccountLogin() {
	    userHomePage.clickToMyAccountLink();
	}
}
