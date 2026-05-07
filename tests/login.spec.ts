import { test } from '@fixtures/setup';
import { LoginPage } from '@pages/login.page';
import { invalidCredentials } from '@utils/constants';

test.describe('Login', () => {
  let loginPage: LoginPage;
  test('Login with valid credentials', {
    tag: ['@login', '@smoke'],
  }, async ({ loginPage }) => {
    await loginPage.verifyLoginSuccess();
  });

  test ('Login with invalid credentials', async ({page}) => {
    loginPage = new LoginPage(page);
    await loginPage.login(invalidCredentials.email, invalidCredentials.password);
    await loginPage.verifyLoginFailure();
  })
});