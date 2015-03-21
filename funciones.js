/**
 * @author Gerardo Herrera
 * Para el final de la materia 
 * "Programacion estatica y laboratorio web"
 * de la carrera "Tecnicatura universitaria de desarrollo web"
 * Febrero 2015
 */
	/**
	 *LOG 1: 
	 *	Paulatinamente ire agregando funcionalidades a estos cuadros de texto
	 * por ahora ha 4 cuadros de texto que no importa lo que ingrese y otros 4 que no pueden
	 * estar vacios, luego uno de esos ultimos solo puede recibir numeros, cuando no 
	 * se ingresa lo requerido aparece un mensaje de error en el cuadro, borrando lo que estaba escrito
	 * si luego se hace click en el error el cuadro se blanquea para seguir ingresando texto.
	 * 
	 * 
	 * UTILIZAR objeto Date para manejar las fechas.
	 */
	/**
	 * LOG 2 08/02/2015:
	 * Ya pude manejar eficientemente las fechas, no hizo falta hacer un complicado sistema de verificacion
	 * de la fecha, solo utilizando las herramientas provistas por javascript, si creaba un objeto Date con valores erroneos,
	 * el objeto que se intento crear como date va a ser un string con el valor "Invalid date" simplemente comparo si la variable
	 * donde inicialise la fecha en realidad no sea ese string especifico.
	 * Luego manejo los eventos para dar un alerta de que se ingreso mal la fecha, y el mismo string que uso en el mensaje de error lo comparo cuando le 
	 * hago click y dejo la casilla en blanco nuevamente para que se la vuelva a usar.
	 * 
	 * LOG 3 15/02/2015
	 * Cuando se trabaja con una fecha limite se olvida uno de tomarse un momento para loguear, 
	 * ahora se me esta haciendo una confucion por esa causa.
	 * No es un csao perdido, de hecho se perfectamente que hace cada cosa, pero a la hora
	 * de organizarlos no se por donde empezar.
	 * 
	 * LOG 4 16/02/2015
	 * 
	 * Lo unico que falta es aprobar.
	 * */
	
item = {
        		imgsrc: "#",
        		titulo: "Nada",
        		precio: 0
        	};

function main()
{
	var mie = (navigator.appName == "Microsoft Internet Explorer")?true : false;
	var navi = navigator.appName;
	var verNavi = navigator.appVersion;
	var uaNavi = navigator.userAgent;
	var sysLanNavi = navigator.systemLanguage;
	console.log(navi + "  " + verNavi + " " + uaNavi+ " "+ sysLanNavi);
	
}



function resetThisFecha(){
	if(document.getElementById("oblfecha").value == "no puede estar vacia" 
	|| document.getElementById("oblfecha").value == "Fecha incorrecta"){
		document.getElementById("oblfecha").value = "";
		document.getElementById("oblfecha").style.color = "black";
		
	}
	
	return true;
}

function resetThisNumEnt(){
	if ( document.getElementById("oblnumeroentero").value == "no puede estar vacia" 
	|| document.getElementById("oblnumeroentero").value == "solo numeros" 
	|| document.getElementById("oblnumeroentero").value == "no es un entero" )
	{
		document.getElementById("oblnumeroentero").value = "";
		document.getElementById("oblnumeroentero").style.color = "black";
		document.getElementById("oblnumeroentero").style.border = "10px";
		document.getElementById("oblnumeroentero").style.borderColor = "black";
	}
	return true;
}

function resetThisNumDec(){
	if(document.getElementById("oblnumerodecimal").value == "no puede estar vacia" ||
	document.getElementById("oblnumerodecimal").value == "solo numeros"){
		document.getElementById("oblnumerodecimal").value = "";
		document.getElementById("oblnumerodecimal").style.color = "black";
		document.getElementById("oblnumerodecimal").style.border = "10px";
		document.getElementById("oblnumerodecimal").style.borderColor = "black";
	}
	return true;
}

function resetThisMail(){
	if(document.getElementById("oblmail").value == "no puede estar vacia"){
		document.getElementById("oblmail").value = "";
		document.getElementById("oblmail").style.color = "black";
	}
	return true;
}



