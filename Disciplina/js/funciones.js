function display(opt)
{
	midArea = document.getElementById("midArea");
	switch (opt) 
	{
		case 1:
			midArea.innerHTML = '<div class="squareArea"><div class="infoArea">' +
									'<h1>La quinta disciplina</h1>' +
									'<button class="btnNav">Introducción</button>' +
									'<button class="btnNav">Conceptos</button>' +
								'</div>' +
								'<div class="interactArea2" id="interactArea">' +
				
								'</div>' +
								'<div class="infoArea2">' +
				
								'</div></div>';
		break;
		case 2:
			midArea.innerHTML = '<div class="squareArea">' +
									'<div class="infoArea">' +
										'<h1>Arquetipos</h1>' +
										'<button class="btnNav">Introducción</button>' +
										'<button class="btnNav">Conceptos</button>' +
										'<button class="btnNav">Los Arquetipos</button>' +
										'<button class="btnNav">Actividad</button>' +
									'</div>' +
									'<div class="interactArea2" id="interactArea">' +
										
									'</div>' +
									'<div class="infoArea2">' +
										
									'</div>' +
								'</div>';
		break;
		case 3:
			midArea.innerHTML = '<div class="squareArea">' +
									'<div class="infoArea">' +
										'<h1>The Macroscope</h1>' +
										'<button class="btnNav">Infografía 1</button>' +
										'<button class="btnNav">Infografía 2</button>' +
										'<button class="btnNav">Infografía 3</button>' +
									'</div>' +
									'<div class="interactArea2" id="interactArea">' +
										
									'</div>' +
									'<div class="infoArea2">' +
										
									'</div>' +
								'</div>';
		break;
		case 4:
			midArea.innerHTML = '<div class="squareArea">' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p1.jpg"></div><h2>Alejandro Ávalos</h2><h3>alexavalosxp@gmial.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p2.jpg"></div><h2>Humberto Ávila</h2><h3>humberto.avila07@gmail.com</h3></div>' +
				'<div class="profileDiv"><div class="imgProfile"><img src="sources/p3.jpg"></div><h2>Jorge Maya</h2><h3>jorgemaya08@hotmail.com</h3></div>' +
				'</div>';
		break;
		case 5:
			midArea.innerHTML = '<div class="squareArea" id="gameArea">' +
				'<div class="question" id="quest"></div>' +
				'<div class="options">' +
					'<div class="opt" id="opt1" onclick="checkAns(0)"></div>' +
					'<div class="opt" id="opt2" onclick="checkAns(1)"></div>' +
				'</div>' +
			'</div>';
			firstGame();
		break;
		case 6:
			midArea.innerHTML ='<div class="infoArea">' +
			'<div class="btnBriggs" style="background: #0BB502;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#0BB502\'" onclick="displayBriggs(1)">ISTJ</div>' +
			'<div class="btnBriggs" style="background: #03B460;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#03B460\'" onclick="displayBriggs(2)">ISFJ</div>' +
			'<div class="btnBriggs" style="background: #7DD81B;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#7DD81B\'" onclick="displayBriggs(3)">ISTP</div>' +
			'<div class="btnBriggs" style="background: #044101;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#044101\'" onclick="displayBriggs(4)">ISFP</div>' +
			'<div class="btnBriggs" style="background: #C2E111;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#C2E111\'" onclick="displayBriggs(5)">ESTP</div>' +
			'<div class="btnBriggs" style="background: #F5BC0E;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F5BC0E\'" onclick="displayBriggs(6)">ESFP</div>' +
			'<div class="btnBriggs" style="background: #F3F847;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F3F847\'" onclick="displayBriggs(7)">ESTJ</div>' +
			'<div class="btnBriggs" style="background: #EEA817;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#EEA817\'" onclick="displayBriggs(8)">ESFJ</div>' +
		'</div>' +
		'<div class="interactArea2 divBriggs" id="interactArea2">' +
			'<div class="gameArea" id="gameArea">' +
				'<div class="instructions">Contesta las siguientes preguntas para descubrir tu perfil en el indicador Mayer Briggs (O si así lo deseas, puedes hacer seleccionar las opciones de los extremos para desplegar información al respecto).</div>' +
				'<button class="btnShowTest" onclick="showTest()">Comenzar</button>' +
			'</div>' +
		'</div>' +
		'<div class="infoArea2">' +
			'<div class="btnBriggs" style="background: #06A894;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#06A894\'" onclick="displayBriggs(9)">INFJ</div>' +
			'<div class="btnBriggs" style="background: #0547A9;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#0547A9\'" onclick="displayBriggs(10)">INTJ</div>' +
			'<div class="btnBriggs" style="background: #013641;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#013641\'" onclick="displayBriggs(11)">INFP</div>' +
			'<div class="btnBriggs" style="background: #5615AE;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#5615AE\'" onclick="displayBriggs(12)">INTP</div>' +
			'<div class="btnBriggs" style="background: #D12810;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#D12810\'" onclick="displayBriggs(13)">ENFP</div>' +
			'<div class="btnBriggs" style="background: #F2578D;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F2578D\'" onclick="displayBriggs(14)">ENTP</div>' +
			'<div class="btnBriggs" style="background: #EC6B2D;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#EC6B2D\'" onclick="displayBriggs(15)">ENFJ</div>' +
			'<div class="btnBriggs" style="background: #F26A57;" onmouseover="this.style.background = \'black\'" onmouseleave="this.style.background = \'#F26A57\'" onclick="displayBriggs(16)">ENTJ</div>' +
		'</div>';
		break;
		default:
			midArea.innerHTML = 'ERROR';
			flagPareto = false;
		break;
	}
}

