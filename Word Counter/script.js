const textarea = document.getElementById("textarea");

textarea.addEventListener("input", function () {
    const textVal = this.value;

    // Count letters (ignore spaces)
    const letters = textVal.replace(/\s/g, "");
    document.getElementById("letter").textContent = letters.length;

    // Count words
    const words = textVal
        .trim()
        .split(/\s+/)
        .filter(word => word !== "");

    document.getElementById("word").textContent =
        textVal.trim() === "" ? 0 : words.length;
});