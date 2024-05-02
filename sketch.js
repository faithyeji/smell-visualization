const elementById = document.querySelector("#container");
const jsonData = [
  {
    date: "2024-02-07",
    time: "17:00:00",
    name: "Bathroom",
    type: "pungent",
    intensity: "4",
    connotation: "bad",
  },
  {
    date: "2024-02-07",
    time: "19:00:00",
    name: "Cilantro",
    type: "citrus",
    intensity: "5",
    connotation: "bad",
  },
  {
    date: "2024-02-07",
    time: "20:20:00",
    name: "Blood",
    type: "decaying",
    intensity: "3",
    connotation: "bad",
  },
  {
    date: "2024-02-08",
    time: "13:10:00",
    name: "Drool",
    type: "pungent",
    intensity: "2",
    connotation: "bad",
  },
  {
    date: "2024-02-08",
    time: "13:30:00",
    name: "Bathroom",
    type: "pungent",
    intensity: "3",
    connotation: "bad",
  },
  {
    date: "2024-02-10",
    time: "16:30:00",
    name: "Street pee",
    type: "pungent",
    intensity: "5",
    connotation: "bad",
  },
  {
    date: "2024-02-13",
    time: "13:30:00",
    name: "Drool",
    type: "pungent",
    intensity: "2",
    connotation: "bad",
  },
  {
    date: "2024-02-13",
    time: "19:00:00",
    name: "Fertilizer",
    type: "pungent",
    intensity: "4",
    connotation: "bad",
  },
  {
    date: "2024-02-26",
    time: "13:20:00",
    name: "Rotten food",
    type: "decaying",
    intensity: "5",
    connotation: "bad",
  },
  {
    date: "2024-02-26",
    time: "15:50:00",
    name: "Pee",
    type: "pungent",
    intensity: "4",
    connotation: "bad",
  },
  {
    date: "2024-02-27",
    time: "11:10:00",
    name: "Raw onions",
    type: "pungent",
    intensity: "5",
    connotation: "bad",
  },
  {
    date: "2024-02-27",
    time: "12:10:00",
    name: "Village trees",
    type: "decaying",
    intensity: "4",
    connotation: "bad",
  },
  {
    date: "2024-02-27",
    time: "13:50:00",
    name: "Village trees",
    type: "decaying",
    intensity: "3",
    connotation: "bad",
  },
  {
    date: "2024-02-07",
    time: "09:10:00",
    name: "Rory's perfume",
    type: "fragrant",
    intensity: "5",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "10:30:00",
    name: "Mud/rain",
    type: "woody/resinous",
    intensity: "2",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "11:00:00",
    name: "Hot sauce",
    type: "citrus",
    intensity: "5",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "11:40:00",
    name: "Sweet sour teriyaki",
    type: "citrus",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "15:30:00",
    name: "Coffee",
    type: "sweet",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "18:50:00",
    name: "Butter chicken",
    type: "pungent",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "19:20:00",
    name: "Almond tea",
    type: "sweet",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "22:10:00",
    name: "Burrito stand",
    type: "savory/nutty",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-08",
    time: "04:30:00",
    name: "Mint",
    type: "minty",
    intensity: "2",
    connotation: "good",
  },
  {
    date: "2024-02-08",
    time: "08:30:00",
    name: "Mint",
    type: "minty",
    intensity: "2",
    connotation: "good",
  },
  {
    date: "2024-02-08",
    time: "14:10:00",
    name: "Perfume",
    type: "fragrant",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-08",
    time: "14:30:00",
    name: "Clementine",
    type: "citrus",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "12:00:00",
    name: "My perfume",
    type: "fragrant",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "13:30:00",
    name: "Incense",
    type: "fragrant",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "14:20:00",
    name: "Candle",
    type: "sweet",
    intensity: "5",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "14:30:00",
    name: "Candle",
    type: "fragrant",
    intensity: "5",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "16:40:00",
    name: "Street taco",
    type: "savory/nutty",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "16:50:00",
    name: "Pizza",
    type: "savory/nutty",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "18:20:00",
    name: "BBQ",
    type: "savory/nutty",
    intensity: "5",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "18:30:00",
    name: "Christine's perfume",
    type: "fragrant",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "19:20:00",
    name: "Peanuts",
    type: "savory/nutty",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-10",
    time: "19:30:00",
    name: "Shrimp",
    type: "savory/nutty",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-13",
    time: "15:00:00",
    name: "Strawberry lip balm",
    type: "sweet",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-13",
    time: "16:00:00",
    name: "Strawberry lip balm",
    type: "sweet",
    intensity: "2",
    connotation: "good",
  },
  {
    date: "2024-02-13",
    time: "21:00:00",
    name: "Grass",
    type: "woody/resinous",
    intensity: "2",
    connotation: "good",
  },
  {
    date: "2024-02-13",
    time: "22:30:00",
    name: "Perfume",
    type: "fragrant",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-26",
    time: "12:30:00",
    name: "Mint",
    type: "minty",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-26",
    time: "12:50:00",
    name: "Butter",
    type: "savory/nutty",
    intensity: "2",
    connotation: "good",
  },
  {
    date: "2024-02-26",
    time: "13:00:00",
    name: "Sourdough",
    type: "citrus",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-26",
    time: "19:25:00",
    name: "Sriracha",
    type: "citrus",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-26",
    time: "21:30:00",
    name: "Laundry",
    type: "fragrant",
    intensity: "4",
    connotation: "good",
  },
  {
    date: "2024-02-27",
    time: "09:20:00",
    name: "My perfume",
    type: "fragrant",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-27",
    time: "09:40:00",
    name: "Strawberry refresher",
    type: "sweet",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-27",
    time: "15:30:00",
    name: "Vanilla perfume",
    type: "sweet",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-27",
    time: "11:30:00",
    name: "Almond tea",
    type: "sweet",
    intensity: "3",
    connotation: "good",
  },
  {
    date: "2024-02-07",
    time: "11:30:00",
    name: "Salmon",
    type: "pungent",
    intensity: "3",
    connotation: "neutral",
  },
  {
    date: "2024-02-07",
    time: "11:45:00",
    name: "IYA lounge",
    type: "savory/nutty",
    intensity: "2",
    connotation: "neutral",
  },
  {
    date: "2024-02-07",
    time: "22:30:00",
    name: "Fish",
    type: "pungent",
    intensity: "4",
    connotation: "neutral",
  },
  {
    date: "2024-02-08",
    time: "00:55:00",
    name: "Cherry Celsius",
    type: "sweet",
    intensity: "2",
    connotation: "neutral",
  },
  {
    date: "2024-02-10",
    time: "14:00:00",
    name: "Perfume",
    type: "fragrant",
    intensity: "5",
    connotation: "neutral",
  },
  {
    date: "2024-02-10",
    time: "14:50:00",
    name: "Strawberry milk",
    type: "sweet",
    intensity: "3",
    connotation: "neutral",
  },
  {
    date: "2024-02-10",
    time: "16:40:00",
    name: "Cigarette smoke",
    type: "pungent",
    intensity: "4",
    connotation: "neutral",
  },
  {
    date: "2024-02-13",
    time: "16:10:00",
    name: "Sharpie",
    type: "chemical",
    intensity: "3",
    connotation: "neutral",
  },
  {
    date: "2024-02-26",
    time: "16:00:00",
    name: "Diesel",
    type: "chemical",
    intensity: "3",
    connotation: "neutral",
  },
  {
    date: "2024-02-26",
    time: "19:30:00",
    name: "Soy sauce",
    type: "savory/nutty",
    intensity: "3",
    connotation: "neutral",
  },
  {
    date: "2024-02-26",
    time: "21:20:00",
    name: "Mildew",
    type: "decaying",
    intensity: "3",
    connotation: "neutral",
  },
  {
    date: "2024-02-27",
    time: "12:20:00",
    name: "Fried chicken",
    type: "savory/nutty",
    intensity: "4",
    connotation: "neutral",
  },
  {
    date: "2024-02-27",
    time: "12:40:00",
    name: "Weed",
    type: "pungent",
    intensity: "4",
    connotation: "neutral",
  },
];

