// const cardsData = [
//   {
//     title: "Total Orders",
//     value: 862,
//     timestamp: 1754476592000,
//   },
//   {
//     title: "Ordered Items This Week",
//     value: 156,
//     timestamp: 1754641532000,
//   },
//   {
//     title: "Return Orders",
//     value: 12,
//     timestamp: 1754562992000,
//   },
//   {
//     title: "Fulfilled Orders This Week",
//     value: 124,
//     timestamp: 1754627132000,
//   },
// ];

// const productsData = [
//   {
//     name: "GPS Fitness Smartwatch",
//     description:
//       "Track your workouts, heart rate, and sleep patterns with style.",
//     price: 22999,
//     status: "In Stock",
//     isNew: true,
//     unitsSold: 8240,
//     imageUrl:
//       "http://interview.surya-digital.in/images/gps-fitness-smartwatch.jpg",
//   },
//   {
//     name: "Ergonomic Mesh Office Chair",
//     description:
//       "Designed for all-day comfort with adjustable lumbar support, armrests, and headrest. This chair provides the best comfort at the best price and there isn't anything like this in the market. It's the one chair to rule them all.",
//     price: 18750,
//     status: "Out of Stock",
//     isNew: false,
//     unitsSold: 3450,
//     imageUrl:
//       "http://interview.surya-digital.in/images/ergonomic-mesh-office-chair.jpg",
//   },
//   {
//     name: "Waterproof Portable Bluetooth Speaker",
//     description:
//       "Your perfect companion for beach days, hikes, and pool parties.",
//     price: 4999,
//     status: "Low Stock",
//     isNew: true,
//     unitsSold: 12500,
//     imageUrl:
//       "http://interview.surya-digital.in/images/waterproof-portable-bluetooth-speaker.jpg",
//   },
//   {
//     name: "65-inch 4K Ultra HD Smart TV",
//     description:
//       "Experience breathtaking clarity, vibrant colors, and seamless streaming.",
//     price: 89900,
//     status: "In Stock",
//     isNew: true,
//     unitsSold: 1980,
//     imageUrl:
//       "http://interview.surya-digital.in/images/65-inch-4k-ultra-hd-smart-tv.jpg",
//   },
//   {
//     name: "Smart Robot Vacuum Cleaner",
//     description:
//       "Intelligent laser navigation and self-charging for effortless cleaning.",
//     price: 28500,
//     status: "Out of Stock",
//     isNew: false,
//     unitsSold: 6800,
//     imageUrl:
//       "http://interview.surya-digital.in/images/smart-robot-vacuum-cleaner.jpg",
//   },
//   {
//     name: "Automatic Espresso Machine",
//     description:
//       "Craft barista-quality lattes and cappuccinos from bean to cup.",
//     price: 35000,
//     status: "Out of Stock",
//     isNew: false,
//     unitsSold: 2110,
//     imageUrl:
//       "http://interview.surya-digital.in/images/automatic-espresso-machine.jpg",
//   },
// ];

// function formatDate(ts) {
//   const d = new Date(ts);
//   return d.toLocaleDateString(undefined, {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });
// }

// function createDashboardGrid(cards) {
//   const grid = document.createElement("div");
//   grid.className = "dashboard-grid";
//   cards.forEach((card) => {
//     const cardDiv = document.createElement("div");
//     cardDiv.className = "dashboard-card";
//     const title = document.createElement("div");
//     title.className = "card-title";
//     title.textContent = card.title;
//     const value = document.createElement("div");
//     value.className = "card-value";
//     value.textContent = card.value;
//     const date = document.createElement("div");
//     date.className = "card-date";
//     date.textContent = `as of ${formatDate(card.timestamp)}`;
//     cardDiv.appendChild(title);
//     cardDiv.appendChild(value);
//     cardDiv.appendChild(date);
//     grid.appendChild(cardDiv);
//   });
//   return grid;
// }

// function createStatusBadge(status) {
//   const badge = document.createElement("span");
//   badge.className = "product-badge";
//   badge.textContent = status;
//   if (status === "In Stock") badge.classList.add("badge-in-stock");
//   else if (status === "Low Stock") badge.classList.add("badge-low-stock");
//   else if (status === "Out of Stock") badge.classList.add("badge-out-of-stock");
//   return badge;
// }

// function createNewBadge() {
//   const badge = document.createElement("span");
//   badge.className = "product-badge badge-new";
//   badge.textContent = "New";
//   return badge;
// }

// function createProductsGrid(products) {
//   const grid = document.createElement("div");
//   grid.className = "products-grid";
//   products.forEach((product) => {
//     const cardDiv = document.createElement("div");
//     cardDiv.className = "product-card";

