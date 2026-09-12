// HAMK Apps - Interactive Behaviors

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking on nav link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const searchInput = document.getElementById('search-products');
  const emptyState = document.getElementById('empty-state');

  let activeCategory = 'all';
  let searchTerm = '';

  function filterProducts() {
    let visibleCount = 0;

    productCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = (card.querySelector('.product-title')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.product-description')?.textContent || '').toLowerCase();
      const tags = (card.getAttribute('data-tags') || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = !searchTerm || title.includes(searchTerm) || desc.includes(searchTerm) || tags.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
          card.style.transition = 'all 0.3s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove('hidden');
      } else {
        emptyState.classList.add('hidden');
      }
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-slate-900', 'text-white'));
      filterBtns.forEach(b => b.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100'));

      btn.classList.add('active', 'bg-slate-900', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');

      activeCategory = btn.getAttribute('data-filter');
      filterProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterProducts();
    });
  }

  // Email Copy button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyFeedback = document.getElementById('copy-feedback');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailText = copyEmailBtn.getAttribute('data-email') || 'contact@hamkapps.in';
      try {
        await navigator.clipboard.writeText(emailText);
        if (copyFeedback) {
          copyFeedback.textContent = 'Copied to clipboard!';
          copyFeedback.classList.remove('opacity-0');
          setTimeout(() => {
            copyFeedback.classList.add('opacity-0');
          }, 2500);
        }
      } catch (err) {
        // Fallback prompt
        window.prompt('Copy email:', emailText);
      }
    });
  }

  // Set current year
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
