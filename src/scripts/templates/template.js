import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class StartApp {
  constructor({ home, startTest }) {
    this._home = home;
    this._startTest = startTest;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._home.innerHTML = await page.render();
    await page?.afterRender();
  }
}

export default StartApp;
