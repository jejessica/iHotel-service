import { iHotelPage } from './app.po';

describe('iHotel App', function() {
  let page: iHotelPage;

  beforeEach(() => {
    page = new iHotelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
