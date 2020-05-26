import { Selector } from 'testcafe';

fixture`Getting Started`.page`https://www.google.com/`;

test('My first test', async (t) => {
  await t.typeText('#google', 'John Smith').click('#submit-button');

  const articleHeader = await Selector('.result-content').find('h1');

  // Obtain the text of the article header
  const headerText = await articleHeader.innerText;
});
