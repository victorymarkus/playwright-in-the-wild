import {type Page} from "@playwright/test";

export class BasePage {

  constructor(protected readonly page: Page) {}

  async open(path: string) {
    await this.page.goto(path);
    await this.waitForPageLoad();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('load');
  }

  async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }

  async waitForDomContentLoaded() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async reloadPage() {
    await this.page.reload();
  }
}