// ============================================================
// APP.JS - Navegacion principal y contenido de la tesis
// ============================================================

(function () {
  'use strict';

  // --- Navigation ---
  const navBtns = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  navBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-section');

      navBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      sections.forEach(function (s) { s.classList.remove('active'); });
      document.getElementById('section-' + target).classList.add('active');
    });
  });

  // --- Accordion (Thesis Content) ---
  var container = document.getElementById('accordion-container');

  THESIS_CONTENT.sections.forEach(function (sec) {
    var item = document.createElement('div');
    item.className = 'accordion-item';

    var header = document.createElement('button');
    header.className = 'accordion-header';
    header.innerHTML = '<span>' + sec.title + '</span><span class="accordion-arrow">&#9660;</span>';

    var body = document.createElement('div');
    body.className = 'accordion-body';

    var content = document.createElement('div');
    content.className = 'accordion-content';
    content.innerHTML = sec.content;

    body.appendChild(content);
    item.appendChild(header);
    item.appendChild(body);
    container.appendChild(item);

    header.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('#accordion-container .accordion-item').forEach(function (ai) {
        ai.classList.remove('open');
      });
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // --- Discurso de Defensa ---
  var discursoContainer = document.getElementById('discurso-container');

  DISCURSO_SLIDES.forEach(function (slide) {
    var card = document.createElement('div');
    card.className = 'slide-card';

    var header = document.createElement('button');
    header.className = 'slide-header';
    header.innerHTML =
      '<div class="slide-header-left">' +
        '<span class="slide-number">Slide ' + slide.number + '</span>' +
        '<span class="slide-title">' + slide.title + '</span>' +
      '</div>' +
      '<span class="slide-time">' + slide.time + '</span>';

    var body = document.createElement('div');
    body.className = 'slide-body';

    var content = document.createElement('div');
    content.className = 'slide-content';

    var html = '';
    html += '<div class="slide-meta"><strong>Contenido del slide:</strong> ' + slide.slideContent + '</div>';
    html += '<div class="slide-speech">' + slide.speech + '</div>';
    html += '<div class="slide-tip"><strong>TIP:</strong> ' + slide.tip + '</div>';
    content.innerHTML = html;

    body.appendChild(content);
    card.appendChild(header);
    card.appendChild(body);
    discursoContainer.appendChild(card);

    header.addEventListener('click', function () {
      var isOpen = card.classList.contains('open');
      document.querySelectorAll('.slide-card').forEach(function (sc) {
        sc.classList.remove('open');
      });
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });

  // Resumen de tiempos
  var tiemposCard = document.createElement('div');
  tiemposCard.className = 'slide-card';
  var tiemposHeader = document.createElement('button');
  tiemposHeader.className = 'slide-header';
  tiemposHeader.innerHTML =
    '<div class="slide-header-left">' +
      '<span class="slide-number">Resumen</span>' +
      '<span class="slide-title">Distribucion de Tiempos</span>' +
    '</div>' +
    '<span class="slide-time">~22-26 min</span>';
  var tiemposBody = document.createElement('div');
  tiemposBody.className = 'slide-body';
  var tiemposContent = document.createElement('div');
  tiemposContent.className = 'slide-content';

  var tiemposHtml = '<table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-bottom:1rem;">';
  tiemposHtml += '<thead><tr><th style="background:var(--primary);color:#fff;padding:0.5rem 0.75rem;border:1px solid var(--border);text-align:left;">Slide</th><th style="background:var(--primary);color:#fff;padding:0.5rem 0.75rem;border:1px solid var(--border);text-align:left;">Contenido</th><th style="background:var(--primary);color:#fff;padding:0.5rem 0.75rem;border:1px solid var(--border);text-align:left;">Tiempo</th></tr></thead><tbody>';
  DISCURSO_TIEMPOS.forEach(function (t, i) {
    var bg = i % 2 === 0 ? '' : ' style="background:#f8f9fb"';
    tiemposHtml += '<tr' + bg + '><td style="padding:0.4rem 0.75rem;border:1px solid var(--border);">' + t.slide + '</td><td style="padding:0.4rem 0.75rem;border:1px solid var(--border);">' + t.contenido + '</td><td style="padding:0.4rem 0.75rem;border:1px solid var(--border);">' + t.tiempo + '</td></tr>';
  });
  tiemposHtml += '</tbody></table>';

  tiemposHtml += '<div class="slide-tip"><strong>RECORDATORIOS FINALES:</strong><ul style="margin:0.5rem 0 0 1.2rem;">';
  DISCURSO_RECORDATORIOS.forEach(function (r) {
    tiemposHtml += '<li style="margin-bottom:0.3rem;">' + r + '</li>';
  });
  tiemposHtml += '</ul></div>';

  tiemposContent.innerHTML = tiemposHtml;
  tiemposBody.appendChild(tiemposContent);
  tiemposCard.appendChild(tiemposHeader);
  tiemposCard.appendChild(tiemposBody);
  discursoContainer.appendChild(tiemposCard);

  tiemposHeader.addEventListener('click', function () {
    var isOpen = tiemposCard.classList.contains('open');
    document.querySelectorAll('.slide-card').forEach(function (sc) {
      sc.classList.remove('open');
    });
    if (!isOpen) {
      tiemposCard.classList.add('open');
    }
  });

  // --- Guia de Estudio ---
  var guiaContainer = document.getElementById('guia-container');

  GUIA_SECTIONS.forEach(function (sec) {
    var card = document.createElement('div');
    card.className = 'guia-card';

    var header = document.createElement('button');
    header.className = 'guia-header';
    header.innerHTML = '<span>' + sec.title + '</span><span class="accordion-arrow">&#9660;</span>';

    var body = document.createElement('div');
    body.className = 'guia-body';

    var content = document.createElement('div');
    content.className = 'guia-content';
    content.innerHTML = sec.content;

    body.appendChild(content);
    card.appendChild(header);
    card.appendChild(body);
    guiaContainer.appendChild(card);

    header.addEventListener('click', function () {
      var isOpen = card.classList.contains('open');
      document.querySelectorAll('.guia-card').forEach(function (gc) {
        gc.classList.remove('open');
      });
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });
})();
