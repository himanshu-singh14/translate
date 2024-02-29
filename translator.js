const translate = require("translate-google");

const translateToFrench = async (text) => {
  try {
    const translation = await translate(text, { to: "fr" });
    return translation;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

module.exports = { translateToFrench };