function displayBriggs(opt)
{
	area = document.getElementById("interactArea2");
	switch (opt) 
	{
		case 1:
			area.innerHTML = '<h1>Inspector</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Se trata de personas disciplinadas y responsables en el trabajo. No se distraen cuando están llevando a cabo alguna tarea. Son realistas, serios y callados. Les gusta tenerlo todo organizado; ya sea en el trabajo, en casa o en su vida entera. Valoran mucho las tradiciones y la lealtad.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 2:
			area.innerHTML = '<h1>Protector</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Callados pero sociables, concienzudos. Son responsables y estables en sus obligaciones que cumplen de manera precisa. Leales, considerados y propensos a recordar detalles de personas que consideran importantes, ya que suelen preocuparse por cómo se sienten los demás.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 3:
			area.innerHTML = '<h1>Artesano</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<p>Tolerantes y flexibles, son observadores callados hasta que un problema aparece, entonces actúan rápido para encontrar soluciones que funcionen. Interesados en la relación causa-efecto, suelen organizar los hechos utilizando los principios lógicos y valoran la eficiencia.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 4:
			area.innerHTML = '<h1>Compositor</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<p>Amables y amigos de sus amigos. Disfrutan del “ahora”,de lo que les rodea. Les gusta tener su propio espacio para trabajar. Son leales y defienden sus valores y a las personas que son importantes para ellos. Prefieren evitar los conflictos y las discusiones, por lo que no fuerzan a los demás a creer sus opiniones.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 5:
			area.innerHTML = '<h1>Promotor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<p>Flexibles y tolerantes, toman una posición pragmática centrada en resultados inmediatos. Les aburren las teorías y las explicaciones conceptuales; por el contrario prefieren actuar con toda su energía para solucionar los problemas. Se centran en el “aquí y ahora”, son espontáneos y disfrutan de cada momento en el que pueden estar con otras personas. Aprenden mejor haciendo que escuchando.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 6:
			area.innerHTML = '<h1>Actor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<p>Extrovertidos, amigables, y razonables. Les encanta la vida social, la gente y el confort material. Disfrutan trabajando con otras personas y suelen aportar un enfoque realista en sus actividades; eso sí, intentando hacer el trabajo divertido. Aprenden mejor intentando utilizar la nueva habilidad con otras personas.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 7:
			area.innerHTML = '<h1>Supervisor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Son gente práctica, realista, decisivos y veloces tomando decisiones. Organizan los proyectos y a la gente para que las cosas se hagan de la manera más eficiente posible. Cuidan hasta el más mínimo detalle y tiene establecidos claros valores que siguen sistemáticamente y quieren que los demás también lo hagan.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 8:
			area.innerHTML = '<h1>Proveedor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Les gusta estar en armonía con su alrededor y se esfuerzan con determinación para establecer esa situación de tranquilidad. Prefieren trabajar en compañía para completar el trabajo a tiempo y de manera precisa. Son leales, e intentan satisfacer las necesidades ajenas siempre que pueden. Quieren ser apreciados por lo que son y por su contribución con la sociedad.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 9:
			area.innerHTML = '<h1>Consejero</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Son personas acostumbradas a buscar el significado y la conexión entre ideas, en las relaciones y las posesiones materiales. Quieren entender lo que motiva a los demás a actuar. Además, sin cabezotas y defensores leales de sus valores. Suelen intentar desarrollar una visión clara sobre cómo se puede contribuir al bien común. Son organizados y determinados en imponer su visión.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 10:
			area.innerHTML = '<h1>Mente Maestra</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Son originales y creativos, siempre se las ingenian para salirse con la suya y conseguir lo quen. Rápidos observando lo que sucede a su alrededor y desarrollando explicaciones. Son bastante escépticos e independientes.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 11:
			area.innerHTML = '<h1>Sanador</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<p>Idealistas, quieren que su vida sea congruente con sus valores. Son curiosos y les gusta barajar diferentes opciones antes de tomar una decisión. Intentan entender a la gente y ayudarles a llenar su potencial. Son flexibles y se adaptan bien a las situaciones a menos que uno de sus valores se vea amenazado.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 12:
			area.innerHTML = '<h1>Arquitecto</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<p>Intentan desarrollar explicaciones lógicas para todo lo que les interesa. Prefieren lo abstracto y lo teórico,por tanto, están más interesados en las ideas que en las interacciones sociales. Callados e introvertidos pero flexibles y adaptables. Tienen una habilidad inusual para centrarse en solventar los problemas. Suelen ser escépticos y críticos siempre desde un punto de vista analítico.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 13:
			area.innerHTML = '<h1>Campeón</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<p>Acogedores, entusiastas e imaginativos. Ven la vida como una gran variedad de posibilidades. Hacen conexiones rápidas entre lo que sucede y la información que ya tienen, y actúan según los patrones que pueden observar. Les gusta conseguir la máxima información posible de los demás, a los que aprecian y apoyan con mucha facilidad.Son espontáneos, con mucha “labia” y acostumbran a improvisar.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 14:
			area.innerHTML = '<h1>Inventor</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<p>Rápidos, ingeniosos, siempre a alerta y muy habladores. Cuentan con muchos recursos a la hora de solucionar los problemas más complicados. Suelen generar conceptos que posteriormente analizan estratégicamente. Son buenos “fichando” a la gente, se aburren con la rutina y cambian constantemente de intereses.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 15:
			area.innerHTML = '<h1>Maestro</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<p>Tienen una gran capacidad para empatizar con los demás. Son emotivos y encuentran potencial en todo el mundo. De hecho, ayudan a los demás a desarrollarse. Uno de sus puntos fuertes es la sociabilidad y tienen una gran capacidad de liderazgo.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 16:
			area.innerHTML = '<h1>Mariscal de campo</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<p>Sinceros y decisivos, también suelen asumir el liderazgo porque establecen sistemas comprensivos y procedimientos lógicos en las tomas de decisiones. Disfrutan de los planes a largo plazo que tienen un fin determinado. Normalmente están bien informados, leen mucho e intentan expandir sus conocimientos a los demás. Presentan sus ideas con fuerza.</p>' +
			'<button onclick="showTips(' + opt + ')">Desplegar consejos</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
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

	area = document.getElementById("interactArea2");
	switch (opt) 
	{
		case 1:
			area.innerHTML = '<h1>Inspector</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 2:
			area.innerHTML = '<h1>Protector</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 3:
			area.innerHTML = '<h1>Artesano</h1>' +
			'<h2>Introvertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 4:
			area.innerHTML = '<h1>Compositor</h1>' +
			'<h2>Introvertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 5:
			area.innerHTML = '<h1>Promotor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 6:
			area.innerHTML = '<h1>Actor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 7:
			area.innerHTML = '<h1>Supervisor</h1>' +
			'<h2>Extrovertido, Sensorial, Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 8:
			area.innerHTML = '<h1>Proveedor</h1>' +
			'<h2>Extrovertido, Sensorial, Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[0] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 9:
			area.innerHTML = '<h1>Consejero</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 10:
			area.innerHTML = '<h1>Mente Maestra</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 11:
			area.innerHTML = '<h1>Sanador</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 12:
			area.innerHTML = '<h1>Arquitecto</h1>' +
			'<h2>Introvertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[0] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 13:
			area.innerHTML = '<h1>Campeón</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 14:
			area.innerHTML = '<h1>Inventor</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Perceptivo</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[1] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 15:
			area.innerHTML = '<h1>Maestro</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Emocional (Feeling), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[0] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		case 16:
			area.innerHTML = '<h1>Mariscal de campo</h1>' +
			'<h2>Extrovertido, Intuitivo (iNtuition), Racional (Thinking), Calificador (Judging)</h2>' +
			'<ul>' +
				'<li>' + tip1[1] + '</li>' +
				'<li>' + tip2[1] + '</li>' +
				'<li>' + tip3[1] + '</li>' +
				'<li>' + tip4[0] + '</li>' +
			'</ul>' +
			'<button onclick="displayBriggs(' + opt + ')">Desplegar información</button>' +
			'<button onclick="initTest()" class="closeBriggs">X</button>';
		break;
		default:
			area.innerHTML = 'ERROR';
		break
	}
}