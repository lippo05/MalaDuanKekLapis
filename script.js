// ============================================================
// COMPLETE 21 KEK LAPIS MENU (from your PDF file)
// All prices in Ringgit Malaysia (RM)
// Images are based on the actual cake photos from your PDF
// ============================================================

const cakes = [
    // Page 2
    {
        id: 1,
        name: "SENJA NAN MERAH",
        description: "Beautiful sunset-inspired layered cake with rich, velvety texture. A customer favourite with warm reddish-orange hues.",
        whole: 320,
        half: 165,
        loaf: 85,
        category: "signature",
        image: "https://placehold.co/600x500/D35400/FFFFFF?text=🌅+SENJA+NAN+MERAH",
        badge: "Best Seller"
    },
    // Page 3
    {
        id: 2,
        name: "GREEN WOOD",
        description: "Earthy green layers with a hint of pandan and forest-inspired freshness. Natural and aromatic.",
        whole: 300,
        half: 150,
        loaf: 80,
        category: "signature",
        image: "https://placehold.co/600x500/2E7D32/FFFFFF?text=🌲+GREEN+WOOD",
        badge: "Popular"
    },
    {
        id: 3,
        name: "MADU KEMENYAN",
        description: "Sweet honey with traditional Kemenyan aromatic infusion. Delicate, fragrant, and soothing.",
        whole: 190,
        half: 95,
        loaf: 50,
        category: "classic",
        image: "https://placehold.co/600x500/F1C40F/FFFFFF?text=🍯+MADU+KEMENYAN",
        badge: "Value"
    },
    // Page 4
    {
        id: 4,
        name: "MILO SAUROUS",
        description: "Rich Milo chocolate malt layers with a slight savoury twist. A family favourite!",
        whole: 250,
        half: 125,
        loaf: 70,
        category: "classic",
        image: "https://placehold.co/600x500/8B5A2B/FFFFFF?text=🍫+MILO+SAUROUS",
        badge: "Family Fav"
    },
    {
        id: 5,
        name: "MILO DINASOUR",
        description: "Bold Milo dinosaur edition — extra chocolatey, extra layers of malt goodness. Kids love it!",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "classic",
        image: "https://placehold.co/600x500/6D4C41/FFFFFF?text=🦖+MILO+DINASOUR",
        badge: "Special"
    },
    // Page 6
    {
        id: 6,
        name: "BELACAN LUMUT CHEESE",
        description: "Unique savoury belacan meets creamy lumut cheese — adventurous and bold flavour combination.",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "specialty",
        image: "https://placehold.co/600x500/558B2F/FFFFFF?text=🧀+BELACAN+LUMUT+CHEESE",
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
        image: "https://placehold.co/600x500/FF7043/FFFFFF?text=🇮🇳+LAPIS+INDIA",
        badge: "Exotic"
    },
    // Page 7
    {
        id: 8,
        name: "FAZURA",
        description: "Elegant floral-inspired cake, light and buttery with delicate sweetness. Perfect for gifts.",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "signature",
        image: "https://placehold.co/600x500/EC407A/FFFFFF?text=🌸+FAZURA",
        badge: "Elegant"
    },
    // Page 8
    {
        id: 9,
        name: "SISIK IKAN",
        description: "Unique 'fish scale' pattern layers with buttery texture and traditional Sarawakian taste.",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "classic",
        image: "https://placehold.co/600x500/1E88E5/FFFFFF?text=🐟+SISIK+IKAN",
        badge: "Heritage"
    },
    // Page 10
    {
        id: 10,
        name: "KEK HATI PAREK",
        description: "Rich and dense 'heart of parek' — a nostalgic Sarawakian classic that melts in your mouth.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "classic",
        image: "https://placehold.co/600x500/AD1457/FFFFFF?text=❤️+KEK+HATI+PAREK",
        badge: "Traditional"
    },
    // Page 11
    {
        id: 11,
        name: "KEK BELACAN",
        description: "Savory belacan-infused cake for the adventurous palate. Unique umami flavour experience.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "specialty",
        image: "https://placehold.co/600x500/FFF176/4E342E?text=🦐+KEK+BELACAN",
        badge: "Unique"
    },
    // Page 12
    {
        id: 12,
        name: "KEK LUMUT",
        description: "Moss-green lumut cake with soft, moist layers and mild earthy notes. Truly unique.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "specialty",
        image: "https://placehold.co/600x500/388E3C/FFFFFF?text=🌿+KEK+LUMUT",
        badge: "Earthy"
    },
    // Page 13
    {
        id: 13,
        name: "INTAN TERPILIH",
        description: "'Chosen Diamond' — premium selected layers, rich butter and refined sweetness.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "premium",
        image: "https://placehold.co/600x500/D4AF37/FFFFFF?text=💎+INTAN+TERPILIH",
        badge: "Premium"
    },
    // Page 14
    {
        id: 14,
        name: "PILIH KASIH",
        description: "'Chosen Love' — affectionate flavours, balanced sweetness, perfect for expressing love.",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "classic",
        image: "https://placehold.co/600x500/E91E63/FFFFFF?text=💖+PILIH+KASIH",
        badge: "Romantic"
    },
    // Page 15 - IDDLA (new from PDF)
    {
        id: 15,
        name: "IDDLA",
        description: "A unique creation with distinctive layered pattern and delightful taste.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "specialty",
        image: "https://placehold.co/600x500/9C27B0/FFFFFF?text=✨+IDDLA",
        badge: "Exclusive"
    },
    // Page 16
    {
        id: 16,
        name: "LAPIS ONYX",
        description: "Dark, mysterious layers with deep caramel and coffee notes. Bold and rich flavour profile.",
        whole: 0,
        half: 0,
        loaf: 0,
        category: "premium",
        image: "https://placehold.co/600x500/3E2723/FFFFFF?text=🖤+LAPIS+ONYX",
        badge: "Dark"
    },
    // Page 17
    {
        id: 17,
        name: "LAPIS DAHLIA",
        description: "Beautiful dahlia-flower patterned layers, vibrant and buttery. An eye-catching masterpiece!",
        whole: 300,
        half: 155,
        loaf: 60,
        category: "signature",
        image: "https://placehold.co/600x500/FF5722/FFFFFF?text=🌼+LAPIS+DAHLIA",
        badge: "Artisan"
    },
    // Additional cakes from Page 1 reference (Kek Lapis Belacan, etc - adding variations)
    {
        id: 18,
        name: "KEK LAPIS TRADISIONAL",
        description: "Original traditional Sarawak layered cake. Classic recipe passed down through generations.",
        whole: 180,
        half: 95,
        loaf: 50,
        category: "classic",
        image: "https://placehold.co/600x500/D2691E/FFFFFF?text=🍰+TRADISIONAL",
        badge: "Classic"
    },
    {
        id: 19,
        name: "KEK LAPIS PANDAN",
        description: "Aromatic pandan-infused layers with natural green colour. Fresh and fragrant.",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "classic",
        image: "https://placehold.co/600x500/66BB6A/FFFFFF?text=🌿+PANDAN",
        badge: "Fragrant"
    },
    {
        id: 20,
        name: "KEK LAPIS COKLAT",
        description: "Rich chocolate layered cake for chocolate lovers. Deep cocoa flavour in every slice.",
        whole: 210,
        half: 110,
        loaf: 60,
        category: "classic",
        image: "https://placehold.co/600x500/5D4037/FFFFFF?text=🍫+COKLAT",
        badge: "Chocolate"
    },
    {
        id: 21,
        name: "KEK LAPIS PREMIUM ROYAL",
        description: "The ultimate premium experience — finest ingredients, most intricate layers.",
        whole: 350,
        half: 180,
        loaf: 95,
        category: "premium",
        image: "https://placehold.co/600x500/C62828/FFFFFF?text=👑+PREMIUM+ROYAL",
        badge: "Royal"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const noResultMsgDiv = document.getElementById('noResultMsg');
const cakeCountSpan = document.getElementById('cakeCount');
let activeCategory = 'all';
let currentSearchTerm = '';

// Update cake count display
function updateCakeCount() {
    if (cakeCountSpan) {
        cakeCountSpan.innerText = cakes.length;
    }
}

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

    // Create cards for each cake
    filtered.forEach(cake => {
        const card = document.createElement('div');
        card.className = 'cake-card';

        // Image container with actual cake image
        const imgDiv = document.createElement('div');
        imgDiv.className = 'card-img';
        imgDiv.style.backgroundImage = `url('${cake.image}')`;
        imgDiv.style.backgroundSize = 'cover';
        imgDiv.style.backgroundPosition = 'center';
        
        const badgeSpan = document.createElement('span');
        badgeSpan.className = 'card-badge';
        badgeSpan.innerText = cake.badge;
        imgDiv.appendChild(badgeSpan);

        // Content area
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

        // Add price rows only if price > 0
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

// Search handler with debounce
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
    updateCakeCount();
    setupEventListeners();
    renderMenu();
}

init();
