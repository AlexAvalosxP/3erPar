function display(opt)
{
	midArea = document.getElementById("midArea");
	switch (opt) 
	{
		case 1:
			midArea.innerHTML = '<div class="squareArea"><div class="infoArea">' +
									'<h1>La quinta disciplina</h1>' +
									'<button class="btnNav" onclick="subDisplay(1)">Introducción</button>' +
									'<button class="btnNav" onclick="subDisplay(2)">Conceptos</button>' +
								'</div>' +
								'<div class="interactArea" id="interactArea">' +
								'</div></div>';
		break;
		case 2:
			midArea.innerHTML = '<div class="squareArea">' +
									'<div class="infoArea">' +
										'<h1>Arquetipos</h1>' +
										'<button class="btnNav" onclick="subDisplay(3)">Introducción</button>' +
										'<button class="btnNav" onclick="subDisplay(4)">Conceptos</button>' +
										'<button class="btnNav" onclick="subDisplay(5)">Los Arquetipos</button>' +
										'<button class="btnNav" onclick="subDisplay(6)">Actividad</button>' +
									'</div>' +
									'<div class="interactArea divArquet" id="interactArea">' +
								'</div></div>';
		break;
		case 3:
			midArea.innerHTML = '<div class="squareArea">' +
									'<div class="infoArea">' +
										'<h1>The Macroscope</h1>' +
										'<button class="btnNav" onclick="subDisplay(7)">Infografía 1</button>' +
										'<button class="btnNav" onclick="subDisplay(8)">Infografía 2</button>' +
										'<button class="btnNav" onclick="subDisplay(9)">Infografía 3</button>' +
									'</div>' +
									'<div class="interactArea" id="interactArea">' +
								'</div></div>';
		break;
		case 4:
			midArea.innerHTML = '<div class="squareArea">' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p1.jpg"></div><h2>Alejandro Ávalos</h2><h3>alexavalosxp@gmial.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p2.jpg"></div><h2>Humberto Ávila</h2><h3>humberto.avila07@gmail.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p3.jpg"></div><h2>Jorge Maya</h2><h3>jorgemaya08@hotmail.com</h3></div>' +
				'</div>';
		break;
		default:
			midArea.innerHTML = 'ERROR';
			flagPareto = false;
		break;
	}
}

function subDisplay(opt)
{
	intArea = document.getElementById("interactArea");
	switch (opt) 
	{
		case 1:
			intArea.innerHTML = 'Introducción Quinta Disciplina';
		break;
		case 2:
			intArea.innerHTML = 'Conceptos Quinta Disciplina';
		break;
		case 3:
			intArea.innerHTML = 'Introducción Arquetipos';
		break;
		case 4:
			intArea.innerHTML = 'Conceptos Arquetipos';
		break;
		case 5:
			intArea.innerHTML = '<div class="btnArquet" onclick="displayArquet(1)">Compensación entre proceso y demora</div>' +
				'<div class="btnArquet" onclick="displayArquet(2)">Límites del crecimiento</div>' +
				'<div class="btnArquet" onclick="displayArquet(3)">Desplazamiento de la carga</div>' +
				'<div class="btnArquet" onclick="displayArquet(4)">Desplazamiento de la carga hacia la intervención</div>' +
				'<div class="btnArquet" onclick="displayArquet(5)">Erosión de metas</div>' +
				'<div class="btnArquet" onclick="displayArquet(6)">Escalada</div>' +
				'<div class="btnArquet" onclick="displayArquet(7)">Éxito para quien tiene éxito</div>' +
				'<div class="btnArquet" onclick="displayArquet(8)">Tragedia del terreno común</div>' +
				'<div class="btnArquet" onclick="displayArquet(9)">Soluciones rápidas que fallan</div>' +
				'<div class="btnArquet" onclick="displayArquet(10)">Crecimiento y subinversión</div>';
		break;
		case 6:
			intArea.innerHTML = 'Actividad Arquetipos';
		break;
		case 7:
			intArea.innerHTML = 'Infografía 1';
		break;
		case 8:
			intArea.innerHTML = 'Infografía 2';
		break;
		case 9:
			intArea.innerHTML = 'Infografía 3';
		break;
		default:
			intArea.innerHTML = 'ERROR';
		break;
	}
}