//     const imgWrap = document.createElement("div");
//     imgWrap.className = "product-img-wrap";
//     const img = document.createElement("img");
//     img.className = "product-image";
//     img.src = product.imageUrl;
//     img.alt = product.name;
//     imgWrap.appendChild(img);

//     const badgesWrap = document.createElement("div");
//     badgesWrap.className = "badges-wrap";
//     if (product.isNew) badgesWrap.appendChild(createNewBadge());
//     if (product.status !== "In Stock")
//       badgesWrap.appendChild(createStatusBadge(product.status));
//     else if (product.status === "Low Stock" || product.status === "In Stock")
//       badgesWrap.appendChild(createStatusBadge(product.status));
//     imgWrap.appendChild(badgesWrap);

//     const info = document.createElement("div");
//     info.className = "product-info";

//     const name = document.createElement("div");
//     name.className = "product-title";
//     name.textContent = product.name;

//     const desc = document.createElement("div");
//     desc.className = "product-desc";
//     desc.textContent = product.description;

//     const infoBar = document.createElement("div");
//     infoBar.className = "product-info-bar";

//     const statusBadge = createStatusBadge(product.status);
//     infoBar.appendChild(statusBadge);

//     const sold = document.createElement("span");
//     sold.className = "product-sold";
//     sold.textContent = `${product.unitsSold.toLocaleString()} sold`;
//     infoBar.appendChild(sold);

//     const price = document.createElement("div");
//     price.className = "product-price";
//     price.textContent = `₹${product.price.toLocaleString()}`;

//     info.appendChild(name);
//     info.appendChild(desc);
//     info.appendChild(infoBar);
//     info.appendChild(price);

//     cardDiv.appendChild(imgWrap);
//     cardDiv.appendChild(info);

//     grid.appendChild(cardDiv);
//   });
//   return grid;
// }

// const barChartData = [
//   { date: "01-01-2025", label: "Jan", Mobile: 80, Desktop: 100 },
//   { date: "01-02-2025", label: "Feb", Mobile: 70, Desktop: 90 },
//   { date: "01-03-2025", label: "Mar", Mobile: 60, Desktop: 70 },
//   { date: "01-04-2025", label: "Apr", Mobile: 85, Desktop: 95 },
//   { date: "01-05-2025", label: "May", Mobile: 80, Desktop: 100 },
// ];

// const pieChartData = [
//   { date: "01-01-2025", label: "Jan", revenue: 18000 },
//   { date: "01-02-2025", label: "Feb", revenue: 28000 },
//   { date: "01-03-2025", label: "Mar", revenue: 12000 },
//   { date: "01-04-2025", label: "Apr", revenue: 22000 },
//   { date: "01-05-2025", label: "May", revenue: 20000 },
// ];

// const chartColors = {
//   Mobile: "#9bbcf7",
//   Desktop: "#6d8df2",
//   pie: ["#9bbcf7", "#6d8df2", "#a5e3d8", "#f4c542", "#f57f7f"],
// };

// function createChartsScreen() {
//   const chartsWrap = document.createElement("div");
//   chartsWrap.className = "charts-wrap";

//   const barCard = document.createElement("div");
//   barCard.className = "chart-card";
//   const barTitle = document.createElement("div");
//   barTitle.className = "chart-title";
//   barTitle.textContent = "Sale By Device";
//   const barSub = document.createElement("div");
//   barSub.className = "chart-subtitle";
//   barSub.textContent = "Jan 2025 - May 2025";
//   barCard.appendChild(barTitle);
//   barCard.appendChild(barSub);
//   const barChart = document.createElement("div");
//   barChart.className = "chart-area";
//   renderBarChart(barChart);
//   barCard.appendChild(barChart);

//   const pieCard = document.createElement("div");
//   pieCard.className = "chart-card";
//   const pieTitle = document.createElement("div");
//   pieTitle.className = "chart-title";
//   pieTitle.textContent = "Revenue Contribution";
//   const pieSub = document.createElement("div");
//   pieSub.className = "chart-subtitle";
//   pieSub.textContent = "Jan 2025 - May 2025";
//   pieCard.appendChild(pieTitle);
//   pieCard.appendChild(pieSub);
//   const pieChart = document.createElement("div");
//   pieChart.className = "chart-area";
//   renderPieChart(pieChart);
//   pieCard.appendChild(pieChart);

//   chartsWrap.appendChild(barCard);
//   chartsWrap.appendChild(pieCard);

//   return chartsWrap;
// }

