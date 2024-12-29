document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const analyzeButton = document.getElementById("analyzeButton");
  const charCount = document.getElementById("charCount");
  const wordCount = document.getElementById("wordCount");
  const sentenceCount = document.getElementById("sentenceCount");

  analyzeButton.addEventListener("click", () => {
    const text = textInput.value;

    // Count characters
    const characters = text.length;

    // Count words
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // Count sentences
    const sentences = text.trim() === "" ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

    // Update results
    charCount.textContent = characters;
    wordCount.textContent = words;
    sentenceCount.textContent = sentences;
  });
});
