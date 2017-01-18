import { TournamentBoardPage } from './app.po';

describe('tournament-board App', function() {
  let page: TournamentBoardPage;

  beforeEach(() => {
    page = new TournamentBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
