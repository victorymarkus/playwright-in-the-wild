import { test as base } from '@playwright/test';
import { LoginPage } from '@pages/login.page';
type Pages = {
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  page: async ({ baseURL, page }, use) => {
    await page.goto(baseURL!);
    await use(page);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login();
    await use(loginPage);
    await page.close();
  },
});
