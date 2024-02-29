const express = require("express");
const { translateToFrench } = require("./translator");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/translate", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "Enter text" });
  }

  try {
    const translatedText = await translateToFrench(text);
    if (!translatedText) {
      return res.status(500).json({ error: "Failed to translate." });
    }
    res.json({ translation: translatedText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to translate." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
