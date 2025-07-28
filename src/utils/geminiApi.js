import {GEMINI_API_KEY} from "./constants"

export const geminiApi = async (promptText) => {
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;
   const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: promptText }],
        },
      ],
    }),
  });
  

  const data = await res.json();
return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No result.";
};