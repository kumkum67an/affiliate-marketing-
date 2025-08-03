// Application data
const appData = {
  "categories": [
    {
      "id": "celebrity-dupes",
      "name": "Celebrity Dupes",
      "description": "Get the celebrity look for less"
    },
    {
      "id": "fashion",
      "name": "Fashion Finds",
      "description": "Budget-friendly fashion essentials"
    },
    {
      "id": "home-essentials",
      "name": "Home Essentials",
      "description": "Affordable home improvement items"
    }
  ],
  "celebrity_looks": [
    {
      "id": 1,
      "celebrity": "Taylor Swift",
      "occasion": "Street Style",
      "original_price": "$850",
      "budget_price": "$45",
      "items": [
        "Oversized blazer - $25",
        "High-waisted jeans - $12",
        "White sneakers - $8"
      ],
      "description": "Recreate Taylor's effortless street style with these budget finds"
    },
    {
      "id": 2,
      "celebrity": "Zendaya",
      "occasion": "Red Carpet",
      "original_price": "$2,500",
      "budget_price": "$89",
      "items": [
        "Midi dress - $35",
        "Statement earrings - $12",
        "Block heels - $42"
      ],
      "description": "Channel Zendaya's elegance without the designer price tag"
    },
    {
      "id": 3,
      "celebrity": "Hailey Bieber",
      "occasion": "Casual Chic",
      "original_price": "$650",
      "budget_price": "$38",
      "items": [
        "Cropped cardigan - $18",
        "Straight leg jeans - $15",
        "White sneakers - $5"
      ],
      "description": "Master Hailey's casual cool aesthetic on a budget"
    }
  ],
  "fashion_products": [
    {
      "id": 1,
      "name": "Versatile Midi Dress",
      "category": "Dresses",
      "price": "$28",
      "original_price": "$85",
      "rating": 4.5,
      "description": "Perfect for work to weekend transitions"
    },
    {
      "id": 2,
      "name": "Statement Gold Earrings",
      "category": "Accessories",
      "price": "$12",
      "original_price": "$45",
      "rating": 4.3,
      "description": "Instantly elevate any outfit"
    },
    {
      "id": 3,
      "name": "Comfortable Block Heels",
      "category": "Shoes",
      "price": "$35",
      "original_price": "$120",
      "rating": 4.7,
      "description": "All-day comfort meets style"
    }
  ],
  "home_essentials": [
    {
      "id": 1,
      "name": "Bamboo Drawer Organizers",
      "category": "Organization",
      "price": "$15",
      "original_price": "$40",
      "rating": 4.6,
      "description": "Easy install, instant organization"
    },
    {
      "id": 2,
      "name": "LED Strip Lights",
      "category": "Lighting",
      "price": "$22",
      "original_price": "$60",
      "rating": 4.4,
      "description": "Transform any room in minutes"
    },
    {
      "id": 3,
      "name": "Storage Ottoman",
      "category": "Furniture",
      "price": "$45",
      "original_price": "$120",
      "rating": 4.5,
      "description": "Stylish storage meets extra seating"
    }
  ],
  "blog_posts": [
    {
      "id": 1,
      "title": "10 Celebrity Looks You Can Recreate for Under $50",
      "category": "Style Guides",
      "date": "2025-01-15",
      "excerpt": "From red carpet glamour to street style chic, learn how to get the celebrity look without the celebrity budget."
    },
    {
      "id": 2,
      "title": "Budget Home Makeover: Transform Your Space for $100",
      "category": "Home Decor",
      "date": "2025-01-10",
      "excerpt": "Discover the secret to a stunning home makeover that won't break the bank with these easy-to-install essentials."
    },
    {
      "id": 3,
      "title": "Fashion Dupes That Look More Expensive Than They Are",
      "category": "Fashion",
      "date": "2025-01-05",
      "excerpt": "Shop smart with these incredible fashion finds that deliver luxury looks at affordable prices."
    }
  ],
  "pinterest_inspiration": [
    {
      "id": 1,
      "title": "Boho Chic Bedroom Vibes",
      "category": "Home Decor",
      "price_range": "$25-$85",
      "items": ["Macrame wall hanging", "Throw pillows", "String lights"]
    },
    {
      "id": 2,
      "title": "Minimalist Capsule Wardrobe",
      "category": "Fashion",
      "price_range": "$15-$45",
      "items": ["Basic tees", "High-waisted jeans", "Blazer"]
    },
    {
      "id": 3,
      "title": "Cozy Living Room Setup",
      "category": "Home Decor",
      "price_range": "$30-$75",
      "items": ["Throw blanket", "Coffee table books", "Plants"]
    }
  ]
};

