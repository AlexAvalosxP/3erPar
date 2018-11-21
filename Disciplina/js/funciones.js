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
			intArea.innerHTML = '<p>Las Cinco Disciplinas de las Organizaciones Inteligentes Las Organizaciones Inteligentes dominan ' +
								'cinco disciplinas básicas, que describimos a continuación. Aunque son independientes, las empresas más ' +
								'exitosas las combinan logrando importantes sinergias y beneficios.</p>';
		break;
		case 2:
			intArea.innerHTML = '<h4>Disciplina 1: Dominio Personal (Personal Mastery)</h4>' +
								'<p>Cuando hablamos de dominio se puede entender como una dominación de personas o incluso de cosas, sin embargo, este término va más allá, entendiéndolo como una habilidad.</p>' +
								'<p>Por otro lado cuando hablamos del dominio personal se hace referencia a una disciplina que permite aclarar y profundizar la visión personal de cada individuo, así pues concentrar sus energías, desarrollar su paciencia y ver la realidad objetivamente. Por todo esto, se dice que una piedra angular de las organizaciones inteligentes es el dominio personal.</p>' +
								'<p>Desafortunadamente existen muy pocas organizaciones que estimulan el crecimiento de sus colaboradores, esto trae como consecuencia que se propicie un desperdicio de recursos, ya que en lugar de que las empresas aprovechen a las personas que entran a trabajar con excelente actitudes: personas inteligentes, brillantes, entusiastas, cultos, con muchos deseos de aportar cambios a la empresa; las mismas empresas provocan que dichos colaboradores que en sus inicios eran radiantes, pierdan el sentido de compromiso y que ya no sientan ningún estímulo para seguir con la actitud inicial; las empresas desaprovechan los recursos.</p>' +
								'<p>Debemos entender que la disciplina del dominio personal inicia aclarando las cosas que de verdad interesan, para concentrar nuestra vida al servicio de nuestras mayores aspiraciones. En este punto, cabe resaltar que es importante primeramente la conexión que debe existir entre el aprendizaje personal y aprendizaje organizacional, ya que los compromisos de ambas partes deben ser recíprocos, es decir, el alma de toda empresa se debe constituir por personas capaces de aprender.</p>' +
								'<p>En conclusión, debemos enfocarnos en lo que realmente es importante para nosotros como personas y deshacernos de las pequeñeces que nos obstaculizan para lograr el éxito de nuestras aspiraciones personales.<p>' +
								'<h4>Disciplina 2: Modelos Mentales</h4>' +
								'<p>Los modelos mentales son suposiciones, generalizaciones o imágenes que están localizados en nuestro inconsciente y tienen influencia sobre nuestra forma de actuar, de pensar y de entender el mundo. Las organizaciones inteligentes hacen uso de modelos mentales internos para impulsar la adopción de ideas nuevas, originales e innovadoras.</p>' +
								'<p>La disciplina de trabajar con modelos mentales comienza por aprender a reconstruir la imagen que tenemos del mundo y llevarla a la superficie y así someterla a un riguroso análisis e investigación. Esta disciplina también incluye la aptitud para promover conversaciones de manera abierta donde exista un equilibrio entre la búsqueda y la persuasión, donde la gente de a conocer lo que piensa para que estos pensamientos influyan a otras personas.</p>' +
								'<p>Se puede decir que los modelos mentales:</p>' +
								'<li>Son simplificaciones del mundo real</li>' +
								'<li>Se localizan debajo de la superficie del pensamiento consciente</li>' +
								'<li>Generalmente se aceptan de manera inconsciente</li>' +
								'<li>Tienen gran influencia en las acciones que toman las personas</li>' +
								'<li>Las organizaciones inteligentes deben motivar a sus colaboradores a mejorar sus modelos mentales utilizados; este tipo de organizaciones descubren formas efectivas para cambiar los modelos mentales que usan por patrones cambiantes.</li>' +
								'<h4>Disciplina 3: Construcción de una Visión Compartida</h4>' +
								'<p>Una organización no puede alcanzar el éxito o una que cierta grandeza si no se ha propuesto metas, valores, y misione, estos elementos deben ser compartidos dentro de la organización.</p>' +
								'<p>Es de vital importancia y acierto que algunas organizaciones logran unir a sus colaboradores en torno de una identidad y una aspiración común. Cuando existe una verdadera visión la gente aprende y sobresale. Una visión compartida proviene de un interés común. En las organizaciones inteligentes las personas crean visiones compartidas con el objetivo de sentirse unidos o conectados llevando a cabo un trabajo importante y común.</p>' +
								'<p>Lo importante en esta disciplina es traducir la visión individual en una visión compartida</p>' +
								'<p>Para crear una visión compartida se necesita:</p>' +
								'<li>Fomentar la visión personal: las visiones compartidas nacen de visiones personales. Las organizaciones inteligentes deben estimular la visión individual para de esta manera, fortalecer la visión compartida de la organización.</li>' +
								'<li>Dar tiempo para que surja la visión común: las verdaderas visiones comunes evolucionan a medida que las personas participan y se comprometen.</li>' +
								'<li>Visión sobre las ideas existentes del personal de la organización</li>' +
								'<li>Enunciar las opiniones de manera positiva, no negativa: las opiniones negativas tienen consecuencias nocivas que normalmente todas las organizaciones siempre tratan de evitar, sin embargo las opiniones positivas expresan buenas aspiraciones y no temores.</li>' +
								'<li>Las organizaciones inteligentes cimientan visiones comunes factibles y de gran alcance, de la misma manera, las organizaciones inteligentes concentran sus esfuerzos en consentimiento con todas las visiones comunes de cada uno colaborador.</li>' +
								'<h4>Disciplina 4: Aprendizaje en Equipo</h4>' +
								'<p>Los equipos pueden aprender, ya que desarrollan aptitudes extraordinarias para llevar a cabo acciones coordinadas. Cuando los equipos aprenden generan resultados extraordinarios y sus miembros crecen rápidamente.</p>' +
								'<p>La disciplina del aprendizaje en equipo inicia con el diálogo para integrar un auténtico pensamiento conjunto. El aprendizaje en equipo es de suma importancia ya que la unidad fundamental de aprendizaje en las organizaciones moderna es el equipo y no el individuo. Si los equipos no aprenden, la organización no puede aprender.</p>' +
								'<p>Para crear un aprendizaje en equipo es necesario:</p>' +
								'<li>Implementar oportunidades para iniciar el diálogo y el debate, las organizaciones inteligentes utilizan el diálogo y el debate para poner en el mismo contexto la experiencia de aprendizaje del equipo.</li>' +
								'<li>Utilizar el conflicto de una manera constructiva, ya que los miembros del equipo, tienen diferentes ideas sobre cómo lograr la visión; cuando se llega a analizar y discutir estos diferentes de vista, el aprendizaje en equipo mejora de manera significativa.</li>' +
								'<li>El aprendizaje en equipo es un tema exhaustivo y es la disciplina central de referencia de la organización inteligente.</li>' +
								'<h4>Disciplina 5: Pensamiento Sistémico</h4>' +
								'<p>Es importante que las 5 disciplinas se desarrollen como un todo o como un sistema completo.</p>' +
								'<p>La quinta disciplina, es el pensamiento sistémico; es la disciplina que integra las demás disciplinas, fusionándolas como un todo pero de manera coherente tanto en la teoría como en la práctica. Las 5 disciplinas no pueden ser recursos separados. El pensamiento sistémico nos dice que el todo puede superar la suma de las partes.</p>' +
								'<p>El pensamiento sistémico requiere de las demás disciplinas: la visión compartida, los modelos mentales, el aprendizaje en equipo y el dominio personal para cumplir su potencial:</p>' +
								'<p>La construcción de una visión compartida exhorta a un compromiso a largo plazo.</p>' +
								'<li>Los modelos mentales destacan la apertura necesaria para despojarnos de las limitaciones de como vemos el mundo.</li>' +
								'<li>El aprendizaje en equipo desarrolla las aptitudes de los grupos de personas para buscar una imagen más amplia que vaya más allá de las perspectivas individuales.</li>' +
								'<li>El dominio personal estimula la motivación personal para conocer cómo nuestros actos afectan nuestro entorno y al mundo.</li>' +
								'<p>El objetivo es aplicar el pensamiento sistemático en el diseño de una visión compartida y tener una percepción nueva del mundo y nosotros mismos y sentir que somos parte de éste mundo, en lugar de considerarnos separados del mundo, nos tenemos que considerar parte y conectados con el mundo.</p>' +
								'<p>Una organización inteligente crea su propia realidad y la forma de cómo modificarla. Eh aquí la aplicación del pensamiento del filósofo Arquímedes: “Dadme una palanca y moveré el mundo”.</p>' +
								'<p>Las 5 disciplinas se diferencian de las tradicionales por obtener el logro de competencias personales, las cuales suelen modificar la forma de pensar, las aspiraciones y la forma de interactuar de las personas.</p>';
		break;
		case 3:
			intArea.innerHTML = '<h1>Introducción Arquetipos</h1>' +
				'<p>La palabra viene del griego Archetypos, que significa "modelo primitivo u original". Un hijastro del pensamiento de'+
				'sistemas, los arquetipos de sistemas fueron desarrollados en Innovation Associates a mediados de los años ochenta.'+
				'En ese momento el estudio de la dinámica de sistemas dependía de la diagramación de complejos diagramas causales y'+
				'el modelado en computador, usando ecuaciones matemáticas para definir las relaciones entre variables.</p>'+
				'<p>Charles Kiefer el Presidente de I.A., sugirió el tratar de comunicar los conceptos mas simplemente. Jennifer Kemeny (con Michael'+
				'Goodman y Peter Senge, basados en parte en las notas desarrolladas por John Sterman) desarrolló ocho diagramas que'+
				'ayudarían a ilustrar los comportamientos mas comúnmente vistos. Algunos arquetipos, incluyendo "Límites del'+
				'crecimiento" y "Desplazamiento de la carga" fueron traducciones de "estructuras genéricas", mecanismos que Jay'+
				'Forrester y otros pioneros del pensamiento de sistemas describieron en los años sesenta y setenta.</p>'+
				'<br><img src="sources/in.JPG" style="width:400px; height:210px;">';
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
			intArea.innerHTML = '<div class="imgInfografia"><img src="sources/info1.jpg"><div>';
		break;
		case 8:
			intArea.innerHTML = '<div class="imgInfografia"><img src="sources/info2.png"><div>';
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