const smellTypes = new Set();
const smellFrequency = {};
const smellColors = {
  pungent: "#6bc357", // green
  citrus: "#f09d29", // orange
  decaying: "#3d2e23", // brown
  fragrant: "#d244f2", // purple
  sweet: "#ffc0cb", // pink
  "woody/resinous": "#723108", // burnt orange
  "savory/nutty": "#bb1913", // maroon
  minty: "#34f7c9", // mint blue
  chemical: "#f8e65e", // yellow
};

// toggle
var toggle = document.getElementById("big-tog-container");
var toggleContainer = document.getElementById("toggle-container");
var toggleNumber;

toggle.addEventListener("click", function () {
  toggleNumber = !toggleNumber;
  if (toggleNumber) {
    toggleContainer.style.clipPath = "inset(0 0 0 50%)";
    toggleContainer.style.backgroundColor = "grey";
  } else {
    toggleContainer.style.clipPath = "inset(0 50% 0 0)";
    toggleContainer.style.backgroundColor = "black";
  }
  console.log(toggleNumber);
});

// collect unique smell types and frequency
jsonData.forEach((item) => {
  smellTypes.add(item.type);
  if (!smellFrequency[item.date]) {
    smellFrequency[item.date] = {};
  }
  if (!smellFrequency[item.date][item.type]) {
    smellFrequency[item.date][item.type] = 0;
  }
  smellFrequency[item.date][item.type]++;
});

