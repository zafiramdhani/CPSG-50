const StartTest = {
  render() {
    return `
      <div class="start-test_wrapper">
        <img class="snellen-chart" src="https://i.ibb.co/k10TJtG/vision-source-eye-chart-1.png" alt="Snellen chart">
        <p>This Snellen chart is obtained from <a href="https://visionsource.com/patients/free-eye-chart-download/" target="_blank" rel="noopener noreferrer">Visionsource.com</a></p>
        <div>
          <button class="btn-test" data-test="20/200">Test1</button>
          <button class="btn-test" data-test="20/100">Test2</button>
          <button class="btn-test" data-test="20/80">Test3</button>
          <button class="btn-test" data-test="20/63">Test4</button>
          <button class="btn-test" data-test="20/50">Test5</button>
          <button class="btn-test" data-test="20/40">Test6</button>
          <button class="btn-test" data-test="20/32">Test7</button>
          <button class="btn-test" data-test="20/25">Test8</button>
          <button class="btn-test" data-test="20/20">Test9</button>
        </div>
        <div class="test__container">
          
        </div>
      </div>
    `;
  },

  afterRender() {
    const buttons = document.querySelectorAll('.btn-test');
    const testContainer = document.querySelector('.test__container');

    if(localStorage.getItem('test') !== null) {
      const dataStorage = localStorage.getItem('test');
      testContainer.innerHTML = `
        <p class="text-center">Anda berada di level</p>
        <h1 class="text-center">${dataStorage}</h1>
      `;
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const valueInput = button.dataset.test;
        localStorage.setItem('test', valueInput);
        testContainer.innerHTML = `
          <p class="text-center">Anda berada di level</p>
          <h1 class="text-center">${valueInput}</h1>
        `;
      });
    })
  }
};

export default StartTest;
