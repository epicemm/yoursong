 const startBtn =
 document.getElementById('start-btn');
 const questionArea = 
 document.getElementById('question-area');
 const artistNameElement =
 document.getElementById('artist-name');
 const optionsDiv=
 document.getElementById('options');
 const nextBtn = 
 document.getElementById('next-btn'); // Botón siguiente


 //Lista de preguntas: cada una contiene un artista y tres canciones 
 const questions = [
    {
 	artist: 'Taylor Swift',
 	options: ['Love Story', 'Rolling in the deep', 'Shape of you'],
 	correct: 0 //Índice de la opción correcta (en este caso 'Love Story') 
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
 let currentQuestionIndex = 0; // Índice de la pregunta actual

    //Puedes añadir más preguntas aquí

    //Función para comenzar el juego
    function startGame() {
    	startBtn.style.display='none'; //Esconder el botón
    	questionArea.style.display='block'; //Mostrar la sección del juego
    	loadQuestion(currentQuestionIndex); //Cargar la primera pregunta
        nextBtn.style.display='none' //Ocultar boton next al empezar
    }

    //Función para cargar una pregunta
    function loadQuestion(questionIndex) {
    	const question = 
    questions[questionIndex];
    
    //Mostrar el nombre del artista
    artistNameElement.textContent = `Which of these songs belong to ${question.artist}?`; 

    //Limpiar las opciones anteriores
    optionsDiv.innerHTML='';

    //Crear botones para las opciones
    question.options.forEach((option,index) =>{
    	const btn = 
    	document.createElement('button'); 
        btn.classList.add('option-btn');
        btn.textContent=option;
        btn.onclick =() =>
    checkAnswer(index, question.correct);
        optionsDiv.appendChild(btn);
    });
  
    }

    //Función para verificar la respuesta 
    function checkAnswer(selectedIndex, correctIndex) {
    	if (selectedIndex === correctIndex) 
    	{
    		alert('Correct!');
    	}
    	else{

    		alert('Incorrect')
    	}
        nextBtn.style.display = 'block'; // Mostrar el botón de siguiente después de responder

    }

    //Evento para comenzar el juego al hacer clic
    startBtn.addEventListener('click', startGame);

    //Evento para cargar la siguiente pregunta
    nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
        nextBtn.style.display = 'none'; // Ocultar el botón de siguiente hasta que respondan
    } else {
        alert('Thanks for playing!');
        nextBtn.style.display = 'none'; // Ocultar el botón al final
        startBtn.style.display = 'block'; // Mostrar el botón de inicio para jugar otra vez
        currentQuestionIndex = 0; // Reiniciar el índice de las preguntas
    }
});

