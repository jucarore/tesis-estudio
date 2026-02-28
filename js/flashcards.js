// ============================================================
// FLASHCARDS.JS - Logica de flashcards
// ============================================================

(function () {
  'use strict';

  var currentFilter = 'Todas';
  var filteredCards = [];
  var currentIndex = 0;

  // --- Get unique categories ---
  var categories = ['Todas'];
  FLASHCARDS.forEach(function (fc) {
    if (categories.indexOf(fc.category) === -1) {
      categories.push(fc.category);
    }
  });

  // --- Render filter buttons ---
  var filterContainer = document.getElementById('fc-filter-container');

  categories.forEach(function (cat) {
    var btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === 'Todas' ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', function () {
      currentFilter = cat;
      filterContainer.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');
      loadCards();
    });
    filterContainer.appendChild(btn);
  });

  function shuffleArray(arr) {
    var shuffled = arr.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = tmp;
    }
    return shuffled;
  }

  function loadCards() {
    if (currentFilter === 'Todas') {
      filteredCards = FLASHCARDS.slice();
    } else {
      filteredCards = FLASHCARDS.filter(function (fc) {
        return fc.category === currentFilter;
      });
    }
    currentIndex = 0;
    renderCard();
    renderNav();
  }

  function renderCounter() {
    var counter = document.getElementById('fc-counter');
    if (filteredCards.length === 0) {
      counter.textContent = '';
      return;
    }
    counter.textContent = (currentIndex + 1) + ' / ' + filteredCards.length;
  }

  function renderCard() {
    var container = document.getElementById('fc-container');
    renderCounter();

    if (filteredCards.length === 0) {
      container.innerHTML = '<p style="text-align:center;color:#888;">No hay tarjetas en esta categoria.</p>';
      return;
    }

    var fc = filteredCards[currentIndex];

    var html = '<div class="fc-card" id="fc-card">';

    // Front
    html += '<div class="fc-face fc-front">';
    html += '<span class="fc-category-tag">' + fc.category + '</span>';
    html += '<div class="fc-label">Pregunta</div>';
    html += '<div class="fc-text">' + fc.front + '</div>';
    html += '<div class="fc-hint">Toca para ver la respuesta</div>';
    html += '</div>';

    // Back
    html += '<div class="fc-face fc-back">';
    html += '<span class="fc-category-tag">' + fc.category + '</span>';
    html += '<div class="fc-label">Respuesta</div>';
    html += '<div class="fc-text">' + fc.back + '</div>';
    html += '<div class="fc-hint">Toca para volver a la pregunta</div>';
    html += '</div>';

    html += '</div>';

    container.innerHTML = html;

    // Flip handler
    document.getElementById('fc-card').addEventListener('click', function () {
      this.classList.toggle('flipped');
    });
  }

  function renderNav() {
    var nav = document.getElementById('fc-nav');

    var html = '<button class="fc-nav-btn" id="fc-prev" title="Anterior">&#8592;</button>';
    html += '<button class="fc-shuffle-btn" id="fc-shuffle">Mezclar</button>';
    html += '<button class="fc-nav-btn" id="fc-next" title="Siguiente">&#8594;</button>';

    nav.innerHTML = html;

    document.getElementById('fc-prev').addEventListener('click', function () {
      if (filteredCards.length === 0) return;
      currentIndex = (currentIndex - 1 + filteredCards.length) % filteredCards.length;
      renderCard();
    });

    document.getElementById('fc-next').addEventListener('click', function () {
      if (filteredCards.length === 0) return;
      currentIndex = (currentIndex + 1) % filteredCards.length;
      renderCard();
    });

    document.getElementById('fc-shuffle').addEventListener('click', function () {
      filteredCards = shuffleArray(filteredCards);
      currentIndex = 0;
      renderCard();
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    var fcSection = document.getElementById('section-flashcards');
    if (!fcSection.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') {
      document.getElementById('fc-prev').click();
    } else if (e.key === 'ArrowRight') {
      document.getElementById('fc-next').click();
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      var card = document.getElementById('fc-card');
      if (card) card.click();
    }
  });

  // Touch swipe support
  var touchStartX = 0;
  var touchEndX = 0;

  document.getElementById('fc-container').addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  document.getElementById('fc-container').addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    var diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left = next
        document.getElementById('fc-next').click();
      } else {
        // Swipe right = prev
        document.getElementById('fc-prev').click();
      }
    }
  }, { passive: true });

  // Initialize
  loadCards();
})();
