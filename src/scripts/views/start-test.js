const arrTest = [];
const setTestObject = (id, result) => ({ id, result });

const StartTest = {
  render() {
    return `
      <div class="start-test_wrapper container text-center">
        <img class="snellen-chart" src="https://i.ibb.co/k10TJtG/vision-source-eye-chart-1.png" alt="Snellen chart">
        <p>This Snellen chart is obtained from <a href="https://visionsource.com/patients/free-eye-chart-download/" target="_blank" rel="noopener noreferrer">Visionsource.com</a></p>
        <strong class="mt-5">Pilih baris terakhir yang dapat Anda baca</strong>
        <div id="buttons-container" class="mb-5 mt-3">
          <button class="btn btn-success btn-test" data-test="20/200 (6/60)">1</button>
          <button class="btn btn-success btn-test" data-test="20/100 (6/30)">2</button>
          <button class="btn btn-success btn-test" data-test="20/80 (6/24)">3</button>
          <button class="btn btn-success btn-test" data-test="20/63 (6/19.5)">4</button>
          <button class="btn btn-success btn-test" data-test="20/50 (6/15)">5</button>
          <button class="btn btn-success btn-test" data-test="20/40 (6/12)">6</button>
          <button class="btn btn-success btn-test" data-test="20/32 (6/10)">7</button>
          <button class="btn btn-success btn-test" data-test="20/25 (6/7.5)">8</button>
          <button class="btn btn-success btn-test" data-test="20/20 (6/6)">9</button>
        </div>
        <div class="test__container">
          
        </div>
      </div>
    `;
  },

  afterRender() {
    const buttons = document.querySelectorAll('.btn-test');
    const testContainer = document.querySelector('.test__container');
    const buttonsContainer = document.getElementById('buttons-container');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const id = new Date();
        const valueInput = button.dataset.test;
        const testObject = setTestObject(id, valueInput);
        arrTest.push(testObject);

        localStorage.setItem('test', JSON.stringify(arrTest));

        testContainer.innerHTML = `
          <div id="test-result" class="mb-5">
            <p class="text-center">Skor tes anda adalah :</p>
            <h1 class="text-center">${valueInput}</h1>
            <ul>
              <li>Ketajaman penglihatan pada baris ke 8 (20/25) ke atas perlu dilakukan evaluasi 
              lebih lanjut oleh ahli mata untuk menentukan perawatan lain yang akan diperlukan</li>
              <li>Ketajaman penglihatan "NORMAL" pada baris ke 9 (20/20)</li>
            </ul>
            <a herf="#/riwayat" class="btn btn-warning">Riwayat</a>
            <button class="btn btn-danger" id="tes-lagi">Tes Lagi</button>
          </div>
        `;
        buttonsContainer.style.display = 'none';

        const tesLagi = document.getElementById('tes-lagi');
        const testResult = document.getElementById('test-result');

        tesLagi.addEventListener('click', () => {
          testResult.style.display = 'none';
          buttonsContainer.style.display = 'block';
          document.documentElement.scrollTop = 0;
        });
      });
    });
  },
};

export default StartTest;