// function renderSidebar(selectedScreen, onSelect) {
//   const sidebar = document.createElement("div");
//   sidebar.className = "sidebar";
//   const screens = ["Cards 1", "Cards 2", "Charts"];
//   screens.forEach((screen, idx) => {
//     const btn = document.createElement("button");
//     btn.className =
//       "sidebar-option" + (selectedScreen === idx ? " selected" : "");
//     btn.textContent = screen;
//     btn.onclick = () => onSelect(idx);
//     sidebar.appendChild(btn);
//   });
//   return sidebar;
// }

// function renderApp(selectedScreen = 0) {
//   const root = document.getElementById("app-root");
//   root.innerHTML = "";
//   const sidebar = renderSidebar(selectedScreen, renderApp);
//   const main = document.createElement("div");
//   main.className = "main-content";
//   if (selectedScreen === 0) {
//     main.appendChild(createDashboardGrid(cardsData));
//   } else if (selectedScreen === 1) {
//     main.appendChild(createProductsGrid(productsData));
//   } else if (selectedScreen === 2) {
//     main.innerHTML = "";
//   }
//   root.appendChild(sidebar);
//   root.appendChild(main);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   renderApp(0);
// });

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

const productsData = [
  {
    name: "GPS Fitness Smartwatch",
    description:
      "Track your workouts, heart rate, and sleep patterns with style.",
    price: 22999,
    status: "In Stock",
    isNew: true,
    unitsSold: 8240,
    imageUrl:
      "http://interview.surya-digital.in/images/gps-fitness-smartwatch.jpg",
  },
  {
    name: "Ergonomic Mesh Office Chair",
    description:
      "Designed for all-day comfort with adjustable lumbar support, armrests, and headrest. This chair provides the best comfort at the best price and there isn't anything like this in the market. It's the one chair to rule them all.",
    price: 18750,
    status: "Out of Stock",
    isNew: false,
    unitsSold: 3450,
    imageUrl:
      "http://interview.surya-digital.in/images/ergonomic-mesh-office-chair.jpg",
  },
  {
    name: "Waterproof Portable Bluetooth Speaker",
    description:
      "Your perfect companion for beach days, hikes, and pool parties.",
    price: 4999,
    status: "Low Stock",
    isNew: true,
    unitsSold: 12500,
    imageUrl:
      "http://interview.surya-digital.in/images/waterproof-portable-bluetooth-speaker.jpg",
  },
  {
    name: "65-inch 4K Ultra HD Smart TV",
    description:
      "Experience breathtaking clarity, vibrant colors, and seamless streaming.",
    price: 89900,
    status: "In Stock",
    isNew: true,
    unitsSold: 1980,
    imageUrl:
      "http://interview.surya-digital.in/images/65-inch-4k-ultra-hd-smart-tv.jpg",
  },
  {
    name: "Smart Robot Vacuum Cleaner",
    description:
      "Intelligent laser navigation and self-charging for effortless cleaning.",
    price: 28500,
    status: "Out of Stock",
    isNew: false,
    unitsSold: 6800,
    imageUrl:
      "http://interview.surya-digital.in/images/smart-robot-vacuum-cleaner.jpg",
  },
  {
    name: "Automatic Espresso Machine",
    description:
      "Craft barista-quality lattes and cappuccinos from bean to cup.",
    price: 35000,
    status: "Out of Stock",
    isNew: false,
    unitsSold: 2110,
    imageUrl:
      "http://interview.surya-digital.in/images/automatic-espresso-machine.jpg",
  },
];

// Chart data
const barLabels = ["Jan", "Feb", "Mar", "Apr", "May"];
const barDataMobile = [80, 70, 60, 85, 80];
const barDataDesktop = [100, 90, 70, 95, 100];
const pieLabels = ["Jan", "Feb", "Mar", "Apr", "May"];
const pieData = [18000, 28000, 12000, 22000, 20000];

// --- UI Utility Functions ---
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

function createStatusBadge(status) {
  const badge = document.createElement("span");
  badge.className = "product-badge";
  badge.textContent = status;
  if (status === "In Stock") badge.classList.add("badge-in-stock");
  else if (status === "Low Stock") badge.classList.add("badge-low-stock");
  else if (status === "Out of Stock") badge.classList.add("badge-out-of-stock");
  return badge;
}

function createNewBadge() {
  const badge = document.createElement("span");
  badge.className = "product-badge badge-new";
  badge.textContent = "New";
  return badge;
}

