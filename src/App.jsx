import { useState } from "react";
import products from "./Data/products";
import ProductList from "./Components/ProductList";
import SuggestionBox from "./Components/SuggestionBox";

function App() {
  const [userPreference, setUserPreference] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSuggest = async (preference) => {
    setUserPreference(preference);
    setLoading(true);
    setError("");
    setRecommendations([]);

    try {
      const response = await fetch("/api/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          preference: preference,
          products: products,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get recommendations");
      }

      const data = await response.json();

      const cleanedResult = data.result
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const parsedResult = JSON.parse(cleanedResult);

      const recommendedProducts = parsedResult.recommendations
        .map((recommendation) => {
          const product = products.find(
            (product) => product.id === recommendation.id
          );

          if (!product) return null;

          return {
            ...product,
            reason: recommendation.reason,
          };
        })
        .filter(Boolean);

      if (recommendedProducts.length === 0) {
        setError("No matching products found.");
      }

      setRecommendations(recommendedProducts);
    } catch (error) {
      console.error("Recommendation error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>AI Product Recommender</h1>
        <p>
          Tell us what you're looking for and let AI find the best products for you.
        </p>
      </div>

      <SuggestionBox onSuggest={handleSuggest} />

      {userPreference && (
        <p>
          You are looking for: <strong>{userPreference}</strong>
        </p>
      )}

      {loading && <p> Finding the best products...</p>}
      {error && <p>{error}</p>}

{recommendations.length > 0 && (
  <div className="recommendation-section">
    <h2> AI Recommended Products</h2>

    <ProductList products={recommendations} />
  </div>
)}

      <h2>All Products</h2>

      <ProductList products={products} />
    </div>
  );
}

export default App;