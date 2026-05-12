import { test } from '@fixtures/setup';
import { expect } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
import { invalidCredentials, loginErrorMessage } from '@utils/constants';

test.describe('Login', () => {
  let loginPage: LoginPage;
  test('Login with valid credentials', {
    tag: ['@login', '@smoke'],
  }, async ({ loginPage }) => {
    await expect(loginPage.logoutButton).toBeVisible();
  });

  test ('Login with invalid credentials', async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.login(invalidCredentials.email, invalidCredentials.password);
    await expect(loginPage.loginForm.getByText(loginErrorMessage)).toBeVisible();
  })
});