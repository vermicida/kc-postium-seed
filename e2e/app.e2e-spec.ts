import { KcPostiumSeedPage } from './app.po';

describe('kc-postium-seed App', () => {
  let page: KcPostiumSeedPage;

  beforeEach(() => {
    page = new KcPostiumSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
