import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/recommend", async (req, res) => {
  try {
    const { preference, products } = req.body;

    const prompt = `
You are a product recommendation assistant.

The user is looking for:
${preference}

Here is the complete list of available products:
${JSON.stringify(products)}

Your job is to recommend the products that best match the user's requirements.

IMPORTANT RULES:
1. Recommend ONLY products from the provided list.
2. Never invent a product.
3. Use the exact product ID from the list.
4. Recommend at most 3 products.
5. Return ONLY valid JSON.
6. Do not include markdown or code fences.

Return this exact JSON structure:

{
  "recommendations": [
    {
      "id": 1,
      "reason": "Short explanation of why this product matches the user's requirements."
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text;

    console.log("Gemini response:", text);

    res.json({
      result: text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to get recommendations",
    });
  }
});
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});