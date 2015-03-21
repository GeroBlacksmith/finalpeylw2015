/**
 * @author Gero
 */
function randomImage()
{
	var img = document.getElementById("indeximg");
	console.log(Math.round(Math.random()*36));
	switch(Math.round(Math.random()*36)){
		case 0:
			img.src = "catalogo/1/125585215.jpg";
		break;
		case 1:
			img.src = "catalogo/1/126056757.jpg";
			break;
		case 2:
			img.src = "catalogo/1/127954369.jpg";
			break;
		case 3:
			img.src = "catalogo/1/127645527.jpg";
			break;
		case 4:
			img.src = "catalogo/1/129526637.jpg";
			break;
		case 5:
			img.src = "catalogo/1/125355313.jpg";
			break;
		case 6:
			img.src = "catalogo/2/124782843.jpg";
			break;
		case 7:
			img.src = "catalogo/2/125652640.jpg";
			break;
		case 8:
			img.src = "catalogo/2/125998592.jpg";
			break;
		case 9:
			img.src = "catalogo/2/126258981.jpg";
			break;
		case 10:
			img.src = "catalogo/2/128691093.jpg";
			break;
		case 11:
			img.src = "catalogo/2/129522218.jpg";
			break;
		case 12:
			img.src = "catalogo/3/120587095.jpg";
			break;
		case 13:
			img.src = "catalogo/3/124394677.jpg";
			break;
		case 14:
			img.src = "catalogo/3/124394677.jpg";
			break;
		case 15:
			img.src = "catalogo/3/125688666.jpg";
			break;
		case 16:
			img.src = "catalogo/3/129582964.jpg";
			break;
		case 17:
			img.src = "catalogo/3/130231953.jpg";
			break;
		case 18:
			img.src = "catalogo/4/118675227.jpg";
			break;
		case 19:
			img.src = "catalogo/4/122876784.jpg";
			break;
		case 20:
			img.src = "catalogo/4/124496281.jpg";
			break;
		case 21:
			img.src = "catalogo/4/125097676.jpg";
			break;
		case 22:
			img.src = "catalogo/4/126077264.jpg";
			break;
		case 23:
			img.src = "catalogo/4/128738494.jpg";
			break;
		case 24:
			img.src = "catalogo/5/125659712.jpg";
			break;
		case 25:
			img.src = "catalogo/5/126460469.jpg";
			break;
		case 26:
			img.src = "catalogo/5/126833745.jpg";
			break;
		case 27:
			img.src = "catalogo/5/127215713.jpg";
			break;
		case 28:
			img.src = "catalogo/5/129431447.jpg";
			break;
		case 29:
			img.src = "catalogo/5/129431447.jpg";
			break;
		case 30:
			img.src = "catalogo/5/129963513.jpg";
			break;
		case 31:
			img.src = "catalogo/6/125586561.jpg";
			break;
		case 32:
			img.src = "catalogo/6/127689227.jpg";
			break;
		case 33:
			img.src = "catalogo/6/128048522.jpg";
			break;
		case 34:
			img.src = "catalogo/6/128511758.jpg";
			break;
		case 35:
			img.src = "catalogo/6/128597958.jpg";
			break;
		case 36:
			img.src = "catalogo/6/129594603.jpg";
			break;
			
		default:
			img.src = "catalogo/6/129594603.jpg";
		break;
	}
}
function crearLink(a){
	console.log(a);
	var indexStart = a.indexOf("catalogo");
	console.log(indexStart);
	var shortLink = a.substring(indexStart, a.lenght);
	console.log(shortLink);
	console.log(shortLink.charAt(9));
	var link ="<a href=\"";
	var link_ = "\">Go to page</a>";
	var completeLink;
	switch (shortLink.charAt(9)){
		case "1": completeLink = link + "pagina1.html" + link_;
			break;
		case "2": completeLink = link + "pagina2.html" + link_;
			break;
		case "3": completeLink = link + "pagina3.html" + link_;
			break;
		case "4": completeLink = link + "pagina4.html" + link_;
			break;
		case "5": completeLink = link + "pagina5.html" + link_;
			break;
		case "6": completeLink = link + "pagina6.html" + link_;
			break;
	}
	console.log(completeLink);
	document.getElementById("descripcionmainimg").innerHTML = completeLink;
	
}
