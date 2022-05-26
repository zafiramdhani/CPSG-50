/* eslint-disable no-unused-vars */
import { Modal } from 'bootstrap';
import bg from '../public/hero-image2.png';

const Home = {
  render() {
    return `
      <div class="hero container">
        <div class="hero-title">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem reiciendis ipsum rem quia cumque.</p>
          <button type="button" class="btn btn-primary">Mulai</button>
        </div>
        <div class="hero-image">
          <img src="${bg}" alt="">
        </div>
      </div>
    `;
  },
};

export default Home;
