// Lista de preguntas: cada una contiene un artista y tres canciones
const questions = [
    {
        artist: 'Taylor Swift',
        options: ['Love Story', 'Rolling in the deep', 'Shape of you'],
        correct: 0 // Índice de la opción correcta ('Love Story')
    },
    {
        artist: 'Adele',
        options: ['Bad Romance', 'Someone Like You', 'Shake it out'],
        correct: 1 // 'Someone Like You' es la correcta
    },
    {
        artist: 'Ed Sheeran',
        options: ['Havana', 'Drunk', 'Cheap Thrills'],
        correct: 1 // 'Drunk' es la correcta
    }
];

// Variables globales para llevar control del estado del juego
let currentQuestionIndex = 0; // Para seguir la pregunta actual

// Obtener elementos del DOM
const startBtn = document.getElementById('start-btn');
const questionArea = document.getElementById('question-area');
const artistNameElement = document.getElementById('artist-name');
const optionsDiv = document.getElementById('options');

// Modal y elementos relacionados
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const nextBtn = document.getElementById('next-btn');

// Función para comenzar el juego
function startGame() {
    startBtn.style.display = 'none'; // Ocultar el botón de inicio
    questionArea.style.display = 'block'; // Mostrar la sección de preguntas
    loadQuestion(currentQuestionIndex); // Cargar la primera pregunta
}

// Función para cargar una pregunta
function loadQuestion(questionIndex) {
    const question = questions[questionIndex];

    // Mostrar el nombre del artista
    artistNameElement.textContent = `Which of these songs belong to ${question.artist}?`;

    // Limpiar las opciones anteriores
    optionsDiv.innerHTML = '';

    // Crear botones para las opciones
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index, question.correct);
        optionsDiv.appendChild(btn);
    });
}

// Función para verificar la respuesta
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        modalText.textContent = 'Correct!'; // Mostrar mensaje de correcto
    } else {
        modalText.textContent = 'Incorrect!'; // Mostrar mensaje de incorrecto
    }
    modal.style.display = 'block'; // Mostrar el modal con el mensaje
}

// Función para cargar la siguiente pregunta
function loadNextQuestion() {
    currentQuestionIndex++; // Pasar a la siguiente pregunta

    // Verificar si hay más preguntas
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex); // Cargar la siguiente pregunta
    } else {
        modalText.textContent = 'All you do is win'; // Mensaje final
        nextBtn.style.display = 'none'; // Ocultar el botón Next cuando termine el juego
    }
    modal.style.display = 'none'; // Cerrar el modal después de cargar la siguiente pregunta
}

// Avanzar a la siguiente pregunta al hacer clic en el botón "Next" dentro del modal
nextBtn.onclick = function () {
    loadNextQuestion(); // Cargar la siguiente pregunta
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Evento para comenzar el juego al hacer clic en el botón de inicio
startBtn.addEventListener('click', startGame);
