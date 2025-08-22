const cardsData = [
  {
    title: "Total Orders",
    value: 862,
    timestamp: 1754476592000,
  },
  {
    title: "Ordered Items This Week",
    value: 156,
    timestamp: 1754641532000,
  },
  {
    title: "Return Orders",
    value: 12,
    timestamp: 1754562992000,
  },
  {
    title: "Fulfilled Orders This Week",
    value: 124,
    timestamp: 1754627132000,
  },
];

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function createDashboardGrid(cards) {
  const grid = document.createElement("div");
  grid.className = "dashboard-grid";

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "dashboard-card";

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = card.title;

    const value = document.createElement("div");
    value.className = "card-value";
    value.textContent = card.value;

    const date = document.createElement("div");
    date.className = "card-date";
    date.textContent = `as of ${formatDate(card.timestamp)}`;

    cardDiv.appendChild(title);
    cardDiv.appendChild(value);
    cardDiv.appendChild(date);

    grid.appendChild(cardDiv);
  });

  return grid;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("dashboard-root");
  root.appendChild(createDashboardGrid(cardsData));
});
