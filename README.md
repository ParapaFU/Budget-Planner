# Budget-Planner

mencatat keuangan setiap bulan

# pengguna menetapkan budget setiap bulan :

Budget Bulan Mei : Rp. 3.000.000

# pengguna mencatat pengeluaran :

- Makan : Rp. 25.000
- Bensin : Rp. 50.000
- Internet : Rp. 125.000

# aplikasi otomatis menghitung :

- Budget awal : Rp. 3.000.000
- Terpakai : Rp. 225.000
- Sisa Budget : Rp. 2.775.000

# dan menampilkan progress bar :

[██░░░░░░░░] 7.5%

# (Versi 1) fitur

1. set budget
   form :
   budget bulanan : [3000000]
   [simpan budget]

   ketika disimpan :
   budget = 3000000

2. tambah pengeluaran
   form :
   nama : [makan]
   jumlah : [25000]
   [tambah]

   data disimpan :
   [
   {
   id: 1,
   nama: "makan",
   jumlah: 25000,
   }
   ]

3. daftar pengeluaran
   makan : Rp 25.000
   bensin : Rp 50.000
   internet : Rp 125.000

   ada tombol hapus :
   makan Rp. 25.000 [hapus]

4. ringkasan
   Budget Rp3.000.000
   Terpakai Rp225.000
   Sisa Rp2.775.000

5. progress bar
   perhitungan : persentase = (terpakai / budget) \* 100;

# (Versi 2)

1. kategori :
   {
   id: 1,
   nama: "Makan Siang",
   jumlah: 25000,
   kategori: "Makanan"
   }

2. filter :
   Semua
   Makanan
   Transportasi
   Tagihan

3. peringatan budget :
   ⚠ Budget hampir habis

4. warna progress :
   0 - 50% Hijau
   50 - 80% Kuning
   80 -100% Merah

# layout

+----------------------------------+
| BUDGET PLANNER |
+----------------------------------+

+----------------------------------+
| Budget Bulanan |
| Rp 3.000.000 |
| |
| [██████░░░░] 60% |
| |
| Terpakai : Rp 1.800.000 |
| Sisa : Rp 1.200.000 |
+----------------------------------+

+----------------------------------+
| Tambah Pengeluaran |
| |
| Nama [___________] |
| Jumlah [___________] |
| Kategori [Dropdown ] |
| |
| [ Tambah ] |
+----------------------------------+

+----------------------------------+
| Daftar Transaksi |
| |
| Makan Rp25.000 [Hapus] |
| Bensin Rp50.000 [Hapus] |
| Internet Rp150.000 [Hapus] |
+----------------------------------+
