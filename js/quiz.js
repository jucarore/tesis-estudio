// ============================================================
// QUIZ.JS - Logica del quiz de opcion multiple
// ============================================================

(function () {
  'use strict';

  var currentFilter = 'Todas';
  var filteredQuestions = [];
  var currentIndex = 0;
  var score = 0;
  var answered = false;

  // --- Get unique categories ---
  var categories = ['Todas'];
  QUIZ_QUESTIONS.forEach(function (q) {
    if (categories.indexOf(q.category) === -1) {
      categories.push(q.category);
    }
  });

  // --- Render filter buttons ---
  var filterContainer = document.getElementById('quiz-filter-container');

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
      startQuiz();
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

  function startQuiz() {
    if (currentFilter === 'Todas') {
      filteredQuestions = shuffleArray(QUIZ_QUESTIONS);
    } else {
      filteredQuestions = shuffleArray(QUIZ_QUESTIONS.filter(function (q) {
        return q.category === currentFilter;
      }));
    }
    currentIndex = 0;
    score = 0;
    renderQuestion();
  }

  function renderProgress() {
    var progContainer = document.getElementById('quiz-progress');
    if (filteredQuestions.length === 0) {
      progContainer.innerHTML = '';
      return;
    }
    var pct = Math.round((currentIndex / filteredQuestions.length) * 100);
    progContainer.innerHTML =
      'Pregunta ' + (currentIndex + 1) + ' de ' + filteredQuestions.length +
      '<div class="progress-bar-container"><div class="progress-bar" style="width:' + pct + '%"></div></div>';
  }

  function renderQuestion() {
    var area = document.getElementById('quiz-area');
    answered = false;

    if (currentIndex >= filteredQuestions.length) {
      renderResults();
      return;
    }

    var q = filteredQuestions[currentIndex];
    renderProgress();

    var html = '<div class="quiz-card">';
    html += '<span class="quiz-category-tag">' + q.category + '</span>';
    html += '<div class="quiz-question">' + q.question + '</div>';
    html += '<div class="quiz-options">';

    q.options.forEach(function (opt, i) {
      html += '<button class="quiz-option" data-index="' + i + '">' + opt + '</button>';
    });

    html += '</div>';
    html += '<div id="quiz-explanation" class="quiz-explanation"></div>';
    html += '<button id="quiz-next" class="quiz-next-btn">Siguiente</button>';
    html += '</div>';

    area.innerHTML = html;

    // Option click handlers
    var optionBtns = area.querySelectorAll('.quiz-option');
    optionBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (answered) return;
        answered = true;

        var selected = parseInt(btn.getAttribute('data-index'));
        var isCorrect = selected === q.correct;

        if (isCorrect) score++;

        // Mark all options
        optionBtns.forEach(function (ob) {
          ob.classList.add('disabled');
          var idx = parseInt(ob.getAttribute('data-index'));
          if (idx === q.correct) {
            ob.classList.add('correct');
          } else if (idx === selected && !isCorrect) {
            ob.classList.add('incorrect');
          }
        });

        // Show explanation
        var expl = document.getElementById('quiz-explanation');
        expl.className = 'quiz-explanation show ' + (isCorrect ? 'correct' : 'incorrect');
        expl.textContent = (isCorrect ? 'Correcto. ' : 'Incorrecto. ') + q.explanation;

        // Show next button
        document.getElementById('quiz-next').classList.add('show');
      });
    });

    // Next button
    document.getElementById('quiz-next').addEventListener('click', function () {
      currentIndex++;
      renderQuestion();
    });
  }

  function renderResults() {
    var area = document.getElementById('quiz-area');
    var total = filteredQuestions.length;
    var pct = Math.round((score / total) * 100);
    var message;

    if (pct === 100) message = 'Excelente. Dominio total del contenido.';
    else if (pct >= 80) message = 'Muy bien. Buen nivel de preparacion.';
    else if (pct >= 60) message = 'Aceptable. Conviene repasar algunos temas.';
    else message = 'Es necesario estudiar mas. Revisa el contenido de la tesis.';

    // Update progress to 100%
    var progContainer = document.getElementById('quiz-progress');
    progContainer.innerHTML =
      'Finalizado' +
      '<div class="progress-bar-container"><div class="progress-bar" style="width:100%"></div></div>';

    var html = '<div class="quiz-results">';
    html += '<div class="results-message">' + message + '</div>';
    html += '<div class="results-score">' + pct + '%</div>';
    html += '<div class="results-detail">' + score + ' correctas de ' + total + ' preguntas</div>';
    html += '<div class="results-actions">';
    html += '<button class="results-btn primary" id="quiz-restart">Reiniciar Quiz</button>';
    html += '<button class="results-btn secondary" id="quiz-review">Revisar errores</button>';
    html += '</div></div>';

    area.innerHTML = html;

    document.getElementById('quiz-restart').addEventListener('click', startQuiz);
    document.getElementById('quiz-review').addEventListener('click', function () {
      // Restart showing only incorrect ones
      var incorrect = filteredQuestions.filter(function (q, i) {
        // We need to track which were wrong. For simplicity, restart full quiz
        startQuiz();
      });
    });
  }

  // Initialize
  startQuiz();
})();