function displayArquet(opt)
{
	area = document.getElementById("interactArea");
	switch (opt) 
	{
		case 1:
			area.innerHTML = '<h1>Compensación entre proceso y demora</h1>' +
			'<p>Una persona, un grupo o una organización, actuando con miras a una meta, adaptan su conducta en respuesta a la realimentación demorada. Si no son conscientes de la demora, realizan más acciones correctivas de las necesarias o a veces desisten por que no ven ningún progreso.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "Creíamos que estábamos en equilibrio, pero luego tomamos una medida excesiva". (Luego podemos tomar una medida excesiva en sentido contrario).</p><br>' +
			'<p><b>Principio Administrativo:</b> En un sistema lento, la agresividad produce inestabilidad. Debes ser paciente o lograr que el sistema reaccione mejor</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 2:
			area.innerHTML = '<h1>Límites del crecimiento</h1>' +
			'<p>Un proceso se alimenta de sí mismo para producir un período de crecimiento o expansión acelerada. Luego el crecimiento se vuelve más lento (a menudo en forma inexpìcable para quienes participan en el sistema) y puede detenerse o se revierte e inicia un colapso acelerado. La fase de crecimiento es causada por uno o varios procesos de realimentación reforzadora. La desaceleración surge por un proceso compensador que se activa cuando se llega a un "límite". El límite puede ser una restricción en los recursos, o una reacción externa o interna ante el crecimiento. El colapso acelerado (cuando ocurre)surge del proceso reforzador que se revierte, generando cada vez más contracción.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "¿Por qué preocuparnos por problemas que no tenemos? Estamos creciendo muchísimo". (Poco después: "Claro que hay algunos problemas, pero sólo debemos volver a lo que antes funcionaba". Más tarde: "Cuanto más corremos, más permanecemos en el mismo lugar".)</p><br>' +
			'<p><b>Principio Administrativo:</b> No presiones el proceso reforzador (de crecimiento); elimina (o debilita) el factor limitativo.</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 3:
			area.innerHTML = '<h1>Desplazamiento de la carga</h1>' +
			'<p>Se usa una "solución" de corto plazo para corregir un problema, con resultados inmediatos aparentemente positivos. A medida que esta corrección se usa cada vez más, las medidas correctivas fundamentales se aplican cada vez menos. Con el tiempo, las aptitudes para la solución fundamental se atrofian, creando mayor dependencia respecto de la solución sintomática.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "¡Esta solución ha funcionado hasta ahora! ¿Quién dice que nos esperan problemas?</p><br>' +
			'<p><b>Principio Administrativo:</b> Concéntrate en la solución fundamental. Si la solución sintomática es imperativa (a causa de las demoras de la solución fundamental), úsala para ganar tiempo mientras trabajas en la solución fundamental.</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 4:
			area.innerHTML = '<h1>Desplazamiento de la carga hacia la intervención</h1>' +
			'<p>Las estructuras de desplazamiento de la carga son tan comunes y perniciosas en caso de intervención externa que merecen una atención especial. La intervención procura aliviar síntomas de problemas obvios, y lo hace tan bien que los integrantes del sistema jamás aprenden a afrontar los problemas.</p><br>' +
			'<p><b>Principio Administrativo:</b> "Enseña a la gente a pescar, en vez de darle pescado". Concéntrate en afinar las aptitudes del "organismo huésped" para resolver sus propios problemas. Si se necesita ayuda externa, se debe limitar estrictamente a una intervención única (y todos deben saberlo de antemano) o ayudar a la gente a desarrollar su propia capacidad, recursos e infraestructura para que sea más capaz en el futuro.</p><br>' +
			'<p></p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 5:
			area.innerHTML = '<h1>Erosión de metas</h1>' +
			'<p>Una estructura de desplazamiento de la carga donde la solución de corto plazo significa el deterioro de una meta fundamental de largo plazo.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "No importa que nuestras pautas de desempeño se deterioren un poco, sólo hasta que termine la crisis". </p><br>' +
			'<p><b>Principio Administrativo:</b> Sostén la visión</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 6:
			area.innerHTML = '<h1>Escalada</h1>' +
			'<p>Dos personas u organizaciones entienden que su bienestar depende de una ventaja relativa de una sobre la otra. Cuando una se adelanta, la otra se siente amenazada y actúa con mayor agresividad para recobrar su ventaja, los cual amenaza a la primera, aumentando su agresividad, y así sucesivamente. A menudo cada parte ve su conducta agresiva como una reacción defensiva ante la agresión de la otra; pero la "defensa" de cada parte deriva de una escalada que escapa a la voluntad de ambas. </p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "Si nuestro oponente se aplacara, podríamos dejar de librar esta batalla para hacer otras cosas".</p><br>' +
			'<p><b>Principio Administrativo:</b> Busca el modo de que ambas partes "ganen" o alcancen sus objetivos. En muchos casos, una parte puede revertir unilateralmente la espiral viciosa al realizar "agresivos" actos pacíficos que hagan sentir al otro menos amenazado.</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 7:
			area.innerHTML = '<h1>Éxito para quien tiene éxito</h1>' +
			'<p>Dos actividades compiten por recursos limitados. A mayor éxito, mayor respaldo, con lo cual la otra se queda sin recursos.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> Una de las dos actividades, grupos o individuos interrelacionados comienza a andar muy bien mientras el otro apenas subsiste.</p><br>' +
			'<p><b>Principio Administrativo:</b> Busca la meta abarcadora de logro equilibrado de ambas opciones. En algunos casos, rompe o debilita el eslabonamiento entre ambas, para que no compitan por el mismo recurso limitado (esto es deseable en casos donde ese eslabonamiento pasa inadvertido y crea una insalubre competencia por los recursos).</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 8:
			area.innerHTML = '<h1>Tragedia del terreno común</h1>' +
			'<p>Los individuos utilizan un recurso común pero limitado reparando únicamente en las necesidades individuales. Al principio son recompensados, pero eventualmente hay una disminución en las ganancias, lo cual les induce a intensificar los esfuerzos. Al final agotan o erosionan el recurso.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "Había en abundancia para todos. Ahora las cosas están difíciles. Si deseo sacar provecho este año, tendré que trabajar más".</p><br>' +
			'<p><b>Principio Administrativo:</b> Administra el "terreno común" educando a todos y creando formas de autorregulación y presiones de pares, o mediante un mecanismo de regulación oficial, idealmente diseñado por los participantes.</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 9:
			area.innerHTML = '<h1>Soluciones rápidas que fallan</h1>' +
			'<p>Una solución eficaz en el corto plazo tiene consecuencias de largo plazo imprevistas que requieren más uso de la misma solución.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "Siempre funcionó antes. ¿Por qué no funciona ahora?".</p><br>' +
			'<p><b>Principio Administrativo:</b> No descuides el largo plazo. De ser posible no recurras a las soluciones de corto plazo, o úsalas sólo para ganar tiempo mientras trabajas en un remedio duradero.</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 10:
			area.innerHTML = '<h1>Crecimiento y subinversión</h1>' +
			'<p>El crecimiento se aproxima a un límite que se puede eliminar o desplazar hacia el futuro si la empresa o individuo invierte en "capacidad" adicional. Pero la inversión debe ser intensa y rápida para impedir la reducción del crecimiento, pues de lo contrario no se hará nunca. A menudo las metas decisivas o las pautas de desempeño se rebajan para justificar la subinversión. Cuando esto ocurre, hay una profecía autopredictiva donde las metas más bajas conducen a expectativas más bajas, que luego se traducen en un mal desempeño causado por la subinversión.</p><br>' +
			'<p><b>Síntoma de Advertencia:</b> "Bien, éramos los mejores, y lo seremos de nuevo, pero ahora tenemos que conservar los recursos y no invertir en exceso".</p><br>' +
			'<p><b>Principio Administrativo:</b> Si hay un potencial genuino para el crecimiento, construye capacidad anticipándote a la demanda, como estrategia para generar demanda. Sostén la visión, especialmente en lo concerniente a la evaluación de las pautas de desempeño y la capacidad para satisfacer la demanda potencial</p><br>' +
			'<button onclick="showTips(' + opt + ')">Desplegar estructura</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		default:
			area.innerHTML = 'ERROR';
		break
	}
}

//SHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWW TIIIIIIIIIIIIIIIIIIIPPPPSSS
//SHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWW TIIIIIIIIIIIIIIIIIIIPPPPSSS
function showTips(opt) //SHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOWWW TIIIIIIIIIIIIIIIIIIIPPPPSSS
{

	tip1=["Es bueno dedicar tiempo en soledar, pero procura tratar un poco más a tus compañeros de la vida diaria.", "Siempre ten en cuenta que no todo el mundo tiene la energía que tú tienes, intenta ser comprensivo con los demás."]; // I - E
	tip2=["Tus sentidos te pueden ayudar a comprender el mundo, pero trata de dedicar un poco más de tiempo a analizar aquello que \"no se ve\".", "Recuerda siempre que tu intuición aunque funcione la mayoría de las veces no es siempre la verdad. Trata de analizar la información desde distintos ángulos."]; // S - I
	tip3=["Las decisiones tomadas a base de emociones pueden ser a veces un poco precipitadas. No significa que sea incorrecto, solo ejerce precaución.", "No siempre la respuesta se encuentra tras un proceso sistemático, siempre ten en cuenta tus emociones y las de los demás."]; // F - T
	tip4=["Procura salir un poco de tu zona de confort y quizá encuentres un lado muy distinto de la moneda.", "Es muy bueno abrise a todo tipo de situaciones, pero siempre ten en cuenta el riesgo que puede implicar y a los demás."]; // J - P

	area = document.getElementById("interactArea");
	switch (opt) 
	{
		case 1:
			area.innerHTML = '<h1>Compensación entre proceso y demora</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq1.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 2:
			area.innerHTML = '<h1>Límites del crecimiento</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq2.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 3:
			area.innerHTML = '<h1>Desplazamiento de la carga</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq3.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 4:
			area.innerHTML = '<h1>Desplazamiento de la carga hacia la intervención</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq4.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 5:
			area.innerHTML = '<h1>Erosión de metas</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq5.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 6:
			area.innerHTML = '<h1>Escalada</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq6.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 7:
			area.innerHTML = '<h1>Éxito para quien tiene éxito</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq7.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 8:
			area.innerHTML = '<h1>Tragedia del terreno común</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq8.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 9:
			area.innerHTML = '<h1>Soluciones rápidas que fallan</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq9.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		case 10:
			area.innerHTML = '<h1>Crecimiento y subinversión</h1>' +
			'<div class="imgArquetipo"><img src="sources/arq10.jpg"></div>' +
			'<button onclick="displayArquet(' + opt + ')">Desplegar información</button>' +
			'<button onclick="subDisplay(5)" class="closeBriggs">X</button>';
		break;
		default:
			area.innerHTML = 'ERROR';
		break
	}
}