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
        whole: 320,
        half: 165,
        loaf: 85,
        category: "signature",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/SenjaNanMerah.jpg",
        badge: "Best Seller"
    },
    // Page 3
    {
        id: 2,
        name: "GREEN WOOD",
        whole: 300,
        half: 150,
        loaf: 80,
        category: "signature",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/GreenWood.jpg",
        badge: "Popular"
    },
    {
        id: 3,
        name: "MADU KEMENYAN",
        whole: 190,
        half: 95,
        loaf: 50,
        category: "classic",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/MaduKemenyan.jpg",
        badge: "Value"
    },
    // Page 4
    {
        id: 4,
        name: "MILO SAUROUS",
        whole: 250,
        half: 125,
        loaf: 70,
        category: "classic",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/MiloSaurous.jpg",
        badge: "Family Fav"
    },
    {
        id: 5,
        name: "MILO DINASOUR",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "classic",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/MiloDinasour.jpg",
        badge: "Special"
    },
    // Page 6
    {
        id: 6,
        name: "BELACAN LUMUT CHEESE",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "specialty",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/BelacanLumutCheese.jpg",
        badge: "Signature"
    },
    {
        id: 7,
        name: "LAPIS INDIA",
        whole: 220,
        half: 115,
        loaf: 60,
        category: "specialty",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/LapisIndia.jpg",
        badge: "Exotic"
    },
    // Page 7
    {
        id: 8,
        name: "FAZURA",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "signature",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/Fazura.jpg",
        badge: "Elegant"
    },
    // Page 8
    {
        id: 9,
        name: "SISIK IKAN",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "classic",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/SisikIkan.jpg",
        badge: "Heritage"
    },
    // Page 10
    {
        id: 10,
        name: "HATI PAREK",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "classic",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/HatiParek.jpgK",
        badge: "Traditional"
    },
    // Page 11
    {
        id: 11,
        name: "BELACAN",
        whole: 220,
        half: 115,
        loaf: 60,
        category: "specialty",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/Belacan.jpg",
        badge: "Unique"
    },
    // Page 12
    {
        id: 12,
        name: "LUMUT",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "specialty",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/Lumut.jpg",
        badge: "Earthy"
    },
    // Page 13
    {
        id: 13,
        name: "INTAN TERPILIH",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "premium",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/IntanTerpilih.jpg",
        badge: "Premium"
    },
    // Page 14
    {
        id: 14,
        name: "PILIH KASIH",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "classic",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/PilihKasih.jpg",
        badge: "Romantic"
    },
    // Page 15 - IDDLA (new from PDF)
    {
        id: 15,
        name: "IDOLA",
        whole: 200,
        half: 105,
        loaf: 55,
        category: "specialty",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/Idola.jpg",
        badge: "Exclusive"
    },
    // Page 16
    {
        id: 16,
        name: "LAPIS ONYX",
        whole: 350,
        half: 180,
        loaf: 95,
        category: "premium",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/ONYX.jpg",
        badge: "Dark"
    },
    // Page 17
    {
        id: 17,
        name: "LAPIS DAHLIA",
        whole: 300,
        half: 155,
        loaf: 60,
        category: "signature",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/Dahlia.jpg",
        badge: "Artisan"
    },
    // Additional cakes from Page 1 reference (Kek Lapis Belacan, etc - adding variations)
    {
        id: 18,
        name: "BAKLAVA",
        whole: 500,
        half: 255,
        loaf: 130,
        category: "premium",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/Baklava.jpg",
        badge: "Viral"
    },
    {
        id: 19,
        name: "BLACK SHADOW",
        whole: 250,
        half: 130,
        loaf: 70,
        category: "premium",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/BlackShadow.jpg",
        badge: "Fragrant"
    },
    {
        id: 20,
        name: "ROSE QUEEN",
        whole: 280,
        half: 145,
        loaf: 75,
        category: "classic",
        image: "https://github.com/lippo05/MalaDuanKekLapis/blob/df26ebbb9da72730a328518d72a0d714b572a1b7/images/RoseQueen.jpg",
        badge: "Chocolate"
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
