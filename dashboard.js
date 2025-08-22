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
  if (status === "In Stock") {
    badge.classList.add("badge-in-stock");
  } else if (status === "Low Stock") {
    badge.classList.add("badge-low-stock");
  } else if (status === "Out of Stock") {
    badge.classList.add("badge-out-of-stock");
  }
  return badge;
}

function createNewBadge() {
  const badge = document.createElement("span");
  //   badge.className = "product-badge badge-new";
  //   badge.textContent = "New";
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

    const info = document.createElement("div");
    info.className = "product-info";
    const name = document.createElement("div");
    name.className = "product-title";
    name.textContent = product.name;
    const desc = document.createElement("div");
    desc.className = "product-desc";
    desc.textContent = product.description;
    const price = document.createElement("div");
    price.className = "product-price";
    price.textContent = `₹${product.price.toLocaleString()}`;
    const sold = document.createElement("div");
    sold.className = "product-sold";
    sold.textContent = `${product.unitsSold.toLocaleString()} sold`;

    info.appendChild(name);
    info.appendChild(desc);
    info.appendChild(price);
    info.appendChild(sold);

    cardDiv.appendChild(imgWrap);
    cardDiv.appendChild(info);

    grid.appendChild(cardDiv);
  });
  return grid;
}

function renderSidebar(selectedScreen, onSelect) {
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  const screens = ["Cards 1", "Cards 2", "Step 3"];
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
  }
  root.appendChild(sidebar);
  root.appendChild(main);
}

document.addEventListener("DOMContentLoaded", () => {
  renderApp(0);
});
