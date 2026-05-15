import { type Page, type Locator } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly logo: Locator;
  readonly homeLink: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;
  readonly loginLink: Locator;
  readonly testCasesLink: Locator;
  readonly apiTestingLink: Locator;
  readonly videoTutorialsLink: Locator;
  readonly contactUsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = this.page.getByAltText('Website for automation practice');
    this.homeLink = page.locator('a[href="/"]');
    this.productsLink = page.locator('a[href="/products"]');
    this.cartLink = page.locator('a[href="/view_cart"]');
    this.loginLink = page.locator('a[href="/login"]');
    this.testCasesLink = page.locator('a[href="/test_cases"]');
    this.apiTestingLink = page.locator('a[href="/api_list"]');
    this.videoTutorialsLink = page.locator('a[href*="youtube.com"]');
    this.contactUsLink = page.locator('a[href="/contact_us"]');
  }

  async goToHome() {
    await this.homeLink.click();
  }

  async goToProducts() {
    await this.productsLink.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async goToLogin() {
    await this.loginLink.click();
  }

  async goToContactUs() {
    await this.contactUsLink.click();
  }
}