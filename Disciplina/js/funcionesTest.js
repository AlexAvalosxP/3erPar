function startTest()
{
	firstSetup();
	nextQuest();
}

function firstSetup()
{
	numGame = 0;
	//game = shuffle([1,2,3,4,5,6,7,9,8,10]);
	game = [1,2,3,4,5,6,7,9,8,10];

	resValues = [[0,1,0],[0,0,1],[1,0,0],[1,0,0],[0,1,0],[0,0,1],[0,0,1],[0,0,1],[0,1,0],[1,0,0]];

	questions =["Una empresa fabrica más y más botellas antes de conocer la demanda, la cual resulta ser mucho menor.", 
				"Una ciudad que crece hasta cubrir las tierras disponibles, con lo cual se elevan los precios de las viviendas.", 
				"Pagar las cuentas mediante préstamos, en vez de someterse a la disciplina de un presupuesto.", 
				"Asistencia alimentaria, la cual reduce las muertes e incrementa el crecimiento demográfico de grupos vulnerables", 
				"Una persona exitosa que reduce sus expectativas sobre sí misma y que gradualmente tiene menos éxito.", 
				"Una compañía saca una edición limitada, su competencia se siente obligada a hacer lo mismo aunque no sea óptimo en este momento.", 
				"Una persona solo le dedica tiempo a las cosas que puede hacer bien sin dedicarle tiempo y recursos a las que no.",
				"El agotamiento de un recurso natural cuando varias compañías lo explotan.", 
				"Una persona pide un préstamo para pagar otro préstamo, lo cual a largo plazo imcrementará los intereses.",
				"Compañías que dejan decaer la calidad de los servicios o los productos, culpando a la competencia o la gerencia de ventas por no empeñarse en mantener las ventas."];

	answers = [["Erosión de metas", "Compensación entre proceso y demora", "Éxito para quien tiene éxito"],
				["Éxito para quien tiene éxito", "Tragedia del terreno común", "Límites del crecimiento"],
				["Desplazamiento de la carga", "Compensación entre proceso y demora", "Tragedia del terreno común"],
				["Desplazamiento de la carga hacia la intervención", "Éxito para quien tiene éxito", "Soluciones rápidas que fallan"],
				["Éxito para quien tiene éxito", "Erosión de metas", "Desplazamiento de la carga hacia la intervención"],
				["Crecimiento y subinversión", "Límites del crecimiento", "Escalada"],
				["Erosión de metas", "Límites del crecimiento", "Éxito para quien tiene éxito"],
				["Compensación entre proceso y demora", "Soluciones rápidas que fallan", "Tragedia del terreno común"],
				["Crecimiento y subinversión", "Soluciones rápidas que fallan", "Desplazamiento de la carga"],
				["Crecimiento y subinversión", "Desplazamiento de la carga hacia la intervención", "Erosión de metas"]		
	];

	gamesWon = 0;
}

function checkAns()
{
	//bottomImg = document.getElementsByClassName("ckImg");

	if(numGame < 10)
	{
		//bottomImg[numGame].src = "sourcesCognitivo/chk.png";
		numGame++;
	
		console.log(document.querySelector('input[name="ans"]:checked').value);
		if(parseInt(document.querySelector('input[name="ans"]:checked').value) == 1)
		{
			gamesWon++;
		}

		if(numGame < 10)
		{
			nextQuest();
		}
		else
		{
			document.getElementById("moduleTest").innerHTML = '<h1 class="textRes">Juegos Ganados: ' + gamesWon + '/10</h1>';
			//document.getElementById("imageTest").innerHTML = "";
			//localStorage.setItem('promedio2', gamesWon);
		}

	}
}

function nextQuest()
{
	console.log("sourcesCognitivo/res" + game[numGame] + ".jpg");
	document.getElementById("imgTest").src = "sourcesCognitivo/res" + game[numGame] + ".jpg";
	document.getElementById("questTest").innerHTML = '<h2>' + questions[game[numGame] - 1] + '</h2>' +
														'<input type="radio" name="ans" value="' + resValues[game[numGame] - 1][0] + '" checked><h3>' + answers[game[numGame] - 1][0] + '</h3><br>' +
														'<input type="radio" name="ans" value="' + resValues[game[numGame] - 1][1] + '"><h3>' + answers[game[numGame] - 1][1] + '</h3><br>' +
														'<input type="radio" name="ans" value="' + resValues[game[numGame] - 1][2] + '"><h3>' + answers[game[numGame] - 1][2] + '</h3><br>';
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}