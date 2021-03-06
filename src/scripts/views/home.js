/* eslint-disable no-unused-vars */
import './navbar-config';
import { Modal } from 'bootstrap';
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
          <h1>Tes Visus Mata untuk Uji Ketajaman Penglihatan</h1>
          <p>Tes Visus Mata dengan Snellen Chart Online dengan mudah & praktis.</p>
          <a type="button" href="#tes" class="btn btn-primary">Mulai</a>
        </div>
        <div class="hero-image">
          <img src="${bg}" alt="">
        </div>
      </section>
        
      <section class="tes container" id="tes">
        <div class="tes-title text-center">
          <h3>Kenapa EYETEST?</h3>
        </div>
        <div class="tes-cards">
          <div class="card">
            <img class="card-img-top" src="${dollarIcon}" alt="Free">
            <div class="card-body">
              <p class="card-text">100% Gratis</p>
            </div>
          </div>
          <div class="card">
            <img src="${globeIcon}" class="card-img-top" alt="Access anywhere">
            <div class="card-body">
              <p class="card-text">Akses dimana saja dan<br>kapan saja</p>
            </div>
          </div>
          <div class="card">
            <img src="${boltIcon}" class="card-img-top" alt="Fast and Easy">
            <div class="card-body">
              <p class="card-text">Mudah dan cepat</p>
            </div>
          </div>
          <div class="card">
            <img src="${userIcon}" class="card-img-top" alt="No account needed">
            <div class="card-body">
              <p class="card-text">Tidak perlu membuat akun</p>
            </div>
          </div>
        </div>

        <div class="tes-button">
          <a href="#/start-test" type="button" class="btn btn-primary">
            Coba Sekarang <i class="fa-solid fa-angles-right"></i>
          </a>
        </div>
      </section>

      <section class="tips container" id="tips">
        <div class="tips-title">
          <h3>Tips</h3>
        </div>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Apa itu EYETEST?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${tipsContent.whatIsEyetest}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Bagaimana cara menggunakan EYETEST?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                ${tipsContent.howToUseEyetest}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Bagaimana tips untuk menjaga kesehatan mata?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
              ${tipsContent.howToMaintainEyeHealth}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },
};

export default Home;
