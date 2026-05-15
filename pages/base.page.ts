import { type Page } from '@playwright/test';
import { HeaderComponent } from '@components/header.component';

export class BasePage {
  header: HeaderComponent;

  constructor(protected readonly page: Page) {
    this.header = new HeaderComponent(this.page);
  }
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