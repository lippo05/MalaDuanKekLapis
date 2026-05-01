// ============================================================
// SYAZ KEK LAPIS - COMPLETE MENU with SHOPPING CART
// ============================================================

// WhatsApp Number (format: country code + number, no spaces, no +)
const WHATSAPP_NUMBER = "60185794394";

// Cart array to store items
let cart = [];

// Selected cake and action type for modal
let selectedCake = null;
let currentAction = null; // 'cart' or 'order'

const cakes = [
    { id: 1, name: "SENJA NAN MERAH", whole: 320, half: 165, loaf: 85, category: "signature", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/SenjaNanMerah.jpg", badge: "Best Seller" },
    { id: 2, name: "GREEN WOOD", whole: 300, half: 150, loaf: 80, category: "signature", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/GreenWood.jpg", badge: "Popular" },
    { id: 3, name: "MADU KEMENYAN", whole: 190, half: 95, loaf: 50, category: "classic", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/MaduKemenyan.jpg", badge: "Value" },
    { id: 4, name: "MILO SAUROUS", whole: 250, half: 125, loaf: 70, category: "classic", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/MiloSaurous.jpg", badge: "Family Fav" },
    { id: 5, name: "MILO DINASOUR", whole: 250, half: 130, loaf: 70, category: "classic", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/MiloDinasour.jpg", badge: "Special" },
    { id: 6, name: "BELACAN LUMUT CHEESE", whole: 250, half: 130, loaf: 70, category: "specialty", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/BelacanLumutCheese.jpg", badge: "Signature" },
    { id: 7, name: "LAPIS INDIA", whole: 220, half: 115, loaf: 60, category: "specialty", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/LapisIndia.jpg", badge: "Exotic" },
    { id: 8, name: "FAZURA", whole: 250, half: 130, loaf: 70, category: "signature", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/Fazura.jpg", badge: "Elegant" },
    { id: 9, name: "SISIK IKAN", whole: 250, half: 130, loaf: 70, category: "classic", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/SisikIkan.jpg", badge: "Heritage" },
    { id: 10, name: "HATI PAREK", whole: 200, half: 105, loaf: 55, category: "classic", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/HatiParek.jpg", badge: "Traditional" },
    { id: 11, name: "BELACAN", whole: 220, half: 115, loaf: 60, category: "specialty", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/Belacan.jpg", badge: "Unique" },
    { id: 12, name: "LUMUT", whole: 200, half: 105, loaf: 55, category: "specialty", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/Lumut.jpg", badge: "Earthy" },
    { id: 13, name: "INTAN TERPILIH", whole: 200, half: 105, loaf: 55, category: "premium", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/IntanTerpilih.jpg", badge: "Premium" },
    { id: 14, name: "PILIH KASIH", whole: 200, half: 105, loaf: 55, category: "classic", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/PilihKasih.jpg", badge: "Romantic" },
    { id: 15, name: "IDOLA", whole: 200, half: 105, loaf: 55, category: "specialty", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/Idola.jpg", badge: "Exclusive" },
    { id: 16, name: "LAPIS ONYX", whole: 350, half: 180, loaf: 95, category: "premium", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/ONYX.jpg", badge: "Dark" },
    { id: 17, name: "LAPIS DAHLIA", whole: 300, half: 155, loaf: 60, category: "signature", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/Dahlia.jpg", badge: "Artisan" },
    { id: 18, name: "BAKLAVA", whole: 500, half: 255, loaf: 130, category: "premium", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/Baklava.jpg", badge: "Viral" },
    { id: 19, name: "BLACK SHADOW", whole: 250, half: 130, loaf: 70, category: "premium", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/BlackShadow.jpg", badge: "Fragrant" },
    { id: 20, name: "ROSE QUEEN", whole: 280, half: 145, loaf: 75, category: "classic", image: "https://raw.githubusercontent.com/lippo05/MalaDuanKekLapis/refs/heads/main/images/RoseQueen.jpg", badge: "Chocolate" }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const noResultMsgDiv = document.getElementById('noResultMsg');
const cakeCountSpan = document.getElementById('cakeCount');
const cartIconBtn = document.getElementById('cartIconBtn');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsDiv = document.getElementById('cartItems');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const sizeModal = document.getElementById('sizeModal');
const cancelSizeBtn = document.getElementById('cancelSizeBtn');
const confirmActionBtn = document.getElementById('confirmActionBtn');
const sizeOptions = document.querySelectorAll('.size-option');
const toast = document.getElementById('toastNotification');

let activeCategory = 'all';
let currentSearchTerm = '';
let selectedSize = null;

// Show toast notification (replaces alert)
function showToast(message, isSuccess = true) {
    const toastEl = document.getElementById('toastNotification');
    toastEl.querySelector('#toastMessage').innerText = message;
    toastEl.style.backgroundColor = isSuccess ? '#2d2418' : '#d32f2f';
    toastEl.classList.add('show');
    setTimeout(() => {
        toastEl.classList.remove('show');
    }, 2000);
}

// Update cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.innerText = cart.length;
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('kekLapisCart', JSON.stringify(cart));
    updateCartCount();
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('kekLapisCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Get price for a specific size
function getPriceForSize(cake, size) {
    switch(size) {
        case 'whole': return cake.whole;
        case 'half': return cake.half;
        case 'loaf': return cake.loaf;
        default: return 0;
    }
}

// Get size label
function getSizeLabel(size) {
    switch(size) {
        case 'whole': return 'WHOLE';
        case 'half': return 'HALF';
        case 'loaf': return 'LOAF';
        default: return '';
    }
}

// Add to cart function
function addToCart(cake, size) {
    const price = getPriceForSize(cake, size);
    const sizeLabel = getSizeLabel(size);
    
    if (price > 0) {
        cart.push({
            id: cake.id,
            name: cake.name,
            size: sizeLabel,
            sizeKey: size,
            price: price
        });
        saveCart();
        showToast(`✓ ${cake.name} (${sizeLabel}) added to trolley!`);
    } else {
        showToast(`✗ ${sizeLabel} size for ${cake.name} is not available`, false);
    }
}

// Direct order to WhatsApp with selected size
function directOrderWithSize(cake, size) {
    const price = getPriceForSize(cake, size);
    const sizeLabel = getSizeLabel(size);
    
    if (price > 0) {
        const message = `🍰 *ORDER: ${cake.name}* 🍰
        
📋 *Saiz Dipilih:*
${sizeLabel} - RM ${price}

📝 *Maklumat Pesanan:*
Nama: 
Saiz: ${sizeLabel}
Tarikh Ambil/Hantar: 
Alamat (Jika Delivery): 

Terima kasih!`;
        
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    } else {
        showToast(`✗ ${sizeLabel} size for ${cake.name} is not available`, false);
    }
}

// Remove from cart
function removeFromCart(index) {
    const removed = cart[index];
    cart.splice(index, 1);
    saveCart();
    displayCart();
    showToast(`✓ ${removed.name} (${removed.size}) removed from trolley`);
}

// Display cart items
function displayCart() {
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart-msg">Your trolley is empty</p>';
        cartTotalAmount.innerText = 'RM 0';
        return;
    }
    
    let total = 0;
    let html = '';
    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-size">${item.size}</div>
                </div>
                <div class="cart-item-price">RM ${item.price}</div>
                <button class="remove-item" data-index="${index}">✖</button>
            </div>
        `;
    });
    
    cartItemsDiv.innerHTML = html;
    cartTotalAmount.innerText = `RM ${total}`;
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(btn.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
}

// Open cart modal
function openCartModal() {
    displayCart();
    cartModal.style.display = 'flex';
}

// Close cart modal
function closeCartModal() {
    cartModal.style.display = 'none';
}

// Clear cart
function clearCart() {
    if (cart.length > 0) {
        cart = [];
        saveCart();
        displayCart();
        showToast('✓ Trolley cleared');
    }
}

// Checkout - send all cart items to WhatsApp
function checkoutToWhatsApp() {
    if (cart.length === 0) {
        showToast('Your trolley is empty! Please add items first.', false);
        return;
    }
    
    let orderSummary = '🍰 *SYAZ KEK LAPIS ORDER* 🍰\n\n';
    let total = 0;
    
    cart.forEach((item, index) => {
        orderSummary += `${index + 1}. ${item.name} (${item.size}) - RM ${item.price}\n`;
        total += item.price;
    });
    
    orderSummary += `\n*Total: RM ${total}*\n\n`;
    orderSummary += `📋 *Maklumat Pelanggan:*\n`;
    orderSummary += `Nama: \n`;
    orderSummary += `No Telefon: \n`;
    orderSummary += `Tarikh Ambil/Hantar: \n`;
    orderSummary += `Alamat (Jika Delivery): \n\n`;
    orderSummary += `_Sila isi maklumat di atas sebelum hantar._`;
    
    const encodedMessage = encodeURIComponent(orderSummary);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Show size selection modal
function showSizeModal(cake, action) {
    selectedCake = cake;
    currentAction = action;
    
    document.getElementById('sizeModalTitle').innerHTML = `Select Size for ${cake.name}`;
    
    // Update size options availability based on price
    sizeOptions.forEach(opt => {
        const size = opt.getAttribute('data-size');
        let price = 0;
        if (size === 'whole') price = cake.whole;
        else if (size === 'half') price = cake.half;
        else price = cake.loaf;
        
        opt.classList.remove('selected-option');
        if (price === 0) {
            opt.classList.add('disabled-size');
            opt.disabled = true;
        } else {
            opt.classList.remove('disabled-size');
            opt.disabled = false;
        }
    });
    
    sizeModal.style.display = 'flex';
    selectedSize = null;
}

// Close size modal
function closeSizeModal() {
    sizeModal.style.display = 'none';
    selectedCake = null;
    currentAction = null;
    selectedSize = null;
}

// Confirm action based on currentAction
function confirmAction() {
    if (!selectedSize) {
        showToast('Please select a size first!', false);
        return;
    }
    
    if (currentAction === 'cart') {
        addToCart(selectedCake, selectedSize);
    } else if (currentAction === 'order') {
        directOrderWithSize(selectedCake, selectedSize);
    }
    
    closeSizeModal();
}

// Handle size selection
sizeOptions.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.disabled) return;
        sizeOptions.forEach(opt => opt.classList.remove('selected-option'));
        btn.classList.add('selected-option');
        selectedSize = btn.getAttribute('data-size');
    });
});

// Render menu cards
function renderMenu() {
    let filtered = cakes.filter(cake => {
        if (activeCategory === 'all') return true;
        return cake.category === activeCategory;
    });

    if (currentSearchTerm.trim() !== '') {
        const term = currentSearchTerm.trim().toLowerCase();
        filtered = filtered.filter(cake => cake.name.toLowerCase().includes(term));
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
        badgeSpan.innerText = cake.badge;
        imgDiv.appendChild(badgeSpan);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'card-content';

        const nameEl = document.createElement('h3');
        nameEl.className = 'cake-name';
        nameEl.innerText = cake.name;

        const descEl = document.createElement('p');
        descEl.className = 'cake-desc';
        descEl.innerText = "Delicious handcrafted Sarawak layered cake with premium ingredients.";

        const priceGroup = document.createElement('div');
        priceGroup.className = 'price-group';

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

        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'button-group';

        const orderNowBtn = document.createElement('button');
        orderNowBtn.className = 'order-now-btn';
        orderNowBtn.innerText = '📞 Order Now';
        orderNowBtn.addEventListener('click', () => showSizeModal(cake, 'order'));

        const addToCartBtn = document.createElement('button');
        addToCartBtn.className = 'add-to-cart-btn';
        addToCartBtn.innerText = '🛒 Masuk ke Troli';
        addToCartBtn.addEventListener('click', () => showSizeModal(cake, 'cart'));

        buttonGroup.appendChild(orderNowBtn);
        buttonGroup.appendChild(addToCartBtn);

        contentDiv.appendChild(nameEl);
        contentDiv.appendChild(descEl);
        contentDiv.appendChild(priceGroup);
        contentDiv.appendChild(buttonGroup);

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
    cartIconBtn.addEventListener('click', openCartModal);
    closeCartBtn.addEventListener('click', closeCartModal);
    clearCartBtn.addEventListener('click', clearCart);
    checkoutBtn.addEventListener('click', checkoutToWhatsApp);
    cancelSizeBtn.addEventListener('click', closeSizeModal);
    confirmActionBtn.addEventListener('click', confirmAction);
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModal();
        if (e.target === sizeModal) closeSizeModal();
    });
}

// Initialize
function init() {
    loadCart();
    if (cakeCountSpan) cakeCountSpan.innerText = cakes.length;
    setupEventListeners();
    renderMenu();
}

init();
