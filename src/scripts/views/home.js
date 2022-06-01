/* eslint-disable no-unused-vars */
import { Modal } from 'bootstrap';
import './navbar-config';
import tipsContent from './tips-content';
import bg from '../public/hero-image2.png';
import dollarIcon from '../public/dollar-regular-60s.png';
import globeIcon from '../public/globe-regular-60s.png';
import boltIcon from '../public/bolt-circle-regular-60s.png';
import userIcon from '../public/user-x-regular-60s.png';

const Home = {
  render() {
    return `
      <section class="hero container" id="home">
        <div class="hero-title">
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem reiciendis ipsum rem quia cumque.</p>
          <a type="button" href="#tes" class="btn btn-primary">Mulai</a>
        </div>
        <div class="hero-image">
          <img src="${bg}" alt="">
        </div>
      </section>
        
      <section class="tes container" id="tes">
        <div class="tes-title">
          <h3>Kenapa EYETEST?</h3>
        </div>
        <div class="tes-cards">
          <div class="card">
            <img class="card-img-top" src="${dollarIcon}">
            <div class="card-body">
              <p class="card-text">100% Gratis</p>
            </div>
          </div>
          <div class="card">
            <img src="${globeIcon}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Akses dimana saja dan<br>kapan saja</p>
            </div>
          </div>
          <div class="card">
            <img src="${boltIcon}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Mudah dan cepat</p>
            </div>
          </div>
          <div class="card">
            <img src="${userIcon}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">Tidak perlu membuat akun</p>
            </div>
          </div>
        </div>
        <div class="tes-button">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Coba Sekarang >>
          </button>
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Sebelum memulai...</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary">Lanjutkan</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="tips container" id="tips">
        <div class="tips-title">
          <h3>Tips</h3>
        </div>
        <div class="tips-wrapper">
          <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Apa itu EYETEST ?</a>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              ${tipsContent.whatIsEyetest}
            </div>
          </div>
        </div>

        <div class="tips-wrapper">
          <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Bagaimana cara penggunaan EYETEST ?</a>
          <div class="collapse" id="collapseExample2">
            <div class="card card-body">
              ${tipsContent.howToUseEyetest}
            </div>
          </div>
        </div>

        <div class="tips-wrapper">
          <a class="btn btn-light" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">Bagaimana cara menjaga kesehatan mata ?</a>
          <div class="collapse" id="collapseExample3">
            <div class="card card-body">
              Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
      </section>
    `;
  },
};

export default Home;
