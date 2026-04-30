// ============================================================
// COMPLETE KEK LAPIS MENU DATA (from PDF file)
// All prices in Ringgit Malaysia (RM)
// ============================================================
const cakes = [
    {
        id: 1,
        name: "SENJA NAN MERAH",
        description: "Beautiful sunset-inspired layered cake with rich, velvety texture. A customer favourite.",
        whole: 320,
        half: 165,
        loaf: 85,
        category: "signature",
        image: "https://placehold.co/600x500/D35400/F39C12?text=🌅+SENJA+NAN+ MERAH",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "GREEN WOOD",
        description: "Earthy green layers with a hint of pandan and forest-inspired freshness.",
        whole: 300,
        half: 150,
        loaf: 80,
        category: "signature",
        image: "https://placehold.co/600x500/2E7D32/A5D6A7?text=🌲+GREEN+WOOD",
        badge: "Popular"
    },
    {
        id: 3,
        name: "MADU KEMENYAN",
        description: "Sweet honey with traditional Kemenyan aromatic infusion. Delicate and fragrant.",
        whole: 190,
        half: 95,
        loaf: 50,
        category: "classic",
        image: "https://placehold.co/600x500/F1C40F/E67E22?text=🍯+MADU+KEMENYAN",
        badge: "Value"
    },
    {
        id: 4,
        name: "MILO SAUROUS",
        description: "Rich Milo chocolate malt layers with a slight savoury twist. Kid-approved!",
        whole: 250,
        half: 125,
        loaf: 70,
        category: "classic",
        image: "https://placehold.co/600x500/8B5A2B/D2B48C?text=🍫+MILO+SAUROUS",
        badge: "Family Fav"
    },
    {
        id: 5,
        name: "MILO DINASOUR",
        description: "Bold Milo dinosaur edition — extra chocolatey, extra layers of malt goodness.",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "classic",
        image: "https://placehold.co/600x500/6D4C41/BCAAA4?text=🦖+MILO+DINASOUR",
        badge: "Special"
    },
    {
        id: 6,
        name: "BELACAN LUMUT CHEESE",
        description: "Unique savoury belacan meets creamy lumut cheese — adventurous and bold.",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "specialty",
        image: "https://placehold.co/600x500/558B2F/CDDC39?text=🧀+BELACAN+LUMUT",
        badge: "Signature"
    },
    {
        id: 7,
        name: "LAPIS INDIA",
        description: "Spiced Indian-inspired layers with cardamom and rose hints. Exotic and aromatic.",
        whole: 220,
        half: 115,
        loaf: 60,
        category: "specialty",
        image: "https://placehold.co/600x500/FF7043/FFAB91?text=🇮🇳+LAPIS+INDIA",
        badge: "Exotic"
    },
    {
        id: 8,
        name: "FAZURA",
        description: "Elegant floral-inspired cake, light and buttery with delicate sweetness.",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "signature",
        image: "https://placehold.co/600x500/EC407A/F8BBD0?text=🌸+FAZURA",
        badge: "Elegant"
    },
    {
        id: 9,
        name: "SISIK IKAN",
        description: "Unique 'fish scale' pattern layers with buttery texture and traditional taste.",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "classic",
        image: "https://placehold.co/600x500/1E88E5/90CAF9?text=🐟+SISIK+IKAN",
        badge: "Heritage"
    },
    {
        id: 10,
        name: "KEK HATI PAREK",
        description: "Rich and dense 'heart of parek' — a nostalgic Sarawakian classic.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "classic",
        image: "https://placehold.co/600x500/AD1457/F48FB1?text=❤️+KEK+HATI+PAREK",
        badge: "Traditional"
    },
    {
        id: 11,
        name: "KEK BELACAN",
        description: "Savory belacan-infused cake for the adventurous palate. Unique umami flavour.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "specialty",
        image: "https://placehold.co/600x500/FFF176/F9A825?text=🦐+KEK+BELACAN",
        badge: "Unique"
    },
    {
        id: 12,
        name: "KEK LUMUT",
        description: "Moss-green lumut cake with soft, moist layers and mild earthy notes.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "specialty",
        image: "https://placehold.co/600x500/388E3C/A5D6A7?text=🌿+KEK+LUMUT",
        badge: "Earthy"
    },
    {
        id: 13,
        name: "INTAN TERPILIH",
        description: "'Chosen Diamond' — premium selected layers, rich butter and refined sweetness.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "signature",
        image: "https://placehold.co/600x500/D4AF37/FFF176?text=💎+INTAN+TERPILIH",
        badge: "Premium"
    },
    {
        id: 14,
        name: "PILIH KASIH",
        description: "'Chosen Love' — affectionate flavours, balanced sweetness, perfect for gifts.",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "classic",
        image: "https://placehold.co/600x500/E91E63/FCE4EC?text=💖+PILIH+KASIH",
        badge: "Romantic"
    },
    {
        id: 15,
        name: "LAPIS ONYX",
        description: "Dark, mysterious layers with deep caramel and coffee notes. Bold and rich.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "signature",
        image: "https://placehold.co/600x500/3E2723/8D6E63?text=🖤+LAPIS+ONYX",
        badge: "Dark"
    },
    {
        id: 16,
        name: "LAPIS DAHLIA",
        description: "Beautiful dahlia-flower patterned layers, vibrant and buttery. Eye-catching!",
        whole: 300,
        half: 155,
        loaf: 60,
        category: "signature",
        image: "https://placehold.co/600x500/FF5722/FFCCBC?text=🌼+LAPIS+DAHLIA",
        badge: "Artisan"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const noResultMsgDiv = document.getElementById('noResultMsg');
let activeCategory = 'all';
let currentSearchTerm = '';

// Render menu cards
function renderMenu() {
    // Filter by category
    let filtered = cakes.filter(cake => {
        if (activeCategory === 'all') return true;
        return cake.category === activeCategory;
    });

    // Filter by search term
    if (currentSearchTerm.trim() !== '') {
        const term = currentSearchTerm.trim().toLowerCase();
        filtered = filtered.filter(cake => 
            cake.name.toLowerCase().includes(term)
        );
    }

    // Remove existing cards
    const existingCards = menuGrid.querySelectorAll('.cake-card');
    existingCards.forEach(card => card.remove());

    // Show/hide no results
    if (filtered.length === 0) {
        noResultMsgDiv.style.display = 'block';
        return;
    } else {
        noResultMsgDiv.style.display = 'none';
    }

    // Create cards
    filtered.forEach(cake => {
        const card = document.createElement('div');
        card.className = 'cake-card';

        // Image
        const imgDiv = document.createElement('div');
        imgDiv.className = 'card-img';
        imgDiv.style.backgroundImage = `url('${cake.image}')`;
        imgDiv.style.backgroundSize = 'cover';
        imgDiv.style.backgroundPosition = 'center';
        
        const badgeSpan = document.createElement('span');
        badgeSpan.className = 'card-badge';
        badgeSpan.innerText = cake.badge;
        imgDiv.appendChild(badgeSpan);

        // Content
        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';

        const nameEl = document.createElement('h3');
        nameEl.className = 'cake-name';
        nameEl.innerText = cake.name;

        const descEl = document.createElement('p');
        descEl.className = 'cake-desc';
        descEl.innerText = cake.description;

        const priceGroup = document.createElement('div');
        priceGroup.className = 'price-group';

        // Add price rows if price > 0
        if (cake.whole > 0) {
            const wholeRow = document.createElement('div');
            wholeRow.className = 'price-item';
            wholeRow.innerHTML = `<span class="size-label">🍰 WHOLE</span><span class="price-value">RM ${cake.whole}</span>`;
            priceGroup.appendChild(wholeRow);
        }
        
        if (cake.half > 0) {
            const halfRow = document.createElement('div');
            halfRow.className = 'price-item';
            halfRow.innerHTML = `<span class="size-label">🍰 HALF</span><span class="price-value">RM ${cake.half}</span>`;
            priceGroup.appendChild(halfRow);
        }
        
        if (cake.loaf > 0) {
            const loafRow = document.createElement('div');
            loafRow.className = 'price-item';
            loafRow.innerHTML = `<span class="size-label">🍞 LOAF</span><span class="price-value">RM ${cake.loaf}</span>`;
            priceGroup.appendChild(loafRow);
        }

        if (cake.whole === 0 && cake.half === 0 && cake.loaf === 0) {
            const contactRow = document.createElement('div');
            contactRow.className = 'price-item';
            contactRow.innerHTML = `<span class="size-label">📞 Call for Price</span><span class="price-value">—</span>`;
            priceGroup.appendChild(contactRow);
        }

        // Order button
        const orderBtn = document.createElement('button');
        orderBtn.className = 'order-btn';
        orderBtn.innerText = '📞 Enquire / Order';
        orderBtn.addEventListener('click', () => {
            alert(`🍰 ${cake.name}\n\nPlease contact us at +60 12-345 6789 to place your order.\nWe deliver fresh Kek Lapis daily!`);
        });

        contentDiv.appendChild(nameEl);
        contentDiv.appendChild(descEl);
        contentDiv.appendChild(priceGroup);
        contentDiv.appendChild(orderBtn);

        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
        menuGrid.appendChild(card);
    });
}

// Set active category
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

// Search handler
let debounceTimeout;
function handleSearchInput() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        currentSearchTerm = searchInput.value;
        renderMenu();
    }, 280);
}

// Event listeners
function setupEventListeners() {
    const categoryBtns = document.querySelectorAll('.cat-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-cat');
            setActiveCategory(cat);
        });
    });
    searchInput.addEventListener('input', handleSearchInput);
}

// Initialize
function init() {
    setupEventListeners();
    renderMenu();
}

init();
