const flashcards = document.querySelector(".flashcards");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
// Load saved flashcards
let contentArray = JSON.parse(localStorage.getItem("items")) || [];
// Display saved cards
contentArray.forEach((card, index) => {
    divMaker(card, index);
});
// ==============================
// KEEP SCREEN ON
// ==============================
let wakeLock = null;
async function keepScreenOn() {
    try {
        wakeLock = await navigator.wakeLock.request("screen");
        console.log("Screen Wake Lock active");
    } catch (err) {
        console.log(err);
    }
}
window.addEventListener("load", keepScreenOn);
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        keepScreenOn();
    }
});
// ==============================
// CREATE FLASHCARD
// ==============================
function divMaker(card, index) {
    const div = document.createElement("div");
    const checkbox = document.createElement("input");
    const h2_question = document.createElement("h2");
    const h2_answer = document.createElement("h2");
    div.className = "flashcard";
    // Checkbox
    checkbox.type = "checkbox";
    checkbox.className = "delete-check";
    h2_question.style.borderTop = "1px solid black";
    h2_question.style.padding = "15px";
    h2_question.style.marginTop = "30px";
    h2_question.textContent = card.my_question;
    h2_answer.style.textAlign = "center";
    h2_answer.style.display = "none";
    h2_answer.style.color = "red";
    h2_answer.textContent = card.my_answer;
    div.appendChild(checkbox);
    div.appendChild(h2_question);
    div.appendChild(h2_answer);
    // Show answer
    div.addEventListener("click", function (e) {
        if (e.target !== checkbox) {
            if (h2_answer.style.display === "none") {
                h2_answer.style.display = "block";
            } else {
                h2_answer.style.display = "none";
            }
        }
    });
    flashcards.appendChild(div);
}
// ==============================
// ADD FLASHCARD
// ==============================
function addFlashcard() {
    if (
        question.value.trim() === "" ||
        answer.value.trim() === ""
    ) {
        alert("Fill question and answer");
        return;
    }

    const flashcardInfo = {
        my_question: question.value,
        my_answer: answer.value
    };

    contentArray.push(flashcardInfo);

    localStorage.setItem(
        "items",
        JSON.stringify(contentArray)
    );
    divMaker(
        flashcardInfo,
        contentArray.length - 1
    );
    question.value = "";
    answer.value = "";
}
// ==============================
// DELETE SELECTED CARDS
// ==============================

function delFlashcards() {

    const cards = document.querySelectorAll(".flashcard");

    let newArray = [];

    cards.forEach((card, index) => {
        const checkbox = card.querySelector(".delete-check");
        if (!checkbox.checked) {
            newArray.push(contentArray[index]);
        }

    });
    contentArray = newArray;
    localStorage.setItem(
        "items",
        JSON.stringify(contentArray)
    );
    flashcards.innerHTML = "";
    contentArray.forEach((card, index) => {
        divMaker(card, index);
    });
}