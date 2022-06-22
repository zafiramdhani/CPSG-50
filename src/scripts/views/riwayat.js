/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
import { arrTest } from './start-test';

const Riwayat = {
  render() {
    return `
      <div class="history-container container mt-5 mb-5 pt-5" style="min-height: 100vh;">
        <table class="table table-striped table-hover mt-5">
          <thead>
            <tr class="text-center">
              <th scope="col"><i class="fa-solid fa-hashtag"></i>&nbsp;\tNo</th>
              <th scope="col"><i class="fa-solid fa-calendar"></i>&nbsp;\tTanggal</th>
              <th scope="col"><i class="fa-solid fa-star"></i>&nbsp;\tSkor</th>
              <th scope="col" class="text-center"><i class="fa-solid fa-pen-to-square"></i>&nbsp;\tAksi</th>
            </tr>
          </thead>
          <tbody class="align-middle text-center">
            ${arrTest.map((test, index) => `
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${test.id}</td>
                <td>${test.result}</td>
                <td><button type="button" class="btn btn-danger" id="btn-delete" value="${index}"><i class="fa-solid fa-trash"></i></button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  afterRender() {
    const btnDelete = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < btnDelete.length; i++) {
      btnDelete[i].addEventListener('click', () => {
        // eslint-disable-next-line no-undef
        swal({
          title: 'Hapus item ini?',
          icon: 'warning',
          buttons: ['Batal', true],
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              arrTest.splice(btnDelete[i].value, 1);
              localStorage.setItem('EYETEST', JSON.stringify(arrTest));
              // eslint-disable-next-line no-undef
              swal({
                title: 'Sukses!',
                text: 'Riwayat berhasil dihapus',
                icon: 'success',
                button: true,
              }).then(() => {
                document.location.reload();
              });
            }
          });
      });
    }
  },
};

export default Riwayat;
