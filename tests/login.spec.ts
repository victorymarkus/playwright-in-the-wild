import { test } from '@fixtures/setup';
import { expect } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { HomePage } from '@pages/home.page';
import { invalidCredentials, loginErrorMessage, newUserData } from '@utils/constants';

test.describe('Login', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await expect(homePage.sliderCarousel).toBeVisible();
    loginPage = new LoginPage(page);
    await loginPage.header.goToLogin();
  });
  
  test('Register a new user', {
    tag: ['@tc-001', '@signup', '@smoke']
    }, async () => {
    await loginPage.fillSignUpForm(newUserData);
    await loginPage.submitSignUpForm();
    await expect(loginPage.accountCreatedMessage).toBeVisible();
    await loginPage.clickContinue();
    await expect(loginPage.loggedInUser).toHaveText(`Logged in as ${newUserData.name}`);
    await loginPage.deleteAccount();
    await expect(loginPage.accountDeletedMessage).toBeVisible();
    await loginPage.clickContinue();
  });

  test('Login with valid credentials', {
    tag: ['@tc-002', '@login', '@smoke'],
  }, async () => {
    await loginPage.login();
    await expect(loginPage.logoutButton).toBeVisible();
  });

  test ('Login with invalid credentials', {
    tag: ['@tc-003', '@login', '@smoke']
  }, async () => {
    await loginPage.login(invalidCredentials.email, invalidCredentials.password);
    await expect(loginPage.loginForm.getByText(loginErrorMessage)).toBeVisible();
  })

});