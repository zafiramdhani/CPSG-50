import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class StartApp {
  constructor({ home }) {
    this._home = home;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._home.innerHTML = await page.render();
  }
}

export default StartApp;
