const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const ampm = document.getElementById("ampm");
const date = document.getElementById("date");

const modeSwitch = document.querySelector(".mode-switch");


// =======================
// DIGITAL CLOCK
// =======================

function updateClock() {

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let period = "AM";


    // AM / PM
    if (h >= 12) {
        period = "PM";
    }


    // 24h to 12h format
    if (h > 12) {
        h = h - 12;
    }

    if (h === 0) {
        h = 12;
    }


    // Add zero
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;


    // Display time
    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
    ampm.textContent = period;


    // Display date
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric"
    };

    date.textContent = now.toLocaleDateString(
        "en-US",
        options
    );
}


// Start clock
updateClock();

setInterval(updateClock, 1000);



// =======================
// DARK MODE
// =======================


// Check saved mode
const savedMode = localStorage.getItem("mode");


if (savedMode === "dark") {

    document.body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";

} else {

    modeSwitch.textContent = "Dark Mode";

}



// Button click
modeSwitch.addEventListener("click", () => {


    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {


        modeSwitch.textContent = "Light Mode";


        // Save dark mode
        localStorage.setItem(
            "mode",
            "dark"
        );


    } else {


        modeSwitch.textContent = "Dark Mode";


        // Save normal mode
        localStorage.setItem(
            "mode",
            "normal"
        );

    }

});