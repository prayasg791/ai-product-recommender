# AI Product Recommender

This is a small React-based product recommendation application built as part of a coding assessment.

The application shows a list of products and allows the user to describe what they are looking for in their own words. For example:

> "I want a phone under $500 with a good camera."

The application sends this requirement along with the available products to Gemini AI. Gemini analyzes the user's requirement and recommends the products that best match it.

## Features

- Displays a list of available products
- Allows users to enter their requirements in natural language
- Uses Gemini AI to understand the user's preferences
- Recommends products only from the available product list
- Shows a short explanation of why each product was recommended
- Handles loading and error states
- Responsive and simple UI

## Tech Stack

- React
- Vite
- JavaScript
- Gemini API
- Node.js
- Express.js
- Vercel

## How It Works

1. The user enters a requirement in the suggestion box.
2. The React frontend sends the requirement and product list to the backend API.
3. The backend sends this information to Gemini.
4. Gemini selects the products that best match the user's requirements.
5. The frontend receives the recommended product IDs and displays the matching products with AI-generated reasons.

## Project Structure

```text
ai-product-recommender/
│
├── api/
│   └── recommend.js
│
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   └── SuggestionBox.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server/
│   └── server.js
│
├── .env
├── package.json
├── vite.config.js
└── README.md
