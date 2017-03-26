import { KrishnaProfileAppPage } from './app.po';

describe('krishna-profile-app App', () => {
  let page: KrishnaProfileAppPage;

  beforeEach(() => {
    page = new KrishnaProfileAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
