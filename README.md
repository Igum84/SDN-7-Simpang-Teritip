# SDN 7 Simpang Teritip - Halaman Depan (lokal)

Ini adalah halaman awal statis untuk SDN 7 Simpang Teritip. Desainnya responsif dan menggunakan menu hamburger pada tampilan smartphone.

Cara menjalankan secara lokal:

- Buka file `index.html` di browser (klik dua kali). Untuk beberapa fitur (mis. fetch atau modul) disarankan menjalankan server lokal.

Menjalankan server sederhana dengan Python (opsional, PowerShell):

```powershell
python -m http.server 8000
# lalu buka http://localhost:8000 di browser
```

File utama:
- `index.html` - markup halaman
- `css/styles.css` - stylesheet
- `js/main.js` - interaksi (hamburger + form demo)

Kustomisasi:
- Ganti teks, alamat, dan logo SVG pada `index.html` sesuai kebutuhan.
- Untuk produksi, tambahkan optimisasi gambar, meta SEO, dan pengaturan hosting.

Jika mau, saya bisa:
- Menambahkan halaman interior (Tentang, Berita, PPDB, dsb.)
- Membuat versi WordPress atau menggunakan template CMS
- Menyematkan peta dan formulir kontak sebenarnya

