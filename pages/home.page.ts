
import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly sliderCarousel: Locator;

  constructor(page: Page) {
    super(page);
    this.sliderCarousel = this.page.locator('#slider-carousel');
  }
}