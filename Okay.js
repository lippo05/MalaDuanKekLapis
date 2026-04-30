// KEK LAPIS MENU DATA (Product Database)
const cakes = [
    {
        id: 1,
        name: "Rainbow Legacy",
        description: "Vibrant 9-layer classic with buttery vanilla and pastel colours. Soft, moist, and melt-in-mouth texture.",
        price: "48.00",
        category: "classic",
        image: "https://placehold.co/600x500/FFD7C2/9C5D3A?text=🌈+Rainbow+Kek+Lapis",
        badge: "Best seller"
    },
    {
        id: 2,
        name: "Pandan Gula Melaka",
        description: "Fragrant pandan infused with rich coconut palm sugar (Gula Melaka). Authentic Sarawakian heritage taste.",
        price: "55.00",
        category: "classic",
        image: "https://placehold.co/600x500/BFD8B8/5D7B3A?text=🌿+Pandan+Gula",
        badge: "Local fav"
    },
    {
        id: 3,
        name: "Dark Royale Chocolate",
        description: "Decadent dark chocolate layered with belgian cocoa and a hint of sea salt. Rich & silky.",
        price: "62.00",
        category: "premium",
        image: "https://placehold.co/600x500/614C3A/E0C8A0?text=🍫+Dark+Choco",
        badge: "Premium"
    },
    {
        id: 4,
        name: "Strawberry Cheese Bliss",
        description: "Sweet strawberry swirls combined with creamy cheese layer. Fruity, tangy and dreamy.",
        price: "58.00",
        category: "fruity",
        image: "https://placehold.co/600x500/F9C4C4/BF5E5E?text=🍓+Strawberry+Cheese",
        badge: "New"
    },
    {
        id: 5,
        name: "Signature Tiramisu",
        description: "Coffee-kissed layers, mascarpone creaminess, dusted with cocoa — Italian meets Sarawak.",
        price: "68.00",
        category: "signature",
        image: "https://placehold.co/600x500/CBAA7D/F2E3CF?text=☕+Tiramisu+Lapis",
        badge: "Chef's pick"
    },
    {
        id: 6,
        name: "Mango Tango",
        description: "Tropical mango puree laminated between vanilla layers. Bright, zesty & refreshing.",
        price: "52.00",
        category: "fruity",
        image: "https://placehold.co/600x500/FFD966/E5A12E?text=🥭+Mango+Tango",
        badge: "Seasonal"
    },
    {
        id: 7,
        name: "Matcha Azuki",
        description: "Japanese-inspired: premium matcha & sweet red bean paste layers. Earthy, elegant, not too sweet.",
        price: "66.00",
        category: "premium",
        image: "https://placehold.co/600x500/83A580/E1F0D5?text=🍵+Matcha+Azuki",
        badge: "Limited"
    },
    {
        id: 8,
        name: "Classic Butter Prune",
        description: "Traditional butter cake alternative – rich buttercream layers with soft prune fillings.",
        price: "44.00",
        category: "classic",
        image: "https://placehold.co/600x500/E8CBA8/B37146?text=🧈+Butter+Prune",
        badge: "Old school"
    },
    {
        id: 9,
        name: "Blueberry Cream Cheese",
        description: "Bursted blueberries & smooth cream cheese layers, balanced tart & sweet.",
        price: "59.00",
        category: "fruity",
        image: "https://placehold.co/600x500/9D80B0/DBC6F2?text=🫐+Blueberry+Cream",
        badge: "Creamy"
    },
    {
        id: 10,
        name: "Royal Honey Walnut",
        description: "Premium wildflower honey, caramelised walnuts and cinnamon — opulent festive edition.",
        price: "78.00",
        category: "signature",
        image: "https://placehold.co/600x500/CFAF7C/FCEED0?text=🍯+Honey+Walnut",
        badge: "Exclusive"
    },
    {
        id: 11,
        name: "Cempedak Nirwana",
        description: "Local cempedak fruit puree folded into each layer, intensely aromatic & flavourful.",
        price: "64.00",
        category: "signature",
        image: "https://placehold.co/600x500/EABE61/8B5A2B?text=🍈+Cempedak",
        badge: "Rare gem"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const noResultMsgDiv = document.getElementById('noResultMsg');
let activeCategory = 'all';
let currentSearchTerm = '';

// Render menu cards based on filters
function renderMenu() {
    let filtered = cakes.filter(cake => {
        if (activeCategory === 'all') return true;
        return cake.category === activeCategory;
    });

    if (currentSearchTerm.trim() !== '') {
        const term = currentSearchTerm.trim().toLowerCase();
        filtered = filtered.filter(cake => 
            cake.name.toLowerCase().includes(term) || 
            cake.description.toLowerCase().includes(term)
        );
    }

    const existingCards = menuGrid.querySelectorAll('.cake-card');
    existingCards.forEach(card => card.remove());

    if (filtered.length === 0) {
        noResultMsgDiv.style.display = 'block';
        return;
    } else {
        noResultMsgDiv.style.display = 'none';
    }

    filtered.forEach(cake => {
        const card = document.createElement('div');
        card.className = 'cake-card';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'card-img';
        imgDiv.style.backgroundImage = `url('${cake.image}')`;
        imgDiv.style.backgroundSize = 'cover';
        imgDiv.style.backgroundPosition = 'center';
        
        const badgeSpan = document.createElement('span');
        badgeSpan.className = 'card-badge';
        badgeSpan.innerText = cake.badge || 'Flavorful';
        imgDiv.appendChild(badgeSpan);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';

        const nameEl = document.createElement('h3');
        nameEl.className = 'cake-name';
        nameEl.innerText = cake.name;

        const descEl = document.createElement('p');
        descEl.className = 'cake-desc';
        descEl.innerText = cake.description;

        const priceRow = document.createElement('div');
        priceRow.className = 'price-row';
        const priceSpan = document.createElement('span');
        priceSpan.className = 'price';
        priceSpan.innerHTML = `RM ${cake.price} <small>/ whole cake</small>`;
        const orderHint = document.createElement('span');
        orderHint.className = 'order-hint';
        orderHint.innerText = '📞 Order now';
        
        priceRow.appendChild(priceSpan);
        priceRow.appendChild(orderHint);
        contentDiv.appendChild(nameEl);
        contentDiv.appendChild(descEl);
        contentDiv.appendChild(priceRow);
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        menuGrid.appendChild(card);
    });
}

// Set active category and update UI
function setActiveCategory(cat) {
    activeCategory = cat;
    const allBtns = document.querySelectorAll('.cat-btn');
    allBtns.forEach(btn => {
        const btnCat = btn.getAttribute('data-cat');
        if (btnCat === cat) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderMenu();
}

// Handle search with debounce
let debounceTimeout;
function handleSearchInput() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        currentSearchTerm = searchInput.value;
        renderMenu();
    }, 280);
}

// Setup event listeners
function setupEventListeners() {
    const categoryBtns = document.querySelectorAll('.cat-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cat = btn.getAttribute('data-cat');
            setActiveCategory(cat);
        });
    });
    searchInput.addEventListener('input', handleSearchInput);
}

// Initialize app
function init() {
    setupEventListeners();
    renderMenu();
}

init();