function renderTransaksi(parent, data) {
  parent.innerHTML = "";

  transaksi.forEach((data) => {
    parent.innerHTML += `
        <tr>
            <td>${data.tanggal}</td>
            <td>${data.nama}</td>
            <td>Rp. ${data.harga}</td>
          </tr>`;
  });
}
