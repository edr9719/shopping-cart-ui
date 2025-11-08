# Shopping Cart UI

A React-based e-commerce shopping cart application with product browsing and cart management functionality.

## Features

- Browse products with images, descriptions, and prices
- Add/remove items from cart
- Adjust quantities
- Cart dropdown with real-time updates
- Persistent cart using localStorage
- Responsive design with Tailwind CSS

## Tech Stack

- React + Vite
- Context API for state management
- Tailwind CSS for styling
- React Icons
- JSON Server (for local development)

## Getting Started

### Development Mode

1. Install dependencies:

```bash
npm install
```

2. Start the JSON server (in a separate terminal):

```bash
npx json-server --watch src/data/db.json --port 5000
```

3. Start the development server:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```
