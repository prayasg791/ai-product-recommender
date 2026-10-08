import { useState } from "react";

function SuggestionBox({ onSuggest }) {
  const [preference, setPreference] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!preference.trim()) return;

    onSuggest(preference);
  };

  return (
    <div className="suggestion-box">
      <h2>What are you looking for?</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. I want a tablet under $500 with a good camera"
          value={preference}
          onChange={(e) => setPreference(e.target.value)}
        />

        <button type="submit">
          Get Suggestions
        </button>
      </form>
    </div>
  );
}

export default SuggestionBox;