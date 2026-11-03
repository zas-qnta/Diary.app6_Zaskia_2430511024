* **Nama**: Zaskia Qanita Najiyah (Kia)
* **NIM**: 2430511024
* **Kelas**: Teknik Informatika 5A
📖 Buku Harian (Diary App)

Aplikasi buku harian digital ini dikembangkan menggunakan React Native, Expo Router, dan TypeScript untuk memenuhi tugas Praktikum Mobile Programming Pertemuan 6 dengan fokus pembahasan State dan React Hooks.

🚀 Fitur Utama & Tugas Praktikum

Manajemen Catatan Harian

Pengguna dapat membaca, menambah entri baru, serta melihat detail cerita harian secara interaktif.

Pencarian Cepat (Search)

Fitur pencarian berbasis teks untuk menemukan catatan berdasarkan judul, isi, atau tanggal.

Filter Berdasarkan Mood

Pilihan penyaringan catatan berdasarkan emoji suasana hati (seperti 😊, 🚀, ☕, ✨).

Tab Favorit (Liked Entries)

Halaman khusus yang menampilkan daftar catatan yang disukai dengan sinkronisasi status secara real-time di seluruh halaman.

Reset Filter

Tombol untuk mengosongkan pencarian teks dan pilihan mood secara sekaligus.

🛠️ Penjelasan React Hooks yang Digunakan

useState

Digunakan untuk mengelola local state pada komponen, seperti menyimpan input teks formulir (judul, tanggal, isi) dan pilihan mood saat membuat catatan baru.

useContext

Digunakan untuk mengakses shared state global dari DiaryContext agar data catatan harian dan daftar ID favorit dapat diakses langsung oleh semua screen tanpa prop drilling.

useEffect

Digunakan untuk menangani side effect timer pencarian (debounce) serta menjalankan fungsi cleanup (clearTimeout) agar timer lama dibatalkan saat pengguna mengetik ulang.

useMemo

Digunakan untuk menghitung derived data (proses penyaringan daftar catatan berdasarkan kata kunci dan mood) secara efisien agar tidak dihitung ulang pada setiap render.

useCallback

Digunakan untuk menjaga kestabilan referensi fungsi callback (seperti navigasi ke halaman detail dan aksi toggle like) agar tidak dibuat ulang tiap kali terjadi re-render.

useRef

Digunakan untuk memegang referensi langsung ke elemen TextInput pencarian agar fokus kursor dapat dikembalikan saat tombol Clear ditekan.

⚙️ Cara Menjalankan Proyek

Masuk ke folder proyek melalui terminal.

Jalankan npm install untuk mengunduh seluruh dependency.

Jalankan npx expo start -c untuk mengaktifkan server Expo dengan cache bersih.

* Gambar:
  <img width="1336" height="628" alt="image" src="https://github.com/user-attachments/assets/07f3bd3c-2f22-4ef5-86e7-1a01758d2af6" />
  <img width="1353" height="628" alt="image" src="https://github.com/user-attachments/assets/0c506836-90da-4b36-b35c-ad5d5573b5af" />
  <img width="1361" height="625" alt="image" src="https://github.com/user-attachments/assets/afd20c17-c5f6-4160-a0b1-cf0de59a80d5" />
  <img width="1359" height="623" alt="image" src="https://github.com/user-attachments/assets/fb8807a7-40ce-490a-b740-fa0d77d71fa2" />