// Utility Functions
function scrollToSection(sectionId) {
  console.log('Scrolling to section:', sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Update active navigation
    updateActiveNavigation(sectionId);
  }
}

function updateActiveNavigation(activeSection) {
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.classList.remove('nav__link--active');
    const href = link.getAttribute('href');
    if (href === `#${activeSection}`) {
      link.classList.add('nav__link--active');
    }
  });
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';
  
  for (let i = 0; i < fullStars; i++) {
    stars += '★';
  }
  
  if (hasHalfStar) {
    stars += '☆';
  }
  
  return stars;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function showAffiliateModal(productName, link = 'Amazon') {
  console.log('Showing affiliate modal for:', productName);
  alert(`🛍️ Affiliate Link Notice\n\n✨ You're about to shop "${productName}" on ${link}!\n\n💡 This is a demo version of VibeOnBudget.com. In the real site, this would redirect you to ${link} with our affiliate tracking to help support our budget-friendly finds.\n\n🎉 Thank you for choosing VibeOnBudget - Style Like a Star Without the Price Tag!`);
}

// Render Functions
function renderCelebrityDupes() {
  const container = document.getElementById('celebrity-grid');
  if (!container) return;

  container.innerHTML = appData.celebrity_looks.map(look => `
    <div class="celebrity-card">
      <div class="celebrity-card__header">
        <h3 class="celebrity-card__title">${look.celebrity}</h3>
        <div class="celebrity-card__occasion">${look.occasion}</div>
      </div>
      <div class="celebrity-card__body">
        <div class="celebrity-card__prices">
          <div class="price-comparison">
            <span class="price-comparison__label">Designer Original</span>
            <div class="price-comparison__original">${look.original_price}</div>
          </div>
          <div class="price-comparison">
            <span class="price-comparison__label">Our Budget Version</span>
            <div class="price-comparison__budget">${look.budget_price}</div>
          </div>
        </div>
        <div class="celebrity-card__items">
          <h4>What You'll Get:</h4>
          <ul>
            ${look.items.map(item => `<li>• ${item}</li>`).join('')}
          </ul>
        </div>
        <p class="celebrity-card__description">${look.description}</p>
        <div class="celebrity-card__actions">
          <button class="btn btn--primary btn--full-width" onclick="showAffiliateModal('${look.celebrity} ${look.occasion} Look')">
            Shop This Look - ${look.budget_price}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderFashionProducts() {
  const container = document.getElementById('fashion-grid');
  if (!container) return;

  container.innerHTML = appData.fashion_products.map(product => `
    <div class="product-card">
      <div class="product-card__image">
        📸 ${product.name} Image
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__prices">
          <span class="product-card__price">${product.price}</span>
          <span class="product-card__original-price">${product.original_price}</span>
        </div>
        <div class="product-card__rating">
          <span class="rating-stars">${generateStars(product.rating)}</span>
          <span class="rating-number">${product.rating}</span>
        </div>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__actions">
          <button class="btn btn--primary btn--full-width" onclick="showAffiliateModal('${product.name}')">
            Shop Now - ${product.price}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderHomeEssentials() {
  const container = document.getElementById('home-grid');
  if (!container) return;

  container.innerHTML = appData.home_essentials.map(product => `
    <div class="product-card">
      <div class="product-card__image">
        🏠 ${product.name} Image
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${product.category}</div>
        <h3 class="product-card__name">${product.name}</h3>
        <div class="product-card__prices">
          <span class="product-card__price">${product.price}</span>
          <span class="product-card__original-price">${product.original_price}</span>
        </div>
        <div class="product-card__rating">
          <span class="rating-stars">${generateStars(product.rating)}</span>
          <span class="rating-number">${product.rating}</span>
        </div>
        <p class="product-card__description">${product.description}</p>
        <div class="product-card__actions">
          <button class="btn btn--primary btn--full-width" onclick="showAffiliateModal('${product.name}')">
            Shop Now - ${product.price}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function renderPinterestInspiration() {
  const container = document.getElementById('pinterest-grid');
  if (!container) return;

  container.innerHTML = appData.pinterest_inspiration.map(item => `
    <div class="pinterest-card" onclick="openPinterestModal(${item.id})">
      <div class="pinterest-card__image">
        <div class="pinterest-card__overlay">📌</div>
        🎨 ${item.title} Inspiration
      </div>
      <div class="pinterest-card__body">
        <h3 class="pinterest-card__title">${item.title}</h3>
        <div class="pinterest-card__category">${item.category}</div>
        <div class="pinterest-card__price-range">${item.price_range}</div>
        <div class="pinterest-card__items">
          Includes: ${item.items.join(', ')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderBlogPosts() {
  const container = document.getElementById('blog-grid');
  if (!container) return;

  container.innerHTML = appData.blog_posts.map(post => `
    <div class="blog-card">
      <div class="blog-card__image">
        📝 ${post.title} Featured Image
      </div>
      <div class="blog-card__body">
        <div class="blog-card__category">${post.category}</div>
        <h3 class="blog-card__title">${post.title}</h3>
        <div class="blog-card__date">${formatDate(post.date)}</div>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <button class="btn btn--outline" onclick="showBlogPost('${post.title}')">
          Read More
        </button>
      </div>
    </div>
  `).join('');
}

function showBlogPost(title) {
  alert(`📖 Opening Blog Post\n\n"${title}"\n\nThis is a demo - in the real VibeOnBudget site, this would open the full blog post with detailed styling tips and affiliate product recommendations!`);
}

// Pinterest Modal Functions
function openPinterestModal(itemId) {
  console.log('Opening Pinterest modal for item:', itemId);
  const item = appData.pinterest_inspiration.find(i => i.id === itemId);
  if (!item) {
    console.error('Pinterest item not found:', itemId);
    return;
  }

  const modal = document.getElementById('pinterest-modal');
  const modalBody = document.getElementById('modal-body');

  if (!modal || !modalBody) {
    console.error('Modal elements not found');
    return;
  }

  modalBody.innerHTML = `
    <div class="modal__image">
      🎨 ${item.title} Inspiration Board
    </div>
    <h2 class="modal__title">${item.title}</h2>
    <div class="modal__category">${item.category}</div>
    <div class="modal__price">${item.price_range}</div>
    <div class="modal__items">
      <h4>Items Included:</h4>
      <ul>
        ${item.items.map(itemName => `<li>• ${itemName}</li>`).join('')}
      </ul>
    </div>
    <div class="modal__actions">
      <button class="btn btn--primary" onclick="showAffiliateModal('${item.title} Collection')">
        Shop This Look on Amazon
      </button>
      <button class="btn btn--outline" onclick="pinThisLook('${item.title}')">
        Pin This Look
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closePinterestModal() {
  console.log('Closing Pinterest modal');
  const modal = document.getElementById('pinterest-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function pinThisLook(lookName) {
  alert(`📌 Pinned to Pinterest!\n\n"${lookName}" has been saved to your VibeOnBudget inspiration board.\n\n(This is a demo - in the real site, this would connect to your Pinterest account!)`);
}

// Navigation Functions
function handleNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the target section
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
      }
    });
  });
}

// Newsletter Form Handler
function handleNewsletterForm() {
  const form = document.querySelector('.newsletter__form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (email) {
      alert(`🎉 Welcome to VibeOnBudget!\n\nThank you for subscribing with ${email}!\n\n✨ You'll receive:\n• Weekly celebrity dupe alerts\n• Exclusive discount codes\n• Budget styling tips\n• New Pinterest board updates\n\n(This is a demo - no actual email will be sent)`);
      form.reset();
    }
  });
}

// Pinterest Button Handler
function handlePinterestButton() {
  const pinterestBtn = document.querySelector('.pinterest-btn');
  if (!pinterestBtn) return;

  pinterestBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('pinterest');
  });
}

// Scroll-based Navigation Highlighting
function handleScrollNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  function updateActiveNav() {
    let currentSection = 'home'; // Default to home
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('nav__link--active');
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('nav__link--active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Call once on load
}

// Initialize Application
function initializeApp() {
  console.log('Initializing VibeOnBudget app...');
  
  // Render all sections
  renderCelebrityDupes();
  renderFashionProducts();
  renderHomeEssentials();
  renderPinterestInspiration();
  renderBlogPosts();

  // Set up event handlers
  handleNavigation();
  handleNewsletterForm();
  handlePinterestButton();
  handleScrollNavigation();

  console.log('VibeOnBudget app initialized successfully! 🎉');
}

// Make functions globally available for onclick handlers
window.scrollToSection = scrollToSection;
window.showAffiliateModal = showAffiliateModal;
window.openPinterestModal = openPinterestModal;
window.closePinterestModal = closePinterestModal;
window.pinThisLook = pinThisLook;
window.showBlogPost = showBlogPost;

// Run when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}