import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class StartApp {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
  }
}

export default StartApp;