function createProductsGrid(products) {
  const grid = document.createElement("div");
  grid.className = "products-grid";
  products.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "product-card";

    // Image
    const imgWrap = document.createElement("div");
    imgWrap.className = "product-img-wrap";
    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.imageUrl;
    img.alt = product.name;
    imgWrap.appendChild(img);

    // badges
    const badgesWrap = document.createElement("div");
    badgesWrap.className = "badges-wrap";
    if (product.isNew) badgesWrap.appendChild(createNewBadge());
    if (product.status !== "In Stock")
      badgesWrap.appendChild(createStatusBadge(product.status));
    else if (product.status === "Low Stock" || product.status === "In Stock")
      badgesWrap.appendChild(createStatusBadge(product.status));
    imgWrap.appendChild(badgesWrap);

    // Info
    const info = document.createElement("div");
    info.className = "product-info";
    // Title
    const name = document.createElement("div");
    name.className = "product-title";
    name.textContent = product.name;
    // Desc
    const desc = document.createElement("div");
    desc.className = "product-desc";
    desc.textContent = product.description;

    // Info bar
    const infoBar = document.createElement("div");
    infoBar.className = "product-info-bar";
    // Status
    const statusBadge = createStatusBadge(product.status);
    infoBar.appendChild(statusBadge);
    // Sold
    const sold = document.createElement("span");
    sold.className = "product-sold";
    sold.textContent = `${product.unitsSold.toLocaleString()} sold`;
    infoBar.appendChild(sold);

    // Price
    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = `₹${product.price.toLocaleString()}`;

    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(infoBar);
    info.appendChild(price);

    cardDiv.appendChild(imgWrap);
    cardDiv.appendChild(info);

    grid.appendChild(cardDiv);
  });
  return grid;
}

function renderSidebar(selectedScreen, onSelect) {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  const screens = ["Cards 1", "Cards 2", "Step 3", "Charts"];
  screens.forEach((screen, idx) => {
    const btn = document.createElement("button");
    btn.className =
      "sidebar-option" + (selectedScreen === idx ? " selected" : "");
    btn.textContent = screen;
    btn.onclick = () => onSelect(idx);
    sidebar.appendChild(btn);
  });
  return sidebar;
}

function createChartsScreen() {
  const wrap = document.createElement("div");
  wrap.className = "charts-wrap";

  const barCard = document.createElement("div");
  barCard.className = "chart-card";
  const barTitle = document.createElement("div");
  barTitle.className = "chart-title";
  barTitle.textContent = "Sale By Device";
  const barSub = document.createElement("div");
  barSub.className = "chart-subtitle";
  barSub.textContent = "Jan 2025 - May 2025";
  barCard.appendChild(barTitle);
  barCard.appendChild(barSub);
  const barCanvas = document.createElement("canvas");
  barCanvas.id = "barChart";
  barCard.appendChild(barCanvas);

  const pieCard = document.createElement("div");
  pieCard.className = "chart-card";
  const pieTitle = document.createElement("div");
  pieTitle.className = "chart-title";
  pieTitle.textContent = "Revenue Contribution";
  const pieSub = document.createElement("div");
  pieSub.className = "chart-subtitle";
  pieSub.textContent = "Jan 2025 - May 2025";
  pieCard.appendChild(pieTitle);
  pieCard.appendChild(pieSub);
  const pieCanvas = document.createElement("canvas");
  pieCanvas.id = "pieChart";
  pieCard.appendChild(pieCanvas);

  wrap.appendChild(barCard);
  wrap.appendChild(pieCard);

  setTimeout(() => {
    new Chart(barCanvas.getContext("2d"), {
      type: "bar",
      data: {
        labels: barLabels,
        datasets: [
          {
            label: "Mobile",
            data: barDataMobile,
            backgroundColor: "#9bbcf7",
          },
          {
            label: "Desktop",
            data: barDataDesktop,
            backgroundColor: "#6d8df2",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          tooltip: { enabled: true },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 125,
            ticks: { stepSize: 25 },
          },
        },
      },
    });

    new Chart(pieCanvas.getContext("2d"), {
      type: "pie",
      data: {
        labels: pieLabels,
        datasets: [
          {
            data: pieData,
            backgroundColor: [
              "#9bbcf7",
              "#6d8df2",
              "#a5e3d8",
              "#f4c542",
              "#f57f7f",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: "right" },
          tooltip: { enabled: true },
        },
      },
    });
  }, 10);

  return wrap;
}

function renderApp(selectedScreen = 0) {
  const root = document.getElementById("app-root");
  root.innerHTML = "";
  const sidebar = renderSidebar(selectedScreen, renderApp);
  const main = document.createElement("div");
  main.className = "main-content";
  if (selectedScreen === 0) {
    main.appendChild(createDashboardGrid(cardsData));
  } else if (selectedScreen === 1) {
    main.appendChild(createProductsGrid(productsData));
  } else if (selectedScreen === 2) {
    main.innerHTML = "<h2>Step 3 content coming soon.</h2>";
  } else if (selectedScreen === 3) {
    main.appendChild(createChartsScreen());
  }
  root.appendChild(sidebar);
  root.appendChild(main);
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp(0);
});