const opacityMultiplier = 2;

// visualization
let mode = "circular";

// create day boxes and smell circles
function createCircularGradient() {
  const dates = Object.keys(smellFrequency);
  dates.forEach((date) => {
    const dayBox = document.createElement("div");
    dayBox.classList.add("day-box");
    dayBox.classList.add("jetbrains-mono");
    dayBox.addEventListener("click", function () {
      showModal(date);
    });

    // show modal function
    function showModal(date) {
      const modal = document.getElementById("myModal");
      const span = document.getElementsByClassName("close")[0];
      const modalText = document.getElementById("modal-text");
      const gradientBox = document.getElementById("gradient-box"); // Ensure this ID matches your HTML

      const dayData = jsonData.filter((d) => d.date === date);
      dayData.sort((a, b) => a.time.localeCompare(b.time));

      let modalContent = `<h2>${date} smells</h2>`;
      dayData.forEach((smell) => {
        modalContent += `<p><strong>Time:</strong> ${smell.time}<br><strong>Name:</strong> ${smell.name}<br><strong>Type:</strong> ${smell.type}<br><strong>Intensity:</strong> ${smell.intensity}<br><strong>Connotation:</strong> ${smell.connotation}</p>`;
      });

      modalText.innerHTML = modalContent;

      // gradient calculation
      const smellCounts = smellFrequency[date];
      const maxSmellCount = Math.max(...Object.values(smellCounts));

      const gradientColors = Object.entries(smellCounts)
        .map(([type, count]) => {
          const opacity =
            count === maxSmellCount ? 1 : Math.pow(count / maxSmellCount, 2); // Exponential opacity scale
          const color = smellColors[type];
          const rgbaColor = `${color}${Math.floor(opacity * 255)
            .toString(16)
            .padStart(2, "0")}`;
          return `linear-gradient(${
            Math.random() * 360
          }deg, ${rgbaColor}, rgba(0, 0, 0, 0) 70.71%)`;
        })
        .join(", ");

      gradientBox.style.background = gradientColors;

      // display modal
      modal.style.display = "flex";

      // x out
      span.onclick = function () {
        modal.style.display = "none";
      };

      // close on click out
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }

    const parentBox = document.createElement("div");
    parentBox.classList.add("parent-box");
    dayBox.appendChild(parentBox);

    const dateBox = document.createElement("div");
    dateBox.textContent = date;
    dateBox.classList.add("date-box");
    parentBox.appendChild(dateBox);

    const gradientParent = document.createElement("div");
    gradientParent.setAttribute("id", "gradient");

    const smellCounts = smellFrequency[date];
    const totalSmells = Object.values(smellCounts).reduce((a, b) => a + b, 0);

    const maxSmellCount = Math.max(...Object.values(smellCounts));

    const gradientColors = Object.entries(smellCounts)
      .map(([type, count]) => {
        const opacity =
          count === maxSmellCount ? 1 : Math.pow(count / maxSmellCount, 2); // Exponential opacity scale
        const color = smellColors[type];
        const rgbaColor = `${color}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        return `linear-gradient(${
          Math.random() * 360
        }deg, ${rgbaColor}, rgba(0, 0, 0, 0) 70.71%)`;
      })
      .join(", ");

    gradientParent.style.background = gradientColors;

    parentBox.appendChild(gradientParent);
    container.appendChild(dayBox);
  });
}

function createHorizontalPlot() {
  // Clear existing visualization
  container.innerHTML = "";

  // Group data by date
  const dataByDate = jsonData.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = [];
    }
    acc[item.date].push(item);
    return acc;
  }, {});

  // Create and append a row for each date
  Object.entries(dataByDate).forEach(([date, items]) => {
    // Create a row for the circles
    const row = document.createElement("div");
    row.style.display = "flex"; // Horizontal layout
    row.style.backgroundColor = "black";
    row.style.alignItems = "center";
    row.style.justifyContent = "start";
    row.style.flexWrap = "wrap"; // Allows multiple lines if many circles
    row.style.padding = "10px";

    // Loop through items for this date and create circles
    items.forEach((item) => {
      const circle = document.createElement("div");
      circle.style.width = `${item.intensity * 4}px`; // Size based on intensity
      circle.style.height = `${item.intensity * 4}px`; // Size based on intensity
      circle.style.borderRadius = "50%";
      circle.style.backgroundColor = smellColors[item.type]; // Color based on type
      circle.style.margin = "5px";
      row.appendChild(circle);
    });

    container.appendChild(row);
  });
}

// toggle event listener
toggle.addEventListener("click", () => {
  mode = mode === "circular" ? "horizontal" : "circular";

  container.innerHTML = ""; // clear existing

  if (mode === "circular") {
    createCircularGradient();
  } else {
    createHorizontalPlot();
  }
});

// initial visualization
createCircularGradient();
