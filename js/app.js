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
      // Close all others
      document.querySelectorAll('.accordion-item').forEach(function (ai) {
        ai.classList.remove('open');
      });
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
})();