function comprar(item){
	var radio1 = document.getElementById("radiocontado");
	radio1.checked=true;
	console.log("OK "+item.titulo);
	var imagen = document.getElementById("imagencompra");
	var descripcion = document.getElementById("descripcioncompra");
	var iprecio = document.getElementById("preciocompra");
	imagen.setAttribute("src",item.imgsrc);
	descripcion.innerHTML = (item.titulo);
	iprecio.innerHTML = ("$" + item.precio +".-");
	document.getElementById("catalogotable").style.visibility = "hidden";
	document.getElementById("formulariocompra").style.visibility = "visible";
	document.getElementById("selectcuota").style.visibility = "hidden";
	document.getElementById("cuotascompra").style.visibility = "hidden";
	var select = document.getElementById("selectcuota").value;
	console.log(select);
	//document.getElementById('imgsrc') = item.imgsrc;
}
function cuotasOnChange(){
	var select = document.getElementById("selectcuota").value;
	var precio = document.getElementById("preciocompra").value;
	var cantidad = document.getElementById("cantidad").value;
	
	console.log(precio);
	switch(select){
		case "1cuota":
			document.getElementById("cuotascompra").innerHTML = "1 cuota de $" + item.precio * cantidad + ".-";
			break; 
		case "3cuota":
			document.getElementById("cuotascompra").innerHTML = "3 cuota de $" + (((item.precio * cantidad * 1.1)/3).toFixed(2)) + ".-";
			break;
		case "6cuota":
			document.getElementById("cuotascompra").innerHTML = "6 cuota de $" + (((item.precio * cantidad * 1.2 )/6).toFixed(2)) + ".-";
			break;
		default: break;
	}
}
function cancelarCompra(){
	document.getElementById("catalogotable").style.visibility = "visible";
	document.getElementById("formulariocompra").style.visibility = "hidden";
	var radio1 = document.getElementById("radiocontado");
	
	console.log("radio1");
	document.getElementsByClassName("credradio")[0].style.visibility="hidden";
	document.getElementsByClassName("credradio")[1].style.visibility="hidden";
	document.getElementsByClassName("credradio")[2].style.visibility="hidden";
	document.getElementsByClassName("credradio")[3].style.visibility="hidden";
	document.getElementsByClassName("credradio")[4].style.visibility="hidden";
	document.getElementsByClassName("credradio")[5].style.visibility="hidden";
	document.getElementsByClassName("credradio")[6].style.visibility="hidden";
	document.getElementsByClassName("credradio")[7].style.visibility="hidden";
	document.getElementById("selectcuota").style.visibility = "hidden";
	document.getElementById("cuotascompra").style.visibility = "hidden";
	
}
function radioCred(precio){
	var radio1 = document.getElementById("radiocontado");
	var radio2 = document.getElementById("radiocredito");
	if(radio1.checked){
		console.log("radio1");
		document.getElementsByClassName("credradio")[0].style.visibility="hidden";
		document.getElementsByClassName("credradio")[1].style.visibility="hidden";
		document.getElementsByClassName("credradio")[2].style.visibility="hidden";
		document.getElementsByClassName("credradio")[3].style.visibility="hidden";
		document.getElementsByClassName("credradio")[4].style.visibility="hidden";
		document.getElementsByClassName("credradio")[5].style.visibility="hidden";
		document.getElementsByClassName("credradio")[6].style.visibility="hidden";
		document.getElementsByClassName("credradio")[7].style.visibility="hidden";
		document.getElementById("selectcuota").style.visibility = "hidden";
		document.getElementById("cuotascompra").style.visibility = "hidden";
		document.getElementById("cuotascompra").style.visibility = "hidden";
	}
	if(radio2.checked){
		console.log("radio2");
		document.getElementsByClassName("credradio")[0].style.visibility="visible";
		document.getElementsByClassName("credradio")[1].style.visibility="visible";
		document.getElementsByClassName("credradio")[2].style.visibility="visible";
		document.getElementsByClassName("credradio")[3].style.visibility="visible";
		document.getElementsByClassName("credradio")[4].style.visibility="visible";
		document.getElementsByClassName("credradio")[5].style.visibility="visible";
		document.getElementsByClassName("credradio")[6].style.visibility="visible";
		document.getElementsByClassName("credradio")[7].style.visibility="visible";
		document.getElementById("selectcuota").style.visibility = "visible";
		document.getElementById("cuotascompra").style.visibility = "visible";
		document.getElementById("cuotascompra").style.visibility = "visible";
		cuotasOnChange();
	}
}
function menosCantidad(precio){
	var numb = document.getElementById("cantidad");
	var aux = 0;
	
	if(numb.value>1){
		console.log(numb.value--);
		aux = numb.value*precio;
		document.getElementById("preciocompra").innerHTML = "$" + aux + ".-";
		
	}
}
function masCantidad(precio){
	var numb = document.getElementById("cantidad");
	var aux = 0;
	console.log(numb.value++);
	aux = numb.value*precio;
	document.getElementById("preciocompra").innerHTML = "$" + aux + ".-";
	
}
function efectuarCompra(){
	var nombre 		= document.getElementById("nombrecompra");
	var fecha 		= document.getElementById("fechacompra"); 
	var mail 		= document.getElementById("mailcompra");
	var telefono	= document.getElementById("telefonocompra");
	var direccion 	= document.getElementById("direccioncompra");
	var paso = true;
	
	/////
	
	var auxFecha = fecha.value.trim();
	var partePri = "";
	var parteSeg = "";
	var parteTer = "";
	var controlFecha = 1;
	for (var i = 0 ; i<auxFecha.length ; i++){
		if(controlFecha==1){
			if(auxFecha.charAt(i)!='/'){
				partePri += auxFecha.charAt(i);	
			} else {
				controlFecha++;
				continue;
			}
			 	
		}
		if(controlFecha==2){
			if(auxFecha.charAt(i)!='/'){
				parteSeg +=	auxFecha.charAt(i);
			} else {
				controlFecha = 0;
			}
			continue;
		} 
		if(controlFecha == 0 ) {
			parteTer += auxFecha.charAt(i);
		}
		
	}
	
	anio = parseInt(parteTer);
	mes = parseInt(partePri)-1;
	dia = parseInt(parteSeg);
	
	fechaResultado = new Date(anio, mes, dia,  0, 0, 0, 0);
	////
	console.log(fechaResultado);
	if(nombre.value.trim()==""){
		nombre.value="El nombre es requerido";
		nombre.style.color="RED";
		paso = false;
	}
	if(fecha.value.trim()==""){
		fecha.value="La fecha de nacimiento es requerida";
		fecha.style.color="RED";
		paso = false;
	} else{
		if(fechaResultado == "Invalid Date"){
			fecha.value = "Fecha invalida";
			fecha.style.color="RED";
			paso = false;
		} else{
			if(anio > 1900 || mes < 12 || mes > 1 || dia < 32 || dia > 0){
				console.log("No pasa nada.");
			} else{	
				
				fecha.value = "Fecha invalida";
				fecha.style.color="RED";
				paso = false;
			}
		}
	}
	if(mail.value.trim()==""){
		mail.value="El e-mail es requerido";
		mail.style.color="RED";
		paso = false;
	}else if(mail.value.indexOf("@")!=-1){
		mail.value = "Mail no valido";
		mail.style.color="RED";
		paso = false;
	}
	if(telefono.value.trim()==""){
		telefono.value="El telefono es requerido";
		telefono.style.color="RED";
		paso = false;
	}
	else if(isNaN(telefono.value) ){
		telefono.value="Ingrese solo numeros";
		telefono.style.color="RED";
		paso = false;
	}
	if(direccion.value.trim()==""){
		direccion.value="La direccion es requerida";
		direccion.style.color="RED";
		paso = false;
	}
	if(paso){
		alert("Su compra se a efectuado con exito!\nNombre: "+nombre.value+"\nMail: "+mail.value+"\nTelefono: "+telefono.value+"\nDireccion: "+direccion.value+
		"\nArticulo: "+document.getElementById("descripcioncompra").innerHTML+"\nPrecio: "+document.getElementById("preciocompra").innerHTML);
	}
	else{
		alert("Un error en el formulario no permite hacer la compra.\nRevise los mensajes en rojo.");
	}
}
function blanquearNombre(){
	var nombre = document.getElementById("nombrecompra").value;
	if(nombre=="El nombre es requerido"){
		document.getElementById("nombrecompra").value = "";
		document.getElementById("nombrecompra").style.color="black";
	}
}
function blanquearFecha(){
	var fecha = document.getElementById("fechacompra").value;
	if(fecha == "La fecha de nacimiento es requerida"){
		document.getElementById("fechacompra").value = "";
		document.getElementById("fechacompra").style.color="black";
	}
}
function blanquearMail(){
	var mail = document.getElementById("mailcompra").value;
	if(mail=="El e-mail es requerido"){
		document.getElementById("mailcompra").value = "";
		document.getElementById("mailcompra").style.color="black";
	}
}
function blanquearTelefono(){
	var telefono = document.getElementById("telefonocompra").value;
	if(telefono == "El telefono es requerido"){
		document.getElementById("telefonocompra").value = "";
		document.getElementById("telefonocompra").style.color="black";
	}
	
}
function blanquearDireccion(){
	var direccion = document.getElementById("direccioncompra").value;
	if(direccion=="La direccion es requerida"){
		document.getElementById("direccioncompra").value = "";
		document.getElementById("direccioncompra").style.color = "black";
	}
}
function blanquear(){
	var nombre = document.getElementById("nombrecompra").value;
	if(nombre=="El nombre es requerido"){
		document.getElementById("nombrecompra").value = "";
		document.getElementById("nombrecompra").style.color="black";
	}
	var fecha = document.getElementById("fechacompra").value;
	if(fecha == "La fecha de nacimiento es requerida" || fecha == "Fecha invalida"){
		document.getElementById("fechacompra").value = "";
		document.getElementById("fechacompra").style.color="black";
	}
	var mail = document.getElementById("mailcompra").value;
	if(mail=="El e-mail es requerido" || mail=="Mail no valido"){
		document.getElementById("mailcompra").value = "";
		document.getElementById("mailcompra").style.color="black";
	}
	var telefono = document.getElementById("telefonocompra").value;
	if(telefono == "El telefono es requerido" || telefono == "Ingrese solo numeros"){
		document.getElementById("telefonocompra").value = "";
		document.getElementById("telefonocompra").style.color="black";
	}
	var direccion = document.getElementById("direccioncompra").value;
	if(direccion=="La direccion es requerida"){
		document.getElementById("direccioncompra").value = "";
		document.getElementById("direccioncompra").style.color = "black";
	}
}
