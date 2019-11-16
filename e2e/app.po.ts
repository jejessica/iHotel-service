import { browser, element, by } from 'protractor';

export class iHotelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ih-root h1')).getText();
  }
}
