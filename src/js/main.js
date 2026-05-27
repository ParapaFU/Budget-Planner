// ===== IMPORT =====

// ===== DOM =====
const parentMenuBtn = document.querySelector(".button");
const displayFormPengeluaran = document.getElementById("display-pengeluaran");
const tableTransaksi = document.querySelector(".tabel-transaksi");

//  ===== STATE / DATA =====

// ===== FUNCTIONS =====

// ===== EVENT LISTENERS =====
parentMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target.matches(".tambah-pengeluaran-btn"));
  if (e.target.matches(".tambah-pengeluaran-btn")) {
    displayFormPengeluaran.classList.replace("d-none", "d-flex");
  }
});

displayFormPengeluaran.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.submitter);
  if (e.submitter.matches(".tambah-form-btn")) {
    console.log("ok");
  }

  if (e.submitter.matches(".close-form-btn")) {
    displayFormPengeluaran.classList.replace("d-flex", "d-none");
  }
});

// ===== INIT =====
