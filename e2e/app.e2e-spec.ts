import { TutorialTypescriptPage } from './app.po';

describe('tutorial-typescript App', () => {
  let page: TutorialTypescriptPage;

  beforeEach(() => {
    page = new TutorialTypescriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
