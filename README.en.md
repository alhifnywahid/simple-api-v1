# GopretAPIs

A simple Node.js and Express-based REST API that provides various services including AI, media downloading, payment gateway, e-commerce data, and student data validation. Documented using Swagger UI and deployable to Vercel or any standalone server.

API documentation available at: `https://api.alhifnywahid.xyz/dokumentasi`

Also available in: [Bahasa Indonesia](./readme.md)

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Deployment to Vercel](#deployment-to-vercel)
- [License](#license)

---

## Features

- **AI** — ChatGPT, GPT Logic, Virtual Girlfriend, Dystopia, ESRGAN (image upscaling), and LuminAI
- **Payment Gateway** — Payments via QRIS and ShopeePay, plus transaction status checking
- **Media Downloader** — Download videos from TikTok, Instagram, and songs from Spotify
- **E-Commerce** — Product listings, product details, and product search
- **Student Data** — Student data validation through PDDIKTI
- **Anime** — Completed anime listings and detailed episode information
- **Tools** — Photo quality enhancement using Remini
- **Interactive Documentation** — Available via Swagger UI at the `/dokumentasi` endpoint

---

## Requirements

- Node.js version 18 or newer
- Yarn (package manager)
- MongoDB (for user management features)
- Active internet connection

---

## Installation

```bash
# Clone the repository
git clone https://github.com/alhifnywahid/simple-api-v1.git
cd simple-api-v1

# Install dependencies
yarn install
```

---

## Configuration

Create a `.env` file in the project root directory based on the following example:

```env
PORT=3000
BASE_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
```

Additionally, the main API configuration (name, creator, base URL) can be changed via the `schema/config.js` file.

---

## Running the Server

```bash
# Development mode (with auto-reload)
yarn dev

# Production mode
node index.js
```

The server runs on `http://localhost:3000` by default.

---

## API Endpoints

All endpoints are prefixed with `/api`.

### AI

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/ai/chatgpt` | Chat with ChatGPT | `query` |
| GET | `/api/ai/gptlogic` | ChatGPT with a custom system prompt | `query`, `prompt` |
| GET | `/api/ai/virtualgirl` | Virtual Girlfriend AI | `query` |
| GET | `/api/ai/dystopia` | Dystopia AI | `query` |
| GET | `/api/ai/ersgan` | Image resolution upscaling | `url` |
| POST | `/api/ai/luminai` | LuminAI with user session | `query`, `username` |

### Payment Gateway

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/payment/qris` | Create a QRIS payment | `ammount`, `name`, `phone`, `note`, `email` |
| GET | `/api/payment/shopeepay` | Create a ShopeePay payment | `ammount`, `name`, `phone`, `note`, `email` |
| GET | `/api/payment/check` | Check transaction status | `tx_id` |

> Minimum payment amount is Rp 10,000.

### Media Downloader

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/downloader/tiktok` | Download TikTok video | `url` |
| GET | `/api/downloader/igdl` | Download Instagram media | `url` |
| GET | `/api/downloader/spotify` | Download Spotify track | `url` |

### E-Commerce

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/ecommerce/products` | List products | `start`, `q` |
| GET | `/api/ecommerce/product` | Single product detail | `productId` |
| GET | `/api/ecommerce/search` | Search products | `query`, `number` |

### Student Data

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/mhsvalidation` | Validate student data via PDDIKTI | `nim`, `password` |

### Anime

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/anime/completed` | List of completed anime | `page` |
| GET | `/api/anime/completed/:id` | Anime episode detail | `id` (path param) |

### Tools

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/tools/remini` | Photo quality enhancement | `url` |

### User Management

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/users` | Get all users | - |
| GET | `/api/adduser` | Add a new user | `username`, `password`, `email`, `notelepon` |

---

## Deployment to Vercel

This project includes a `vercel.json` configuration file and is ready for Vercel deployment.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Make sure the required environment variables are configured in the Vercel dashboard.

---

## Project Structure

```
simple-api-v1/
├── index.js              # Application entry point
├── vercel.json           # Vercel deployment configuration
├── package.json
├── router/
│   └── api.js            # All API route definitions
├── schema/
│   ├── config.js         # Global configuration (name, URL, creator)
│   ├── endpoint.js       # Swagger UI configuration
│   ├── db/               # MongoDB connection and models
│   ├── downloader/       # Swagger schemas for downloader
│   ├── ecommerce/        # Swagger schemas for e-commerce
│   └── payment/          # Swagger schemas for payment
├── scrapers/             # Scraping logic and external API integrations
├── lib/                  # Utilities (print, helper functions)
└── public/               # Static assets (HTML, images)
```

---

## License

This project is licensed under the [MIT License](./LICENSE.md).

Copyright (c) 2024 Alhifny Wahid
