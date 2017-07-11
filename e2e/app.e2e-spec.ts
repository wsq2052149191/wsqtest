import { WsqtestPage } from './app.po';

describe('wsqtest App', () => {
  let page: WsqtestPage;

  beforeEach(() => {
    page = new WsqtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
