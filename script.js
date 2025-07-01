const reunionDate = new Date("2025-08-24"); // fixed variable name
const today = new Date();
const timeDiff = reunionDate - today;
const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
document.getElementById("daysLeft").textContent = days;

// Calendar interaction
const calendar1 = document.getElementById("calendar1");

calendar1.addEventListener("change", () => {
  const selected = calendar1.value;
  alert(`You picked ${selected} to plan something cute! 💕`);
});

// Date idea button
const ideas = [
  "Take a Weekend Trip 🍙",
  "Online movie date? ✨",
  "Watch Doctor Who 🛡️",
  "Movie + cuddling 🎬",
  "Yume again 💌",
  "Pool at night (iykyk 😉)"
];


// Function to render an idea
function renderIdea(text) {
  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    li.classList.toggle("clicked");
  });

  ideaList.appendChild(li);
}

// Load starter ideas
ideas.forEach(renderIdea);


