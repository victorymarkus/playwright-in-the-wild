import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';
import { logoutLink } from '@utils/constants';
import { endpoints } from '@utils/endpoints';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logoutButton: Locator;
  readonly loginForm: Locator;
  readonly signUpForm: Locator;
  readonly signUpNameInput: Locator;
  readonly signUpEmailInput: Locator;
  readonly signUpButton: Locator;
  readonly accountInformation: Locator;
  readonly signUpTitle: Locator;
  readonly signUpPasswordInput: Locator;
  readonly dayOfBirthSelect: Locator;
  readonly monthOfBirthSelect: Locator;
  readonly yearOfBirthSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly offersCheckbox: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyNameInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedMessage: Locator;
  readonly continueButton: Locator;
  readonly loggedInUser: Locator;
  readonly deleteAccountButton: Locator;
  readonly accountDeletedMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = this.page.getByTestId('login-email');
    this.passwordInput = this.page.getByTestId('login-password');
    this.loginButton = this.page.getByTestId('login-button');
    this.logoutButton = this.page.getByText(logoutLink);
    this.loginForm = this.page.locator('.login-form');
    this.signUpForm = this.page.locator('.signup-form');
    this.signUpNameInput = this.signUpForm.getByTestId('signup-name');
    this.signUpEmailInput = this.signUpForm.getByTestId('signup-email');
    this.signUpButton = this.signUpForm.getByTestId('signup-button');
    this.accountInformation = this.page.getByText('Enter Account Information');
    this.signUpTitle = this.page.getByTestId('title');
    this.signUpPasswordInput = this.page.getByTestId('password');
    this.dayOfBirthSelect = this.page.getByTestId('days');
    this.monthOfBirthSelect = this.page.getByTestId('months');
    this.yearOfBirthSelect = this.page.getByTestId('years');
    this.newsletterCheckbox = this.page.locator('#newsletter');
    this.offersCheckbox = this.page.locator('#optin');
    this.firstNameInput = this.page.getByTestId('first_name');
    this.lastNameInput = this.page.getByTestId('last_name');
    this.companyNameInput = this.page.getByTestId('company');
    this.address1Input = this.page.getByTestId('address');
    this.address2Input = this.page.getByTestId('address2');
    this.countrySelect = this.page.getByTestId('country');
    this.stateInput = this.page.getByTestId('state');
    this.cityInput = this.page.getByTestId('city');
    this.zipcodeInput = this.page.getByTestId('zipcode');
    this.mobileNumberInput = this.page.getByTestId('mobile_number');
    this.createAccountButton = this.page.getByTestId('create-account');
    this.accountCreatedMessage = this.page.getByTestId('account-created');
    this.continueButton = this.page.getByTestId('continue-button');
    this.loggedInUser = this.page.locator('li a:has-text("Logged in as")');
    this.deleteAccountButton = this.page.getByText('Delete Account');
    this.accountDeletedMessage = this.page.getByTestId('account-deleted');
  }

  async open() {
    await super.open(endpoints.auth.login);
  }

  async login(email: string = process.env.USERNAME!, password: string = process.env.PASSWORD!) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async fillSignUpForm(userData: {
    name: string;
    email: string;
    password: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    newsletter: boolean;
    offers: boolean;
    firstName: string;
    lastName: string;
    companyName: string;
    address1: string;
    address2?: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
  }) {
    await this.signUpNameInput.fill(userData.name);
    await this.signUpEmailInput.fill(userData.email);
    await this.signUpButton.click();
    await this.accountInformation.waitFor();
    await this.signUpPasswordInput.fill(userData.password);
    await this.dayOfBirthSelect.selectOption(userData.dayOfBirth);
    await this.monthOfBirthSelect.selectOption(userData.monthOfBirth);
    await this.yearOfBirthSelect.selectOption(userData.yearOfBirth);
    if (userData.newsletter) {
      await this.newsletterCheckbox.check();
    }
    if (userData.offers) {
      await this.offersCheckbox.check();
    }
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.companyNameInput.fill(userData.companyName);
    await this.address1Input.fill(userData.address1);
    if (userData.address2) {
      await this.address2Input.fill(userData.address2);
    }
    await this.countrySelect.selectOption(userData.country);
    await this.stateInput.fill(userData.state);
    await this.cityInput.fill(userData.city);
    await this.zipcodeInput.fill(userData.zipcode);
    await this.mobileNumberInput.fill(userData.mobileNumber);
  }

  async submitSignUpForm() {
    await this.createAccountButton.click();
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async deleteAccount() {
    await this.deleteAccountButton.click();
  }
}