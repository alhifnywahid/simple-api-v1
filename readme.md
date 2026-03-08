# GopretAPIs

REST API sederhana berbasis Node.js dan Express yang menyediakan berbagai layanan seperti AI, unduhan media, payment gateway, data e-commerce, serta validasi data mahasiswa. Didokumentasikan menggunakan Swagger UI dan dapat di-deploy ke Vercel maupun server mandiri.

Dokumentasi API tersedia di: `https://api.alhifnywahid.xyz/dokumentasi`

Tersedia juga dalam: [English](./README.en.md)

---

## Daftar Isi

- [Fitur](#fitur)
- [Persyaratan](#persyaratan)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Server](#menjalankan-server)
- [Endpoint API](#endpoint-api)
- [Deployment ke Vercel](#deployment-ke-vercel)
- [Lisensi](#lisensi)

---

## Fitur

- **AI** — ChatGPT, GPT Logic, Virtual Girlfriend, Dystopia, ESRGAN (peningkatan gambar), dan LuminAI
- **Payment Gateway** — Pembayaran via QRIS dan ShopeePay, serta pengecekan status transaksi
- **Media Downloader** — Unduh video dari TikTok, Instagram, dan lagu dari Spotify
- **E-Commerce** — Daftar produk, detail produk, dan pencarian produk
- **Data Mahasiswa** — Validasi data mahasiswa melalui PDDIKTI
- **Anime** — Daftar anime completed dan informasi detail episode
- **Tools** — Peningkatan kualitas foto menggunakan Remini
- **Dokumentasi Interaktif** — Tersedia melalui Swagger UI di endpoint `/dokumentasi`

---

## Persyaratan

- Node.js versi 18 atau lebih baru
- Yarn (package manager)
- MongoDB (untuk fitur manajemen pengguna)
- Koneksi internet aktif

---

## Instalasi

```bash
# Clone repository
git clone https://github.com/alhifnywahid/simple-api-v1.git
cd simple-api-v1

# Install dependensi
yarn install
```

---

## Konfigurasi

Buat file `.env` di direktori root proyek berdasarkan contoh berikut:

```env
PORT=3000
BASE_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
```

Selain itu, konfigurasi utama API (nama, kreator, URL basis) dapat diubah melalui file `schema/config.js`.

---

## Menjalankan Server

```bash
# Mode development (dengan auto-reload)
yarn dev

# Mode production
node index.js
```

Server akan berjalan di `http://localhost:3000` secara default.

---

## Endpoint API

Semua endpoint berada di bawah prefix `/api`.

### AI

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/ai/chatgpt` | Chat dengan ChatGPT | `query` |
| GET | `/api/ai/gptlogic` | ChatGPT dengan custom prompt | `query`, `prompt` |
| GET | `/api/ai/virtualgirl` | Virtual Girlfriend AI | `query` |
| GET | `/api/ai/dystopia` | Dystopia AI | `query` |
| GET | `/api/ai/ersgan` | Peningkatan resolusi gambar | `url` |
| POST | `/api/ai/luminai` | LuminAI dengan sesi pengguna | `query`, `username` |

### Payment Gateway

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/payment/qris` | Buat pembayaran QRIS | `ammount`, `name`, `phone`, `note`, `email` |
| GET | `/api/payment/shopeepay` | Buat pembayaran ShopeePay | `ammount`, `name`, `phone`, `note`, `email` |
| GET | `/api/payment/check` | Cek status transaksi | `tx_id` |

> Pembayaran minimal adalah Rp 10.000.

### Media Downloader

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/downloader/tiktok` | Unduh video TikTok | `url` |
| GET | `/api/downloader/igdl` | Unduh media Instagram | `url` |
| GET | `/api/downloader/spotify` | Unduh lagu Spotify | `url` |

### E-Commerce

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/ecommerce/products` | Daftar produk | `start`, `q` |
| GET | `/api/ecommerce/product` | Detail produk | `productId` |
| GET | `/api/ecommerce/search` | Cari produk | `query`, `number` |

### Data Mahasiswa

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/mhsvalidation` | Validasi data mahasiswa via PDDIKTI | `nim`, `password` |

### Anime

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/anime/completed` | Daftar anime completed | `page` |
| GET | `/api/anime/completed/:id` | Detail episode anime | `id` (path param) |

### Tools

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/tools/remini` | Peningkatan kualitas foto | `url` |

### Pengguna (User Management)

| Method | Endpoint | Deskripsi | Parameter |
|--------|----------|-----------|-----------|
| GET | `/api/users` | Ambil semua data pengguna | - |
| GET | `/api/adduser` | Tambah pengguna baru | `username`, `password`, `email`, `notelepon` |

---

## Deployment ke Vercel

Proyek ini sudah dilengkapi dengan konfigurasi `vercel.json` sehingga siap untuk di-deploy ke Vercel.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Pastikan variabel environment yang diperlukan sudah dikonfigurasi di dashboard Vercel.

---

## Struktur Proyek

```
simple-api-v1/
├── index.js              # Entry point aplikasi
├── vercel.json           # Konfigurasi deployment Vercel
├── package.json
├── router/
│   └── api.js            # Definisi seluruh route API
├── schema/
│   ├── config.js         # Konfigurasi global (nama, URL, kreator)
│   ├── endpoint.js       # Konfigurasi Swagger UI
│   ├── db/               # Koneksi dan model MongoDB
│   ├── downloader/       # Schema Swagger untuk downloader
│   ├── ecommerce/        # Schema Swagger untuk e-commerce
│   └── payment/          # Schema Swagger untuk payment
├── scrapers/             # Logika scraping dan integrasi API eksternal
├── lib/                  # Utilitas (print, fungsi pembantu)
└── public/               # Aset statis (HTML, gambar)
```

---

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE.md).

Copyright (c) 2024 Alhifny Wahid
