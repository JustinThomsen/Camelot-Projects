document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close mobile menu when links are clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      });
    });
  }

  // 2. Cursor-Tracking Spotlight Effect for Cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // 3. Dynamic Tag Filtering
  const tags = document.querySelectorAll('.project-card .tag');
  tags.forEach(tag => {
    // Add visual click indicator & pointer cursor
    tag.style.cursor = 'pointer';
    tag.addEventListener('click', (e) => {
      e.stopPropagation(); // Avoid triggering card clicks if any are added in the future
      const filterText = tag.textContent.trim();
      
      // Toggle active styling or filter cards
      let tagActive = tag.classList.toggle('active-filter');
      
      if (tagActive) {
        tag.style.borderColor = 'var(--accent-gold)';
        tag.style.color = 'var(--accent-gold)';
        tag.style.backgroundColor = 'rgba(234, 179, 8, 0.05)';
        
        // Filter cards containing this tag
        filterCards(filterText);
      } else {
        tag.style.borderColor = 'var(--border-color)';
        tag.style.color = 'var(--text-secondary)';
        tag.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        
        // Reset filter
        resetFilters();
      }
    });
  });

  function filterCards(filterText) {
    cards.forEach(card => {
      const cardTags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.trim());
      if (cardTags.includes(filterText)) {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
        card.style.pointerEvents = 'all';
      } else {
        card.style.opacity = '0.2';
        card.style.transform = 'scale(0.98)';
        card.style.pointerEvents = 'none';
      }
    });
  }

  function resetFilters() {
    cards.forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'none';
      card.style.pointerEvents = 'all';
    });
    // Remove active styles from other tags
    tags.forEach(t => {
      t.classList.remove('active-filter');
      t.style.borderColor = 'var(--border-color)';
      t.style.color = 'var(--text-secondary)';
      t.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    });
  }
});
