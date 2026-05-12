import { type Locator, type Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { loginSignUpLink, logoutLink } from "@utils/constants";
import { endpoints } from "@utils/endpoints";


export class LoginPage extends BasePage {
  readonly loginSignupLink: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly loginForm: Locator;

  constructor(page: Page) {
    super(page);
    this.loginSignupLink = this.page.getByText(loginSignUpLink);
    this.emailInput = this.page.getByTestId('login-email');
    this.passwordInput = this.page.getByTestId('login-password');
    this.loginButton = this.page.getByTestId('login-button');
    this.logoutButton = this.page.getByText(logoutLink);
    this.loginForm = this.page.locator('.login-form');
  }

  async open() {
    await super.open(endpoints.auth.login);
  }

  async login(email: string = process.env.USERNAME!, password: string = process.env.PASSWORD!) {
    await this.loginSignupLink.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}